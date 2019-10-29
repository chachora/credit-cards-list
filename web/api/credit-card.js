const API_URL = 'http://localhost:3001/credit-cards';

const addCreditCard = async creditCard => {
  const result = await fetch(API_URL, {
    method: 'post',
    body: JSON.stringify(creditCard),
  });
  return result;
};

const getCreditCards = async () => {
  const response = await fetch(API_URL, {
    method: 'get',
  });
  return response.json();
};

export default {
  addCreditCard,
  getCreditCards,
};
