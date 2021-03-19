import axios from 'axios';

// prettier-ignore
const baseURL = 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local'

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    return axios.create({
      baseURL,
      // req.headers passes the cookie with the JWT
      headers: req.headers
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/'
    });
  }
};

export default buildClient;
