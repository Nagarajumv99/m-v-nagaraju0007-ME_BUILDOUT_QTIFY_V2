import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards';
import { useEffect, useState } from 'react';
import { fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchGenres } from './components/api/api';
import BasicTabs from './components/Tab/BasicTabs';

function App() {
  // Below useStates for topAlbums and newAlbums
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  // Below useStates for Tabs of Songs
  const [allSongs, setAllSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function getData() {
      // Below code for TopAlbums and NewAlbums
      const top = await fetchTopAlbums();
      const newly = await fetchNewAlbums();
      setTopAlbums(top);
      setNewAlbums(newly);

      // Below code Songs And Genres
    const songs = await fetchSongs();
    setAllSongs(songs);

    const genreData = await fetchGenres();
    setGenres(genreData.data); // note: API returns {data: [...]}

    }
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Cards title="Top Albums" albumData={topAlbums} />
      <Cards title="New Albums" albumData={newAlbums} />
      <BasicTabs allSongs={allSongs} genres={genres}/>
    </>
  );
}

export default App;