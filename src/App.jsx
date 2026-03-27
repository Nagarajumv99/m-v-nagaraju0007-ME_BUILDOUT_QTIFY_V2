import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Cards from './components/Cards/Cards';
import { useEffect, useState } from 'react';
import { fetchTopAlbums, fetchNewAlbums } from './components/api/api';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    async function getData() {
      const top = await fetchTopAlbums();
      const newly = await fetchNewAlbums();
      setTopAlbums(top);
      setNewAlbums(newly);
    }
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Cards title="Top Albums" albumData={topAlbums} />
      <Cards title="New Albums" albumData={newAlbums} />
    </>
  );
}

export default App;