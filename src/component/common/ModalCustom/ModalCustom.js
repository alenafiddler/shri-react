import {useState} from "react";
import Modal from 'react-modal';
import './ModalCustom.scss'
import Input from "../Input/Input";
function ModalCustom(props) {
  let stateDefault= {
    name: 'hash',
    value:  '',
    type: 'text',
    label: 'Enter the commit hash which you want to build.',
    placeholder: 'Commit hash',
    errorMessage: 'Введите корретную ветку',
    valid: false,
    touched: false,
    required: false,
    validation: {
      required: false,
      command: true
    }
  }
  const [state, setState] = useState(stateDefault);
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: 485,
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgb(255,255,255)',
    },
  };
  function onChangeHandler(event) {
    console.log('state', state)
    const control= {...state}
    control.value = event.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)
    setState(control)
  }
  function onClear() {
    const control = {...state}
    control.value = ''
    control.touched = true
    control.valid = validateControl(control.value, control.validation)
    setState(control)
  }
  function validateControl(value, validation) {
    if (!validation) {
      return true
    }
    let isValid = true
    isValid = value.length > 0 && isValid
    return isValid
  }
  function saveModal() {
    const control = {...state}
    if (state.valid){
      setTimeout(()=> {
        props.closeModal()
      },1000)
    } else {
      control.valid = validateControl(control.value, control.validation)
    }
  }
  return(
    <Modal
      isOpen={!!props.visible}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3>New build</h3>
      <Input
        key={state.name}
        type={state.type}
        value={state.value}
        label={state.label}
        valid={state.valid}
        touched={state.touched}
        required = {state.required}
        errorMessage = {state.errorMessage}
        shouldValidate={state.validation}
        onChange={event=> onChangeHandler(event)}
        onClear={onClear}
      />
      <div className="b-btn">
        <button onClick={saveModal} className="btn btn-primary">Run build</button>
        <button onClick={props.closeModal} className="btn btn-secondly">Cancel</button>
      </div>
    </Modal>
  )
}
export default ModalCustom
