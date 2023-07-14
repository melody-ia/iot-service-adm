export default function CheckBox(props) {
  return (
    <div className="check_type">
      <label htmlFor={props.for}>
        <input type="checkbox" id={props.id} name={props.name} checked={props.checked} onClick={props.onClick} />
        <span></span>
      </label>
    </div>
  );
}
