import axios from "axios";

const strapiApi = axios.create({
  baseURL: process.env.REACT_APP_STRAPI_URL + '/api',
  headers: {
    Authorization: process.env.REACT_APP_STRAPI_AUTH
  }
})

export const getTechnologies = async () => {
  const response = await strapiApi.get('/technologies', {
    params: {
      populate: "*"
    }
  })

  return response.data.data.map(technology => {
    const attributes = { ...technology.attributes }
    return { ...attributes, icon: { ...attributes.icon.data.attributes }, id: technology.id }
  });
}