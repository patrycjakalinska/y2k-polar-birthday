import styles from './styles.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src='/static/img/wordart.png' className={styles.logo} />
      </div>
    </div>
  )
}

export default Header
