// Default credit cards
const creditCards = [
  {
    name: 'Alice',
    number: '1111222233334444',
    balance: 100,
    limit: 5000,
  },
];

/**
 * Create credit card
 * @param name
 * @param number
 * @param limit
 * @returns {{number: *, balance: number, name: *, limit: *}}
 */
const create = ({ name, number, limit }) => {
  const creditCard = {
    name,
    number,
    limit,
    balance: 0,
  };

  creditCards.push(creditCard);
  return creditCard;
};

/**
 * Get all credit cards
 * @returns {{number: string, balance: number, name: string, limit: number}[]}
 */
const getAll = () => {
  return creditCards;
};

module.exports = Object.freeze({
  create,
  getAll,
});
