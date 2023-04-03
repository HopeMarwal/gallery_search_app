//React
import { useState } from 'react';
//MUI
import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
//Context
import { useGallery } from '../context/GalleryContext'

export default function SearchImage() {
  const { setQuery } = useGallery()
  const [inputValue, setInputValue] = useState('')

  const handleKeyPress = (key) => {
    if(key === 'Enter') {
      setQuery(inputValue)
    }
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginBottom: '50px',
        marginTop: '20px',
      }}
    >
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e.key)}
      />
      <SearchIcon 
        onClick={() => setQuery(inputValue)} 
        sx={{ 
          color: '#a5a5a5', 
          borderBottom: '1px solid #a5a5a5', 
          height: 'auto'
        }} 
      />
    </Box>
    

  )
}
