import  { Link, useLocation } from 'react-router-dom';
import { Award, Book, Calendar, FileText, Home, Settings, Star, User, Users } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: Book, label: 'Grade Assignments', path: '/grade' },
  { icon: FileText, label: 'Feedback Library', path: '/feedback' },
  { icon: Users, label: 'Students', path: '/students' },
  { icon: Calendar, label: 'Time-Saver Mode', path: '/time-saver' },
  { icon: Award, label: 'Monthly Highlights', path: '/monthly-highlights' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <aside className="hidden w-64 flex-shrink-0 border-r border-slate-100 bg-white md:block">
      <div className="flex h-full flex-col">
        <div className="flex-1 space-y-1 px-2 py-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium ${
                  isActive
                    ? 'bg-pastel-lavender/30 text-pastel-lilac'
                    : 'text-slate-600 hover:bg-pastel-sky/20 hover:text-slate-900'
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
        
        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-pastel-pink">
              <User className="h-full w-full p-2 text-slate-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">Ms. Johnson</p>
              <p className="text-xs text-slate-500">Science Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
 