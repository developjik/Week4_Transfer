import axios from 'axios';

// const proxy = 'https://cors-anywhere.herokuapp.com/';
// const BASE_URL = 'https://app.cors.bridged.cc/ko/https://storage-fe.fastraffic.io/homeworks/links';

const BASE_URL = 'https://week4-proxy.herokuapp.com/api';

const getAPI = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

export default getAPI;
