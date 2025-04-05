import  { useState } from 'react';
import { Bell, Check, Edit, Globe, Image, Save, Upload } from 'lucide-react';

const InstitutionalSettings = () => {
  const [activeTab, setActiveTab] = useState('branding');
  const [institutionName, setInstitutionName] = useState('Springfield High School');
  const [primaryColor, setPrimaryColor] = useState('#c8a2c8'); // pastel-lilac
  const [secondaryColor, setSecondaryColor] = useState('#c1e3ff'); // pastel-sky
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold">Institutional Settings</h1>
        <p className="text-slate-600">Customize EduGrade AI to match your institution's needs and branding.</p>
      </div>
      
      <div className="mb-6">
        <div className="border-b border-slate-200">
          <nav className="-mb-px flex space-x-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('branding')}
              className={`whitespace-nowrap border-b-2 py-4 text-sm font-medium ${
                activeTab === 'branding'
                  ? 'border-pastel-lilac text-pastel-lilac'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              Branding & Theme
            </button>
            <button
              onClick={() => setActiveTab('rubrics')}
              className={`whitespace-nowrap border-b-2 py-4 text-sm font-medium ${
                activeTab === 'rubrics'
                  ? 'border-pastel-lilac text-pastel-lilac'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              Grading Rubrics
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`whitespace-nowrap border-b-2 py-4 text-sm font-medium ${
                activeTab === 'features'
                  ? 'border-pastel-lilac text-pastel-lilac'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              Feature Management
            </button>
            <button
              onClick={() => setActiveTab('gamification')}
              className={`whitespace-nowrap border-b-2 py-4 text-sm font-medium ${
                activeTab === 'gamification'
                  ? 'border-pastel-lilac text-pastel-lilac'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              Gamification
            </button>
            <button
              onClick={() => setActiveTab('plagiarism')}
              className={`whitespace-nowrap border-b-2 py-4 text-sm font-medium ${
                activeTab === 'plagiarism'
                  ? 'border-pastel-lilac text-pastel-lilac'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              Plagiarism Settings
            </button>
          </nav>
        </div>
      </div>
      
      {activeTab === 'branding' && (
        <div className="space-y-6">
          <div className="card">
            <h2 className="mb-4 text-lg font-semibold">Institution Details</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Institution Name
                </label>
                <input 
                  type="text" 
                  className="input" 
                  value={institutionName}
                  onChange={(e) => setInstitutionName(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Institution Type
                </label>
                <select className="input">
                  <option>High School</option>
                  <option>College</option>
                  <option>University</option>
                  <option>Training Center</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Domain Name
                </label>
                <div className="flex rounded-md">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-slate-200 bg-slate-50 px-3 text-sm text-slate-500">
                    <Globe size={16} className="mr-1" />
                  </span>
                  <input
                    type="text"
                    className="input rounded-l-none"
                    placeholder="yourschool.edugrade.ai"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Contact Email
                </label>
                <input 
                  type="email" 
                  className="input" 
                  placeholder="admin@yourschool.edu"
                />
              </div>
            </div>
          </div>
          
          <div className="card">
            <h2 className="mb-4 text-lg font-semibold">Theme & Branding</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Logo Upload
                </label>
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md bg-pastel-sky">
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-xl">📚</span>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-outline mb-2 flex items-center">
                      <Upload size={16} className="mr-2" />
                      Upload New Logo
                    </button>
                    <p className="text-xs text-slate-500">
                      Recommended size: 512x512px, PNG or SVG
                    </p>
                  </div>
                </div>
                
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Favicon
                </label>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md bg-pastel-sky">
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-sm">📚</span>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-outline mb-2 flex items-center">
                      <Upload size={16} className="mr-2" />
                      Upload Favicon
                    </button>
                    <p className="text-xs text-slate-500">
                      Recommended size: 32x32px, PNG or ICO
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Primary Color
                </label>
                <div className="flex gap-3">
                  <input 
                    type="color" 
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="h-10 w-10 rounded border border-slate-200"
                  />
                  <input 
                    type="text" 
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="input"
                  />
                </div>
                
                <label className="mb-1 mt-4 block text-sm font-medium text-slate-700">
                  Secondary Color
                </label>
                <div className="flex gap-3">
                  <input 
                    type="color" 
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="h-10 w-10 rounded border border-slate-200"
                  />
                  <input 
                    type="text" 
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="input"
                  />
                </div>
                
                <div className="mt-4">
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Theme Preview
                  </label>
                  <div className="overflow-hidden rounded-lg border border-slate-200">
                    <div className="border-b border-slate-200 bg-white p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-semibold" style={{ color: primaryColor }}>
                          <span className="text-lg">📚</span>
                          {institutionName || 'EduGrade AI'}
                        </div>
                        <div className="flex items-center gap-2">
                          <Bell size={16} />
                          <div className="h-6 w-6 rounded-full" style={{ backgroundColor: secondaryColor }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="mb-2 h-4 w-32 rounded" style={{ backgroundColor: primaryColor }}></div>
                      <div className="mb-3 h-2 w-full rounded bg-slate-100"></div>
                      <div className="mb-3 h-2 w-3/4 rounded bg-slate-100"></div>
                      <div className="flex gap-2">
                        <div className="h-8 w-20 rounded" style={{ backgroundColor: primaryColor }}></div>
                        <div className="h-8 w-20 rounded border border-slate-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Login Page Background
              </label>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg border-2 border-pastel-lavender p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1488401962641-ff6be4bb26ef?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxwYXN0ZWwlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjB0ZWFjaGluZyUyMHN0dWRlbnRzJTIwZGlnaXRhbCUyMGxlYXJuaW5nfGVufDB8fHx8MTc0Mzg1ODc5N3ww&ixlib=rb-4.0.3&fit=fillmax&h=500&w=800" 
                    alt="Pastel colored waves" 
                    className="h-24 w-full rounded object-cover"
                  />
                  <div className="mt-1 flex items-center justify-center">
                    <Check size={16} className="mr-1 text-pastel-lilac" />
                    <span className="text-xs font-medium">Selected</span>
                  </div>
                </div>
                
                <div className="overflow-hidden rounded-lg border-2 border-transparent p-1 hover:border-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1521133573892-e44906baee46?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxwYXN0ZWwlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjB0ZWFjaGluZyUyMHN0dWRlbnRzJTIwZGlnaXRhbCUyMGxlYXJuaW5nfGVufDB8fHx8MTc0Mzg1ODc5N3ww&ixlib=rb-4.0.3&fit=fillmax&h=500&w=800" 
                    alt="Purple crystal quartz stone" 
                    className="h-24 w-full rounded object-cover"
                  />
                  <div className="mt-1 flex items-center justify-center">
                    <span className="text-xs text-slate-500">Select</span>
                  </div>
                </div>
                
                <div className="group relative overflow-hidden rounded-lg border-2 border-transparent p-1 hover:border-slate-200">
                  <div className="flex h-24 w-full items-center justify-center rounded bg-slate-100">
                    <Image size={24} className="text-slate-400" />
                  </div>
                  <div className="mt-1 flex items-center justify-center">
                    <span className="text-xs text-slate-500">Upload Custom</span>
                  </div>
                  <input type="file" className="absolute inset-0 cursor-pointer opacity-0" />
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-4">
              <button className="btn btn-primary flex items-center">
                <Save size={16} className="mr-2" />
                Save Changes
              </button>
              <button className="btn btn-outline">
                Preview
              </button>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'rubrics' && (
        <div className="space-y-6">
          <div className="card">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Grading Rubrics</h2>
              <button className="btn btn-primary">
                Create New Rubric
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 text-left text-sm">
                    <th className="pb-3 font-medium text-slate-600">Rubric Name</th>
                    <th className="pb-3 font-medium text-slate-600">Subject</th>
                    <th className="pb-3 font-medium text-slate-600">Last Modified</th>
                    <th className="pb-3 font-medium text-slate-600">Status</th>
                    <th className="pb-3 font-medium text-slate-600">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-3">Essay Evaluation</td>
                    <td className="py-3">English</td>
                    <td className="py-3">May 15, 2023</td>
                    <td className="py-3">
                      <span className="rounded-full bg-pastel-mint px-2 py-1 text-xs font-medium text-slate-700">
                        Active
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <button className="text-pastel-lilac hover:underline">Edit</button>
                        <button className="text-pastel-blush hover:underline">Delete</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">Math Problem Solving</td>
                    <td className="py-3">Mathematics</td>
                    <td className="py-3">May 10, 2023</td>
                    <td className="py-3">
                      <span className="rounded-full bg-pastel-mint px-2 py-1 text-xs font-medium text-slate-700">
                        Active
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <button className="text-pastel-lilac hover:underline">Edit</button>
                        <button className="text-pastel-blush hover:underline">Delete</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">Lab Report Assessment</td>
                    <td className="py-3">Science</td>
                    <td className="py-3">May 8, 2023</td>
                    <td className="py-3">
                      <span className="rounded-full bg-pastel-mint px-2 py-1 text-xs font-medium text-slate-700">
                        Active
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <button className="text-pastel-lilac hover:underline">Edit</button>
                        <button className="text-pastel-blush hover:underline">Delete</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">History Project Rubric</td>
                    <td className="py-3">History</td>
                    <td className="py-3">April 28, 2023</td>
                    <td className="py-3">
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                        Draft
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <button className="text-pastel-lilac hover:underline">Edit</button>
                        <button className="text-pastel-blush hover:underline">Delete</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="card">
            <h2 className="mb-4 text-lg font-semibold">Custom Grading Scale</h2>
            <div className="mb-4 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Grading System
                </label>
                <select className="input">
                  <option>Letter Grades (A, B, C, D, F)</option>
                  <option>Percentage (0-100%)</option>
                  <option>Point-Based (0-10)</option>
                  <option>Custom Scale</option>
                </select>
              </div>
              
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Passing Grade Threshold
                </label>
                <input 
                  type="number" 
                  className="input" 
                  placeholder="e.g. 60%" 
                  min="0"
                  max="100"
                  value="60"
                />
              </div>
            </div>
            
            <div>
              <h3 className="mb-3 text-sm font-medium text-slate-700">
                Grade Definitions
              </h3>
              <div className="mb-4 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200 text-left text-sm">
                      <th className="pb-3 font-medium text-slate-600">Grade</th>
                      <th className="pb-3 font-medium text-slate-600">Range</th>
                      <th className="pb-3 font-medium text-slate-600">Description</th>
                      <th className="pb-3 font-medium text-slate-600">Color</th>
                      <th className="pb-3 font-medium text-slate-600"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="py-3">
                        <input 
                          type="text" 
                          className="w-full rounded-md border border-slate-200 px-2 py-1"
                          value="A"
                        />
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            className="w-16 rounded-md border border-slate-200 px-2 py-1"
                            value="90"
                          />
                          <span>-</span>
                          <input 
                            type="number" 
                            className="w-16 rounded-md border border-slate-200 px-2 py-1"
                            value="100"
                          />
                        </div>
                      </td>
                      <td className="py-3">
                        <input 
                          type="text" 
                          className="w-full rounded-md border border-slate-200 px-2 py-1"
                          value="Excellent"
                        />
                      </td>
                      <td className="py-3">
                        <input 
                          type="color" 
                          className="h-8 w-8 rounded border border-slate-200"
                          value="#d0f0c0"
                        />
                      </td>
                      <td className="py-3"></td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <input 
                          type="text" 
                          className="w-full rounded-md border border-slate-200 px-2 py-1"
                          value="B"
                        />
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            className="w-16 rounded-md border border-slate-200 px-2 py-1"
                            value="80"
                          />
                          <span>-</span>
                          <input 
                            type="number" 
                            className="w-16 rounded-md border border-slate-200 px-2 py-1"
                            value="89"
                          />
                        </div>
                      </td>
                      <td className="py-3">
                        <input 
                          type="text" 
                          className="w-full rounded-md border border-slate-200 px-2 py-1"
                          value="Good"
                        />
                      </td>
                      <td className="py-3">
                        <input 
                          type="color" 
                          className="h-8 w-8 rounded border border-slate-200"
                          value="#c1e3ff"
                        />
                      </td>
                      <td className="py-3"></td>
                    </tr>
                    <tr>
                      <td className="py-3">
                        <input 
                          type="text" 
                          className="w-full rounded-md border border-slate-200 px-2 py-1"
                          value="C"
                        />
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            className="w-16 rounded-md border border-slate-200 px-2 py-1"
                            value="70"
                          />
                          <span>-</span>
                          <input 
                            type="number" 
                            className="w-16 rounded-md border border-slate-200 px-2 py-1"
                            value="79"
                          />
                        </div>
                      </td>
                      <td className="py-3">
                        <input 
                          type="text" 
                          className="w-full rounded-md border border-slate-200 px-2 py-1"
                          value="Satisfactory"
                        />
                      </td>
                      <td className="py-3">
                        <input 
                          type="color" 
                          className="h-8 w-8 rounded border border-slate-200"
                          value="#e1d5e7"
                        />
                      </td>
                      <td className="py-3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <button className="btn btn-outline text-sm">
                + Add Grade Level
              </button>
            </div>
            
            <div className="mt-6">
              <button className="btn btn-primary">
                Save Grading System
              </button>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'features' && (
        <div className="card">
          <h2 className="mb-6 text-lg font-semibold">Feature Management</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-base font-medium">Core Features</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="font-medium">AI-Assisted Grading</h4>
                    <p className="text-sm text-slate-600">Automated assessment of student assignments</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-ai-grading" defaultChecked />
                    <label 
                      htmlFor="toggle-ai-grading" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="font-medium">Feedback Templates</h4>
                    <p className="text-sm text-slate-600">Customizable library of feedback responses</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-feedback" defaultChecked />
                    <label 
                      htmlFor="toggle-feedback" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="font-medium">Student Analytics</h4>
                    <p className="text-sm text-slate-600">Performance tracking and reporting</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-analytics" defaultChecked />
                    <label 
                      htmlFor="toggle-analytics" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="mb-3 text-base font-medium">Advanced Features</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="flex items-center font-medium">
                      AI-Enhanced Plagiarism Checker
                      <span className="ml-2 rounded-full bg-pastel-peach px-2 py-0.5 text-xs font-medium text-slate-700">Premium</span>
                    </h4>
                    <p className="text-sm text-slate-600">Detect similarities and potential copied content</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-plagiarism" defaultChecked />
                    <label 
                      htmlFor="toggle-plagiarism" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="flex items-center font-medium">
                      Gamification System
                      <span className="ml-2 rounded-full bg-pastel-peach px-2 py-0.5 text-xs font-medium text-slate-700">Premium</span>
                    </h4>
                    <p className="text-sm text-slate-600">Badges, achievements, and leaderboards</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-gamification" defaultChecked />
                    <label 
                      htmlFor="toggle-gamification" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="flex items-center font-medium">
                      Student Digital Portfolio
                      <span className="ml-2 rounded-full bg-pastel-peach px-2 py-0.5 text-xs font-medium text-slate-700">Premium</span>
                    </h4>
                    <p className="text-sm text-slate-600">Personal profiles with achievements and work samples</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-portfolio" defaultChecked />
                    <label 
                      htmlFor="toggle-portfolio" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="flex items-center font-medium">
                      Extracurricular Weightage Calculator
                      <span className="ml-2 rounded-full bg-pastel-peach px-2 py-0.5 text-xs font-medium text-slate-700">Premium</span>
                    </h4>
                    <p className="text-sm text-slate-600">Score extracurricular activities based on certificates</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-extracurricular" defaultChecked />
                    <label 
                      htmlFor="toggle-extracurricular" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="flex items-center font-medium">
                      Teacher Time-Saver Mode
                      <span className="ml-2 rounded-full bg-pastel-peach px-2 py-0.5 text-xs font-medium text-slate-700">Premium</span>
                    </h4>
                    <p className="text-sm text-slate-600">Auto-suggest templates and show student history</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-timesaver" defaultChecked />
                    <label 
                      htmlFor="toggle-timesaver" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="flex items-center font-medium">
                      Monthly Student Highlights
                      <span className="ml-2 rounded-full bg-pastel-peach px-2 py-0.5 text-xs font-medium text-slate-700">Premium</span>
                    </h4>
                    <p className="text-sm text-slate-600">Automatic monthly reports highlighting student achievements</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-monthly" defaultChecked />
                    <label 
                      htmlFor="toggle-monthly" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="btn btn-primary">
                Save Feature Settings
              </button>
              <button className="btn btn-outline">
                Reset to Defaults
              </button>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'gamification' && (
        <div className="space-y-6">
          <div className="card">
            <h2 className="mb-4 text-lg font-semibold">Gamification Settings</h2>
            <p className="mb-6 text-slate-600">
              Configure how students earn badges, points, and rewards to increase engagement.
            </p>
            
            <div className="mb-6">
              <h3 className="mb-3 text-base font-medium">Badges & Achievements</h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-mint text-slate-700">
                      <Check size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">On-Time Submission</h4>
                      <p className="text-xs text-slate-500">When assignments are submitted before deadline</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Points: 10</span>
                    <div className="relative h-5 w-10 rounded-full bg-slate-200">
                      <input type="checkbox" className="peer absolute opacity-0" id="badge-ontime" defaultChecked />
                      <label 
                        htmlFor="badge-ontime" 
                        className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                      >
                        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-5"></span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-sky text-slate-700">
                      <Bell size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">Perfect Score</h4>
                      <p className="text-xs text-slate-500">For achieving 100% on any assignment</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Points: 25</span>
                    <div className="relative h-5 w-10 rounded-full bg-slate-200">
                      <input type="checkbox" className="peer absolute opacity-0" id="badge-perfect" defaultChecked />
                      <label 
                        htmlFor="badge-perfect" 
                        className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                      >
                        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-5"></span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-lavender text-slate-700">
                      <Edit size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">Steady Improvement</h4>
                      <p className="text-xs text-slate-500">When grades improve for 3 consecutive assignments</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Points: 15</span>
                    <div className="relative h-5 w-10 rounded-full bg-slate-200">
                      <input type="checkbox" className="peer absolute opacity-0" id="badge-improvement" defaultChecked />
                      <label 
                        htmlFor="badge-improvement" 
                        className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                      >
                        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-5"></span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-peach text-slate-700">
                      <FileText size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">Extra Credit</h4>
                      <p className="text-xs text-slate-500">For completing optional assignments</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Points: 20</span>
                    <div className="relative h-5 w-10 rounded-full bg-slate-200">
                      <input type="checkbox" className="peer absolute opacity-0" id="badge-extra" defaultChecked />
                      <label 
                        htmlFor="badge-extra" 
                        className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                      >
                        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-5"></span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border border-slate-200 p-4">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pastel-pink text-slate-700">
                      <Users size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium">Team Player</h4>
                      <p className="text-xs text-slate-500">For successful group project completion</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Points: 15</span>
                    <div className="relative h-5 w-10 rounded-full bg-slate-200">
                      <input type="checkbox" className="peer absolute opacity-0" id="badge-team" defaultChecked />
                      <label 
                        htmlFor="badge-team" 
                        className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                      >
                        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-5"></span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 p-4 text-center">
                  <button className="mb-2 rounded-full bg-pastel-sky/30 p-2 text-slate-600">
                    <Plus size={18} />
                  </button>
                  <p className="text-sm font-medium text-slate-600">Add Custom Badge</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="mb-3 text-base font-medium">Leaderboard Settings</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Leaderboard Visibility
                  </label>
                  <select className="input">
                    <option>Class-wide (all students can see)</option>
                    <option>Individual (students see only their rank)</option>
                    <option>Teacher-only (disabled for students)</option>
                  </select>
                </div>
                
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Leaderboard Reset
                  </label>
                  <select className="input">
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Never (cumulative)</option>
                  </select>
                </div>
                
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Highlight Top Students
                  </label>
                  <input 
                    type="number" 
                    className="input" 
                    placeholder="e.g. 10" 
                    min="1"
                    max="100"
                    value="10"
                  />
                </div>
                
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Points Decay
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="relative h-5 w-10 rounded-full bg-slate-200">
                      <input type="checkbox" className="peer absolute opacity-0" id="points-decay" />
                      <label 
                        htmlFor="points-decay" 
                        className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                      >
                        <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-5"></span>
                      </label>
                    </div>
                    <span className="text-sm text-slate-600">Enable point decay over time</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="mb-3 text-base font-medium">Rewards & Incentives</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="font-medium">Digital Certificates</h4>
                    <p className="text-sm text-slate-600">Automatically award certificates for milestone achievements</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-certificates" defaultChecked />
                    <label 
                      htmlFor="toggle-certificates" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="font-medium">Point Redemption</h4>
                    <p className="text-sm text-slate-600">Allow students to redeem points for teacher-defined rewards</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-redemption" defaultChecked />
                    <label 
                      htmlFor="toggle-redemption" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="font-medium">Achievement Notifications</h4>
                    <p className="text-sm text-slate-600">Send notifications when students earn badges or rewards</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-notifications" defaultChecked />
                    <label 
                      htmlFor="toggle-notifications" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="btn btn-primary">
                Save Gamification Settings
              </button>
              <button className="btn btn-outline">
                Preview Student View
              </button>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'plagiarism' && (
        <div className="space-y-6">
          <div className="card">
            <h2 className="mb-4 text-lg font-semibold">AI-Enhanced Plagiarism Checker</h2>
            <p className="mb-6 text-slate-600">
              Configure how the AI detects similarities between student submissions and external sources.
            </p>
            
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Sensitivity Level
                </label>
                <select className="input">
                  <option>High (flag minor similarities)</option>
                  <option selected>Medium (balanced detection)</option>
                  <option>Low (flag only major similarities)</option>
                </select>
                <p className="mt-1 text-xs text-slate-500">
                  Determines how strictly the system identifies potential plagiarism.
                </p>
              </div>
              
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Similarity Threshold
                </label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value="20" 
                    className="w-full"
                  />
                  <span className="w-12 text-center font-medium">20%</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Minimum similarity percentage to flag as potential plagiarism.
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="mb-3 text-base font-medium">Detection Sources</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="check-internet" className="h-4 w-4 rounded border-slate-300 text-pastel-lilac focus:ring-pastel-lavender" defaultChecked />
                  <label htmlFor="check-internet" className="text-sm font-medium text-slate-700">
                    Internet Sources
                  </label>
                </div>
                
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="check-academic" className="h-4 w-4 rounded border-slate-300 text-pastel-lilac focus:ring-pastel-lavender" defaultChecked />
                  <label htmlFor="check-academic" className="text-sm font-medium text-slate-700">
                    Academic Databases
                  </label>
                </div>
                
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="check-previous" className="h-4 w-4 rounded border-slate-300 text-pastel-lilac focus:ring-pastel-lavender" defaultChecked />
                  <label htmlFor="check-previous" className="text-sm font-medium text-slate-700">
                    Previous Student Submissions
                  </label>
                </div>
                
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="check-cross" className="h-4 w-4 rounded border-slate-300 text-pastel-lilac focus:ring-pastel-lavender" defaultChecked />
                  <label htmlFor="check-cross" className="text-sm font-medium text-slate-700">
                    Cross-Class Checking
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="mb-3 text-base font-medium">Reporting Options</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="font-medium">Highlight Matched Text</h4>
                    <p className="text-sm text-slate-600">Show color-coded highlighting of potential plagiarized content</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-highlight" defaultChecked />
                    <label 
                      htmlFor="toggle-highlight" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="font-medium">Show Source Links</h4>
                    <p className="text-sm text-slate-600">Include links to potential matching sources in the report</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-sources" defaultChecked />
                    <label 
                      htmlFor="toggle-sources" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="font-medium">Similarity Score</h4>
                    <p className="text-sm text-slate-600">Include overall similarity percentage in reports</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-score" defaultChecked />
                    <label 
                      htmlFor="toggle-score" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
                
                <div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
                  <div>
                    <h4 className="font-medium">Student Access to Reports</h4>
                    <p className="text-sm text-slate-600">Allow students to view their own plagiarism reports</p>
                  </div>
                  <div className="relative h-6 w-12 rounded-full bg-slate-200">
                    <input type="checkbox" className="peer absolute opacity-0" id="toggle-student-access" defaultChecked />
                    <label 
                      htmlFor="toggle-student-access" 
                      className="absolute inset-0 block cursor-pointer rounded-full bg-slate-200 transition-colors duration-300 peer-checked:bg-pastel-lilac"
                    >
                      <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 peer-checked:translate-x-6"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-md bg-pastel-peach/30 p-4">
              <h3 className="mb-2 text-sm font-medium text-slate-700">AI Enhancement Capabilities</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
                <li>Detects paraphrased content using semantic analysis</li>
                <li>Identifies translated plagiarism across languages</li>
                <li>Recognizes code plagiarism for programming assignments</li>
                <li>Adapts to subject-specific writing patterns</li>
                <li>Maintains a growing database of academic sources</li>
              </ul>
            </div>
            
            <div className="mt-6 flex items-center gap-4">
              <button className="btn btn-primary">
                Save Plagiarism Settings
              </button>
              <button className="btn btn-outline">
                Run Test Check
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstitutionalSettings;
 