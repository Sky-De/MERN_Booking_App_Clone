import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const PopularPlacesSkeleton = () => {
  return (
    <>
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={310} height={310} />
      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width={60} sx={{ fontSize: '0.5rem' }} />
      <Skeleton variant="text" width={100} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width={80} sx={{ fontSize: '1rem' }} />
    </Stack>
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={310} height={310} />
      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width={60} sx={{ fontSize: '0.5rem' }} />
      <Skeleton variant="text" width={100} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width={80} sx={{ fontSize: '1rem' }} />
    </Stack>
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={310} height={310} />
      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width={60} sx={{ fontSize: '0.5rem' }} />
      <Skeleton variant="text" width={100} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width={80} sx={{ fontSize: '1rem' }} />
    </Stack>
    
    
    </>
  );
}

export default PopularPlacesSkeleton;