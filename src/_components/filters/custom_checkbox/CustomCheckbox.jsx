import "./CustomCheckbox.css";

const CustomCheckbox = ({id, onClick, isChecked}) => {

  return (
  <div className="custom-checkbox">
    <input className="custom-checkbox-input" type="checkbox" id={"custom-checkbox-discovery" + id} onClick={() => onClick(id)} checked={isChecked ? "checked" : ''}/>
    <label className="custom-checkbox-label" htmlFor={"custom-checkbox-discovery" + id}>
      <label className="custom-checkbox-label-aux" htmlFor={"custom-checkbox-discovery" + id}/>
    </label>
  </div>
  );
};


export default CustomCheckbox;
