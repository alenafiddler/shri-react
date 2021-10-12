import './Header.scss'
import Icon from "../common/Icon";
import ModalCustom from "../common/ModalCustom/ModalCustom";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

function Header() {
  const isSettingNo = useSelector(state => state.settingsReducer.settings)
  const [modalIsOpen, setIsOpen] = useState(false);
  const location = useLocation();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <header className="wrapper">
      {!isSettingNo ?
        <>
        <div className='title'>School CI server</div>
        {(location.pathname === '/')
          ? <a href='/settings' className="btn btn-default btn-icon btn-tight" >
              <Icon name={'cog'} />Settings
            </a>
          : ''
        }
        </>
        :
        <>
          {(location.pathname === '/')
            ?
            <>
              <h2>philip1967/my-awesome-repo</h2>
              <div className="b-btn">
                <button className="btn btn-default btn-icon btn-tight"
                        onClick={openModal}>
                  <Icon name={'play'} style={{ fontSize: `11px` }}/>
                  Run build
                </button>
                <a href='/settings' className="btn btn-default btn-icon btn-mini" style={{marginLeft: `8px`}}>
                  <Icon name={'cog'} />
                </a>
              </div>
              <ModalCustom visible={modalIsOpen} closeModal= {closeModal} />
            </>
            : <div className='title'>School CI server</div>
          }
        </>
      }

    </header>
  )
}
export default Header;
