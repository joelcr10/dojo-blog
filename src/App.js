
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// npx json-server --watch data/db.json --port 8000
function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
              <Routes>
                <Route exact path='/' element={<Home />}/>
              </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
