//React
import { useEffect, useState } from 'react';
//Style
import './App.scss';
//API client
import { client } from './utils/fetchData';
//MUI
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import SearchImage from './components/SearchImage';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '2px',
  height: '200px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  const [photos, setPhotos] = useState([])
  const [query, setQuery] = useState('nature')

  useEffect(() => {
    const fetchPhotos = async () => {
      client.photos.search({ query, per_page: 10 }).then(promise => {
        setPhotos(promise.photos)
    })}

    fetchPhotos()
  }, [query])


  return (
    <Box className="App">
      {/* Heading */}
      <Box
        sx={{
          maxWidth: '1200px',
          margin: 'auto',
          padding: '10px',
          textAlign: 'center'
        }}
      >
        <Typography variant='h5'>
          Gallery
        </Typography>
      </Box>
      {/* Search */}
      <SearchImage setQuery={setQuery} query={query} />
      {/* Gallery res */}
      { photos.length > 0 && 
      <Grid 
        container
        spacing={1}
      >
        {
          photos.map((item, index) => (
            <Grid key={item.id} xs={ index % 3 == 0 ? 4 : 2}>
              <Item className='img-card'>
                <img src={item.src.medium} alt={item.alt} />
              </Item>
              
            </Grid>
            
          ))
        }
      </Grid>
      }
    </Box>
  );
}

export default App;
