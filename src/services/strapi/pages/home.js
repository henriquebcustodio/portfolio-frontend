import { strapiApi, getDataAttr } from "../strapi";

export const getHomePage = async () => {
  const response = await strapiApi.get('/home', {
    params: {
      populate: [
        "hero",
        "hero.paragraphs",
        "technologies",
        "technologies.icon"
      ]
    }
  });

  const technologies = getDataAttr(response.data).technologies.map(technology => {
    return { ...technology, icon: getDataAttr(technology.icon) };
  });

  const hero = getDataAttr(response.data).hero;

  return {
    technologies,
    hero
  };
};