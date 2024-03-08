import styles from './content-container.module.css';

type PropTypes = {
    children: React.ReactNode
}
export const ContentContainer = ({ children }: PropTypes) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}