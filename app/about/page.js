export default function About() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            About Me
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">Developer, problem solver, and lifelong learner dedicated to building exceptional digital experiences.</p>
        </div>

        {/* Profile Section */}
        <div className="bg-slate-800/30 rounded-2xl p-8 md:p-12 mb-16 border border-cyan-500/20 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Profile Image Placeholder */}
            <div className="flex justify-center md:justify-start">
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl shadow-cyan-500/30">
                <span className="text-6xl text-white font-bold">B</span>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-white">Hi, I'm Brayden</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate software engineer dedicated to building elegant solutions to complex problems.
                With expertise in modern web technologies, I create applications that are not only functional but also intuitive and beautiful.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I thrive on learning new technologies and continuously improving my craft. Whether it's building scalable backends
                or pixel-perfect frontends, I bring creativity and technical excellence to every project.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-800/30 rounded-xl p-8 border border-cyan-500/20 backdrop-blur-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">5+</div>
            <div className="text-slate-400">Projects Completed</div>
          </div>
          <div className="bg-slate-800/30 rounded-xl p-8 border border-blue-500/20 backdrop-blur-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">10+</div>
            <div className="text-slate-400">Technologies Mastered</div>
          </div>
          <div className="bg-slate-800/30 rounded-xl p-8 border border-purple-500/20 backdrop-blur-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">100%</div>
            <div className="text-slate-400">Dedication</div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-slate-800/30 rounded-2xl p-8 md:p-12 mb-16 border border-cyan-500/20 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-8">Skills & Technologies</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-lg font-medium border border-cyan-500/30 hover:border-cyan-500/50 transition-colors">React</span>
                <span className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-lg font-medium border border-cyan-500/30 hover:border-cyan-500/50 transition-colors">Next.js</span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-lg font-medium border border-blue-500/30 hover:border-blue-500/50 transition-colors">JavaScript</span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-lg font-medium border border-blue-500/30 hover:border-blue-500/50 transition-colors">TypeScript</span>
                <span className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-lg font-medium border border-cyan-500/30 hover:border-cyan-500/50 transition-colors">Tailwind CSS</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Backend</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-lg font-medium border border-blue-500/30 hover:border-blue-500/50 transition-colors">Node.js</span>
                <span className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-lg font-medium border border-purple-500/30 hover:border-purple-500/50 transition-colors">Prisma</span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-lg font-medium border border-blue-500/30 hover:border-blue-500/50 transition-colors">PostgreSQL</span>
                <span className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-lg font-medium border border-cyan-500/30 hover:border-cyan-500/50 transition-colors">REST APIs</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">Tools</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-lg font-medium border border-purple-500/30 hover:border-purple-500/50 transition-colors">Git</span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-lg font-medium border border-blue-500/30 hover:border-blue-500/50 transition-colors">VS Code</span>
                <span className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-lg font-medium border border-cyan-500/30 hover:border-cyan-500/50 transition-colors">Vercel</span>
                <span className="px-4 py-2 bg-purple-500/10 text-purple-300 rounded-lg font-medium border border-purple-500/30 hover:border-purple-500/50 transition-colors">Figma</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-slate-800/30 rounded-2xl p-12 border border-cyan-500/20 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 text-slate-300">I'm always open to discussing new projects and opportunities</p>
          <a href="/contact" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-xl shadow-cyan-500/30">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}
