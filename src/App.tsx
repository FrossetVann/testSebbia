import style from "./css/style.module.css";
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import ProjectPage from './pages/ProjectPage';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './components/Menu';
import Modal from "./components/Modal";


function App() {
  return (
  <>
          <BrowserRouter>
          {/* <Modal/> */}
          <Menu/>
          
                  <Routes>
                    {/* <Route
                    render={({ location }) =>
                    location.pathname !== "/LoginPage" && <Menu/>}/>  */}
                  <Route path="/LoginPage" element={<LoginPage/>}/>
                  <Route path="/" element={<MainPage/>}/>
                  <Route path="/ProjectPage" element={<ProjectPage/>}/>
                  </Routes>
              </BrowserRouter>
      </>
  );
}

export default App;
