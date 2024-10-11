import './Button.css'


interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button type="button" className="Button" onClick={onClick}> Показать еще</button>
    )
}

export default Button;
