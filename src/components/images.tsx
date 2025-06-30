import React from 'react';

interface IImage {
  src: string;
  alt?: string | undefined | null;
  className?: string;
  width?: number;
  height?: number;
}

// const defaultProps = {
//   alt: 'chaitanya pattem',
//   className: '',
// };

const Image: React.FC<IImage> = ({ src, alt, className, width, height }) => (
  <img
    src={src}
    alt={alt || ''}
    id="cardHover"
    className={className}
    width={width}
    height={height}
  />
);

// Image.defaultProps = defaultProps;

export default Image;
