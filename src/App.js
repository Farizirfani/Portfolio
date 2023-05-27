import './App.css';
import Journey from './components/journey';
import Main from './components/main';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Wcid from './components/wcid';

function App() {
  return (
      <div className="canvas h-auto bg-primary md:px-[100px]">
        <Navbar />
        <Main />
        <Wcid />
        <Journey />
        <Skills />
      </div>
  );
}

export default App;
