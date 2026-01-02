import './App.css'
import FocusOnInput from './Components/FocusOnInput';
import  ParentComponent  from './Components/Parent';
import ShadowComponent from './Components/ShadowComponent';

function App() {

  return (
    <>
      <ParentComponent />   
      <ShadowComponent />
      <FocusOnInput />
    </>
  )
}

export default App
