import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Result } from "./Result";
import { Header } from "./components/Header";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from '@mui/material/styles';



const theme = createTheme();

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Step1/>} />
            <Route path="/step2" element={<Step2/>} />
            <Route path="/step3" element={<Step3/>} />
            <Route path="/result" element={<Result/>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
