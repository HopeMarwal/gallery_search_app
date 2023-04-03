import { Box, Typography } from '@mui/material'
import React from 'react'
//Components
import GalleryContainer from '../components/GalleryContainer'
import SearchImage from '../components/SearchImage'
//Context
import { useGallery } from '../context/GalleryContext'

export default function Home() {
  const { query, photos } = useGallery()

  const photosHeading = photos.length > 0 
                        ? <span>Photos of <span className='query'>{query}</span></span>
                        : <span>Sorry... There in no <span className='query'>{query}</span> photos</span>
  return (
    <Box mb='auto'>
       {/* Search */}
       <SearchImage />
        
        {/* Gallery res */}
        <Typography mb={3} display='block'> {photosHeading} </Typography>
        { photos.length > 0 && <GalleryContainer photos={photos} />}
    </Box>
  )
}
