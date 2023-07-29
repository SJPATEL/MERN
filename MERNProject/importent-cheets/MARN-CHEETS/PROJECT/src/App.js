import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import NoteState from './Context/notes/NeteState';
import Alert from './Component/Alert';
import Login from './Component/Login';
import SingUp from './Component/SingUp';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message={"This is React App"}/>
          <div className="container">

            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route exact path="/About.js" element={<About />} />
            </Routes>
            <Routes>
              <Route exact path="/Login.js" element={<Login />} />
            </Routes>
            <Routes>
              <Route exact path="/SingUp.js" element={<SingUp />} />
            </Routes>

          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
