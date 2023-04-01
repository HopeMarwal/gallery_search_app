import { useState } from 'react';

export default function SearchImage({ setQuery }) {

  const [inputValue, setInputValue] = useState()

  const handleKeyPress = (key) => {
    if(key === 'Enter') {
      setQuery(inputValue)
    }
  }
  return (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(e) => handleKeyPress(e.key)}
    />

  )
}
