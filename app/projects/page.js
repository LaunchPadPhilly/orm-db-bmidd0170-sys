

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h1>
          <p className="text-base text-slate-400">A collection of my work showcasing various technologies and solutions</p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-cyan-500 border-t-transparent mb-4"></div>
            <h2 className="text-2xl font-semibold text-slate-300">Loading projects...</h2>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto bg-slate-800/30 border border-red-500/30 rounded-xl p-8 backdrop-blur-sm">
              <div className="text-5xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-red-400 mb-2">Error loading projects</h2>
              <p className="text-slate-400">{error}</p>
            </div>
          </div>
        ) : projects.length > 0 ? (
          <>
            <div className="space-y-6 mb-16">
            {projects.map((project) => (
              <div key={project.id} className="bg-indigo-900/30 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🚀</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </Link>
                {project.projectUrl && (
                  <div className="mt-4">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg text-sm font-medium hover:from-purple-400 hover:to-indigo-500 transition-all"
                    >
                      To Website
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">{projects.length}</div>
                <div className="text-slate-400">Total Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {new Set(projects.flatMap(p => p.technologies || [])).size}
                </div>
                <div className="text-slate-400">Technologies Used</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-slate-400">Dedication</div>
              </div>
            </div>
          </div>
        </>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-2xl mx-auto">
              <div className="text-7xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold text-white mb-4">No projects yet</h2>
              <p className="text-base text-slate-400 mb-8">
                This is where your amazing work will be displayed. Add your first project to get started!
              </p>
              <div className="bg-indigo-900/30 border border-purple-500/30 rounded-xl p-8 max-w-xl mx-auto">
                <h3 className="font-bold text-white mb-4 text-lg">📚 Quick Start Guide:</h3>
                <ol className="text-left text-slate-300 text-sm space-y-2 list-decimal list-inside">
                  <li>Set up your Neon database</li>
                  <li>Implement the API routes</li>
                  <li>Add project creation functionality</li>
                  <li>Watch your portfolio come to life!</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


// Learning Objectives for Students:
// 1. Understand server vs client components
// 2. Learn React state management patterns
// 3. Implement API integration
// 4. Handle async operations and error states
// 5. Build interactive user interfaces
// 6. Practice component composition
