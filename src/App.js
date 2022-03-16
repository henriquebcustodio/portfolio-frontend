import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import MainContent from "./components/main";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <MainContent />
      </BrowserRouter>

    </Fragment>

  );
}

export default App;
