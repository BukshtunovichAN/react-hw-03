import './ImageGalleryItem.css';


interface Image {
  largeImageURL: string;
  tags: string;
  webformatURL: string
}

// Описываем интерфейс для пропсов компонента
interface ImageGalleryProps {
  image: Image;
  onImageClick: (largeImageURL: string, tags: string) => void;
}


const ImageGallery: React.FC<ImageGalleryProps> = ({ image, onImageClick }) => {
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

export default ImageGallery

// export default function ImageGalleryItem({ image, onImageClick }) {
//   if (!image) return null; // Защита от undefined значений

//   const { webformatURL, tags, largeImageURL } = image;


//   return (
//     <li className="ImageGalleryItem">
//       <img
//         src={webformatURL}
//         alt={tags}
//         className="ImageGalleryItem-image"
//         onClick={() => onImageClick(largeImageURL, tags)}
//       />
//     </li>
//   );
// }
