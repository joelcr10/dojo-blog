
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import User from './User';
import Login from './Login';

// npx json-server --watch data/db.json --port 8000
function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
              <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/dojo-blog' element={<Home />}/>
                <Route path='/create' element={<Create />}/>
                <Route path='/blog/:id' element={<BlogDetails/>}/>
                <Route path='/user' element={<User/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<Home/>}/>
              </Routes>
          </div>
        </div>
    </Router>
  );
}

export default App;
