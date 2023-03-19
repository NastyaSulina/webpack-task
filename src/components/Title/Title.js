import styles from './Title.module.css';
import classnames from 'classnames';

export const Title = ({ titleText }) => {
    return <div className={classnames(styles.title)}>{titleText}</div>;
};
