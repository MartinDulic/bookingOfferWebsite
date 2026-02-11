import React from "react";

const ResponsiveImage = ({
  alt,
  mobileSrc,
  desktopSrc,
  fallbackSrc,
  className = "",
  type = "image/avif",
  loading="lazy",
  priority = false
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
        // If priority is true, we set loading to "eager" and use fetchpriority
        loading={priority ? "eager" : loading}
        fetchPriority={priority ? "high" : "auto"}
        // This is crucial for Speed Index
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
};

export default ResponsiveImage;
