import { EnvEditor } from "pages";
import { Route, Routes } from "react-router-dom";

const EnvEditorPanel = () => {
  return (
    <Routes>
      <Route path={"/"} element={<EnvEditor />}></Route>;
    </Routes>
  );
};

export default EnvEditorPanel;
