import Skeleton from '@mui/material/Skeleton';
// import Stack from '@mui/material/Stack';
import "./HotelListItemSkeleton.scss";
const HotelListItemSkeleton = () => {
  return (
    <>
    <div className='test'>
      <Skeleton variant="rounded" width={300} height={200} />
      <div className="others">
        <Skeleton variant="text" width={70} sx={{ fontSize: '3rem' }} />
      <Skeleton variant="text" width={60} sx={{ fontSize: '1.5rem' }} />
      <Skeleton variant="text" width={300} sx={{ fontSize: '2rem' }} />
      <Skeleton variant="text" width={80} sx={{ fontSize: '2rem' }} />
      </div>
    </div>
    <div className='test'>
      <Skeleton variant="rounded" width={300} height={200} />
      <div className="others">
        <Skeleton variant="text" width={70} sx={{ fontSize: '3rem' }} />
      <Skeleton variant="text" width={60} sx={{ fontSize: '1.5rem' }} />
      <Skeleton variant="text" width={300} sx={{ fontSize: '2rem' }} />
      <Skeleton variant="text" width={80} sx={{ fontSize: '2rem' }} />
      </div>
    </div>
    <div className='test'>
      <Skeleton variant="rounded" width={300} height={200} />
      <div className="others">
        <Skeleton variant="text" width={70} sx={{ fontSize: '3rem' }} />
      <Skeleton variant="text" width={60} sx={{ fontSize: '1.5rem' }} />
      <Skeleton variant="text" width={300} sx={{ fontSize: '2rem' }} />
      <Skeleton variant="text" width={80} sx={{ fontSize: '2rem' }} />
      </div>
    </div>
    <div className='test'>
      <Skeleton variant="rounded" width={300} height={200} />
      <div className="others">
        <Skeleton variant="text" width={70} sx={{ fontSize: '3rem' }} />
      <Skeleton variant="text" width={60} sx={{ fontSize: '1.5rem' }} />
      <Skeleton variant="text" width={300} sx={{ fontSize: '2rem' }} />
      <Skeleton variant="text" width={80} sx={{ fontSize: '2rem' }} />
      </div>
    </div>
    
    </>
  );
}

export default HotelListItemSkeleton;