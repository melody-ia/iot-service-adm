export default function RadioBtn(props) {
  return (
    <div className="check_type radio">
      <label htmlFor={props.for}>
        <input
          type="radio"
          id={props.id}
          name={props.name}
          data-type={props.dataType}
          data-value={props.dataValue}
          onClick={props.onClick}
          defaultChecked={props.checked}
        />
        <span>{props.text}</span>
      </label>
    </div>
  );
}
