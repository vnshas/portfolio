import { Container, FadeImg, MainBody } from "./styles/Globals"
import { ThemeProvider } from "styled-components"
import { theme } from "./utils/Theme";

//import components
import Showcase from "./components/Showcase";
import { MySkills } from "./components/MySkills";
import { MyProjects } from "./components/MyProjects";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import TopFadeImg from "./assets/top.png"
import LeftFadeImg from "./assets/left.png"


function App() {
 

  return (
    <>
      <ThemeProvider theme={theme}>
        <MainBody>
        <NavBar />  
          <Container>
              <Showcase />
              <MySkills />
              <MyProjects />
              <Footer />
          </Container>

          <FadeImg src={TopFadeImg} top="0"></FadeImg>
          <FadeImg src={LeftFadeImg} top="30vh"></FadeImg>
        </MainBody>
      </ThemeProvider>
    </>
  );
}

export default App
