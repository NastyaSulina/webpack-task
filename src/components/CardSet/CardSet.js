import React from 'react';
import styles from './CardSet.module.css';
import { CARD_DATA as cards } from './data';
import { Card } from '../Card/Card';

export const CardSet = () => {
    return (
        <div className={styles.cardSetContainer}>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    titleText={card.titleText}
                    descriptionText={card.descriptionText}
                    imageUrl={card.imageUrl}
                />
            ))}
        </div>
    );
};
