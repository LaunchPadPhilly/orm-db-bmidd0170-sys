'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [featuredProject, setFeaturedProject] = useState(null);

  useEffect(() => {
    async function fetchFeaturedProject() {
      try {
        const res = await fetch('/api/projects');
        if (res.ok) {
          const projects = await res.json();
          if (projects.length > 0) {
            setFeaturedProject(projects[0]);
          }
        }
      } catch (err) {
        console.error('Failed to fetch projects');
      }
    }
    fetchFeaturedProject();
  }, []);

  const skills = [
    'JavaScript', 'Python', 'React', 'CSS', 'HTML', 'Git/GitHub',
    'Node.js', 'Express.js', 'MySQL', 'Vite', 'npm', 'JSON',
    'VS Code', 'Vercel', 'Figma', 'Notion', 'Slack', 'ChatGPT',
    'Claude', 'REST APIs'
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Hero Section */}
        <section className="relative rounded-2xl bg-white/5 backdrop-blur-lg border border-purple-500/20 shadow-2xl p-8 flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <span className="text-5xl md:text-7xl font-bold text-white">B</span>
            </div>
          </div>
          {/* Hero Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-3">
              I&apos;m a passionate Full-Stack Developer focused on creating modern, user-friendly web applications with clean code and innovative solutions.
            </p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-3">
              What drives me is the challenge of turning ideas into functional, beautiful web applications. I specialize in developing projects using HTML, CSS, JavaScript, React, and Next.js, while applying best practices in version control, agile methodologies, and problem-solving strategies.
            </p>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              I&apos;m continuously learning and refining my craft to write maintainable, scalable solutions that make a real impact. I&apos;m eager to collaborate with teams and contribute to projects that push the boundaries of what&apos;s possible.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="rounded-2xl bg-white/5 backdrop-blur-lg border border-purple-500/20 shadow-xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border border-purple-500/30 rounded-full text-slate-200 text-sm font-medium shadow hover:scale-105 hover:border-purple-400 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Featured Project */}
        {featuredProject && (
          <section className="rounded-2xl bg-white/5 backdrop-blur-lg border border-purple-500/20 shadow-xl p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Featured Project</h2>
            <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
              <Link href={`/projects/${featuredProject.id}`} className="block">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🚀</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-purple-400 transition-colors">
                      {featuredProject.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      {featuredProject.description}
                    </p>
                  </div>
                </div>
              </Link>
              {featuredProject.projectUrl && (
                <div className="mt-4">
                  <a
                    href={featuredProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg text-sm font-medium shadow hover:from-purple-400 hover:to-indigo-500 hover:scale-105 transition-all"
                  >
                    To Website
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Get In Touch */}
        <section className="rounded-2xl bg-white/5 backdrop-blur-lg border border-purple-500/20 shadow-xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-base text-slate-300 mb-6">
            I&apos;m always open to discussing new opportunities, collaborations, or just connecting!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:your.email@example.com"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg text-sm font-medium shadow hover:from-purple-400 hover:to-indigo-500 hover:scale-105 transition-all"
            >
              your.email@example.com
            </a>
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-purple-500/30 text-white rounded-lg text-sm font-medium shadow hover:border-purple-500/60 hover:scale-105 transition-all"
            >
              LinkedIn Profile
            </a>
          </div>
        </section>

        {/* Additional Links */}
        <section className="rounded-2xl bg-white/5 backdrop-blur-lg border border-purple-500/20 shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Additional Links</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="px-5 py-2 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 text-slate-200 rounded-lg font-medium shadow hover:text-cyan-400 hover:scale-105 transition-all">Portfolio</Link>
            <Link href="/about" className="px-5 py-2 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 text-slate-200 rounded-lg font-medium shadow hover:text-cyan-400 hover:scale-105 transition-all">About Me</Link>
            <Link href="/projects" className="px-5 py-2 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 text-slate-200 rounded-lg font-medium shadow hover:text-cyan-400 hover:scale-105 transition-all">Projects</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
