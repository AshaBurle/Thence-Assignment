import { Route, Routes } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SuccessPage from "../SuccessPage/SuccessPage";
import Main from "../Home/Main";

function AppRoter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route />
      </Routes>
    </>
  );
}

export default AppRoter;
