import React, { Component } from 'react';

import CardItem from '../card-item/CardItem';
import styles from './styles.scss';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openedCard: null,
    };

    this.cards = [
      '?', '0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100',
    ];

    this.toggleCard = this.toggleCard.bind(this);
    this.renderCards = this.renderCards.bind(this);
  }

  toggleCard(card) {
    this.setState({ openedCard: card });
  }

  renderCards() {
    if (this.state.openedCard) {
      return (
        <div className={styles.card}>
          <CardItem
            toggleCard={this.toggleCard}
            value={this.state.openedCard}
            openedCard={this.state.openedCard}
          />
          <div className={styles.quotes}>
            <p className={styles.firstText}>If there is no struggle,</p>
            <p>there is no progress.</p>
          </div>
        </div>
      );
    }
    return this.cards.map(card =>
      <CardItem
        key={card}
        toggleCard={this.toggleCard}
        value={card}
        openedCard={this.state.openedCard}
      />,
    );
  }

  render() {
    const animationStyles = this.state.openedCard ?
      styles.opened : styles.closed;

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={animationStyles}>
            {this.renderCards()}
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
