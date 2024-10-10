import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
import './ImageGallery.css';

// Описываем интерфейс для каждого изображения
interface Image {
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

// Описываем интерфейс для пропсов компонента
interface ImageGalleryProps {
  images: Image[];
  onImageClick: (largeImageURL: string, tags: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <ul className="ImageGallery">
      {images.map((image, index) => (
        image ? (
          <ImageGalleryItem
            key={index}
            image={image}
            onImageClick={onImageClick}
          />
        ) : null // Добавляем проверку, чтобы избегать undefined значений
      ))}
    </ul>
  );
}

export default ImageGallery;


// export default function ImageGallery({ images, onImageClick }) {
//   return (
//     <ul className="ImageGallery">
//       {images.map((image, index) => (
//         image ? (
//           <ImageGalleryItem
//             key={index}
//             image={image}
//             onImageClick={onImageClick}
//           />
//         ) : null // Добавляем проверку, чтобы избегать undefined значений
//       ))}
//     </ul>
//   );
// }