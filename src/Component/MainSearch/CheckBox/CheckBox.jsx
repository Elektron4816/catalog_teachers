import "./CheckBox.css";

function CheckBox(props) {
  const { option, name } = props;
  return <div className="classCheckbox">{displayOptions(option, name)}</div>;
}

function displayOptions(options, name) {
  return options.map((option, index) => (
    <div className="cont" key={index}>
      <input type="checkbox" id={option.name} name={option.name} className={name} />
      <span></span>
      <label htmlFor={option.name}>{option.title}</label>
    </div>
  ));
}

export default CheckBox;
