import { useEffect, useState } from "react";
import Hero from "../hero";
import { getTechnologies } from "../../services/strapi";

const Home = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    getTechnologies()
      .then(response => {
        setTechnologies(response.data.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <section>
      <Hero />
    </section>
  )
}
export default Home;