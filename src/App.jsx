import requests from './requests';
import './App.css';
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Nav/>
      <Row isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending in India" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated Movie" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
