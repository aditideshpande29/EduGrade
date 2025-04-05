import  { useState } from 'react';
import { AlertCircle, CheckCircle, FileText, Trash, Upload } from 'lucide-react';

const GradeAssignments = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingComplete, setProcessingComplete] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };
  
  const handleGradeSubmission = () => {
    if (files.length === 0) return;
    
    setIsProcessing(true);
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      setProcessingComplete(true);
    }, 2000);
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold">Grade Assignments</h1>
        <p className="text-slate-600">Upload assignments and let AI help you grade them efficiently.</p>
      </div>
      
      <div className="mb-6">
        <div className="border-b border-slate-200">
          <nav className="-mb-px flex space-x-6">
            <button
              onClick={() => setActiveTab('upload')}
              className={`inline-flex items-center border-b-2 py-4 text-sm font-medium ${
                activeTab === 'upload'
                  ? 'border-pastel-lilac text-pastel-lilac'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              <Upload size={18} className="mr-2" />
              Upload Assignments
            </button>
            <button
              onClick={() => setActiveTab('queue')}
              className={`inline-flex items-center border-b-2 py-4 text-sm font-medium ${
                activeTab === 'queue'
                  ? 'border-pastel-lilac text-pastel-lilac'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              <FileText size={18} className="mr-2" />
              Grading Queue
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`inline-flex items-center border-b-2 py-4 text-sm font-medium ${
                activeTab === 'completed'
                  ? 'border-pastel-lilac text-pastel-lilac'
                  : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
              }`}
            >
              <CheckCircle size={18} className="mr-2" />
              Completed
            </button>
          </nav>
        </div>
      </div>
      
      {activeTab === 'upload' && (
        <div>
          <div className="card mb-6">
            <h2 className="mb-4 text-lg font-semibold">Assignment Details</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Assignment Name
                </label>
                <input 
                  type="text" 
                  className="input" 
                  placeholder="e.g., Essay: Climate Change"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Class
                </label>
                <select className="input">
                  <option>Select a class</option>
                  <option>Science 10A</option>
                  <option>Math 9B</option>
                  <option>English 11C</option>
                  <option>History 10A</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Due Date
                </label>
                <input type="date" className="input" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Grading Rubric
                </label>
                <select className="input">
                  <option>Select a rubric</option>
                  <option>Essay Rubric</option>
                  <option>Problem Set Rubric</option>
                  <option>Project Rubric</option>
                  <option>Lab Report Rubric</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="card mb-6">
            <h2 className="mb-4 text-lg font-semibold">Upload Files</h2>
            <div className="mb-4 rounded-lg border-2 border-dashed border-pastel-sky p-8">
              <div className="flex flex-col items-center text-center">
                <Upload className="mb-3 h-12 w-12 text-pastel-lavender" />
                <p className="mb-2 text-lg font-medium">Drag files here, or click to select files</p>
                <p className="mb-4 text-sm text-slate-500">Support for PDF, DOCX, and TXT files</p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                  accept=".pdf,.docx,.txt"
                />
                <label
                  htmlFor="file-upload"
                  className="btn btn-primary cursor-pointer"
                >
                  Select Files
                </label>
              </div>
            </div>
            
            {files.length > 0 && (
              <div>
                <h3 className="mb-3 text-sm font-medium">Selected Files ({files.length})</h3>
                <ul className="mb-4 divide-y divide-slate-200 rounded-md border border-slate-200">
                  {files.map((file, index) => (
                    <li key={index} className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div className="flex w-0 flex-1 items-center">
                        <FileText className="h-5 w-5 flex-shrink-0 text-pastel-lavender" />
                        <span className="ml-2 w-0 flex-1 truncate">{file.name}</span>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          className="text-pastel-blush hover:text-red-500"
                          onClick={() => {
                            const newFiles = [...files];
                            newFiles.splice(index, 1);
                            setFiles(newFiles);
                          }}
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex items-center gap-4">
              <button 
                className="btn btn-primary"
                onClick={handleGradeSubmission}
                disabled={isProcessing || files.length === 0}
              >
                {isProcessing ? 'Processing...' : 'Start Grading'}
              </button>
              
              <button className="btn btn-outline">
                Save as Draft
              </button>
            </div>
            
            {processingComplete && (
              <div className="mt-4 rounded-md bg-pastel-mint/50 p-4">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-slate-700" />
                  <p className="text-sm font-medium text-slate-700">
                    Assignments have been added to the grading queue. The AI is now processing them.
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <div className="card">
            <h2 className="mb-4 text-lg font-semibold">Grading Instructions</h2>
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Additional Instructions for AI
              </label>
              <textarea
                className="input min-h-[120px]"
                placeholder="Add specific instructions for the AI grader, such as key points to look for, common mistakes to highlight, etc."
              ></textarea>
            </div>
            <div className="rounded-md bg-pastel-sky/30 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle className="h-5 w-5 text-slate-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-slate-700">Tips for Better Results</h3>
                  <div className="mt-2 text-sm text-slate-600">
                    <ul className="list-inside list-disc space-y-1">
                      <li>Provide clear grading criteria</li>
                      <li>Include sample answers if possible</li>
                      <li>Specify points allocation for each section</li>
                      <li>Always review AI-suggested grades before finalizing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeTab === 'queue' && (
        <div className="card">
          <h2 className="mb-4 text-lg font-semibold">Assignments in Queue</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 text-left text-sm">
                  <th className="pb-3 font-medium text-slate-600">Assignment</th>
                  <th className="pb-3 font-medium text-slate-600">Class</th>
                  <th className="pb-3 font-medium text-slate-600">Submitted</th>
                  <th className="pb-3 font-medium text-slate-600">Status</th>
                  <th className="pb-3 font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-3 text-sm">Math Problem Set #4</td>
                  <td className="py-3 text-sm">Math 9B</td>
                  <td className="py-3 text-sm">May 18, 2023</td>
                  <td className="py-3 text-sm">
                    <div className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-pastel-peach"></div>
                      <span>Processing (65%)</span>
                    </div>
                  </td>
                  <td className="py-3 text-sm">
                    <button className="text-pastel-lilac hover:underline">View</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-sm">Book Report: To Kill a Mockingbird</td>
                  <td className="py-3 text-sm">English 11C</td>
                  <td className="py-3 text-sm">May 20, 2023</td>
                  <td className="py-3 text-sm">
                    <div className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-pastel-sky"></div>
                      <span>In Queue</span>
                    </div>
                  </td>
                  <td className="py-3 text-sm">
                    <button className="text-pastel-lilac hover:underline">View</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-sm">History Project: Ancient Rome</td>
                  <td className="py-3 text-sm">History 10A</td>
                  <td className="py-3 text-sm">May 22, 2023</td>
                  <td className="py-3 text-sm">
                    <div className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-pastel-sky"></div>
                      <span>In Queue</span>
                    </div>
                  </td>
                  <td className="py-3 text-sm">
                    <button className="text-pastel-lilac hover:underline">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {activeTab === 'completed' && (
        <div className="card">
          <h2 className="mb-4 text-lg font-semibold">Completed Assignments</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 text-left text-sm">
                  <th className="pb-3 font-medium text-slate-600">Assignment</th>
                  <th className="pb-3 font-medium text-slate-600">Class</th>
                  <th className="pb-3 font-medium text-slate-600">Graded On</th>
                  <th className="pb-3 font-medium text-slate-600">Avg. Score</th>
                  <th className="pb-3 font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-3 text-sm">Essay: Climate Change</td>
                  <td className="py-3 text-sm">Science 10A</td>
                  <td className="py-3 text-sm">May 15, 2023</td>
                  <td className="py-3 text-sm">85%</td>
                  <td className="py-3 text-sm">
                    <div className="flex items-center gap-3">
                      <button className="text-pastel-lilac hover:underline">View</button>
                      <button className="text-pastel-lilac hover:underline">Download</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-sm">Lab Report: Cell Division</td>
                  <td className="py-3 text-sm">Biology 11B</td>
                  <td className="py-3 text-sm">May 12, 2023</td>
                  <td className="py-3 text-sm">78%</td>
                  <td className="py-3 text-sm">
                    <div className="flex items-center gap-3">
                      <button className="text-pastel-lilac hover:underline">View</button>
                      <button className="text-pastel-lilac hover:underline">Download</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-sm">Poetry Analysis</td>
                  <td className="py-3 text-sm">English 11C</td>
                  <td className="py-3 text-sm">May 10, 2023</td>
                  <td className="py-3 text-sm">92%</td>
                  <td className="py-3 text-sm">
                    <div className="flex items-center gap-3">
                      <button className="text-pastel-lilac hover:underline">View</button>
                      <button className="text-pastel-lilac hover:underline">Download</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 text-sm">Math Quiz #3</td>
                  <td className="py-3 text-sm">Math 9B</td>
                  <td className="py-3 text-sm">May 8, 2023</td>
                  <td className="py-3 text-sm">76%</td>
                  <td className="py-3 text-sm">
                    <div className="flex items-center gap-3">
                      <button className="text-pastel-lilac hover:underline">View</button>
                      <button className="text-pastel-lilac hover:underline">Download</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default GradeAssignments;
 