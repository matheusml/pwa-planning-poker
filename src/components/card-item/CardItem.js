/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

const onClick = (value, openedCard, toggleCard) => {
  if (openedCard) {
    return toggleCard(null);
  }
  return toggleCard(value);
};

const getContainerStyles = (openedCard) => {
  if (openedCard) {
    return cx(styles.container, styles.opened);
  }
  return styles.container;
};

const CardItem = ({ value, openedCard, toggleCard }) => (
  <div
    onClick={() => onClick(value, openedCard, toggleCard)}
    className={getContainerStyles(openedCard)}
  >
    <span>{value}</span>
  </div>
);

CardItem.defaultProps = {
  openedCard: null,
};

CardItem.propTypes = {
  value: React.PropTypes.string.isRequired,
  openedCard: React.PropTypes.string,
  toggleCard: React.PropTypes.func.isRequired,
};

export default CardItem;
