//React
import { useEffect, useState } from 'react';
//Router
import { useParams } from 'react-router-dom';
//Context
import { useGallery } from '../context/GalleryContext';
//MUI
import { Box, Stack, Button, Typography } from '@mui/material';
import GalleryContainer from '../components/GalleryContainer';
//API client
import { client } from '../utils/fetchData';

const sizes = ['original', 'large2x', 'large', 'medium', 'small', 'portrait', 'landscape', 'tiny']

export default function ImageDetail() {
  const { id } = useParams()
  const { photos, fetchSimilar, similarPhotos, setSimilarPhotos } = useGallery()
  const [photoItem, setPhotoItem] = useState(null)
  const [selectedSize, setSelectedSize] = useState('original')
  
  useEffect(() => {
    const fetchSinglePhoto = async (id) => {
      client.photos.show({ id }).then(photo => {
        fetchSimilar(photo.avg_color, photo.alt)
        setPhotoItem(photo)
      })
    }
    fetchSinglePhoto(id)

    return() => {
      setSimilarPhotos(null)
    }
    
  }, [id, photos])

  return (
    <Box mb='auto' className='image-detail'>
      {/* Sizes */}
       <Stack  direction="row" mt={5} spacing={1} mb={1} >
        {sizes.map((size) => (
          <Button 
            key={size}
            variant={selectedSize === size ? 'contained' : 'outlined'}
            color='error'
            value={size}
            size='small'
            onClick={(e) => setSelectedSize(e.target.value)}
          >
            {size}
          </Button>
        ))}
      </Stack>
      
      {/* Author */}
      <Typography mb={2} sx={{ textAlign: 'left', fontSize: '14px', color: '#5e5e5e' }}>
      {photoItem && <span>Photographer: <a href={photoItem.photographer_url} rel="noreferrer" target='_blank'>{photoItem.photographer}</a></span>}
      </Typography> 

      {/* Photo */}
      <Box className='image-box' mb={5}>
        {photoItem && <img src={photoItem?.src[selectedSize]} alt={photoItem.alt} />}
      </Box>
      
      {/* Similar Photos */}
      <Typography mb={2} sx={{ fontFamily: "'Great Vibes', cursive", fontSize: '2em'}}>Similar photo</Typography>
      {similarPhotos?.length > 0 && <GalleryContainer photos={similarPhotos} />} 
    </Box>
  )
}
