import React from "react";

const ResponsiveImage = ({
  alt,
  mobileSrc,
  desktopSrc,
  fallbackSrc,
  className = "",
  type = "image/webp",
  loading="lazy"
}) => {
  return (
    <picture>
      <source
        srcSet={desktopSrc}
        media="(min-width: 768px)"
        type={type}
      />
      <source
        srcSet={mobileSrc}
        media="(max-width: 767px)"
        type={type}
      />
      <img
        src={fallbackSrc ?? desktopSrc}
        alt={alt}
        className={`absolute w-full h-full object-cover ${className}`}
        loading={loading}
      />
    </picture>
  );
};

export default ResponsiveImage;
