import { Link } from 'react-router-dom';
//MUI
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '2px',
  height: '200px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GalleryContainer({ photos }) {
  return (
  <Grid container spacing={1}>
    {photos.map((item, index) => (
      <Grid key={item.id} xs={ index % 3 === 0 ? 4 : 2}>
        <Item className='img-card'>
          <Link to={`/${item.id}`}>
            <img src={item.src.medium} alt={item.alt} />
          </Link>
        </Item>
      </Grid>
    ))}
  </Grid>
  )
}
