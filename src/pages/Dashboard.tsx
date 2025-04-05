import  { Book, CheckCircle, Clock, FileText, Users } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Book, label: 'Assignments Graded', value: '143', bgColor: 'bg-pastel-sky', textColor: 'text-slate-700' },
    { icon: Users, label: 'Total Students', value: '87', bgColor: 'bg-pastel-mint', textColor: 'text-slate-700' },
    { icon: CheckCircle, label: 'Completed Tasks', value: '65%', bgColor: 'bg-pastel-lavender', textColor: 'text-slate-700' },
    { icon: Clock, label: 'Time Saved', value: '48h', bgColor: 'bg-pastel-peach', textColor: 'text-slate-700' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold">Dashboard</h1>
        <p className="text-slate-600">Welcome back! Here's an overview of your teaching activities.</p>
      </div>

      <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card">
              <div className="mb-2 flex items-center gap-2">
                <div className={`rounded-full ${stat.bgColor} p-2 ${stat.textColor}`}>
                  <Icon size={18} />
                </div>
                <span className="text-sm font-medium text-slate-600">{stat.label}</span>
              </div>
              <div className="text-3xl font-bold text-slate-700">{stat.value}</div>
            </div>
          );
        })}
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="card">
            <h2 className="mb-4 text-lg font-semibold">Recent Assignments</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-sm">
                    <th className="pb-3 font-medium text-slate-600">Assignment</th>
                    <th className="pb-3 font-medium text-slate-600">Class</th>
                    <th className="pb-3 font-medium text-slate-600">Due Date</th>
                    <th className="pb-3 font-medium text-slate-600">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-3 text-sm">Essay: Climate Change</td>
                    <td className="py-3 text-sm">Science 10A</td>
                    <td className="py-3 text-sm">May 15, 2023</td>
                    <td className="py-3 text-sm"><span className="rounded-full bg-pastel-mint px-2 py-1 text-xs font-medium text-slate-700">Graded</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm">Math Problem Set #4</td>
                    <td className="py-3 text-sm">Math 9B</td>
                    <td className="py-3 text-sm">May 18, 2023</td>
                    <td className="py-3 text-sm"><span className="rounded-full bg-pastel-peach px-2 py-1 text-xs font-medium text-slate-700">In Progress</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm">Book Report: To Kill a Mockingbird</td>
                    <td className="py-3 text-sm">English 11C</td>
                    <td className="py-3 text-sm">May 20, 2023</td>
                    <td className="py-3 text-sm"><span className="rounded-full bg-pastel-sky px-2 py-1 text-xs font-medium text-slate-700">New</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 text-sm">History Project: Ancient Rome</td>
                    <td className="py-3 text-sm">History 10A</td>
                    <td className="py-3 text-sm">May 22, 2023</td>
                    <td className="py-3 text-sm"><span className="rounded-full bg-pastel-sky px-2 py-1 text-xs font-medium text-slate-700">New</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card">
            <h2 className="mb-4 text-lg font-semibold">Student Performance</h2>
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium">Science 10A</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[85%] bg-pastel-sky"></div>
                </div>
              </div>
              
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium">Math 9B</span>
                  <span className="text-sm font-medium">72%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[72%] bg-pastel-lavender"></div>
                </div>
              </div>
              
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium">English 11C</span>
                  <span className="text-sm font-medium">91%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[91%] bg-pastel-pink"></div>
                </div>
              </div>
              
              <div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-medium">History 10A</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[78%] bg-pastel-peach"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <h2 className="mb-4 text-lg font-semibold">Upcoming Deadlines</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-pastel-pink p-2 text-slate-700">
                <Clock size={16} />
              </div>
              <div>
                <p className="font-medium">Science Quiz #5</p>
                <p className="text-sm text-slate-600">Due in 2 days</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-pastel-peach p-2 text-slate-700">
                <Clock size={16} />
              </div>
              <div>
                <p className="font-medium">End of Term Reports</p>
                <p className="text-sm text-slate-600">Due in 5 days</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <div className="rounded-full bg-pastel-sky p-2 text-slate-700">
                <FileText size={16} />
              </div>
              <div>
                <p className="font-medium">Parent-Teacher Conferences</p>
                <p className="text-sm text-slate-600">May 25, 2023</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="mb-4 text-lg font-semibold">AI Feedback Insights</h2>
          <div className="space-y-3">
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-medium">Grammar & Structure</span>
                <span className="text-sm font-medium">32%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[32%] bg-pastel-lavender"></div>
              </div>
            </div>
            
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-medium">Critical Thinking</span>
                <span className="text-sm font-medium">27%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[27%] bg-pastel-pink"></div>
              </div>
            </div>
            
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-medium">Evidence & Citations</span>
                <span className="text-sm font-medium">23%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[23%] bg-pastel-mint"></div>
              </div>
            </div>
            
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-medium">Other Feedback Areas</span>
                <span className="text-sm font-medium">18%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[18%] bg-pastel-peach"></div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Most common feedback areas across all assignments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
 