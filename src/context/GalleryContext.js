import { useState, createContext, useContext, useEffect } from "react";
//API client
import { client } from '../utils/fetchData';

const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [photos, setPhotos] = useState([])
  const [query, setQuery] = useState('nature')
  const [similarPhotos, setSimilarPhotos] = useState(null)

  useEffect(() => {
    const fetchPhotos = async () => {
      client.photos.search({ query, per_page: 15 }).then(promise => {
        setPhotos(promise.photos)
    })}

    fetchPhotos()
  }, [query])

  const fetchSimilar = async (color, query) => {
    client.photos.search({ query, per_page: 10 , color: color}).then(promise => {
      setSimilarPhotos(promise.photos)
    })
  }

  return (
    <GalleryContext.Provider 
      value={{
        photos, 
        query, 
        setPhotos, 
        setQuery, 
        similarPhotos,
        setSimilarPhotos,
        fetchSimilar,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}

export const useGallery = () => useContext(GalleryContext)