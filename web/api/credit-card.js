const API_URL = 'http://localhost:3001/credit-cards';

const addCreditCard = async creditCard => {
  const response = await fetch(API_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(creditCard),
  });

  const data = await response.json();
  if (response.status >= 200 && response.status < 399) return data;

  // Handle errors
  if (data && data.errors) {
    const error = new Error();
    error.validations = {};
    data.errors.reduce(
      (result, item) => (result[item.path[0]] = item.message),
      error.validations
    );
    throw error;
  } else throw new Error('Cannot add card');
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
