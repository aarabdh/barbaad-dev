/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function MyPic() {
  return (
    <section className='w-full mx-auto'>
        <img 
            className = 'border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8 z-0'
            src = "/images/my_photo.jpg"
            width={200}
            height={200}
            alt="It's a me, Ma- Aarabdh."
        />
    </section>
  )
}
