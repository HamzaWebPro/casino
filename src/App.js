import "./index.css"
import Home from "./Pages/Home.jsx";
import { NavigationBar } from "./Components/Navbar";
import { BacktoTopButton } from "./Components/BacktoTopButton";





function App() {
  return (
    <>
     <title>Casino</title>
     <BacktoTopButton/>
       <NavigationBar/>      
       <Home/>
       
    </>
  );
}

export default App;
