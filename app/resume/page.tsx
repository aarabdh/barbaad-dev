'use client'

export default function Resume() {
  return (
    <div className="p-6 max-w-4xl mx-auto">

      <div className="flex justify-between items-center mb-4">
        <h1 className="dark:text-white/90 text-3xl font-bold">My Resume</h1>
        <a
          href="/aarabdh_resume.pdf"
          download
          className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
        >
          Download PDF
        </a>
      </div>

      {/* Embed PDF for viewing */}
      <div className="aspect-[4/3] w-full mb-6 border">
        <iframe
          src="/aarabdh_resume.pdf"
          className="w-full h-full"
          title="Resume"
        />
      </div>
    </div>
  );
}

