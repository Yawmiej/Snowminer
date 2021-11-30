import React from 'react';

//Displays image based on screen resolution to improve performance
function Image({ src1x, src2x, alt = '', ...rest }) {
  return (
    <picture {...rest}>
      <source srcSet={`${src1x} 1x, ${src2x} 2x`} />
      <img
        srcSet={`${src1x} 1x, ${src2x} 2x`}
        src={src2x}
        alt={alt}
        {...rest}
      />
    </picture>
  );
}

export default Image;
