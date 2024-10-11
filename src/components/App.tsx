import { useState, useEffect} from "react"; 
import { ToastContainer } from 'react-toastify'; 
import api from "./api.jsx"; 
import './App.css'; 
import Searchbar from "./Searchbar/Searchbar"; 
import ImageGallery from "./ImageGallery/ImageGallery"; 
import Button from "./Button/Button"; 
import Modal from "./Modal/Modal";
import { CirclesWithBar } from 'react-loader-spinner'

const MyLoader = () => (
  <div className="loader-container">
    <CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  outerCircleColor="#4fa94d"
  innerCircleColor="#4fa94d"
  barColor="#4fa94d"
  ariaLabel="circles-with-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
  </div>
  
);

interface Image  {
  largeImageURL: string;
  tags: string;
   webformatURL: string;

}


const App: React.FC = () => { 
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');
  const [status, setStatus] = useState<'idle' | 'pending' | 'resolved' | 'rejected'>('idle');

  const searchImages = async (searchName:string, page:number) => {
    setIsLoading(true);
    setStatus('pending')

    try {
      const fetchedImages = await api.fetchingImages(searchName, page);
      setImages(prevImages => (page === 1 ? fetchedImages : [...prevImages, ...fetchedImages]));
      setStatus('resolved');
    } catch (error) {
      setError(error as Error);
      setStatus('rejected')
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (searchName:string) => {
    setSearchName(searchName)
    setPage(1)
    setImages([])
    setStatus('idle')
    searchImages(searchName, 1);
  };

  const loadMoreClick = () => {
    setPage(prevState => prevState + 1)
  };

  useEffect(() => {
  if (searchName) {
    searchImages(searchName, page);
  }
  }, [page, searchName]);
  
  const openModal = (largeImageURL:string, tags:string) => {
    setShowModal(true)
    setLargeImageURL(largeImageURL)
    setTags(tags)
  };

  const closeModal = () => {
    setShowModal(false)
    setLargeImageURL('')
    setTags('')
  };

  if (status === 'idle') {
      return <Searchbar onSubmit={handleFormSubmit} />;
    }

    if (status === 'pending') {
      return <><Searchbar onSubmit={handleFormSubmit} /><MyLoader /></>;
    }

    if (status === 'rejected') {
      return <p>Whoops, something went wrong: {error?.message}</p>;
    }

    if (status === 'resolved') {
      return (
        <div className="App">
          <Searchbar onSubmit={handleFormSubmit} />
          <ImageGallery images={images} onImageClick={openModal} />
          {images.length > 0 && <Button onClick={loadMoreClick} />}
          <ToastContainer autoClose={3000} />
          {showModal && (
            <Modal 
              largeImageURL={largeImageURL}
              tags={tags}
              onClose={closeModal} 
            />
          )}
        </div>
      );
    }
}
    
export default App;

// class App extends Component {
//   state = {
//     images: [],
//     isLoading: false,
//     error: null,
//     searchName: '',
//     page: 1,
//     showModal: false,
//     largeImageURL: '',
//     tags: '',
//     status: 'idle',
//   };

//   searchImages = async (searchName, page) => {
//     this.setState({ isLoading: true, status: 'pending' });

//     try {
//       const images = await api.fetchingImages(searchName, page);
//       this.setState(prevState => ({
//         images: page === 1 ? images : [...prevState.images, ...images],
//         status: 'resolved', 
//       }));
//     } catch (error) {
//       this.setState({ error, status: 'rejected' });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   handleFormSubmit = (searchName) => {
//     this.setState({ searchName, page: 1, images: [], status: 'idle' }, () => {
//       this.searchImages(searchName, 1);
//     });
//   };

//   loadMoreClick = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }), () => {
//       this.searchImages(this.state.searchName, this.state.page);
//     });
//   };

//   openModal = (largeImageURL, tags) => {
//     this.setState({ showModal: true, largeImageURL, tags });
//   };

//   closeModal = () => {
//     this.setState({ showModal: false, largeImageURL: '', tags: '' });
//   };



//   render() {
//     const { images, error, showModal, largeImageURL, tags, status } = this.state;

//     if (status === 'idle') {
//       return <Searchbar onSubmit={this.handleFormSubmit} />;
//     }

//     if (status === 'pending') {
//       return <><Searchbar onSubmit={this.handleFormSubmit} /><MyLoader /></>;
//     }

//     if (status === 'rejected') {
//       return <p>Whoops, something went wrong: {error.message}</p>;
//     }

//     if (status === 'resolved') {
//       return (
//         <div className="App">
//           <Searchbar onSubmit={this.handleFormSubmit} />
//           <ImageGallery images={images} onImageClick={this.openModal} />
//           {images.length > 0 && <Button onClick={this.loadMoreClick} />}
//           <ToastContainer autoClose={3000} />
//           {showModal && (
//             <Modal 
//               largeImageURL={largeImageURL}
//               tags={tags}
//               onClose={this.closeModal} 
//             />
//           )}
//         </div>
//       );
//     }
//   }
// }

