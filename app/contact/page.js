import Link from 'next/link'

export default function Contact() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl">Let&apos;s connect and create something amazing together</p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Email Card */}
          <a href="mailto:your.email@example.com" className="group bg-indigo-900/30 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-purple-400 font-medium mb-2 text-sm">your.email@example.com</p>
            <p className="text-sm text-slate-400">Drop me a line anytime</p>
          </a>

          {/* LinkedIn Card */}
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" className="group bg-indigo-900/30 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-indigo-400 font-medium mb-2 text-sm">linkedin.com/in/yourname</p>
            <p className="text-sm text-slate-400">Let&apos;s connect professionally</p>
          </a>

          {/* GitHub Card */}
          <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer" className="group bg-indigo-900/30 rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">GitHub</h3>
            <p className="text-purple-400 font-medium mb-2 text-sm">github.com/yourname</p>
            <p className="text-sm text-slate-400">Check out my code</p>
          </a>
        </div>

        {/* Info Section */}
        <div className="bg-indigo-900/30 rounded-xl p-8 border border-purple-500/30 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Why Reach Out?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-2xl">🚀</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Project Collaboration</h3>
                <p className="text-slate-300 text-sm">Have an exciting project? Let&apos;s discuss how we can work together.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">💼</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Job Opportunities</h3>
                <p className="text-slate-300 text-sm">Looking for talent? I&apos;m open to new opportunities and challenges.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">💡</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Just Say Hi</h3>
                <p className="text-slate-300 text-sm">Want to connect or chat about tech? I&apos;d love to hear from you.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🤝</div>
              <div>
                <h3 className="font-semibold text-white mb-2">Mentorship & Learning</h3>
                <p className="text-slate-300 text-sm">Questions about development? Happy to share knowledge and experience.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-900/30 rounded-xl p-8 border border-purple-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start a Conversation?</h2>
          <p className="text-base mb-6 text-slate-300">I typically respond within 24 hours</p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:your.email@example.com" className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:from-purple-400 hover:to-indigo-500 transition-all">
              Send Email
            </a>
            <Link href="/projects" className="inline-block border border-purple-500/30 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:border-purple-500/60 transition-colors">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
