import { useState } from 'react';
import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchImage({ setQuery }) {

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
