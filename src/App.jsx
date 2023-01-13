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
            <Route path="step-two" element={<StepTwoPage />} />
            <Route path="step-three" element={<StepThreePage />} />
            <Route path="step-four" element={<StepFourPage />} />
          </Route>
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
