import React from "react";

function ResponsiveImage({ fileDir, fileType, altText }) {
  return (
    <img
      srcSet={`${process.env.PUBLIC_URL}/assets/${fileDir}@2x.${
        fileType || "png"
      } 2x`}
      src={`${process.env.PUBLIC_URL}/assets/${fileDir}.${fileType || "png"}`}
      alt={altText}
    />
  );
}

export default ResponsiveImage;
