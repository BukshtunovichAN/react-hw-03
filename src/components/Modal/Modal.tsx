import  { useEffect } from "react";
import './Modal.css';

interface ModalProps {
  largeImageURL: string;
  tags: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ largeImageURL, tags, onClose }) =>{
   // Обработчик для клавиши Escape
  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };
 // Обработчик клика на overlay
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    console.log('componentDidMount');
    window.addEventListener('keydown', handleEsc);

    return () => {
       console.log('componentWillUnmount');
    
    // Удаление обработчика при размонтировании компонента
     window.removeEventListener('keydown', handleEsc);
    }
  },[])


  return (
      <div className="Overlay" onClick={handleOverlayClick}>
        <div className="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
}

export default Modal;


// **Компонент написанный на классах без TS  и хуков**//



// class Modal extends Component {
 
//   componentDidMount() {
//     console.log('componentDidMount');
    
//     // Закрытие по нажатию клавиши ESC
//     window.addEventListener('keydown', this.handleEsc);
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount');
    
//     // Удаление обработчика при размонтировании компонента
//     window.removeEventListener('keydown', this.handleEsc);
//   }

//   handleEsc = (event) => {
//     if (event.key === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleOverlayClick = (event) => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { largeImageURL, tags } = this.props;

//     return (
//       <div className="Overlay" onClick={this.handleOverlayClick}>
//         <div className="Modal">
//           <img src={largeImageURL} alt={tags} />
//         </div>
//       </div>
//     );
//   }
// }

