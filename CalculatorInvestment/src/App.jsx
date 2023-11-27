import Header from "./Components/Header"
import Results from "./Components/Results"
import UserInput from "./Components/UserInput"
import { useState } from "react";
function App() {
  const [inputValues, setInputValues] = useState({ initialInvestment: '', annualInvestment: '', expectedReturn: '', duration: '' });

  return (
    <>
      <Header />
      <UserInput setInputValues={setInputValues} inputValues={inputValues} />
      <Results inputValues={inputValues} />
    </>

  )
}

export default App
