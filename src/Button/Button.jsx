import '../Button/Button.css'

export default function Button({onClick}) {
  return (
    <button type="button" className="Button" onClick={onClick}> Показать еще</button>
    )
}