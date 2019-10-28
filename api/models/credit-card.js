// Default credit cards
const creditCards = [
  {
    number: 999,
  },
];

const create = ({ number }) => {
  const creditCard = {
    number,
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
