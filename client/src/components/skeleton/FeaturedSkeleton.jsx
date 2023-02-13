import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const FeaturedSkeleton = () => {
  return (
    <>
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={320} height={240} />
      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
    </Stack>
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={320} height={240} />
      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
    </Stack>
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={320} height={240} />
      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
    </Stack>
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={320} height={240} />
      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
    </Stack>
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={320} height={240} />
      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
    </Stack>
    
    </>
  );
}

export default FeaturedSkeleton;