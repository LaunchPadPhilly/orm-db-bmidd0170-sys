


"use client";
import { useEffect, useState } from "react";
import TechnologyInput from "./components/TechnologyInput";
import ProjectForm from "./components/ProjectForm";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

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
    <div className="py-20 px-6 bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            My Projects
          </h1>
          <p className="text-lg md:text-xl text-cyan-200/80 font-medium max-w-2xl mx-auto">A collection of my work showcasing various technologies and solutions</p>
        </div>

        {/* Add Project Button/Section */}
        <div className="mb-12 flex justify-end">
          <button
            className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-xl shadow-lg font-semibold hover:from-green-400 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
            onClick={() => setShowForm(true)}
          >
            Add Project
          </button>
        </div>
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white/95 rounded-2xl shadow-2xl p-8 max-w-2xl w-full relative">
              <button
                className="absolute top-4 right-4 text-xl text-gray-500 hover:text-red-500"
                onClick={() => setShowForm(false)}
                aria-label="Close"
              >
                ×
              </button>
              <ProjectForm
                isOpen={true}
                onCancel={() => setShowForm(false)}
                onSubmit={async (form) => {
                  // POST to API
                  const res = await fetch("/api/projects", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(form),
                  });
                  if (res.ok) {
                    setShowForm(false);
                    // Refresh project list
                    const data = await res.json();
                    setProjects((prev) => [data, ...prev]);
                  } else {
                    alert("Failed to create project");
                  }
                }}
              />
            </div>
          </div>
        )}

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-cyan-500 border-t-transparent mb-4"></div>
            <h2 className="text-2xl font-semibold text-cyan-200/80">Loading projects...</h2>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto bg-gradient-to-br from-slate-800/60 to-slate-900/80 border border-red-500/30 rounded-2xl p-10 backdrop-blur-lg shadow-2xl">
              <div className="text-5xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-red-400 mb-2">Error loading projects</h2>
              <p className="text-cyan-200/80">{error}</p>
            </div>
          </div>
        ) : projects.length > 0 ? (
          <>
            <div className="space-y-8 mb-16">
              {projects.map((project) => (
                <div key={project.id} className="bg-gradient-to-br from-indigo-900/60 via-indigo-950/80 to-purple-900/80 border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/60 shadow-xl transition-all backdrop-blur-lg">
                  <Link href={`/projects/${project.id}`} className="block">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">🚀</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 hover:text-purple-400 transition-colors drop-shadow">
                          {project.title}
                        </h3>
                        <p className="text-cyan-100/90 text-base mb-3 leading-relaxed font-medium">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                  {project.projectUrl && (
                    <div className="mt-4">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-7 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl text-base font-semibold shadow-md hover:from-purple-400 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                      >
                        To Website
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-br from-indigo-900/60 via-indigo-950/80 to-purple-900/80 border border-cyan-400/20 rounded-2xl p-10 shadow-xl backdrop-blur-lg mt-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 drop-shadow-lg">{projects.length}</div>
                  <div className="text-cyan-200/80 text-lg font-medium">Total Projects</div>
                </div>
                <div>
                  <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 drop-shadow-lg">
                    {new Set(projects.flatMap(p => p.technologies || [])).size}
                  </div>
                  <div className="text-cyan-200/80 text-lg font-medium">Technologies Used</div>
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
