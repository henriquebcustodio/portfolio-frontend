import { Content, Main } from "./style";
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "../home";

const MainContent = () => {
  return (
    <Main>
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Content>
    </Main>
  )
}
export default MainContent;