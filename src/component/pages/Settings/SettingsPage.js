import './Settings.scss'
import {useState} from "react";
import { useHistory } from "react-router-dom";
import Input from "../../common/Input/Input";
import {useDispatch, useSelector} from 'react-redux'
import { actions } from '../../../store/settingsReducer'
import {store} from '../../../store.js'

export const SettingsPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settingsReducer.settings);
  const repositoryDefault = settings?.repository ?? null
  const commandDefault = settings?.command ?? null

  const branchDefault = settings?.branch ?? null

  const minutesDefault = settings?.minutes ?? 0

  let stateDefault = {
    formControls: {
      repository: {
        value: repositoryDefault ?? '',
        type: 'text',
        label: 'GitHub repository',
        errorMessage: 'Введите корретный репозиторий',
        valid: false,
        touched: false,
        placeholder: 'user-name/repo-name',
        required: true,
        validation: {
          required: true,
          repository: true
        }
      },
      command: {
        value: commandDefault ?? 'npm ci && npm run build',
        type: 'text',
        label: 'Build command',
        errorMessage: 'Введите корретную команду',
        placeholder: 'npm run build',
        valid: false,
        touched: false,
        required: true,
        validation: {
          required: true,
          command: true
        }
      },
      branch: {
        value: branchDefault ??  '',
        type: 'text',
        label: 'Main branch',
        placeholder: 'master',
        errorMessage: 'Введите корретную ветку',
        valid: false,
        touched: false,
        required: false,
        validation: {
          required: false,
          command: true
        }
      },
    },
    minutes: {
      type: 'text',
      label: 'Synchronize every',
      value: minutesDefault ?? 10,
      valid: false,
      touched: false,
      required: true,
      validation: {
        required: true,
        command: true
      }
    }
  }
  // TODO переделать на useReducer
  const [state, setState] = useState(stateDefault);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);

  function saveForm() {
    let controls = state.formControls
    let repository = controls.repository
    let command = controls.command
    let branch = controls.branch
    let minutes = state.minutes
    const values = {
      'controls': controls.value,
      'repository': repository.value,
      'command': command.value,
      'branch': branch.value ,
      'minutes': minutes.value
    }

    setLoaded(true)
    setTimeout(() => {
      dispatch(actions.saveSettings(values));
      setLoaded(false)
      const number = Math.floor(Math.random() * 10);
      if (number % 2) {
        setError(true)
      }
      else {
        setError(false)
        history.push('/')
      }
      setMessage(true)

    }, 3000)
  }
  function validateControl(value, validation) {
    if (!validation) {
      return true
    }
    let isValid = true
    if (validation.required) {
      isValid = value.length > 0 && isValid
    }
    return isValid
  }
  function onChangeHandler(event,name) {
    const formControls = {...state.formControls}
    const control = {...formControls[name]}
    control.value = event.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)
    formControls[name] = control
    setState({
      formControls
    })
  }
  function onChangeMinutes(event) {
    console.log(event.target.value)
    const formControls = {...state.formControls}
    const minutesControls = {...state.minutes}
    minutesControls.value = event.target.value
    setState({
      formControls : formControls,
      minutes: minutesControls
    })
  }

  function onClear() {
    dispatch(actions.saveSettings(null));
  }
  function renderInput(){
      return Object.keys(state.formControls).map((name, index)=>{
        const control = state.formControls[name]
        return (
          <Input
            key={name+index}
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            label={control.label}
            required = {control.required}
            errorMessage = {control.errorMessage}
            shouldValidate={!!control.validation}
            onChange={event=> onChangeHandler(event, name)}
            onClear={event=> onClear(event, name)}
          />
        )
      })

  }

  return(
    <div className="b-setting">
      <div className="setting-title">
        <h4> Settings </h4>
        <div className="title_mini">
          Configure repository connection and synchronization settings.
        </div>
      </div>
      <div className={`form-setting ${loaded ? `loading` : ''}`}>
        {renderInput()}
        <div className="form-row form-row_line">
          {
            message &&
              <div className={`message-form ${error ? 'error' : ''}`}>
                {error
                  ? 'Не удалось склонировать репозиторий'
                  : 'Данные спешно сохранились'
                }
              </div>
          }

          <label>Synchronize every</label>
          <input type="text" name={'minutes'}
                 className="input-control input-control_mini"
                 onChange={event=> onChangeMinutes(event)} />
          <span>minutes</span>
        </div>
        <div className="form-row form-row_line form-row_line_btn">
          <button
            className={`btn btn-primary ${loaded ? `disabled` : ''}`}
            onClick={saveForm}>Save</button>
          <button
            className={`btn btn-default ${loaded ? `disabled`: ''}`}
            onClick={() => history.push('/')}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
export default SettingsPage
