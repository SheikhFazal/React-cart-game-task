import './app.css';
import LogIn from "./section/login";
import { Routes, Route } from 'react-router-dom';
import Home from './section/home';
import PrivateRoute from './routes/private-route';
import PublicRoute from './routes/public-route';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PublicRoute>
          <LogIn />
        </PublicRoute>}
        />
        <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
