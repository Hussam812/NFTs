import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import {
  About,
  Faq,
  Footer,
  Home,
  Navigation,
  RoadMap,
  ShowCase,
  Team,
} from "./components";
function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <About />
        <RoadMap />
        <ShowCase />
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
