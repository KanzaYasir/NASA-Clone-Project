
// import 'aeternity-ui/dist/aeternity-ui.min.css'; 
import './Components/App.css';
import './index.css'; // or './tailwind.css'

import HomeSection from './Components/HomeSection';
import Exploration from './Components/Exploration';
import NavBar from './Components/NavBar';
import NewsAccordion from './Components/NewsAccordion';
import Podcasts from './Components/Podcasts';
import SpaceMissions from './Components/SpaceMissions';
import SpaceMissionTimeline from './Components/SpaceMissionTimeline';
import WeatherData from './Components/WeatherData';
import Footer from './Components/Footer';


function App() {
  return  (  
  
 <>
    <NavBar/>
    <HomeSection/>
    <NewsAccordion/>
    <Podcasts/>
    <WeatherData/>
    <SpaceMissions/>
    <SpaceMissionTimeline/>
    <Exploration/>
    <Footer/>
 </>
  );
}

export default App;
