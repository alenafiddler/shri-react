import '../Start/StartPage.scss';
import Icon from "../../common/Icon";
export const StartPage = () => {
  return (
    <div className="b-setting_none">
      <Icon name={'logo'} className="b-setting__icon"/>
      <div className="b-setting__title">
        Configure repository connection and synchronization settings
      </div>
      <a className="btn btn-primary" href="/settings">Open settings</a>
    </div>
  )
}
export default StartPage;
