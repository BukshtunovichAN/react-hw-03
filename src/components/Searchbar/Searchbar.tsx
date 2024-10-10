import { useState, ChangeEvent, FormEvent } from 'react';
import './Searchbar.css';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

interface SearchbarProps {
  onSubmit: (searchName: string) => void;
}


const Searchbar: React.FC<SearchbarProps> = ({onSubmit}) => { 

  const [searchName, setSearchName] = useState('');

  const handleNameChange = ( event: ChangeEvent<HTMLInputElement>)  => {
    setSearchName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = ( event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (searchName.trim() === '') {
      toast.error('Введите имя в поиске.');
      return;
    }
    
    onSubmit(searchName);
    setSearchName('');
  };

return (
    <header className="Searchbar">
    <form className="SearchForm" onSubmit={handleSubmit}>
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
      onChange={handleNameChange}
      value={searchName}  
    />
  </form>
</header>
  )
}

export default Searchbar



// export default class Searchbar extends Component {
//   state = {
//     searchName: ''
//   }

//   handleNameChange = event => {
     
//     this.setState({ searchName: event.currentTarget.value.toLowerCase() });
//   };

//     handleSubmit = event => {
//     event.preventDefault();

//     if (this.state.searchName.trim() === '') {
//       toast.error('Введите имя в поиске.');
//       return;
//     }
    
//     this.props.onSubmit(this.state.searchName);
//     this.setState({ searchName: '' });
//   };

//   render() {
//     return (
//     <header className="Searchbar">
//     <form className="SearchForm" onSubmit={this.handleSubmit}>
//     <button type="submit" className="SearchForm-button">
//       <ImSearch style={{ marginRight: 8 }}/>
//       <span className="SearchForm-button-label">Search</span>
//     </button>

//     <input
//       className="SearchForm-input"
//       type="text"
//       autoComplete="off"
//       autoFocus
//       placeholder="Search images and photos"
//       onChange={this.handleNameChange}
//       value={this.state.searchName}  
//     />
//   </form>
// </header>
//   )
//   }
// }
