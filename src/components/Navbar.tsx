import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Menu, User } from 'lucide-react';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="border-b border-slate-100 bg-white px-4 py-3 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="block p-1 md:hidden">
            <Menu size={20} />
          </button>
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-pastel-lilac">
            <span className="text-2xl">📚</span>
            <span>EduGrade AI</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="rounded-full p-1 hover:bg-pastel-sky/20">
            <Bell size={20} className="text-slate-600" />
          </button>
          
          <div className="relative z-50">
            <button 
              className="flex items-center gap-2 rounded-full p-1 hover:bg-pastel-sky/20"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="h-8 w-8 overflow-hidden rounded-full bg-pastel-pink">
                <User className="h-full w-full p-1 text-slate-600" />
              </div>
            </button>
            
            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <Link to="/profile" className="block px-4 py-2 text-sm text-slate-700 hover:bg-pastel-sky/20">Your Profile</Link>
                <Link to="/settings" className="block px-4 py-2 text-sm text-slate-700 hover:bg-pastel-sky/20">Settings</Link>
                <Link to="/login" className="block px-4 py-2 text-sm text-slate-700 hover:bg-pastel-sky/20">Sign out</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 