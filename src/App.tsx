import  { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import GradeAssignments from './pages/GradeAssignments';
import FeedbackLibrary from './pages/FeedbackLibrary';
import Students from './pages/Students';
import Login from './pages/Login';
import InstitutionalSettings from './pages/InstitutionalSettings';
import StudentProfile from './pages/StudentProfile';
import PlagiarismReport from './pages/PlagiarismReport';
import TeacherTimeSaver from './pages/TeacherTimeSaver';
import MonthlyHighlights from './pages/MonthlyHighlights';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="grade" element={<GradeAssignments />} />
        <Route path="feedback" element={<FeedbackLibrary />} />
        <Route path="students" element={<Students />} />
        <Route path="student/:id" element={<StudentProfile />} />
        <Route path="plagiarism/:id" element={<PlagiarismReport />} />
        <Route path="time-saver" element={<TeacherTimeSaver />} />
        <Route path="monthly-highlights" element={<MonthlyHighlights />} />
        <Route path="settings" element={<InstitutionalSettings />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
 