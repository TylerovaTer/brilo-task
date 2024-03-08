import styles from './logo.module.css';

type PropTypes = {
    size: 'small' | 'large'
}

export const Logo = ({ size }: PropTypes) => {
    return (
        <div className={styles.logo} data-size={size}>
            <img src="logo-horizontal.svg" alt="Brilo logo" />
        </div>
    )
}