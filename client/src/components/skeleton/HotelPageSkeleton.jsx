import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import "./HotelPageSkeleton.scss";
const HotelPageSkeleton = () => {
  return (
    <>
    <Stack className="HotelPageSkeleton" spacing={1}>
      <div className="HotelPageSkeleton__intro">
        <div className="HotelPageSkeleton__intro--one">
          <Skeleton className='HotelPageSkeleton__title' />
          <Skeleton className='HotelPageSkeleton__address' variant="text"/>
          <Skeleton className='HotelPageSkeleton__info' variant="text"/>
          <Skeleton className='HotelPageSkeleton__fee' variant="text" />
        </div>
        <div className="HotelPageSkeleton__intro--two">
          <Skeleton className='HotelPageSkeleton__reserveBtn'/>
        </div>
      </div>
      <div className="HotelPageSkeleton__images">
          <Skeleton className='HotelPageSkeleton__img' variant="rectangular"/>
          <Skeleton className='HotelPageSkeleton__img' variant="rectangular"/>
          <Skeleton className='HotelPageSkeleton__img' variant="rectangular"/>
          <Skeleton className='HotelPageSkeleton__img' variant="rectangular"/>
          <Skeleton className='HotelPageSkeleton__img' variant="rectangular"/>
          <Skeleton className='HotelPageSkeleton__img' variant="rectangular"/>
      </div>
          <div className="HotelPageSkeleton__reserveInfo">
            <div className="HotelPageSkeleton__reserveInfo--one">
                <Skeleton className='HotelPageSkeleton__title'/>
                <Skeleton className='HotelPageSkeleton__info2' variant="text"/>
                <Skeleton className='HotelPageSkeleton__info2' variant="text"/>
                <Skeleton className='HotelPageSkeleton__info2' variant="text"/>
                <Skeleton className='HotelPageSkeleton__info2' variant="text"/>
            </div>
            <div className="HotelPageSkeleton__reserveInfo--two">
                <Skeleton className='HotelPageSkeleton__reserveBox' variant="rectangular"/>
            </div>
          </div>
    </Stack>
    
    </>
  );
}

export default HotelPageSkeleton;