export default function RadioBtn(props) {
  // // console.log(props.id, props.checked);
  return (
    <div className="check_type radio">
      <label htmlFor={props.for}>
        <input
          type="radio"
          id={props.id}
          name={props.name}
          data-type={props.dataType}
          data-value={props.dataValue}
          onChange={props.onClick}
          checked={props.checked}
          disabled={props.disabled}
          // readOnly
        />
        <span>{props.text}</span>
      </label>
    </div>
  );
}
