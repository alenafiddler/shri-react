import Icon from "../Icon";
import '../Input/Input.scss';
function handleInputChange(event) {
}
function isInValid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

function Input(props){
  const inputType = props.type || 'text'
  const labelText = props.label || ''
  const requared =  props.required || false
  const requaredInput =  requared ? 'required' : ''
  const requaredClass = requared ? 'form-row_requared' : ''
  const htmlFor=`${inputType}-${Math.random()}`
  return(
    <div className={`form-row ${requaredClass} ${isInValid(props) ? 'error' : ''}`}>
      <label htmlFor={htmlFor}>{labelText}</label>
      <input
        type={inputType}
        id={htmlFor}
        className="input-control"
        name={'repository'}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        requared={requaredInput}
      />
      {
        props.value.length > 0 &&
        <span className="input-clear" onClick={props.onClear}>
          <Icon name={'close'} />
        </span>
      }

      {
        isInValid(props)
          ? <span className="error-message">{props.errorMessage}</span>
          : null
      }
    </div>
  )
}
export default Input
