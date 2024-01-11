
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { API_KEY} from "./constants/constants";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`} title='Netflix Originals'/>
      <RowPost url ={`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`} title='Action' isSmall />
    </div>
  );
}

export default App;
