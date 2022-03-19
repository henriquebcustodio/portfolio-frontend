import { Fragment, useState, useEffect } from "react";
import { getHomePage } from "../../services/strapi/pages/home";
import Hero from "./hero";
import Technologies from "./technologies";

const Home = () => {
  const [pageData, setPageData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHomePage();
        setPageData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      {pageData &&
        <Fragment>
          <Hero
            heading={pageData.hero.heading}
            paragraphs={pageData.hero.paragraphs}
          />
          <Technologies
            technologies={pageData.technologies} />
        </Fragment>
      }
    </Fragment>
  );
};
export default Home;