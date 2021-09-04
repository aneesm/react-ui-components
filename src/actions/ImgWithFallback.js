import React from 'react'

const ImgWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  ...delegated
  }) => {
  return (
    <picture>
    <source srcSet={src} type={type} />
    <img src={fallback} {...delegated} alt="" />
    </picture>
  );
};

export default ImgWithFallback;