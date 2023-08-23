import {CircleImage} from './style';

interface ImageCircleProps {
    imageUrl: string;
    width: number;
    height: number;
}
const ImageCircle: React.FC<ImageCircleProps> = ({ imageUrl, width, height }) => {
    return (
        <CircleImage src={imageUrl} width={width} height={height} />
    );
};

export default ImageCircle;
