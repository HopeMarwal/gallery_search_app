//Style
import './App.scss';
//MUI
import { Box, Typography } from '@mui/material';
//Components
import Home from './pages/Home'
import ImageDetail from './pages/ImageDetail'
//Router
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Box className="App">
      {/* Heading */}
      <Box
        sx={{
          maxWidth: '1200px',
          margin: 'auto',
          padding: '10px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Typography variant='h3' pt={5} sx={{ color: '#fc5d5d'}}>
          <Link to='./'>Gallery</Link>
        </Typography>
        
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/:id' element={ <ImageDetail />} />
        </Routes>
        <footer>© Gallery 2023</footer>
      </Box>
    </Box>
  );
}

export default App;
