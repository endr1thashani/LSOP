import { Routes , Route } from 'react-router-dom'
import Login from './components/login/Login';
import Register from './components/Register/Register';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />

        <Route path='*' element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
