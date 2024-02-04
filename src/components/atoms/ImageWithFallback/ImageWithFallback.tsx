import React, { useState } from 'react';
import Image from 'next/image';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Box, Grid, Skeleton } from '@mui/material';

export interface ImageWithFallbackProps {
  src: string;
  alt: string;
  isLoading?: boolean;
}

//TODO: criar testes
const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  isLoading,
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [error, setError] = useState(false);

  const handleImageError = () => {
    if (src) {
      setImageSrc(imageSrc);
    } else {
      setError(true);
    }
  };

  // TODO: mover a estilizacao para o ImageWithFallback.scss
  return (
    <Box
      sx={{
        border: '1px solid black',
        position: 'relative',
        width: '100%',
        paddingTop: '75%',
        borderRadius: '1.5rem',
      }}
    >
      {isLoading && (
        <Skeleton
          variant="rectangular"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '1.25rem',
          }}
        />
      )}
      {error && (
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            position: 'absolute',
            top: '8px',
            left: '8px',
          }}
        >
          <ImageNotSupportedIcon fontSize="large" />
        </Grid>
      )}
      {!error && !isLoading && (
        <Image
          layout="fill"
          objectFit="cover"
          src={imageSrc || '/image-not-supported.png'}
          alt={alt}
          onError={handleImageError}
        />
      )}
    </Box>
  );
};

export default ImageWithFallback;
