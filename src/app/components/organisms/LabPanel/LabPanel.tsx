import { Home } from "pages";
import { Route, Routes } from "react-router-dom";

const LabPanel = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>;
    </Routes>
  );
};

export default LabPanel;
