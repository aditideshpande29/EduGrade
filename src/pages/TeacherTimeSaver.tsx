import  { useState } from 'react';
import { AlertCircle, Book, Calendar, CheckCircle, Clock, Edit, Filter, FileText, Plus, Users } from 'lucide-react';

const TeacherTimeSaver = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold">Teacher Time-Saver Mode</h1>
        <p className="text-slate-600">
          Personalized tools and insights to streamline your teaching workflow and save time.
        </p>
      </div>
      
      <div className="mb-6">
        <div className="border-b border-slate-200">
          <nav className="-mb-px flex space-x-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`whitespace-nowrap border-b-2 py-4 text-sm font-medium ${
                activeTab === 'dashboard'
                  ? 'border-pastel-lilac text-pastel-lilac'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              Smart Dashboard
            </button>
            <button
              onClick={() => setActiveTab('templates')}
              className={`whitespace-nowrap border-b-2 py-4 text-sm font-medium ${
                activeTab === 'templates'
                  ? 'border-pastel-lilac text-pastel-lilac'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              AI Templates
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`whitespace-nowrap border-b-2 py-4 text-sm font-medium ${
                activeTab === 'history'
                  ? 'border-pastel-lilac text-pastel-lilac'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              Student History
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`whitespace-nowrap border-b-2 py-4 text-sm font-medium ${
                activeTab === 'insights'
                  ? 'border-pastel-lilac text-pastel-lilac'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              Teaching Insights
            </button>
          </nav>
        </div>
      </div>
      
      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card bg-gradient-to-br from-pastel-lavender to-pastel-lilac p-4 text-slate-700">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">Time Saved</h3>
                <Clock size={18} />
              </div>
              <div className="text-2xl font-bold">48h 35m</div>
              <div className="mt-1 text-xs opacity-80">This month</div>
            </div>
            
            <div className="card p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">Pending Tasks</h3>
                <FileText size={18} className="text-pastel-lilac" />
              </div>
              <div className="text-2xl font-bold">12</div>
              <div className="mt-1 text-xs text-slate-500">4 high priority</div>
            </div>
            
            <div className="card p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">Grade Progress</h3>
                <CheckCircle size={18} className="text-pastel-lilac" />
              </div>
              <div className="text-2xl font-bold">65%</div>
              <div className="mt-1 text-xs text-slate-500">This week's assignments</div>
            </div>
            
            <div className="card p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-medium">Calendar</h3>
                <Calendar size={18} className="text-pastel-lilac" />
              </div>
              <div className="text-2xl font-bold">3</div>
              <div className="mt-1 text-xs text-slate-500">Upcoming deadlines</div>
            </div>
          </div>
          
          <div className="card">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Prioritized Tasks</h2>
              <div className="flex items-center gap-2">
                <button className="rounded-md border border-slate-200 p-1 hover:bg-slate-50">
                  <Filter size={16} />
                </button>
                <select className="rounded-md border border-slate-200 bg-white px-2 py-1 text-sm">
                  <option>All Tasks</option>
                  <option>Grading</option>
                  <option>Feedback</option>
                  <option>Planning</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-md border-l-4 border-red-400 bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pastel-pink text-slate-700">
                    <FileText size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium">Grade Math Problem Set #4</h3>
                    <p className="text-xs text-slate-500">Due in 1 day • 28 submissions • Math 9B</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded bg-pastel-peach/20 px-2 py-1 text-xs font-medium text-slate-700">
                    High Priority
                  </div>
                  <button className="rounded-full p-1 text-pastel-lilac hover:bg-pastel-sky/20">
                    <Edit size={16} />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between rounded-md border-l-4 border-amber-400 bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pastel-peach text-slate-700">
                    <Book size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium">Review Book Reports</h3>
                    <p className="text-xs text-slate-500">Due in 3 days • 18 submissions • English 11C</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded bg-pastel-sky/20 px-2 py-1 text-xs font-medium text-slate-700">
                    Medium Priority
                  </div>
                  <button className="rounded-full p-1 text-pastel-lilac hover:bg-pastel-sky/20">
                    <Edit size={16} />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between rounded-md border-l-4 border-green-400 bg-slate-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pastel-mint text-slate-700">
                    <Users size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium">Prepare Parent-Teacher Conference Notes</h3>
                    <p className="text-xs text-slate-500">Due in 5 days • All Classes</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded bg-pastel-mint/20 px-2 py-1 text-xs font-medium text-slate-700">
                    Normal Priority
                  </div>
                  <button className="rounded-full p-1 text-pastel-lilac hover:bg-pastel-sky/20">
                    <Edit size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            <button className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-pastel-lilac hover:underline">
              <Plus size={14} />
              Add New Task
            </button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <h2 className="mb-4 text-lg font-semibold">Time-Saving Recommendations</h2>
              <div className="space-y-4">
                <div className="rounded-md bg-pastel-sky/10 p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertCircle size={16} className="text-pastel-lilac" />
                    <h3 className="font-medium">Batch Similar Assignments</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    You have 3 similar assignments across different classes. Grading them together can save you approximately 45 minutes.
                  </p>
                  <button className="mt-2 text-sm font-medium text-pastel-lilac hover:underline">
                    View Assignments
                  </button>
                </div>
                
                <div className="rounded-md bg-pastel-mint/10 p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertCircle size={16} className="text-pastel-lilac" />
                    <h3 className="font-medium">Use Feedback Templates</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Based on your recent grading patterns, we've created 5 personalized feedback templates for Math Problem Set #4.
                  </p>
                  <button className="mt-2 text-sm font-medium text-pastel-lilac hover:underline">
                    Apply Templates
                  </button>
                </div>
                
                <div className="rounded-md bg-pastel-peach/10 p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <AlertCircle size={16} className="text-pastel-lilac" />
                    <h3 className="font-medium">Schedule Bulk Grading</h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    Your calendar shows you have 2-hour blocks available on Tuesday and Thursday. These would be optimal for grading English essays.
                  </p>
                  <button className="mt-2 text-sm font-medium text-pastel-lilac hover:underline">
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h2 className="mb-4 text-lg font-semibold">Weekly Time Analysis</h2>
              <div className="mb-6 h-48 bg-slate-50 p-3">
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="mb-2 text-center text-sm text-slate-600">
                    Weekly time allocation chart would appear here
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-pastel-sky"></div>
                    <span className="text-sm">Grading</span>
                  </div>
                  <div className="text-sm font-medium">8h 20m (42%)</div>
                </div>
                
                <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-pastel-lavender"></div>
                    <span className="text-sm">Feedback</span>
                  </div>
                  <div className="text-sm font-medium">5h 45m (29%)</div>
                </div>
                
                <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-pastel-peach"></div>
                    <span className="text-sm">Planning</span>
                  </div>
                  <div className="text-sm font-medium">3h 10m (16%)</div>
                </div>
                
                <div className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-pastel-mint"></div>
                    <span className="text-sm">Administrative</span>
                  </div>
                  <div className="text-sm font-medium">2h 30m (13%)</div>
                </div>
              </div>
              
              <div className="mt-4 rounded-md bg-pastel-sky/20 p-3">
                <p className="text-sm text-slate-700">
                  <span className="font-medium">Time-Saving Insight:</span> You're spending 15% more time on grading compared to last week. Consider using batch grading and AI-assisted rubrics to reduce this time.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'templates' && (
        <div className="card">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">AI-Suggested Feedback Templates</h2>
            <button className="btn btn-primary flex items-center text-sm">
              <Plus size={16} className="mr-1" />
              Create Custom Template
            </button>
          </div>
          
          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Assignment Context
            </label>
            <select className="input">
              <option>Select an assignment</option>
              <option selected>Math Problem Set #4 (Math 9B)</option>
              <option>Book Report: To Kill a Mockingbird (English 11C)</option>
              <option>Lab Report: Cell Division (Biology 11B)</option>
            </select>
          </div>
          
          <div className="mb-6 space-y-4">
            <div className="rounded-md border border-slate-200 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-medium">Excellent Problem-Solving Approach</h3>
                <div className="rounded-full bg-pastel-mint px-2 py-1 text-xs font-medium text-slate-700">
                  A-Level Feedback
                </div>
              </div>
              <p className="mb-3 text-sm text-slate-700">
                Your problem-solving approach shows exceptional understanding of mathematical concepts. You've clearly demonstrated each step in your solution process, and your work is well-organized. Your ability to apply relevant formulas and check your work is commendable. Keep up this excellent attention to detail and methodical approach.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Generated specifically for Math 9B</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-full bg-pastel-sky/20 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-pastel-sky/30">
                    Edit
                  </button>
                  <button className="rounded-full bg-pastel-lavender px-2 py-1 text-xs font-medium text-slate-700 hover:bg-pastel-lilac">
                    Use Template
                  </button>
                </div>
              </div>
            </div>
            
            <div className="rounded-md border border-slate-200 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-medium">Good Work with Minor Errors</h3>
                <div className="rounded-full bg-pastel-sky px-2 py-1 text-xs font-medium text-slate-700">
                  B-Level Feedback
                </div>
              </div>
              <p className="mb-3 text-sm text-slate-700">
                Your work demonstrates a good understanding of the mathematical concepts covered in this problem set. Your approach to solving the problems is generally sound, though there are a few minor calculation errors that affected your final answers. Pay special attention to algebraic manipulations and make sure to double-check your work. Consider using unit analysis to verify that your answers make sense.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Generated specifically for Math 9B</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-full bg-pastel-sky/20 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-pastel-sky/30">
                    Edit
                  </button>
                  <button className="rounded-full bg-pastel-lavender px-2 py-1 text-xs font-medium text-slate-700 hover:bg-pastel-lilac">
                    Use Template
                  </button>
                </div>
              </div>
            </div>
            
            <div className="rounded-md border border-slate-200 p-4">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-medium">Needs Improvement in Core Concepts</h3>
                <div className="rounded-full bg-pastel-peach px-2 py-1 text-xs font-medium text-slate-700">
                  C-Level Feedback
                </div>
              </div>
              <p className="mb-3 text-sm text-slate-700">
                Your attempt at this problem set shows effort, but there appear to be some gaps in understanding the core mathematical concepts. Several solutions have conceptual errors that indicate confusion about how to apply the appropriate formulas and techniques. I'd recommend reviewing the chapter sections on [specific topic] and attending office hours for additional support. Let's work together to strengthen these foundational skills before the next assignment.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Generated specifically for Math 9B</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-full bg-pastel-sky/20 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-pastel-sky/30">
                    Edit
                  </button>
                  <button className="rounded-full bg-pastel-lavender px-2 py-1 text-xs font-medium text-slate-700 hover:bg-pastel-lilac">
                    Use Template
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-md bg-pastel-peach/10 p-4">
            <h3 className="mb-2 font-medium">Personalization Suggestions</h3>
            <p className="mb-3 text-sm text-slate-600">
              Our AI has analyzed your previous feedback patterns and suggests these personalization elements:
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="rounded-full bg-pastel-sky/20 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-pastel-sky/30">
                + Include growth mindset language
              </button>
              <button className="rounded-full bg-pastel-sky/20 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-pastel-sky/30">
                + Add specific example problems
              </button>
              <button className="rounded-full bg-pastel-sky/20 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-pastel-sky/30">
                + Mention upcoming material connections
              </button>
              <button className="rounded-full bg-pastel-sky/20 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-pastel-sky/30">
                + Suggest practice resources
              </button>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'history' && (
        <div className="card">
          <div className="mb-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Student Learning History</h2>
              <select className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm">
                <option>Select student...</option>
                <option selected>Alex Johnson (Science 10A)</option>
                <option>Samantha Lee (Math 9B)</option>
                <option>Marcus Chen (English 11C)</option>
              </select>
            </div>
            
            <div className="rounded-md border border-slate-200 p-4">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-pastel-pink text-xl font-medium text-slate-700">
                  AJ
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Alex Johnson</h3>
                  <p className="text-sm text-slate-600">Science 10A • Joined September 2022</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-pastel-sky/20 px-2 py-1 text-xs font-medium text-slate-700">
                      Visual Learner
                    </span>
                    <span className="rounded-full bg-pastel-mint/20 px-2 py-1 text-xs font-medium text-slate-700">
                      Strong in Science
                    </span>
                    <span className="rounded-full bg-pastel-peach/20 px-2 py-1 text-xs font-medium text-slate-700">
                      Needs Math Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="mb-3 text-base font-semibold">Academic Summary</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-md bg-slate-50 p-3">
                <div className="mb-1 flex items-center justify-between">
                  <h4 className="text-sm font-medium">Current GPA</h4>
                  <span className="rounded-full bg-pastel-mint/30 px-2 py-0.5 text-xs font-medium text-slate-700">
                    +0.2
                  </span>
                </div>
                <p className="text-2xl font-bold">3.8</p>
                <p className="text-xs text-slate-500">Up from 3.6 last quarter</p>
              </div>
              
              <div className="rounded-md bg-slate-50 p-3">
                <div className="mb-1 flex items-center justify-between">
                  <h4 className="text-sm font-medium">Assignment Completion</h4>
                  <span className="rounded-full bg-pastel-mint/30 px-2 py-0.5 text-xs font-medium text-slate-700">
                    +5%
                  </span>
                </div>
                <p className="text-2xl font-bold">95%</p>
                <p className="text-xs text-slate-500">19 of 20 assignments submitted</p>
              </div>
              
              <div className="rounded-md bg-slate-50 p-3">
                <div className="mb-1 flex items-center justify-between">
                  <h4 className="text-sm font-medium">Participation Level</h4>
                  <span className="rounded-full bg-pastel-peach/30 px-2 py-0.5 text-xs font-medium text-slate-700">
                    -3%
                  </span>
                </div>
                <p className="text-2xl font-bold">82%</p>
                <p className="text-xs text-slate-500">Decreased slightly this month</p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="mb-3 text-base font-semibold">Performance Trends</h3>
            <div className="rounded-md border border-slate-200 p-4">
              <div className="mb-4 h-48 bg-slate-50 p-3">
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="mb-2 text-center text-sm text-slate-600">
                    Student performance trend chart would appear here
                  </div>
                </div>
              </div>
              
              <div className="rounded-md bg-pastel-sky/10 p-3">
                <h4 className="mb-2 font-medium">AI-Generated Insights</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-pastel-lavender"></div>
                    <span>Excels in science concepts but struggles with mathematical calculations in scientific contexts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-pastel-lavender"></div>
                    <span>Performance improves significantly when visual aids and diagrams are included in assignments.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-pastel-lavender"></div>
                    <span>Shows strong critical thinking skills but needs more time to complete complex problems.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-pastel-lavender"></div>
                    <span>Responds well to detailed feedback, especially when improvement strategies are clearly outlined.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="mb-3 text-base font-semibold">Recent Feedback History</h3>
            <div className="space-y-3">
              <div className="rounded-md border border-slate-200 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-medium">Essay: Climate Change</h4>
                  <span className="font-medium">A</span>
                </div>
                <p className="mb-2 text-sm text-slate-600">
                  "Excellent analysis of climate change impacts. Your use of scientific evidence is strong, though some citations need proper formatting. Your conclusion effectively synthesizes the key points."
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>May 15, 2023</span>
                  <button className="text-pastel-lilac hover:underline">Copy to Clipboard</button>
                </div>
              </div>
              
              <div className="rounded-md border border-slate-200 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-medium">Lab Report: Cell Division</h4>
                  <span className="font-medium">B+</span>
                </div>
                <p className="mb-2 text-sm text-slate-600">
                  "Good observations and detailed procedure section. Your analysis needs stronger connections between the data and biological concepts. The diagrams were excellent and clearly labeled."
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>May 12, 2023</span>
                  <button className="text-pastel-lilac hover:underline">Copy to Clipboard</button>
                </div>
              </div>
              
              <div className="rounded-md border border-slate-200 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-medium">Quiz: Cellular Respiration</h4>
                  <span className="font-medium">A-</span>
                </div>
                <p className="mb-2 text-sm text-slate-600">
                  "Strong understanding of cellular processes. Some calculations contain minor errors. Review the electron transport chain section before the final exam."
                </p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>May 8, 2023</span>
                  <button className="text-pastel-lilac hover:underline">Copy to Clipboard</button>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="mb-3 text-base font-semibold">Personalized Feedback Suggestions</h3>
            <div className="rounded-md bg-pastel-mint/10 p-4">
              <p className="mb-3 text-sm text-slate-700">
                Based on Alex's learning history and response to previous feedback, these personalized feedback approaches have been most effective:
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-pastel-mint" />
                  <span><strong>Visual explanations</strong> - Include diagrams or visual references when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-pastel-mint" />
                  <span><strong>Specific examples</strong> - Provide concrete examples that connect to real-world applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-pastel-mint" />
                  <span><strong>Step-by-step guidance</strong> - Break down complex mathematical calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-pastel-mint" />
                  <span><strong>Positive reinforcement</strong> - Highlight specific strengths before addressing areas for improvement</span>
                </li>
              </ul>
              <button className="mt-4 w-full rounded-md bg-pastel-lavender px-3 py-2 text-sm font-medium text-slate-700 hover:bg-pastel-lilac">
                Apply These Insights to Current Assignment
              </button>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'insights' && (
        <div className="space-y-6">
          <div className="card">
            <h2 className="mb-4 text-lg font-semibold">Teaching Effectiveness Summary</h2>
            <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-md bg-pastel-sky/20 p-4 text-center">
                <div className="text-2xl font-bold">87%</div>
                <div className="mt-1 text-sm text-slate-700">Assignment Completion</div>
                <div className="mt-1 text-xs text-slate-500">+5% from last month</div>
              </div>
              
              <div className="rounded-md bg-pastel-lavender/20 p-4 text-center">
                <div className="text-2xl font-bold">82%</div>
                <div className="mt-1 text-sm text-slate-700">Student Engagement</div>
                <div className="mt-1 text-xs text-slate-500">+3% from last month</div>
              </div>
              
              <div className="rounded-md bg-pastel-mint/20 p-4 text-center">
                <div className="text-2xl font-bold">93%</div>
                <div className="mt-1 text-sm text-slate-700">Feedback Usefulness</div>
                <div className="mt-1 text-xs text-slate-500">Based on student ratings</div>
              </div>
              
              <div className="rounded-md bg-pastel-peach/20 p-4 text-center">
                <div className="text-2xl font-bold">78%</div>
                <div className="mt-1 text-sm text-slate-700">Knowledge Retention</div>
                <div className="mt-1 text-xs text-slate-500">Based on follow-up assessments</div>
              </div>
            </div>
            
            <div className="mb-6 h-64 bg-slate-50 p-4">
              <div className="flex h-full flex-col items-center justify-center">
                <div className="mb-2 text-center text-sm text-slate-600">
                  Teaching effectiveness trends chart would appear here
                </div>
              </div>
            </div>
            
            <div className="rounded-md bg-pastel-peach/10 p-4">
              <h3 className="mb-2 font-medium">AI Teaching Coach Suggestions</h3>
              <div className="space-y-3">
                <div className="rounded-md bg-white p-3 shadow-sm">
                  <h4 className="mb-1 font-medium">Improve Math 9B Engagement</h4>
                  <p className="text-sm text-slate-600">
                    Student engagement in Math 9B is 15% lower than your other classes. Consider incorporating more interactive elements and real-world problems. Our analysis shows that students respond well to collaborative problem-solving activities.
                  </p>
                </div>
                
                <div className="rounded-md bg-white p-3 shadow-sm">
                  <h4 className="mb-1 font-medium">Feedback Optimization</h4>
                  <p className="text-sm text-slate-600">
                    Students show 22% better improvement when feedback includes specific examples and suggested practice problems. Your Science 10A feedback consistently includes these elements, but your Math 9B feedback could benefit from this approach.
                  </p>
                </div>
                
                <div className="rounded-md bg-white p-3 shadow-sm">
                  <h4 className="mb-1 font-medium">Assessment Spacing</h4>
                  <p className="text-sm text-slate-600">
                    Knowledge retention improves when assessments are spaced out with review opportunities in between. Consider adding a brief review session before the upcoming English 11C literature test.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <h3 className="mb-4 text-base font-semibold">Common Student Challenges</h3>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium">Mathematical Formulas Application</span>
                    <span className="text-sm font-medium">68%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[68%] bg-pastel-peach"></div>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    68% of students struggle with applying the correct formulas
                  </p>
                </div>
                
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium">Scientific Data Analysis</span>
                    <span className="text-sm font-medium">42%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[42%] bg-pastel-sky"></div>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    42% of students have difficulty interpreting experimental data
                  </p>
                </div>
                
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium">Essay Structure</span>
                    <span className="text-sm font-medium">54%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[54%] bg-pastel-lavender"></div>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    54% of students need help with organizing their written arguments
                  </p>
                </div>
                
                <div>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-medium">Citation Format</span>
                    <span className="text-sm font-medium">76%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[76%] bg-pastel-pink"></div>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    76% of students make errors in proper citation format
                  </p>
                </div>
              </div>
              
              <button className="mt-4 text-sm font-medium text-pastel-lilac hover:underline">
                View Detailed Challenge Report
              </button>
            </div>
            
            <div className="card">
              <h3 className="mb-4 text-base font-semibold">Teaching Time Distribution</h3>
              <div className="mb-6 h-48 bg-slate-50 p-3">
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="mb-2 text-center text-sm text-slate-600">
                    Teaching time distribution chart would appear here
                  </div>
                </div>
              </div>
              
              <div className="rounded-md bg-pastel-mint/10 p-4">
                <h4 className="mb-2 font-medium">Optimization Opportunities</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-pastel-lavender"></div>
                    <span>Grading time could be reduced by 30% using AI-assisted batch grading for objective questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-pastel-lavender"></div>
                    <span>Student feedback creation is taking 25% more time than average - consider using template library</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-pastel-lavender"></div>
                    <span>Administrative tasks could be reduced through automated progress reports</span>
                  </li>
                </ul>
                <button className="mt-3 w-full rounded-md bg-white px-3 py-2 text-sm font-medium text-pastel-lilac shadow-sm hover:bg-slate-50">
                  Apply Suggested Optimizations
                </button>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="mb-4 text-base font-semibold">Monthly Student Highlights</h3>
            <p className="mb-4 text-sm text-slate-600">
              These students have shown notable progress or achievements this month:
            </p>
            
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-md border border-slate-200 p-4">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pastel-pink text-slate-700">
                    AJ
                  </div>
                  <div>
                    <h4 className="font-medium">Alex Johnson</h4>
                    <p className="text-xs text-slate-500">Science 10A</p>
                  </div>
                </div>
                <p className="mb-3 text-sm text-slate-600">
                  Improved from B- to A- in science assignments. Shows excellent progress in analytical thinking.
                </p>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-pastel-mint px-2 py-1 text-xs font-medium text-slate-700">
                    Most Improved
                  </span>
                  <button className="text-sm font-medium text-pastel-lilac hover:underline">
                    Send Recognition
                  </button>
                </div>
              </div>
              
              <div className="rounded-md border border-slate-200 p-4">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pastel-sky text-slate-700">
                    SL
                  </div>
                  <div>
                    <h4 className="font-medium">Samantha Lee</h4>
                    <p className="text-xs text-slate-500">Math 9B</p>
                  </div>
                </div>
                <p className="mb-3 text-sm text-slate-600">
                  Consistently helps peers understand difficult concepts. Shows exceptional collaborative skills.
                </p>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-pastel-peach px-2 py-1 text-xs font-medium text-slate-700">
                    Peer Support
                  </span>
                  <button className="text-sm font-medium text-pastel-lilac hover:underline">
                    Send Recognition
                  </button>
                </div>
              </div>
              
              <div className="rounded-md border border-slate-200 p-4">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pastel-lavender text-slate-700">
                    MC
                  </div>
                  <div>
                    <h4 className="font-medium">Marcus Chen</h4>
                    <p className="text-xs text-slate-500">English 11C</p>
                  </div>
                </div>
                <p className="mb-3 text-sm text-slate-600">
                  Submitted exceptional creative writing piece that demonstrates advanced literary techniques.
                </p>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-pastel-sky px-2 py-1 text-xs font-medium text-slate-700">
                    Creative Excellence
                  </span>
                  <button className="text-sm font-medium text-pastel-lilac hover:underline">
                    Send Recognition
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center">
              <button className="btn btn-primary">
                Generate Monthly Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherTimeSaver;
 