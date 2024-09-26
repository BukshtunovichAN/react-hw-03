import '../ImageGalleryItem/ImageGalleryItem.css';

export default function ImageGalleryItem({ image, onImageClick }) {
  if (!image) return null; // Защита от undefined значений

  const { webformatURL, tags, largeImageURL } = image;

  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => onImageClick(largeImageURL, tags)}
      />
    </li>
  );
}
