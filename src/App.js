import './App.css';
import Journey from './components/journey';
import Main from './components/main';
import Navbar from './components/navbar';
import Portofolio from './components/portofolio';
import Skills from './components/skills';
import Wcid from './components/wcid';

function App() {
  return (
      <div className="canvas h-auto bg-primary md:px-[100px] px-7">
        <particleBg>
        <div>
          <Navbar />
        </div>
        <div>
          <Main />
        </div>
        <div>
          <Wcid />
        </div>
        </particleBg>
        <div>
          <Journey />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Portofolio />
        </div>
      </div>
  );
}

export default App;
