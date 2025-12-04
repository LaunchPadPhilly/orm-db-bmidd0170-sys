import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#2a2d4a]/95 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left side - Menu icon placeholder */}
          <div className="flex items-center">
            <button className="w-12 h-12 rounded-xl bg-indigo-600/80 flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Center - Logo/Brand */}
          <Link href="/" className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-yellow-300 bg-clip-text text-transparent">
                StratusSphere
              </span>
            </h1>
            <p className="text-slate-400 text-sm flex items-center gap-1">
              Chasing storms. Perfecting precision. <span className="text-yellow-400">⚡</span>
            </p>
          </Link>

          {/* Right side - Settings icon */}
          <div className="flex items-center">
            <button className="w-12 h-12 rounded-xl bg-indigo-700/50 flex items-center justify-center hover:bg-indigo-700 transition-colors">
              <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}