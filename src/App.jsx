import { Container, MainBody } from "./styles/Globals"
import { ThemeProvider } from "styled-components"
import { theme } from "./utils/Theme";

//import components
import Showcase from "./components/Showcase";


function App() {
 

  return (
    <>
      <ThemeProvider theme={theme}>
        <MainBody>
          <Container>
              <Showcase />
          </Container>
        </MainBody>
      </ThemeProvider>
    </>
  );
}

export default App
