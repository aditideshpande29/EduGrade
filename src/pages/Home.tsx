import  { Link } from 'react-router-dom';
import { ArrowRight, Book, MessageCircle, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-pastel-lavender to-pastel-lilac px-8 py-12 text-slate-700 md:px-12">
        <div className="relative z-10 max-w-2xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Welcome to EduGrade AI</h1>
          <p className="mb-6 text-lg opacity-90">
            Revolutionize your teaching experience with our AI-powered assistant. Grade assignments, provide feedback, and support your students more efficiently.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/grade" className="btn bg-white text-slate-700 hover:bg-slate-50">
              Start Grading
            </Link>
            <Link to="/dashboard" className="btn border border-white border-opacity-30 bg-transparent hover:bg-white/20">
              View Dashboard
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 -mb-12 -mr-12 h-64 w-64 rounded-full bg-white/10"></div>
        <div className="absolute right-16 top-16 h-24 w-24 rounded-full bg-white/10"></div>
      </div>

      <div className="mb-12 grid gap-6 md:grid-cols-3">
        <div className="card">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pastel-sky text-slate-700">
            <Book size={24} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Automated Grading</h3>
          <p className="mb-4 text-slate-600">
            Save time with AI-powered grading that evaluates assignments quickly and consistently.
          </p>
          <Link to="/grade" className="inline-flex items-center text-pastel-lilac hover:underline">
            Grade assignments <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="card">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pastel-peach text-slate-700">
            <MessageCircle size={24} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Personalized Feedback</h3>
          <p className="mb-4 text-slate-600">
            Generate detailed, constructive feedback that helps students improve their understanding.
          </p>
          <Link to="/feedback" className="inline-flex items-center text-pastel-lilac hover:underline">
            Manage feedback <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="card">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pastel-mint text-slate-700">
            <Users size={24} />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Student Analytics</h3>
          <p className="mb-4 text-slate-600">
            Track student progress over time and identify areas where they need additional support.
          </p>
          <Link to="/students" className="inline-flex items-center text-pastel-lilac hover:underline">
            View students <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>

      <div className="card mb-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">How It Works</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pastel-sky text-slate-700">1</div>
                <div>
                  <h3 className="font-medium">Upload Assignments</h3>
                  <p className="text-sm text-slate-600">Submit student work through our simple interface.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pastel-pink text-slate-700">2</div>
                <div>
                  <h3 className="font-medium">AI Analysis</h3>
                  <p className="text-sm text-slate-600">Our AI evaluates assignments based on your criteria.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pastel-peach text-slate-700">3</div>
                <div>
                  <h3 className="font-medium">Review & Finalize</h3>
                  <p className="text-sm text-slate-600">Check AI-generated grades and feedback before sending to students.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-pastel-mint text-slate-700">4</div>
                <div>
                  <h3 className="font-medium">Track Progress</h3>
                  <p className="text-sm text-slate-600">Monitor student improvement with detailed analytics.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxwYXN0ZWwlMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjB0ZWFjaGluZ3xlbnwwfHx8fDE3NDMyNTExMzJ8MA&ixlib=rb-4.0.3" 
              alt="Pastel toned mountains representing the learning journey" 
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
 