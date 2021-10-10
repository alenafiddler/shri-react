import Styles from './Footer.module.scss'
export const Footer = () => {
    const menuFooter = [{
      title: 'Support',
      link: '#',
    },{
      title: 'Learning',
      link: '#',
    },{
      title: 'Русская версия',
      link: '#',
    }]
    return(
      <footer>
        <div className={Styles.FooterContainer}>
          <ul className={Styles.FooterMenu}>
            {menuFooter.map((item,index) =>
              <li key={`build-${index}`}>
              <a href={item.link}>{item.title}</a>
              </li>
            )}
          </ul>
          <div className={Styles.Copyright}>
            © 2020 Your Name
          </div>
        </div>
      </footer>
    )
}
export default Footer
