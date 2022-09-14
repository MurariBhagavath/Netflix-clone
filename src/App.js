import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargePoster />
      <Row title='Trending now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy' fetchUrl={requests.fetchTrending} />
      <Row title='Horror' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Documentaries' fetchUrl={requests.fetchTopRated} />
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />


    </div>
  );
}

export default App;
