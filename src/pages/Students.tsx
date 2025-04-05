import  { useState } from 'react';
import { LayoutGrid, List, Search, Users } from 'lucide-react';

const Students = () => {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchTerm, setSearchTerm] = useState('');
  
  const students = [
    { id: 1, name: 'Alex Johnson', class: 'Science 10A', grade: 'A-', performance: 'Excellent', avatar: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=100&h=100&fit=crop' },
    { id: 2, name: 'Samantha Lee', class: 'Math 9B', grade: 'B+', performance: 'Good', avatar: 'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=100&h=100&fit=crop' },
    { id: 3, name: 'Marcus Chen', class: 'English 11C', grade: 'A', performance: 'Excellent', avatar: '' },
    { id: 4, name: 'Jessica Wong', class: 'Science 10A', grade: 'B', performance: 'Good', avatar: '' },
    { id: 5, name: 'David Park', class: 'History 10A', grade: 'A-', performance: 'Excellent', avatar: '' },
    { id: 6, name: 'Emily Rodriguez', class: 'Math 9B', grade: 'C+', performance: 'Needs Improvement', avatar: '' },
    { id: 7, name: 'Michael Brown', class: 'English 11C', grade: 'B+', performance: 'Good', avatar: '' },
    { id: 8, name: 'Sophia Kim', class: 'Science 10A', grade: 'A', performance: 'Excellent', avatar: '' },
  ];
  
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.class.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'Excellent':
        return 'bg-pastel-mint text-slate-700';
      case 'Good':
        return 'bg-pastel-sky text-slate-700';
      case 'Needs Improvement':
        return 'bg-pastel-peach text-slate-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold">Students</h1>
        <p className="text-slate-600">View and manage student information and performance.</p>
      </div>
      
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search students..."
            className="w-full rounded-md border border-slate-200 bg-white py-2 pl-10 pr-4 focus:border-pastel-lavender focus:outline-none focus:ring-1 focus:ring-pastel-lavender sm:w-80"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden rounded-md border border-slate-200">
            <button
              className={`p-2 ${viewMode === 'list' ? 'bg-pastel-sky/30' : 'bg-white'}`}
              onClick={() => setViewMode('list')}
              aria-label="List view"
            >
              <List size={16} />
            </button>
            <button
              className={`p-2 ${viewMode === 'grid' ? 'bg-pastel-sky/30' : 'bg-white'}`}
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
            >
              <LayoutGrid size={16} />
            </button>
          </div>
          
          <select className="rounded-md border border-slate-200 bg-white px-3 py-2">
            <option>All Classes</option>
            <option>Science 10A</option>
            <option>Math 9B</option>
            <option>English 11C</option>
            <option>History 10A</option>
          </select>
        </div>
      </div>
      
      {filteredStudents.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white py-12 text-center">
          <Users className="mb-4 h-12 w-12 text-pastel-lavender" />
          <h3 className="mb-2 text-lg font-medium">No students found</h3>
          <p className="mb-4 max-w-md text-slate-500">
            No students match your search criteria. Try adjusting your search or filters.
          </p>
          <button className="btn btn-primary">
            Clear Filters
          </button>
        </div>
      ) : viewMode === 'list' ? (
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 text-left text-sm">
                  <th className="pb-3 font-medium text-slate-600">Student</th>
                  <th className="pb-3 font-medium text-slate-600">Class</th>
                  <th className="pb-3 font-medium text-slate-600">Grade</th>
                  <th className="pb-3 font-medium text-slate-600">Performance</th>
                  <th className="pb-3 font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td className="py-4">
                      <div className="flex items-center">
                        {student.avatar ? (
                          <img
                            src={student.avatar}
                            alt={student.name}
                            className="mr-3 h-8 w-8 rounded-full object-cover"
                          />
                        ) : (
                          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-pastel-pink text-sm font-medium text-slate-700">
                            {getInitials(student.name)}
                          </div>
                        )}
                        <div className="font-medium">{student.name}</div>
                      </div>
                    </td>
                    <td className="py-4">{student.class}</td>
                    <td className="py-4">{student.grade}</td>
                    <td className="py-4">
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${getPerformanceColor(student.performance)}`}>
                        {student.performance}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-pastel-lilac hover:underline">View Profile</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredStudents.map((student) => (
            <div key={student.id} className="card">
              <div className="mb-4 flex flex-col items-center">
                {student.avatar ? (
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="mb-3 h-16 w-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-pastel-pink text-xl font-medium text-slate-700">
                    {getInitials(student.name)}
                  </div>
                )}
                <h3 className="text-lg font-medium">{student.name}</h3>
                <p className="text-sm text-slate-500">{student.class}</p>
              </div>
              
              <div className="flex justify-between border-t border-slate-200 pt-3">
                <div>
                  <div className="text-xs uppercase text-slate-500">Grade</div>
                  <div className="font-medium">{student.grade}</div>
                </div>
                <div>
                  <div className="text-xs uppercase text-slate-500">Performance</div>
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${getPerformanceColor(student.performance)}`}>
                    {student.performance}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 flex justify-center">
                <button className="text-sm font-medium text-pastel-lilac hover:underline">
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Students;
 