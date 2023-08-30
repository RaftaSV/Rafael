import React from 'react';
import { CircleImage } from './style';
interface ImageCircleProps {
  imageUrl?: string;
  width?: number;
  height?: number;
  marginLeft?: number;
  marginRight?: number;
}
const ImageCircle: React.FC<ImageCircleProps> = ({
    imageUrl,
    width = 0,
    height = 0,
    marginLeft = 0,
    marginRight = 0,
}) => {
    return (
        <CircleImage src={imageUrl} $width={width} $height={height} $marginLeft={marginLeft} $marginRight={marginRight} />
    );
};

export default ImageCircle;
