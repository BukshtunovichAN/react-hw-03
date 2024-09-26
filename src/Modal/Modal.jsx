import React, { Component } from "react";
import '../Modal/Modal.css';

class Modal extends Component {
  componentDidMount() {
    console.log('componentDidMount');
    
    // Закрытие по нажатию клавиши ESC
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    
    // Удаление обработчика при размонтировании компонента
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = (event) => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;

    return (
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
