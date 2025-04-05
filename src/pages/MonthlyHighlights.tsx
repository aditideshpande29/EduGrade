import  { CheckCircle, Download, Star, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const MonthlyHighlights = () => {
  const month = 'May 2023';
  
  const classHighlights = [
    { 
      id: 1, 
      className: 'Science 10A', 
      averageGrade: '87%', 
      improvement: '+3%',
      completionRate: '92%',
      topStudent: 'Alex Johnson',
      challengeArea: 'Laboratory Reports',
      image: 'https://images.unsplash.com/photo-1521133573892-e44906baee46?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxwYXN0ZWwlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjB0ZWFjaGluZyUyMHN0dWRlbnRzJTIwZGlnaXRhbCUyMGxlYXJuaW5nfGVufDB8fHx8MTc0Mzg1ODc5N3ww&ixlib=rb-4.0.3&fit=fillmax&h=500&w=800'
    },
    { 
      id: 2, 
      className: 'Math 9B', 
      averageGrade: '82%', 
      improvement: '+1%',
      completionRate: '88%',
      topStudent: 'Samantha Lee',
      challengeArea: 'Word Problems',
      image: 'https://images.unsplash.com/photo-1488401962641-ff6be4bb26ef?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxwYXN0ZWwlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjB0ZWFjaGluZyUyMHN0dWRlbnRzJTIwZGlnaXRhbCUyMGxlYXJuaW5nfGVufDB8fHx8MTc0Mzg1ODc5N3ww&ixlib=rb-4.0.3&fit=fillmax&h=500&w=800'
    },
    { 
      id: 3, 
      className: 'English 11C', 
      averageGrade: '85%', 
      improvement: '+4%',
      completionRate: '95%',
      topStudent: 'Marcus Chen',
      challengeArea: 'Essay Structure',
      image: 'https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjB0ZWFjaGluZyUyMHN0dWRlbnRzJTIwZGlnaXRhbCUyMGxlYXJuaW5nfGVufDB8fHx8MTc0Mzg1ODc5N3ww&ixlib=rb-4.0.3&fit=fillmax&h=500&w=800'
    },
  ];
  
  const studentAchievements = [
    { id: 1, name: 'Alex Johnson', achievement: 'Most Improved', description: 'Raised science grade from B- to A-', icon: Star, color: 'bg-pastel-mint' },
    { id: 2, name: 'Samantha Lee', achievement: 'Perfect Attendance', description: 'Submitted all assignments on time', icon: CheckCircle, color: 'bg-pastel-sky' },
    { id: 3, name: 'Marcus Chen', achievement: 'Creative Excellence', description: 'Outstanding literary analysis essay', icon: Trophy, color: 'bg-pastel-peach' },
    { id: 4, name: 'Jessica Wong', achievement: 'Collaboration Star', description: 'Exceptional group project leadership', icon: Users, color: 'bg-pastel-lavender' },
  ];
  
  const insights = [
    'Science 10A showed the greatest improvement in laboratory skills this month.',
    'Students responded well to the new interactive math exercises - completion rates increased by 12%.',
    'Group projects yielded higher engagement and better outcomes than individual assignments.',
    'Students who received personalized AI feedback showed 15% more improvement than those with standard feedback.',
    'Extra credit opportunities were utilized by 68% of students, up from 42% last month.'
  ];
  
  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-2xl font-bold">Monthly Student Highlights</h1>
            <p className="text-slate-600">Key achievements and insights for {month}</p>
          </div>
          <button className="btn btn-outline flex items-center">
            <Download size={16} className="mr-2" />
            Export Report
          </button>
        </div>
      </div>
      
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="card bg-gradient-to-br from-pastel-lavender to-pastel-lilac p-4 text-slate-700">
          <div className="mb-2 text-sm font-medium uppercase tracking-wider opacity-80">Total Students</div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">87</span>
            <span className="text-sm opacity-80">across 3 classes</span>
          </div>
        </div>
        
        <div className="card bg-gradient-to-br from-pastel-sky to-pastel-mint p-4 text-slate-700">
          <div className="mb-2 text-sm font-medium uppercase tracking-wider opacity-80">Average Grade</div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">84.7%</span>
            <span className="rounded-full bg-white/30 px-2 py-0.5 text-xs font-medium">+2.5%</span>
          </div>
        </div>
        
        <div className="card bg-gradient-to-br from-pastel-peach to-pastel-pink p-4 text-slate-700">
          <div className="mb-2 text-sm font-medium uppercase tracking-wider opacity-80">Completion Rate</div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">91.7%</span>
            <span className="rounded-full bg-white/30 px-2 py-0.5 text-xs font-medium">+3.8%</span>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Class Performance</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {classHighlights.map((classData) => (
            <div key={classData.id} className="card overflow-hidden">
              <div className="relative h-40 w-full">
                <img 
                  src={classData.image} 
                  alt={classData.className}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">{classData.className}</h3>
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-medium uppercase text-slate-500">Average Grade</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">{classData.averageGrade}</span>
                      <span className="rounded-full bg-pastel-mint/30 px-2 py-0.5 text-xs font-medium text-slate-700">
                        {classData.improvement}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase text-slate-500">Completion</div>
                    <div className="text-xl font-bold">{classData.completionRate}</div>
                  </div>
                </div>
                
                <div className="mb-3 space-y-2 text-sm">
                  <div className="flex items-start justify-between">
                    <div className="font-medium">Top Student:</div>
                    <div className="text-right">{classData.topStudent}</div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="font-medium">Challenge Area:</div>
                    <div className="text-right">{classData.challengeArea}</div>
                  </div>
                </div>
                
                <Link to="#" className="block w-full rounded-md border border-pastel-lilac bg-white px-3 py-2 text-center text-sm font-medium text-pastel-lilac hover:bg-pastel-sky/10">
                  View Detailed Report
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="card">
            <h2 className="mb-4 text-xl font-bold">Student Achievements</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {studentAchievements.map((student) => {
                const Icon = student.icon;
                return (
                  <div key={student.id} className="flex items-start gap-3 rounded-md border border-slate-100 p-4 hover:bg-slate-50">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${student.color} text-slate-700`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{student.name}</h3>
                      <div className="mb-1 rounded-full bg-pastel-sky/20 px-2 py-0.5 text-xs font-medium text-slate-700 inline-block">
                        {student.achievement}
                      </div>
                      <p className="text-sm text-slate-600">{student.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Link to="#" className="mt-4 flex items-center justify-center text-sm font-medium text-pastel-lilac hover:underline">
              View All Student Achievements
            </Link>
          </div>
        </div>
        
        <div>
          <div className="card">
            <h2 className="mb-4 text-xl font-bold">Key Insights</h2>
            <ul className="space-y-3">
              {insights.map((insight, index) => (
                <li key={index} className="flex items-start gap-2 rounded-md bg-slate-50 p-3">
                  <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-pastel-lavender"></div>
                  <span className="text-sm text-slate-700">{insight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-md bg-pastel-peach/20 p-3">
              <p className="text-sm text-slate-700">
                <span className="font-medium">Teaching Recommendation:</span> Consider expanding the interactive exercises approach to other classes based on the positive results in Math 9B.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h2 className="mb-4 text-xl font-bold">Extracurricular Recognition</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-md border border-slate-200 p-4">
            <div className="mb-3 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pastel-sky text-2xl text-slate-700">
                🏆
              </div>
            </div>
            <h3 className="mb-1 text-center text-lg font-semibold">Science Fair Winners</h3>
            <p className="mb-3 text-center text-sm text-slate-600">
              Alex Johnson and Jessica Wong won 1st place for their climate change impact project.
            </p>
            <div className="flex justify-center">
              <span className="rounded-full bg-pastel-mint/30 px-2 py-1 text-xs font-medium text-slate-700">
                +25 Extracurricular Points
              </span>
            </div>
          </div>
          
          <div className="rounded-md border border-slate-200 p-4">
            <div className="mb-3 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pastel-lavender text-2xl text-slate-700">
                🎭
              </div>
            </div>
            <h3 className="mb-1 text-center text-lg font-semibold">Drama Club Performance</h3>
            <p className="mb-3 text-center text-sm text-slate-600">
              Marcus Chen and Sophia Kim delivered outstanding performances in the spring play.
            </p>
            <div className="flex justify-center">
              <span className="rounded-full bg-pastel-mint/30 px-2 py-1 text-xs font-medium text-slate-700">
                +20 Extracurricular Points
              </span>
            </div>
          </div>
          
          <div className="rounded-md border border-slate-200 p-4">
            <div className="mb-3 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pastel-peach text-2xl text-slate-700">
                🌱
              </div>
            </div>
            <h3 className="mb-1 text-center text-lg font-semibold">Community Service</h3>
            <p className="mb-3 text-center text-sm text-slate-600">
              Samantha Lee organized a successful beach cleanup with 15 student volunteers.
            </p>
            <div className="flex justify-center">
              <span className="rounded-full bg-pastel-mint/30 px-2 py-1 text-xs font-medium text-slate-700">
                +15 Extracurricular Points
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyHighlights;
 