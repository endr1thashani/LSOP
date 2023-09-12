import { Routes , Route , Navigate } from 'react-router-dom'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './pages/Dashboard'
import ApplicableWages from './components/DashboardComponents/dashboardPages/ApplicableWages'
import Probabilities from './components/DashboardComponents/dashboardPages/Probabilities'
import ProbabilitiesStaying from './components/DashboardComponents/dashboardPages/ProbabilitiesStaying'
import EmployersMPF from './components/DashboardComponents/dashboardPages/EmployersMPF'
import ErrorPage from './components/ErrorPage/ErrorPage';
import LongservicePayment from './components/DashboardComponents/dashboardPages/LongservicePayment';
import ProjectedLife from './components/DashboardComponents/dashboardPages/ProjectedLife';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute />} />
        <Route path='/dashboard/applicable-wages' element={<ApplicableWages/>} />
        <Route path='/dashboard/probability' element={<Probabilities/>} />
        <Route path='/dashboard/probability-staying' element={<ProbabilitiesStaying/>} />
        <Route path='/dashboard/employers-mpf' element={<EmployersMPF/>} />
        <Route path='/dashboard/longservice-payment' element={<LongservicePayment/>} />
        <Route path='/dashboard/projected-life' element={<ProjectedLife/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

function PrivateRoute() {
  const isAuthenticated = localStorage.getItem('token'); // Check if the user is authenticated

  if (!isAuthenticated) {
    // Redirect to /login if not authenticated
    return <Navigate to="/login" />;
  }

  // Render the Dashboard component if authenticated
  return <Dashboard />;
}

export default App;
