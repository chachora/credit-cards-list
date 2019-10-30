const API_URL = 'http://localhost:3001/credit-cards';

const addCreditCard = async creditCard => {
  const response = await fetch(API_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(creditCard),
  });
  return response.json();
};

const getCreditCards = async () => {
  const response = await fetch(API_URL, {
    method: 'get',
  });
  return response.json();
};

export default Object.freeze({
  addCreditCard,
  getCreditCards,
});
