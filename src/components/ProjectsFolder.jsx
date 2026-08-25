import React, { useState } from 'react';
import { 
  Folder, Code, LayoutGrid, List as ListIcon, Calendar, 
  Tag, ExternalLink, HardDrive, Sparkles, Laptop
} from 'lucide-react';
import ProjectDetails from './ProjectDetails';

export const projectsData = [
  {
    id: 'house-price-prediction',
    title: 'House Price Prediction',
    type: 'Machine Learning & Web App',
    category: 'Full Stack / ML',
    dateModified: '2024-05-18',
    size: '14.2 MB',
    description: 'An end-to-end intelligent machine learning web application that predicts residential real estate prices based on locality, square footage, amenities, and market trends with high precision.',
    features: [
      'Interactive price estimation calculator with instant prediction',
      'Data preprocessing & regression model trained with Scikit-Learn',
      'REST API backend built with Flask / Node.js for real-time inference',
      'Clean interactive visualizations of pricing trends and property insights'
    ],
    tech: ['Python', 'Scikit-Learn', 'Flask', 'React.js', 'Pandas', 'Chart.js'],
    liveUrl: 'https://github.com/rohanlal',
    githubUrl: 'https://github.com/rohanlal',
    color: 'from-blue-600 to-indigo-700'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    type: 'Full Stack Application',
    category: 'MERN Stack',
    dateModified: '2024-04-10',
    size: '28.5 MB',
    description: 'A comprehensive modern e-commerce platform equipped with dynamic product catalogs, seamless shopping cart, user authentication, order management, and secure payment processing.',
    features: [
      'Secure customer authentication & JWT authorization',
      'Interactive cart, wishlist, and optimized checkout workflow',
      'Admin dashboard for inventory, product CRUD, and sales analytics',
      'Responsive UI with fast page load performance'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Stripe API'],
    liveUrl: 'https://github.com/rohanlal',
    githubUrl: 'https://github.com/rohanlal',
    color: 'from-emerald-600 to-teal-700'
  },
  {
    id: 'windows-7-portfolio',
    title: 'Windows 7 Portfolio OS',
    type: 'Interactive Web Experience',
    category: 'Frontend Engineering',
    dateModified: '2024-06-01',
    size: '8.7 MB',
    description: 'An interactive nostalgic Windows 7 operating system simulator in the browser, featuring draggable windows, dynamic folders, taskbar, interactive applications, and aero glass styling.',
    features: [
      'Draggable, resizable, and focus-managed window manager',
      'Authentic Windows 7 Aero Glass styling and navigation hierarchy',
      'Dynamic folder explorer with nested project details and live preview',
      'Fully responsive and built with modern React 19'
    ],
    tech: ['React.js', 'Tailwind CSS', 'Vite', 'React-Draggable', 'Lucide Icons'],
    liveUrl: '#',
    githubUrl: 'https://github.com/rohanlal',
    color: 'from-cyan-600 to-blue-700'
  },
  {
    id: 'realtime-chat-app',
    title: 'Real-Time Chat & Collab',
    type: 'WebSockets Application',
    category: 'Full Stack',
    dateModified: '2024-03-22',
    size: '18.1 MB',
    description: 'High-speed instant messaging platform with real-time room communication, online presence detection, typing indicators, and message history storage.',
    features: [
      'Bi-directional real-time communication via WebSockets / Socket.io',
      'Room-based group chats and direct messaging',
      'User activity status indicators & typing notifications',
      'MongoDB message persistence with timestamped logs'
    ],
    tech: ['Node.js', 'Socket.io', 'React.js', 'Express.js', 'MongoDB'],
    liveUrl: 'https://github.com/rohanlal',
    githubUrl: 'https://github.com/rohanlal',
    color: 'from-purple-600 to-indigo-800'
  },
  {
    id: 'task-management-hub',
    title: 'TaskFlow Productivity Hub',
    type: 'Productivity Application',
    category: 'MERN Stack',
    dateModified: '2024-02-15',
    size: '12.4 MB',
    description: 'A kanban-style project management tool allowing individuals and teams to organize tasks, track sprint deadlines, assign tags, and monitor productivity metrics.',
    features: [
      'Drag-and-drop task progression between Kanban columns',
      'Priority tags, due dates, and real-time search filtering',
      'Task analytics and milestone completion tracking',
      'Cloud storage with automated data synchronization'
    ],
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    liveUrl: 'https://github.com/rohanlal',
    githubUrl: 'https://github.com/rohanlal',
    color: 'from-amber-600 to-orange-700'
  }
];

const ProjectsFolder = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [highlightedId, setHighlightedId] = useState(null);

  const selectedProject = projectsData.find(p => p.id === selectedProjectId);

  if (selectedProject) {
    return (
      <ProjectDetails 
        project={selectedProject} 
        onBack={() => setSelectedProjectId(null)} 
      />
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#f8fafc] text-slate-800 font-sans">
      {/* Folder Sub-header / Explorer Controls */}
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-b from-[#eef3f8] to-[#e1ebf5] border-b border-[#cbd7e4] text-xs">
        <div className="flex items-center gap-2">
          <Folder size={15} className="text-amber-500 fill-amber-400" />
          <span className="font-semibold text-slate-800">Projects Directory</span>
          <span className="text-slate-500 text-[11px]">({projectsData.length} project folders)</span>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 bg-white/70 p-0.5 rounded border border-[#cbd7e4]">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-1 rounded text-xs flex items-center gap-1 transition-colors ${
              viewMode === 'grid' ? 'bg-blue-100 text-blue-800 font-medium' : 'text-slate-600 hover:bg-slate-100'
            }`}
            title="Large Icons View"
          >
            <LayoutGrid size={13} /> Grid
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-1 rounded text-xs flex items-center gap-1 transition-colors ${
              viewMode === 'list' ? 'bg-blue-100 text-blue-800 font-medium' : 'text-slate-600 hover:bg-slate-100'
            }`}
            title="Details List View"
          >
            <ListIcon size={13} /> List
          </button>
        </div>
      </div>

      {/* Info Tip Banner */}
      <div className="px-4 py-1.5 bg-blue-50/80 border-b border-blue-200/60 text-[11px] text-blue-800 flex items-center justify-between">
        <span>💡 Click or double-click any project folder to view heading, description, tech stack & live preview.</span>
      </div>

      {/* Main Folder Content */}
      <div className="flex-1 p-5 overflow-y-auto bg-white">
        {viewMode === 'grid' ? (
          /* Grid View */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {projectsData.map((project) => {
              const isHighlighted = highlightedId === project.id;
              return (
                <div 
                  key={project.id}
                  onClick={() => setHighlightedId(project.id)}
                  onDoubleClick={() => setSelectedProjectId(project.id)}
                  className={`group relative flex flex-col items-center p-3 rounded-lg border transition-all cursor-pointer select-none text-center ${
                    isHighlighted 
                      ? 'bg-[#d8eafc]/90 border-[#7da9dc] shadow-[0_2px_8px_rgba(40,110,200,0.15)] ring-1 ring-[#9ac2ee]' 
                      : 'border-transparent hover:bg-blue-50/60 hover:border-blue-200'
                  }`}
                >
                  {/* Folder Icon with Project Badge */}
                  <div className="relative mb-2 flex items-center justify-center">
                    <div className="w-16 h-14 relative flex items-center justify-center transition-transform group-hover:scale-105">
                      <Folder size={62} className="text-amber-400 fill-amber-300 drop-shadow-md" />
                      {/* Inner peek icon */}
                      <div className="absolute inset-0 flex items-center justify-center pt-2">
                        <Code size={18} className="text-blue-900/70" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-700 leading-snug line-clamp-2">
                    {project.title}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5">
                    {project.category}
                  </span>

                  {/* Open Button on Hover */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProjectId(project.id);
                    }}
                    className="mt-2.5 w-full py-1 text-[11px] font-medium bg-gradient-to-b from-[#f2f7fd] to-[#d8e6f7] hover:from-blue-600 hover:to-blue-700 hover:text-white border border-[#9dc1e8] rounded shadow-sm flex items-center justify-center gap-1 transition-all"
                  >
                    Open Folder →
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          /* List / Details View */
          <div className="border border-[#cbd5e1] rounded-lg overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#f1f5f9] border-b border-[#cbd5e1] text-slate-600 font-bold">
                  <th className="py-2 px-3">Name</th>
                  <th className="py-2 px-3 hidden sm:table-cell">Type</th>
                  <th className="py-2 px-3 hidden md:table-cell">Date Modified</th>
                  <th className="py-2 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {projectsData.map((project) => {
                  const isHighlighted = highlightedId === project.id;
                  return (
                    <tr 
                      key={project.id}
                      onClick={() => setHighlightedId(project.id)}
                      onDoubleClick={() => setSelectedProjectId(project.id)}
                      className={`cursor-pointer transition-colors ${
                        isHighlighted ? 'bg-[#d8eafc]' : 'hover:bg-blue-50/70'
                      }`}
                    >
                      <td className="py-2.5 px-3 flex items-center gap-2">
                        <Folder size={18} className="text-amber-500 fill-amber-400 shrink-0" />
                        <span className="font-semibold text-slate-800">{project.title}</span>
                      </td>
                      <td className="py-2.5 px-3 text-slate-600 hidden sm:table-cell text-[11px]">
                        {project.type}
                      </td>
                      <td className="py-2.5 px-3 text-slate-500 hidden md:table-cell text-[11px] font-mono">
                        {project.dateModified}
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProjectId(project.id);
                          }}
                          className="px-2.5 py-0.5 text-[11px] font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded shadow-sm transition-colors"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsFolder;
