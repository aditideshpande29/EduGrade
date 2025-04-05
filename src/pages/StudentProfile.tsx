import  { ArrowRight, Award, Book, CheckCircle, Download, FileText, Upload, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentProfile = () => {
  const student = {
    id: 1,
    name: 'Alex Johnson',
    class: 'Science 10A',
    email: 'alex.johnson@student.edu',
    joinDate: 'September 2022',
    avatar: '',
    points: 385,
    level: 8,
    gpa: '3.8',
    badges: [
      { id: 1, name: 'On-Time Achiever', description: 'Submitted 10 assignments on time', icon: CheckCircle, color: 'bg-pastel-mint' },
      { id: 2, name: 'Science Star', description: 'Achieved 95% or higher on science assignments', icon: Award, color: 'bg-pastel-sky' },
      { id: 3, name: 'Team Player', description: 'Successfully completed 3 group projects', icon: Users, color: 'bg-pastel-pink' },
    ],
    recentAssignments: [
      { id: 1, name: 'Essay: Climate Change', class: 'Science 10A', grade: 'A', date: 'May 15, 2023', feedback: true },
      { id: 2, name: 'Lab Report: Cell Division', class: 'Biology 11B', grade: 'B+', date: 'May 12, 2023', feedback: true },
      { id: 3, name: 'Math Problem Set #4', class: 'Math 9B', grade: 'In Progress', date: 'May 18, 2023', feedback: false },
    ],
    certificates: [
      { id: 1, name: 'Science Fair Winner', issueDate: 'April 2023', type: 'Achievement' },
      { id: 2, name: 'Coding Bootcamp Completion', issueDate: 'January 2023', type: 'Extracurricular' },
      { id: 3, name: 'First Quarter Honor Roll', issueDate: 'November 2022', type: 'Academic' },
    ],
    skills: [
      { name: 'Scientific Analysis', level: 85 },
      { name: 'Mathematical Problem Solving', level: 75 },
      { name: 'Written Communication', level: 90 },
      { name: 'Research', level: 80 },
      { name: 'Team Collaboration', level: 95 },
    ],
    extracurricular: {
      score: 78,
      activities: [
        { name: 'Science Club', role: 'Member', points: 15 },
        { name: 'Basketball Team', role: 'Captain', points: 25 },
        { name: 'Volunteer Work', role: 'Community Service', points: 20 },
        { name: 'Coding Workshop', role: 'Participant', points: 18 },
      ]
    }
  };
  
  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold">Student Digital Portfolio</h1>
        <p className="text-slate-600">Comprehensive overview of student achievements, progress, and feedback.</p>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="card mb-6">
            <div className="flex flex-col items-center text-center">
              {student.avatar ? (
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="mb-4 h-24 w-24 rounded-full object-cover"
                />
              ) : (
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-pastel-pink text-2xl font-medium text-slate-700">
                  {getInitials(student.name)}
                </div>
              )}
              <h2 className="mb-1 text-xl font-bold">{student.name}</h2>
              <p className="mb-3 text-slate-600">{student.class}</p>
              
              <div className="mb-3 flex items-center justify-center gap-2 rounded-full bg-pastel-sky/20 px-3 py-1">
                <span className="text-sm font-medium text-slate-700">Level {student.level}</span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-sm font-medium text-slate-700">{student.points} points</span>
              </div>
              
              <div className="mb-4 w-full space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span>Progress to Level {student.level + 1}</span>
                  <span>65%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[65%] bg-pastel-lavender"></div>
                </div>
              </div>
              
              <div className="mb-6 grid w-full grid-cols-2 gap-3 text-center">
                <div className="rounded-md bg-pastel-mint/20 p-3">
                  <p className="text-xl font-bold text-slate-700">{student.gpa}</p>
                  <p className="text-xs text-slate-600">GPA</p>
                </div>
                <div className="rounded-md bg-pastel-peach/20 p-3">
                  <p className="text-xl font-bold text-slate-700">{student.badges.length}</p>
                  <p className="text-xs text-slate-600">Badges</p>
                </div>
              </div>
              
              <div className="flex w-full flex-col gap-2">
                <button className="btn btn-primary w-full">
                  View Full Report
                </button>
                <button className="btn btn-outline flex w-full items-center justify-center">
                  <Download size={16} className="mr-2" />
                  Export Portfolio
                </button>
              </div>
            </div>
          </div>
          
          <div className="card mb-6">
            <h3 className="mb-4 text-base font-semibold">Badges & Achievements</h3>
            <div className="space-y-3">
              {student.badges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.id} className="flex items-start gap-3 rounded-md border border-slate-100 p-3 hover:bg-slate-50">
                    <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${badge.color} text-slate-700`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">{badge.name}</h4>
                      <p className="text-xs text-slate-600">{badge.description}</p>
                    </div>
                  </div>
                );
              })}
              <Link to="#" className="mt-2 flex items-center justify-center text-sm font-medium text-pastel-lilac hover:underline">
                View All Badges <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="card">
            <h3 className="mb-4 text-base font-semibold">Extracurricular Weightage</h3>
            <div className="mb-4 text-center">
              <div className="relative mx-auto mb-2 h-24 w-24">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 36 36" className="h-24 w-24 stroke-current">
                    <path
                      className="fill-none stroke-pastel-sky"
                      strokeWidth="3.8"
                      strokeLinecap="round"
                      strokeDasharray={`${student.extracurricular.score}, 100`}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute text-xl font-bold">{student.extracurricular.score}</div>
                </div>
              </div>
              <p className="text-sm text-slate-700">Extracurricular Score</p>
              <p className="text-xs text-slate-500">Based on verified activities and certificates</p>
            </div>
            
            <h4 className="mb-2 text-sm font-medium">Activities</h4>
            <ul className="space-y-2">
              {student.extracurricular.activities.map((activity, index) => (
                <li key={index} className="flex items-center justify-between text-sm">
                  <span>{activity.name} ({activity.role})</span>
                  <span className="font-medium">{activity.points} pts</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 flex items-center justify-between">
              <button className="text-sm font-medium text-pastel-lilac hover:underline">
                Add Certificate
              </button>
              <button className="rounded-full bg-pastel-peach/20 px-2 py-1 text-xs font-medium text-slate-700">
                Upload Verification
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="card mb-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-semibold">Academic Progress</h3>
              <select className="rounded-md border border-slate-200 bg-white px-2 py-1 text-sm">
                <option>All Subjects</option>
                <option>Science</option>
                <option>Math</option>
                <option>English</option>
                <option>History</option>
              </select>
            </div>
            
            <div className="mb-6">
              <div className="h-48 bg-slate-50 p-4">
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="mb-2 text-center text-sm text-slate-600">
                    Academic progress chart would appear here
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-4">
              <div className="rounded-md bg-pastel-sky/20 p-3 text-center">
                <p className="text-lg font-bold">93%</p>
                <p className="text-xs text-slate-600">Science</p>
              </div>
              <div className="rounded-md bg-pastel-pink/20 p-3 text-center">
                <p className="text-lg font-bold">87%</p>
                <p className="text-xs text-slate-600">Math</p>
              </div>
              <div className="rounded-md bg-pastel-mint/20 p-3 text-center">
                <p className="text-lg font-bold">91%</p>
                <p className="text-xs text-slate-600">English</p>
              </div>
              <div className="rounded-md bg-pastel-peach/20 p-3 text-center">
                <p className="text-lg font-bold">85%</p>
                <p className="text-xs text-slate-600">History</p>
              </div>
            </div>
          </div>
          
          <div className="card mb-6">
            <h3 className="mb-4 text-base font-semibold">Recent Assignments</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-sm">
                    <th className="pb-3 font-medium text-slate-600">Assignment</th>
                    <th className="pb-3 font-medium text-slate-600">Class</th>
                    <th className="pb-3 font-medium text-slate-600">Date</th>
                    <th className="pb-3 font-medium text-slate-600">Grade</th>
                    <th className="pb-3 font-medium text-slate-600">Feedback</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {student.recentAssignments.map((assignment) => (
                    <tr key={assignment.id}>
                      <td className="py-3">{assignment.name}</td>
                      <td className="py-3">{assignment.class}</td>
                      <td className="py-3">{assignment.date}</td>
                      <td className="py-3">
                        {assignment.grade === 'In Progress' ? (
                          <span className="rounded-full bg-pastel-sky/30 px-2 py-1 text-xs font-medium text-slate-700">
                            In Progress
                          </span>
                        ) : (
                          assignment.grade
                        )}
                      </td>
                      <td className="py-3">
                        {assignment.feedback ? (
                          <button className="text-pastel-lilac hover:underline">View Feedback</button>
                        ) : (
                          <span className="text-slate-400">Pending</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <Link to="#" className="text-sm font-medium text-pastel-lilac hover:underline">
                View All Assignments
              </Link>
            </div>
          </div>
          
          <div className="card mb-6">
            <h3 className="mb-4 text-base font-semibold">Skills Assessment</h3>
            <div className="space-y-4">
              {student.skills.map((skill, index) => (
                <div key={index}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div 
                      className="h-full bg-pastel-lavender" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-slate-500">
              Skills are assessed based on assignment performance and teacher evaluations
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="mb-4 text-base font-semibold">Certificates & Awards</h3>
              <div className="space-y-3">
                {student.certificates.map((cert) => (
                  <div key={cert.id} className="flex items-start gap-3 rounded-md border border-slate-100 p-3 hover:bg-slate-50">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pastel-peach/30 text-slate-700">
                      <Award size={18} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium">{cert.name}</h4>
                        <span className="rounded-full bg-pastel-sky/20 px-2 py-0.5 text-xs font-medium">
                          {cert.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">Issued: {cert.issueDate}</p>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-center gap-2">
                  <button className="btn btn-outline flex items-center text-sm">
                    <Upload size={14} className="mr-1" />
                    Upload Certificate
                  </button>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="mb-4 text-base font-semibold">Teacher Feedback Summary</h3>
              <div className="space-y-3">
                <div className="rounded-md bg-pastel-sky/10 p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <Book size={16} className="text-pastel-lilac" />
                    <h4 className="font-medium">Science</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    "Alex demonstrates excellent analytical skills and scientific reasoning. Could improve in data visualization techniques."
                  </p>
                  <p className="mt-1 text-xs text-slate-500">Ms. Johnson - May 15, 2023</p>
                </div>
                
                <div className="rounded-md bg-pastel-pink/10 p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <FileText size={16} className="text-pastel-lilac" />
                    <h4 className="font-medium">English</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    "Strong writing skills with creative ideas. Work on citation formats and structural organization."
                  </p>
                  <p className="mt-1 text-xs text-slate-500">Mr. Peterson - May 10, 2023</p>
                </div>
                
                <div className="rounded-md bg-pastel-mint/10 p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <Users size={16} className="text-pastel-lilac" />
                    <h4 className="font-medium">Group Projects</h4>
                  </div>
                  <p className="text-sm text-slate-600">
                    "Takes initiative and collaborates well with peers. Shows leadership qualities."
                  </p>
                  <p className="mt-1 text-xs text-slate-500">Multiple Teachers - Ongoing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
 