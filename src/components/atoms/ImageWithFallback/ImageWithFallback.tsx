import React, { useState } from 'react';
import Image from 'next/image';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Box, Skeleton } from '@mui/material';

export interface ImageWithFallbackProps {
  src: string;
  alt: string;
  isLoading?: boolean;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  isLoading,
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [error, setError] = useState(false);
  console.log(isLoading);

  const handleImageError = () => {
    if (src) {
      setImageSrc(imageSrc);
    } else {
      setError(true);
    }
  };

  return (
    <Box
      sx={{
        border: '1px solid black',
        borderRadius: '1.25rem',
        position: 'relative',
        width: '100%',
        paddingTop: '75%',
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
        <Box
          sx={{
            position: 'absolute',
            top: '8px',
            left: '8px',
          }}
        >
          <ImageNotSupportedIcon fontSize="large" />
        </Box>
      )}
      {!error && !isLoading && (
        <Image
          layout="fill"
          objectFit="cover"
          src={imageSrc}
          alt={alt}
          onError={handleImageError}
        />
      )}
    </Box>
  );
};

export default ImageWithFallback;
