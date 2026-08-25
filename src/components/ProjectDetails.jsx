import React from 'react';
import { 
  ArrowLeft, ExternalLink, Code2, Sparkles, 
  Layers, CheckCircle, Calendar, Monitor, FileCode, Globe
} from 'lucide-react';

const ProjectDetails = ({ project, onBack }) => {
  return (
    <div className="flex flex-col h-full bg-[#f8fafc] text-slate-800 font-sans">
      {/* Explorer Breadcrumb Sub-bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-b from-[#eef3f8] to-[#e1ebf5] border-b border-[#cbd7e4] text-xs">
        <button 
          onClick={onBack}
          className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-blue-50 text-blue-800 font-semibold border border-[#9dc1e8] rounded shadow-sm transition-all hover:-translate-x-0.5 active:translate-x-0"
        >
          <ArrowLeft size={14} /> Back to Projects Directory
        </button>

        <span className="text-slate-500 text-[11px] hidden sm:inline">
          Item Type: Project Container
        </span>
      </div>

      {/* Main Details Body */}
      <div className="flex-1 p-6 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Project Header Card with Aesthetic Banner */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#1e3a8a] via-[#1d4ed8] to-[#3b82f6] text-white shadow-md relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-semibold tracking-wide border border-white/30 backdrop-blur-sm">
                    {project.type}
                  </span>
                  <span className="text-blue-200 text-xs font-mono flex items-center gap-1">
                    <Calendar size={12} /> {project.dateModified}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight drop-shadow-sm text-white">
                  {project.title}
                </h1>
                <p className="text-blue-100 text-xs sm:text-sm mt-1 max-w-xl font-normal">
                  {project.category} · Developed by Rohan Lal
                </p>
              </div>

              {/* Action Buttons (Live Preview & GitHub) */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-b from-[#22c55e] to-[#16a34a] hover:from-[#16a34a] hover:to-[#15803d] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <ExternalLink size={15} />
                  Live Preview
                </a>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold text-xs border border-white/40 shadow-sm transition-all active:scale-95"
                >
                  <Code2 size={15} />
                  Source Code
                </a>
              </div>
            </div>
          </div>

          {/* Grid Layout: Description & Tech Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 Cols: Description & Highlights */}
            <div className="lg:col-span-2 space-y-6">
              {/* Overview Section */}
              <div className="p-5 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] shadow-sm">
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-2 text-blue-900">
                  <FileCode size={16} className="text-blue-600" /> Project Description
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* Key Features List */}
              {project.features && (
                <div className="p-5 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] shadow-sm">
                  <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2 text-blue-900">
                    <Sparkles size={16} className="text-amber-500" /> Key Features & Capabilities
                  </h2>
                  <div className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 1 Col: Tech Stack & Metadata */}
            <div className="space-y-6">
              {/* Tech Stack Card */}
              <div className="p-5 rounded-lg border border-[#cbd5e1] bg-[#f8fafc] shadow-sm">
                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3.5 flex items-center gap-2 text-blue-900">
                  <Layers size={16} className="text-indigo-600" /> Tech Stack Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((techItem) => (
                    <span 
                      key={techItem}
                      className="px-3 py-1 bg-gradient-to-b from-white to-blue-50 border border-blue-200 rounded-md text-xs font-semibold text-blue-900 shadow-sm flex items-center gap-1.5"
                    >
                      <Code2 size={12} className="text-blue-600" />
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Launch Card */}
              <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-2">
                <div className="font-bold flex items-center gap-1.5">
                  <Monitor size={14} className="text-emerald-700" /> Ready to test?
                </div>
                <p className="text-emerald-800 text-[11px]">
                  Click the <strong>Live Preview</strong> button above to open the deployed application in a new tab.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
