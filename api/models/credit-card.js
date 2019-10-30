// Default credit cards
const creditCards = [
  {
    name: 'Alice',
    number: '1111222233334444',
    balance: 100,
    limit: 5000,
  },
];

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

const getAll = () => {
  return creditCards;
};

module.exports = Object.freeze({
  create,
  getAll,
});
