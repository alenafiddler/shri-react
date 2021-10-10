import Icon from "../../common/Icon";

export const BuildItem = ({props}) => {
  return(
    <div className="build-item">
      <div className="build-info">
        <div className={`build-icon status-${props.status}`}>
          <Icon name={`${props.status}`} />
        </div>
        <div className="build-name">
          <div className="build-name__title">
            <div className={`build-status status-${props.status}`}>#{props.number}</div>
            {props.name}
          </div>
          <div className="build-name__git">
            <div>
              <Icon name={'code-commit'} />
              {props.branch}
              <span className="git-hash">{props.hash}</span>
            </div>
            <div className="git-name">
              <Icon name={'user'} />
              {props.person}
            </div>
          </div>
        </div>
      </div>
      <div className="build-date">
        <div className="build-date__time">
          <Icon name={'calendar'} />
          {props.date}
        </div>
        <div>
          <Icon name={'clock'} />
          {props.time}
        </div>
      </div>
    </div>
  )
}
export default BuildItem
