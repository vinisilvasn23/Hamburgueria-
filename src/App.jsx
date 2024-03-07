
import { GlobalReset } from "./styles/reset";
import { GlobalStyles } from "./styles/globalStyles";
import HomePage from "./Pages/HomePage";


function App() {


  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <HomePage/>
    </>
  );
}

export default App;
