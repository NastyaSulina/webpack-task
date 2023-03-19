import React from 'react';
import styles from './Card.module.css';
import { Title } from '../Title/Title';
import { Description } from '../Description/Description';
import { Image } from '../Image/Image';

export const Card = ({ titleText, descriptionText, imageUrl }) => {
    return (
        <div className={styles.cardContainer}>
            <Title titleText={titleText} />
            <Description descriptionText={descriptionText} />
            <Image imageUrl={imageUrl} />
        </div>
    );
};
