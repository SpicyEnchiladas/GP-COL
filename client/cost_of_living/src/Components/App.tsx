import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./login";
import HomePage from "./home";
import { initializeApp } from "firebase/app";
import { configu } from "../Firebase config/config";
import AuthRoute from "./AuthRoute";

initializeApp(configu.firebaseConfig);

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <HomePage/>
              </AuthRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    );
};

export default App;