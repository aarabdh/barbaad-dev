'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import { getNextState } from '@/lib/GameOfLife/game-of-life-exports'

interface CounterInputProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  label: string;
}

const GameOfLifePage: React.FC = () => {
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(20);
  const [board, setBoard] = useState<boolean[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [paintColor, setPaintColor] = useState<'Black' | 'White'>('White');
  const [liveCellColor, setLiveCellColor] = useState<'bg-white' | 'bg-black'>('bg-white');
  const [deadCellColor, setDeadCellColor] = useState<'bg-white' | 'bg-black'>('bg-black');
  const [areLiveCellsWhite, setLiveCellsWhiteBool] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cellsOutsideBorder, setCellsOutsideBorder] = useState<boolean>(false);

  const [underpopLimit, setUnderpopLimit] = useState(2);
  const [overpopLimit, setOverpopLimit] = useState(3);
  const [resurrectionNumber, setResurrectionNumber] = useState(3);

  const incrementUnderpop = () => {
    setUnderpopLimit((prev) => Math.min(prev + 1, overpopLimit));
  };

  const incrementResurrect = () => {
    setResurrectionNumber((prev) => Math.min(prev + 1, 8));
  }

  const decrementResurrect = () => {
    setResurrectionNumber((prev) => Math.max(prev - 1, 0));
  }

  const decrementUnderpop = () => {
    setUnderpopLimit((prev) => Math.max(prev - 1, 0));
  };

  const incrementOverpop = () => {
    setOverpopLimit((prev) => Math.min(prev + 1, 8));
  };

  const decrementOverpop = () => {
    setOverpopLimit((prev) => Math.max(prev - 1, underpopLimit));
  };

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setRows(10);
        setCols(10);
      } else if (window.matchMedia("(max-width: 768px)").matches) {
        setRows(15);
        setCols(15);
      } else {
        setRows(20);
        setCols(20);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    setBoard(Array(rows * cols).fill(false))
  }, [rows, cols])

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isRunning) {
      intervalId = setInterval(() => {
        setBoard((prevBoard) => getNextState(prevBoard, rows, cols, {
          overpopLimit: overpopLimit,
          underpopLimit: underpopLimit,
          resurNumber: resurrectionNumber,
          valueOfCellsOutsideTheBoard: cellsOutsideBorder
        }))
      }, 200)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isRunning, rows, cols, cellsOutsideBorder, overpopLimit, underpopLimit, resurrectionNumber]);

  const handleCellChange = useCallback((index: number) => {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard]
      newBoard[index] = areLiveCellsWhite ? paintColor === 'White' : paintColor === 'Black'
      return newBoard
    })
  }, [paintColor, areLiveCellsWhite]);

  const handleMouseDown = (index: number) => {
    setIsMouseDown(true);
    handleCellChange(index);
  }

  const handleMouseEnter = (index: number) => {
    if (isMouseDown) {
      handleCellChange(index);
    }
  }

  const handleMouseUp = () => {
    setIsMouseDown(false);
  }

  const handleRandomize = () => {
    setBoard(Array(rows * cols).fill(false).map(() => Math.random() > 0.7));
  }

  const setWhiteLiveCell = (value: boolean) => {
    if (value) {
      setLiveCellsWhiteBool(true);
      setLiveCellColor('bg-white');
      setDeadCellColor('bg-black');
    } else {
      setLiveCellsWhiteBool(false);
      setDeadCellColor('bg-white');
      setLiveCellColor('bg-black');
    }
  }

  const handleClear = () => {
    setBoard(Array(rows * cols).fill(false))
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const ButtonSvg: React.FC<{ path: string }> = ({ path }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d={path} />
    </svg>
  );

  const CounterInput: React.FC<CounterInputProps> = ({ value, onIncrement, onDecrement, label }) => (
    <div className="flex justify-center items-center space-x-4">
      <label className="text-base font-medium text-slate-700 dark:text-slate-300 w-40">{label}</label>
      <div className="items-center h-10 w-auto inline-flex">
        <button
          onClick={onDecrement}
          className="h-full px-3 rounded-l bg-slate-800 dark:bg-slate-600 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:bg-slate-700 dark:hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-300 active:bg-slate-700 dark:active:bg-slate-500 disabled:opacity-50 flex items-center justify-center"
          type="button"
        >
          <ButtonSvg path="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
        </button>
        <input
          type="number"
          value={value}
          readOnly
          className="h-full w-16 flex-grow-0 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-center text-lg border-y border-slate-200 dark:border-slate-600 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 hover:border-slate-300 dark:hover:border-slate-500 shadow-sm appearance-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        <button
          onClick={onIncrement}
          className="h-full px-3 rounded-r bg-slate-800 dark:bg-slate-600 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:bg-slate-700 dark:hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-300 active:bg-slate-700 dark:active:bg-slate-500 disabled:opacity-50 flex items-center justify-center"
          type="button"
        >
          <ButtonSvg path="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="container p-4 mx-auto max-w-3xl overflow-hidden">
      <h1 className="text-3xl font-bold dark:text-white/90 mb-3 text-center">Conway&apos;s Game of Life</h1>
      <div
        className="grid gap-1 mt-4 mb-4 mx-auto"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          width: 'fit-content',
          touchAction: 'none'
        }}
      >
        {board.map((cell, index) => (
          <div
            key={index}
            className={`w-6 h-6 border ${cell ? liveCellColor : deadCellColor}`}
            onMouseDown={(e) => {
              e.preventDefault();
              handleMouseDown(index);
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onTouchStart={(e) => {
              e.preventDefault();
              handleCellChange(index);
            }}
            onTouchMove={(e) => {
              e.preventDefault();  // Prevent scrolling and touch move behavior
              const touch = e.touches[0];
              const element = document.elementFromPoint(touch.clientX, touch.clientY);
              if (element?.classList.contains('w-6')) {
                const index = Array.from(element.parentNode!.children).indexOf(element);
                handleCellChange(index);
              }
            }}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center space-x-2 space-y-2 mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleRandomize}
        >
          Randomize
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <div className="space-y-6 p-4 bg-white dark:bg-slate-900 rounded-lg shadow">
        <div ref={containerRef} onClick={() => setOpen1(!open1)} className="relative">
          <div className="cursor-pointer mx-auto max-w-xs text-gray-700 dark:text-white/90 mt-2 px-4 py-2 rounded bg-gray-50 ring-1 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600">
            Live Cells Are: {areLiveCellsWhite ? 'White' : 'Black'}
          </div>
          {open1 && (
            <ul className="z-10 absolute left-0 mt-2 w-full rounded bg-gray-50 ring-1 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600">
              <li
                className="cursor-pointer select-none px-4 py-2 dark:text-white/90 dark:hover:bg-gray-700 hover:bg-gray-200"
                onClick={() => setWhiteLiveCell(true)}
              >
                White
              </li>
              <li
                className="cursor-pointer select-none px-4 py-2 dark:text-white/90 dark:hover:bg-gray-700 hover:bg-gray-200"
                onClick={() => setWhiteLiveCell(false)}
              >
                Black
              </li>
            </ul>
          )}
        </div>
        <div ref={containerRef} onClick={() => setOpen2(!open2)} className="relative">
          <div className="cursor-pointer mx-auto max-w-xs text-gray-700 dark:text-white/90 mt-2 px-4 py-2 rounded bg-gray-50 ring-1 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600">
            Paint With Color: {paintColor}
          </div>
          {open2 && (
            <ul className="z-10 absolute left-0 mt-2 w-full rounded bg-gray-50 ring-1 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600">
              <li
                className="cursor-pointer select-none px-4 py-2 dark:text-white/90 dark:hover:bg-gray-700 hover:bg-gray-200"
                onClick={() => setPaintColor('White')}
              >
                White
              </li>
              <li
                className="cursor-pointer select-none px-4 py-2 dark:text-white/90 dark:hover:bg-gray-700 hover:bg-gray-200"
                onClick={() => setPaintColor('Black')}
              >
                Black
              </li>
            </ul>
          )}
        </div>
        <div ref={containerRef} onClick={() => setOpen3(!open3)} className="relative">
          <div className="cursor-pointer mx-auto max-w-xs text-gray-700 dark:text-white/90 mt-2 px-4 py-2 rounded bg-gray-50 ring-1 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600">
            Cells Outside the Border Are: {cellsOutsideBorder ? 'Live' : 'Dead'}
          </div>
          {open3 && (
            <ul className="z-10 absolute left-0 mt-2 w-full rounded bg-gray-50 ring-1 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600">
              <li
                className="cursor-pointer select-none px-4 py-2 dark:text-white/90 dark:hover:bg-gray-700 hover:bg-gray-200"
                onClick={() => setCellsOutsideBorder(true)}
              >
                Live
              </li>
              <li
                className="cursor-pointer select-none px-4 py-2 dark:text-white/90 dark:hover:bg-gray-700 hover:bg-gray-200"
                onClick={() => setCellsOutsideBorder(false)}
              >
                Dead
              </li>
            </ul>
          )}
        </div>
        <CounterInput
          value={underpopLimit}
          onIncrement={incrementUnderpop}
          onDecrement={decrementUnderpop}
          label="Underpopulation Limit"
        />
        <CounterInput
          value={overpopLimit}
          onIncrement={incrementOverpop}
          onDecrement={decrementOverpop}
          label="Overpopulation Limit"
        />
        <CounterInput
          value={resurrectionNumber}
          onIncrement={incrementResurrect}
          onDecrement={decrementResurrect}
          label="Resurrection Number"
        />
      </div>
    </div>
  )
}

export default GameOfLifePage
