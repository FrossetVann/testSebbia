
import style from "./css/style.module.css";
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import ProjectPage from './pages/ProjectPage'
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
  <>
          <BrowserRouter>
      <Menu/>

                  <Routes>
                  <Route path="/LoginPage" element={<LoginPage/>}/>
                  <Route path="/MainPage" element={<MainPage/>}/>
                  <Route path="/ProjectPage" element={<ProjectPage/>}/>
                  </Routes>
              </BrowserRouter>
      </>
  );
}

export default App;
