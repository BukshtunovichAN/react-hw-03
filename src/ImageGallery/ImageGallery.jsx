import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
import './ImageGallery.css';

export default function ImageGallery({ images, onImageClick }) {
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
