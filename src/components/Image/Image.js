import styles from './Image.module.css';

export const Image = ({ imageUrl }) => {
    return <img className={styles.image} src={require(`../../assets/${imageUrl}`)} alt="" />;
};
