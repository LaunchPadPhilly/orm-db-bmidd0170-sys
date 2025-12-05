// TODO: Students will implement this component
// This is a learning exercise - students should build this form component from scratch
// The tests will guide the implementation requirements

// Component Requirements:
// 1. Create a form component that accepts { onSubmit, onCancel, isOpen } props
// 2. Manage form state for: title, description, imageUrl, projectUrl, githubUrl, technologies
// 3. Implement form validation:
//    - title: required
//    - description: required
//    - technologies: required (at least one)
//    - URLs: validate format if provided
// 4. Handle form submission and loading states
// 5. Display validation errors to user
// 6. Reset form after successful submission
// 7. Only render when isOpen is true
// 8. Include TechnologyInput component for managing technologies

// Learning Objectives:
// - React state management with useState
// - Form validation patterns
// - Conditional rendering
// - Event handling
// - Error state management
// - Component composition

// Hints:
// - Use 'use client' directive for client-side functionality
// - Import TechnologyInput from './TechnologyInput'
// - Use regex for URL validation: /^https?:\/\/.+\..+/
// - Handle async form submission with try/catch
// - Use loading state to prevent double submission

"use client";
import { useState } from "react";
import TechnologyInput from "./TechnologyInput";

const urlRegex = /^https?:\/\/.+\..+/;
// Error message constants for test compatibility
const ERRORS = {
  title: 'Title is required',
  description: 'Description is required',
  technologies: 'At least one technology is required',
  url: 'Please enter a valid URL',
};
export default function ProjectForm({ onSubmit, onCancel, isOpen }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    projectUrl: "",
    githubUrl: "",
    technologies: [],
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = ERRORS.title;
    if (!form.description.trim()) newErrors.description = ERRORS.description;
    if (!form.technologies || form.technologies.length === 0)
      newErrors.technologies = ERRORS.technologies;
    ["imageUrl", "projectUrl", "githubUrl"].forEach((key) => {
      if (form[key] && !urlRegex.test(form[key])) {
        newErrors[key] = ERRORS.url;
      }
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTechChange = (techs) => {
    setForm((prev) => ({ ...prev, technologies: techs }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setLoading(true);
    try {
      await onSubmit(form);
      setForm({
        title: "",
        description: "",
        imageUrl: "",
        projectUrl: "",
        githubUrl: "",
        technologies: [],
      });
      setErrors({});
    } catch (err) {
      setErrors({ submit: err.message || "Submission failed." });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setForm({
      title: "",
      description: "",
      imageUrl: "",
      projectUrl: "",
      githubUrl: "",
      technologies: [],
    });
    setErrors({});
    if (onCancel) onCancel();
  };

  return (
    <form className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 border border-purple-500/30 rounded-2xl shadow-2xl p-8 space-y-6 backdrop-blur-lg" onSubmit={handleSubmit} autoComplete="off">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white tracking-tight drop-shadow-lg">Add New Project</h2>
      {errors.submit && <div className="text-red-400 mb-2 text-sm font-medium">{errors.submit}</div>}
      <div>
        <label className="block font-semibold text-slate-200 mb-1" htmlFor="project-title">Project Title</label>
        <input
          id="project-title"
          name="title"
          value={form.title}
          onChange={handleChange}
          className={`w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 mt-1 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition ${errors.title ? 'border-red-500 ring-red-200' : ''}`}
          disabled={loading}
          aria-label="Project Title"
        />
        {errors.title && <div className="text-red-400 text-xs mt-1">{errors.title}</div>}
      </div>
      <div>
        <label className="block font-semibold text-slate-200 mb-1" htmlFor="project-description">Description</label>
        <textarea
          id="project-description"
          name="description"
          value={form.description}
          onChange={handleChange}
          className={`w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 mt-1 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition ${errors.description ? 'border-red-500 ring-red-200' : ''}`}
          disabled={loading}
          aria-label="Description"
        />
        {errors.description && <div className="text-red-400 text-xs mt-1">{errors.description}</div>}
      </div>
      <div>
        <label className="block font-semibold text-slate-200 mb-1">Technologies</label>
        <TechnologyInput
          value={form.technologies}
          onChange={handleTechChange}
          error={errors.technologies}
          disabled={loading}
        />
        {errors.technologies && <div className="text-red-400 text-xs mt-1">{errors.technologies}</div>}
      </div>
      <div>
        <label className="block font-semibold text-slate-200 mb-1" htmlFor="image-url">Image URL</label>
        <input
          id="image-url"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          className="w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 mt-1 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          disabled={loading}
        />
        {errors.imageUrl && <div className="text-red-400 text-xs mt-1">{errors.imageUrl}</div>}
      </div>
      <div>
        <label className="block font-semibold text-slate-200 mb-1" htmlFor="project-url">Live Demo URL</label>
        <input
          id="project-url"
          name="projectUrl"
          value={form.projectUrl}
          onChange={handleChange}
          className="w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 mt-1 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          disabled={loading}
        />
        {errors.projectUrl && <div className="text-red-400 text-xs mt-1">{errors.projectUrl}</div>}
      </div>
      <div>
        <label className="block font-semibold text-slate-200 mb-1" htmlFor="github-url">GitHub URL</label>
        <input
          id="github-url"
          name="githubUrl"
          value={form.githubUrl}
          onChange={handleChange}
          className="w-full bg-white/10 border border-purple-500/20 rounded-lg px-3 py-2 mt-1 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          disabled={loading}
        />
        {errors.githubUrl && <div className="text-red-400 text-xs mt-1">{errors.githubUrl}</div>}
      </div>
      <div className="flex gap-4 mt-6">
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg font-semibold text-base hover:from-purple-400 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50 transition-all"
          disabled={loading}
        >
          {loading ? "Creating Project..." : "Create Project"}
        </button>
        <button
          type="button"
          className="bg-white/10 text-slate-200 px-6 py-2 rounded-lg shadow font-semibold text-base hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50 transition-all mr-2"
          onClick={handleCancel}
          disabled={loading}
        >
          Cancel
        </button>
        <button
          type="button"
          className="bg-white/10 text-slate-200 px-6 py-2 rounded-lg shadow font-semibold text-base hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50 transition-all"
          onClick={() => setForm({ title: '', description: '', imageUrl: '', projectUrl: '', githubUrl: '', technologies: [] })}
          disabled={loading}
        >
          Reset
        </button>
      </div>
    </form>
  );
}