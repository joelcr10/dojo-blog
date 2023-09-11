
import Navbar from './Navbar';
import Home from './Home';
import Test from './Test';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Test />
      </div>
    </div>
  );
}

export default App;
