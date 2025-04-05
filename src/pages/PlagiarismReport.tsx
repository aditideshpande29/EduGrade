import  { AlertCircle, ArrowLeft, Download, ExternalLink, FileText, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlagiarismReport = () => {
  const report = {
    id: 'PLG-2023-0428',
    assignmentName: 'Essay: Climate Change',
    studentName: 'Alex Johnson',
    class: 'Science 10A',
    date: 'May 15, 2023',
    overallSimilarity: 23,
    wordCount: 1250,
    sources: [
      { id: 1, url: 'https://example.org/climate-science', similarity: 12, matchedWords: 87, title: 'Climate Science Research Paper' },
      { id: 2, url: 'https://example.edu/global-warming', similarity: 8, matchedWords: 64, title: 'Global Warming Effects' },
      { id: 3, url: 'https://example.com/earth-systems', similarity: 3, matchedWords: 27, title: 'Earth Systems and Climate Change' },
    ],
    segments: [
      { 
        id: 1, 
        text: 'Climate change is defined as long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas, which produces heat-trapping gases.', 
        similarity: 65,
        sourceId: 1
      },
      { 
        id: 2, 
        text: 'Rising sea levels are one of the most dramatic effects of climate change. Glaciers and ice sheets are melting, adding more water to the oceans. Thermal expansion of seawater as it warms also contributes to sea level rise.', 
        similarity: 45,
        sourceId: 2
      },
      { 
        id: 3, 
        text: 'The Intergovernmental Panel on Climate Change (IPCC) was established to provide policymakers with regular scientific assessments on climate change, its implications, and potential future risks.', 
        similarity: 80,
        sourceId: 1
      },
    ]
  };
  
  const getSimilarityColor = (percentage: number) => {
    if (percentage >= 60) return 'text-red-500 bg-red-50';
    if (percentage >= 30) return 'text-amber-500 bg-amber-50';
    return 'text-green-500 bg-green-50';
  };
  
  const getOverallRiskLevel = (percentage: number) => {
    if (percentage >= 30) return { level: 'High', color: 'bg-pastel-blush text-slate-700' };
    if (percentage >= 15) return { level: 'Medium', color: 'bg-pastel-peach text-slate-700' };
    return { level: 'Low', color: 'bg-pastel-mint text-slate-700' };
  };
  
  const risk = getOverallRiskLevel(report.overallSimilarity);
  
  return (
    <div>
      <div className="mb-6">
        <Link to="/grade" className="mb-3 inline-flex items-center text-pastel-lilac hover:underline">
          <ArrowLeft size={16} className="mr-1" />
          Back to Assignments
        </Link>
        <h1 className="mb-2 text-2xl font-bold">AI-Enhanced Plagiarism Report</h1>
        <p className="text-slate-600">
          Detailed analysis of content originality and potential academic integrity issues.
        </p>
      </div>
      
      <div className="card mb-6">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="mb-1 text-lg font-semibold">{report.assignmentName}</h2>
            <p className="text-sm text-slate-600">
              Student: {report.studentName} | Class: {report.class} | Date: {report.date}
            </p>
          </div>
          
          <div className="mt-4 flex items-center gap-3 md:mt-0">
            <div className="rounded-md bg-slate-100 px-3 py-1 text-sm">
              ID: {report.id}
            </div>
            <button className="btn btn-outline flex items-center text-sm">
              <Download size={16} className="mr-2" />
              Export Report
            </button>
          </div>
        </div>
        
        <div className="mb-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="rounded-md bg-slate-50 p-4 text-center">
            <div className="mb-1 text-2xl font-bold">{report.overallSimilarity}%</div>
            <div className="text-sm text-slate-600">Overall Similarity</div>
          </div>
          
          <div className="rounded-md bg-slate-50 p-4 text-center">
            <div className="mb-1 text-2xl font-bold">{report.sources.length}</div>
            <div className="text-sm text-slate-600">Matched Sources</div>
          </div>
          
          <div className="rounded-md bg-slate-50 p-4 text-center">
            <div className="mb-1 text-2xl font-bold">{report.wordCount}</div>
            <div className="text-sm text-slate-600">Total Words</div>
          </div>
          
          <div className="rounded-md bg-slate-50 p-4 text-center">
            <div className="mb-1 flex items-center justify-center">
              <span className={`rounded-full ${risk.color} px-2 py-1 text-sm font-medium`}>
                {risk.level} Risk
              </span>
            </div>
            <div className="text-sm text-slate-600">Plagiarism Risk</div>
          </div>
        </div>
        
        <div className="mb-6 rounded-md bg-pastel-sky/10 p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 text-pastel-lavender">
              <AlertCircle size={24} />
            </div>
            <div>
              <h3 className="mb-1 font-medium">AI Analysis Summary</h3>
              <p className="text-sm text-slate-600">
                This essay shows a moderate level of similarity with published sources. The highlighted sections contain close paraphrasing and some direct quotations that require proper citation. The content demonstrates good understanding of the topic, but attribution needs improvement.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-pastel-sky/20 px-2 py-1 text-xs font-medium text-slate-700">
                  Needs Citations
                </span>
                <span className="rounded-full bg-pastel-peach/20 px-2 py-1 text-xs font-medium text-slate-700">
                  Moderate Paraphrasing
                </span>
                <span className="rounded-full bg-pastel-mint/20 px-2 py-1 text-xs font-medium text-slate-700">
                  Good Topic Understanding
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="mb-3 text-base font-semibold">Matched Sources</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 text-left text-sm">
                  <th className="pb-3 font-medium text-slate-600">Source</th>
                  <th className="pb-3 font-medium text-slate-600">Similarity</th>
                  <th className="pb-3 font-medium text-slate-600">Matched Words</th>
                  <th className="pb-3 font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {report.sources.map((source) => (
                  <tr key={source.id}>
                    <td className="py-3">
                      <div>
                        <p className="font-medium">{source.title}</p>
                        <p className="text-sm text-slate-500 line-clamp-1">{source.url}</p>
                      </div>
                    </td>
                    <td className="py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getSimilarityColor(source.similarity)}`}>
                        {source.similarity}%
                      </span>
                    </td>
                    <td className="py-3">{source.matchedWords} words</td>
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <button className="rounded-full p-1 text-pastel-lilac hover:bg-pastel-sky/20">
                          <Search size={16} />
                        </button>
                        <button className="rounded-full p-1 text-pastel-lilac hover:bg-pastel-sky/20">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 className="mb-3 text-base font-semibold">Highlighted Text Matches</h3>
          <div className="space-y-4">
            {report.segments.map((segment) => {
              const source = report.sources.find(s => s.id === segment.sourceId);
              const similarityColor = getSimilarityColor(segment.similarity);
              
              return (
                <div key={segment.id} className="rounded-md border border-slate-200 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-pastel-lavender" />
                      <span className="text-sm font-medium">Segment {segment.id}</span>
                    </div>
                    <span className={`rounded-full px-2 py-1 text-xs font-medium ${similarityColor}`}>
                      {segment.similarity}% Match
                    </span>
                  </div>
                  
                  <p className="mb-2 rounded-md bg-slate-50 p-3 text-sm">
                    {segment.text}
                  </p>
                  
                  {source && (
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="font-medium">Matched with: </span>
                        <a href={source.url} className="text-pastel-lilac hover:underline" target="_blank" rel="noopener noreferrer">
                          {source.title}
                        </a>
                      </div>
                      <button className="rounded-full bg-pastel-sky/20 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-pastel-sky/30">
                        View Side by Side
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="card">
        <h2 className="mb-4 text-lg font-semibold">Teacher Actions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Plagiarism Assessment
            </label>
            <select className="input">
              <option>Select assessment</option>
              <option>No plagiarism concerns</option>
              <option>Minor issues - needs citation</option>
              <option>Moderate concerns - requires revision</option>
              <option>Significant plagiarism - academic integrity violation</option>
            </select>
          </div>
          
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Grade Adjustment
            </label>
            <div className="flex rounded-md">
              <select className="rounded-l-md border border-r-0 border-slate-200 bg-white px-3 py-2">
                <option>No adjustment</option>
                <option>Reduce by 10%</option>
                <option>Reduce by 25%</option>
                <option>Reduce by 50%</option>
                <option>Zero (0)</option>
              </select>
              <button className="rounded-r-md border border-pastel-lilac bg-pastel-lilac px-3 text-white">
                Apply
              </button>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Feedback to Student
            </label>
            <textarea
              className="input min-h-[120px]"
              placeholder="Provide feedback about the plagiarism concerns and how to improve academic integrity..."
            ></textarea>
          </div>
        </div>
        
        <div className="mt-6 flex items-center gap-4">
          <button className="btn btn-primary">
            Submit Assessment
          </button>
          <button className="btn btn-outline">
            Request Student Revision
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlagiarismReport;
 