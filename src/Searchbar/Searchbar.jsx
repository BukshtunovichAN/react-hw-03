import { Component } from 'react';
import '../Searchbar/Searchbar.css';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    searchName: ''
  }

  handleNameChange = event => {
     
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };

    handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      toast.error('Введите имя в поиске.');
      return;
    }
    
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
    <header className="Searchbar">
    <form className="SearchForm" onSubmit={this.handleSubmit}>
    <button type="submit" className="SearchForm-button">
      <ImSearch style={{ marginRight: 8 }}/>
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleNameChange}
      value={this.state.searchName}  
    />
  </form>
</header>
  )
  }
}
