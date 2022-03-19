import axios from "axios";
import Qs from "qs";

export const strapiApi = axios.create({
  baseURL: process.env.REACT_APP_STRAPI_URL + '/api',
  headers: {
    Authorization: process.env.REACT_APP_STRAPI_AUTH
  }
})

strapiApi.interceptors.request.use(config => {
  config.paramsSerializer = params => {
    return Qs.stringify(params, {
      encodeValuesOnly: true
    })
  }
  return config;
})

export const getDataAttr = obj => {
  return { ...obj.data.attributes }
}

