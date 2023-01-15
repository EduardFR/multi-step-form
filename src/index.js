import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store";

const Global = createGlobalStyle`
:root {
--color-Background: #F2F2F2;
--color-Border: #D6D9E6;
--color-White: #FFFFFF;
--color-Denim: #022959;
--color-Purple: #483EFF;
--color-LightBlue: #ABBCFF;
--color-SkyBlue: #BEE2FD;
--color-Orange: #FFAF7E;
--color-Pink: #F9818E;
--color-Grey: #9699AA;
--color-LightGrey: #D6D9E6;
--color-VeryLightGrey: #F8F9FF;
--color-Red: #EE374A;
--color-HoverPurple: #928CFF;
--color-HoverButton: #164A8A;
}

h1 {
font-size: 32px;
font-weight: 700;
line-height: 37px;
color: var(--color-Denim);
}

h2 { 
font-size: 14px;
font-weight: 700;
line-height: 16px;
letter-spacing: 1px;
color: var(--color-White);
}

h3 {
font-size: 16px;
font-weight: 500;
line-height: 18px;
color: var(--color-Denim);
}

p {
font-size: 16px;
font-weight: 400;
line-height: 25px;  
color: var(--color-Grey);
}

body {
background-color: var(--color-Background); 
}

* {
margin: 0;
padding: 0;
font-family:  "Ubuntu";  
}
`;

const theme = {
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px) ",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </ThemeProvider>
);
