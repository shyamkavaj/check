import './App.css';
// import { Browserrouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute'
import Welcome from './pages/Welcome';
import Update from './pages/Update'; 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard"  element={<Welcome/>}/> */}
          <Route path="/update" element={<Update/>}/>
          {/* <Route element={<PrivateRoute />}>
            <Route path="/welcome" element={<Welcome />} />
          </Route> */}
          {/* <PrivateRoute path="/welcome" element={<Welcome/>}/> */}
          {/* <Route path="/welcome" element={} */}
          <Route path='/dashboard'
            element={<PrivateRoute>
              <Welcome />
            </PrivateRoute>
            } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
