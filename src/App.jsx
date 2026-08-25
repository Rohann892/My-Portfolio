import { useState } from 'react';
import './index.css';
import bgImage from './assets/win7_bg.jpg';
import DesktopIcon from './components/DesktopIcon';
import Window from './components/Window';
import Taskbar from './components/Taskbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectsFolder, { projectsData } from './components/ProjectsFolder';
import Win7Logo from './components/Win7Logo';
import { User, Code2, Briefcase, Mail } from 'lucide-react';

const folderConfigs = {
  about: { id: 'about', title: 'About Me', icon: User, itemCount: '3 tabs · Profile' },
  projects: { id: 'projects', title: 'Projects', icon: Code2, itemCount: `${projectsData.length} projects` },
  experience: { id: 'experience', title: 'Experience', icon: Briefcase, itemCount: '3 career logs' },
  contact: { id: 'contact', title: 'Contact', icon: Mail, itemCount: '3 channels' },
};

function App() {
  // Start with About window open by default for immediate wow factor
  const [openWindows, setOpenWindows] = useState([
    { id: 'about', title: 'About Me', icon: User, itemCount: '3 tabs · Profile' }
  ]);
  const [activeWindowId, setActiveWindowId] = useState('about');

  const desktopFolders = [
    { id: 'about', title: 'About Me' },
    { id: 'projects', title: 'Projects' },
    { id: 'experience', title: 'Experience' },
    { id: 'contact', title: 'Contact' },
  ];

  const handleOpenWindow = (folderId, title) => {
    const config = folderConfigs[folderId] || { id: folderId, title: title || folderId, icon: User, itemCount: '1 item' };
    if (!openWindows.find(w => w.id === folderId)) {
      setOpenWindows([...openWindows, config]);
    }
    setActiveWindowId(folderId);
  };

  const handleCloseWindow = (id) => {
    const remaining = openWindows.filter(w => w.id !== id);
    setOpenWindows(remaining);
    if (activeWindowId === id) {
      setActiveWindowId(remaining.length > 0 ? remaining[remaining.length - 1].id : null);
    }
  };

  const handleFocusWindow = (id) => {
    setActiveWindowId(id);
  };

  const handleNavigate = (targetFolderId) => {
    if (folderConfigs[targetFolderId]) {
      handleOpenWindow(targetFolderId, folderConfigs[targetFolderId].title);
    }
  };

  const renderWindowContent = (id) => {
    switch (id) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      case 'projects':
        return <ProjectsFolder />;
      default:
        return <div className="p-6 text-slate-700">Folder not found.</div>;
    }
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-cover bg-center select-none font-sans"
      style={{ backgroundImage: `url(${bgImage})` }}
      onClick={() => {
        // click on desktop background deselects active window focus if clicked directly
      }}
    >
      {/* Windows 7 Desktop Central Logo & Watermark */}
      <Win7Logo />

      {/* Desktop Icons Grid */}
      <div className="absolute top-4 left-4 flex flex-col flex-wrap gap-1 max-h-[calc(100vh-4.5rem)] z-10">
        {desktopFolders.map(folder => (
          <DesktopIcon 
            key={folder.id} 
            id={folder.id}
            title={folder.title} 
            onOpen={() => handleOpenWindow(folder.id, folder.title)} 
          />
        ))}
      </div>

      {/* Windows Layer */}
      {openWindows.map((win, index) => {
        const config = folderConfigs[win.id] || win;
        const IconComp = config.icon || User;
        const initialOffset = (index % 5) * 24;

        return (
          <div 
            key={win.id}
            style={{
              position: 'absolute',
              top: `${Math.min(40 + initialOffset, 120)}px`,
              left: `${Math.min(130 + initialOffset, 280)}px`,
            }}
          >
            <Window 
              id={win.id} 
              title={win.title}
              icon={IconComp}
              itemCount={config.itemCount}
              isActive={activeWindowId === win.id}
              onClose={handleCloseWindow}
              onFocus={() => handleFocusWindow(win.id)}
              onNavigate={handleNavigate}
              width={840}
              height={520}
            >
              {renderWindowContent(win.id)}
            </Window>
          </div>
        );
      })}

      {/* Windows 7 Taskbar */}
      <Taskbar 
        openWindows={openWindows} 
        activeWindowId={activeWindowId} 
        onWindowClick={(id) => id ? handleFocusWindow(id) : setActiveWindowId(null)}
        onOpenFolder={handleOpenWindow}
      />
    </div>
  );
}

export default App;

