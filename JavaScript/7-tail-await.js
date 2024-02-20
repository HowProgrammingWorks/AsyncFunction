'use strict';

const API_EXCHANGE = {
  host: 'openexchangerates.org',
  path: '/api/latest.json?app_id=',
  key: '1f43ea96b1e343fe94333dd2b97a109d',
};

const getRate = async (currency) => {
  const { host, path, key } = API_EXCHANGE;
  const url = `https://${host}/${path}${key}`;
  const res = await fetch(url);
  const data = await res.json();
  const rate = data.rates[currency];
  return rate;
};

const exchange = async (value, rate) => {
  if (rate < 0) throw new Error('Rate should be positive');
  return value * rate;
};

const convert = async (value, currency) => {
  const rate = await getRate(currency);
  const result = await exchange(value, rate);
  return result;
};

(async () => {
  const res = await convert(150, 'UAH');
  console.log(res);
})();
