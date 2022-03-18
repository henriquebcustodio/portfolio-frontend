import axios from "axios";

const strapiApi = axios.create({
  baseURL: process.env.REACT_APP_STRAPI_URL,
  headers: {
    Authorization: process.env.REACT_APP_STRAPI_AUTH
  }
})

export const getTechnologies = () => {
  return strapiApi.get('/technologies', {
    params: {
      populate: "*"
    }
  })
}