export default function RadioBtn(props) {
  return(
    <div className="check_type radio">
      <label htmlFor={props.for}>
        <input type="radio" id={props.id} name={props.name} defaultChecked={props}/>
        <span>{props.text}</span>
      </label>
    </div>
  )
}