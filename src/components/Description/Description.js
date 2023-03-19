import styles from './Description.module.css';
import classnames from 'classnames';

export const Description = ({ descriptionText }) => {
    return (
        <div className={styles.container}>
            <div className={classnames(styles.description)}>{descriptionText}</div>
        </div>
    );
};
