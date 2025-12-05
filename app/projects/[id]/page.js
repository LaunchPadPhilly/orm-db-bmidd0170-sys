import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProjectDetail({ params }) {
  const { id } = params;

  // TODO: Fetch the specific project from your API
  // Instructions for students:
  // 1. Use fetch() to get data from /api/projects/[id]
  // 2. Handle 404 responses by calling notFound()
  // 3. Parse the JSON response
  // 4. Display the project details

  // Example implementation (students should write this):
  // const response = await fetch(`http://localhost:3000/api/projects/${id}`);
  // 
  // if (!response.ok) {
  //   if (response.status === 404) {
  //     notFound();
  //   }
  //   throw new Error('Failed to fetch project');
  // }
  // 
  // const project = await response.json();

  // For now, return placeholder until students implement the API
  const project = null;

  if (!project) {
    return (
      <div className="min-h-screen p-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Project Not Implemented</h1>
          <div className="bg-slate-800/30 border border-cyan-500/20 rounded-xl p-8 max-w-md backdrop-blur-sm">
            <h2 className="font-bold text-white mb-4">🚀 To view project details:</h2>
            <ol className="text-slate-300 space-y-2 list-decimal list-inside text-left text-sm">
              <li>Implement the GET /api/projects/[id] endpoint</li>
              <li>Create and seed your database with projects</li>
              <li>Update this page to fetch from the API</li>
            </ol>
          </div>
          <Link
            href="/projects"
            className="inline-block mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all font-medium shadow-lg shadow-cyan-500/25"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // This code will run once students implement the API
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-slate-400 hover:text-cyan-400 mb-8 transition-colors"
        >
          ← Back to Projects
        </Link>

        {/* Project header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">{project.title}</h1>
          <div className="flex gap-2 mb-6 flex-wrap">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded border border-cyan-500/30 text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project image */}
        {project.imageUrl && (
          <div className="mb-12">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={800}
              height={400}
              className="w-full rounded-xl border border-cyan-500/20"
            />
          </div>
        )}

        {/* Project content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4">About This Project</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Additional sections students can add */}
            <div className="bg-slate-800/30 rounded-xl p-6 border border-cyan-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-3">Technical Details</h3>
              <p className="text-slate-300">
                Add more details about your project implementation, challenges you faced,
                and what you learned while building it.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project links */}
            <div className="bg-slate-800/30 rounded-xl border border-cyan-500/20 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-4 py-3 rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all font-medium shadow-lg shadow-cyan-500/25"
                  >
                    View Live Project
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-slate-700/50 text-white text-center px-4 py-3 rounded-full hover:bg-slate-700 transition-colors font-medium border border-cyan-500/30"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Project info */}
            <div className="bg-slate-800/30 rounded-xl border border-cyan-500/20 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4">Project Info</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <p><strong className="text-white">Created:</strong> {new Date(project.createdAt).toLocaleDateString()}</p>
                <p><strong className="text-white">Last Updated:</strong> {new Date(project.updatedAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}