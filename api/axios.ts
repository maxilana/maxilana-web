import Axios from 'axios';

if (!process.env.NEXT_PUBLIC_API_BASEURL) {
  throw Error('Environment variable NEXT_PUBLIC_API_BASEURL is missing.');
}
const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
});

axios.interceptors.response.use(
  (response) => Promise.resolve(response.data),
  (error) => Promise.reject(error),
);

export default axios;
