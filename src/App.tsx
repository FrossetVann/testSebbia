import style from "./css/style.module.css";
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ProjectPage from './pages/ProjectPage';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import StaffPage from "./pages/StaffPage";
import ProjectRolesPage from "./pages/ProjectRolesPage";



function App() {

  return (
  <>
          <BrowserRouter>

                  <Routes>
                  <Route path="/LoginPage" element={<LoginPage/>}/>
                  <Route path="/" element={<MainPage/>}/>
                  <Route path="/ProjectPage" element={<ProjectPage/>}/>
                  <Route path="/StaffPage" element={<StaffPage/>}/>
                  <Route path="/ProjectRolesPage" element={<ProjectRolesPage/>}/>
                  </Routes>
              </BrowserRouter>
      </>
  );
}

export default App;
