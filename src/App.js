import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import MovieList from './Components/MovieList';
import SearchBar from './Components/SearchBar';
import movies from './Movies';




function App() {

  const [vod, setVod] = useState(movies)
  const [byname, setByname] = useState("")
  const [byrate, setByrate] = useState(0)



  return (
    <div className="App">
      <SearchBar setByname={setByname} setByrate={setByrate}/>
      <MovieList byname={byname} byrate={byrate}/>
      
    


    </div>
  );
}

export default App;
