import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Cards from './components/Cards/Cards'
import { useEffect, useState } from 'react'
import { fetchAlbumsData } from './components/api/api'

function App() {
  const [albumData, setAlbumData] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await fetchAlbumsData();
      setAlbumData(data);
    }
    getData();
  }, []);

  return (
    <>
    <Navbar />
    <Hero/>
    <Cards albumData={albumData} />
      {/* <div>
        {albumData.map(album => (
          <p key={album.id}>{album.title}</p>
        ))}
      </div> */}

    </>
  )
}

export default App
