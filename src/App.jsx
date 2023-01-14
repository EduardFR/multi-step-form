import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import StepFourPage from "./components/StepFour/StepFourPage";
import StepOnePage from "./components/StepOne/StepOnePage";
import StepThreePage from "./components/StepThree/StepThreePage";
import StepTwoPage from "./components/StepTwo/StepTwoPage";
import MainLayout from "./layouts/MainLayout";

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<StepOnePage />} />
            <Route path="Select-plan" element={<StepTwoPage />} />
            <Route path="Add-ons" element={<StepThreePage />} />
            <Route path="Summary" element={<StepFourPage />} />
          </Route>
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
