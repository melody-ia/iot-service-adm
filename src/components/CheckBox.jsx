export default function CheckBox(props) {
  return(
    <div className="check_type">
      <label htmlFor={props.for}>
        <input type="checkbox" id={props.id} />
        <span></span>
      </label>
    </div>
  )
}