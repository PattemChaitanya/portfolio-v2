import React from 'react';
import ProgressiveImage from 'react-progressive-image';

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
  // @ts-expect-error: react-progressive-image children type is not correct in types
  <ProgressiveImage src={src} placeholder="">
    {(currentSrc: string, loading: boolean) => (
      <img
        src={currentSrc}
        alt={alt || ''}
        id="cardHover"
        className={className}
        width={width}
        height={height}
        style={loading ? { filter: 'blur(0.5px)' } : {}}
      />
    )}
  </ProgressiveImage>
);

// Image.defaultProps = defaultProps;

export default Image;
