import { useState } from 'react'
import '../resources/css/App.css'
import  Header from  './Header.jsx'
import  MainPage from  './MainPage.jsx'
import  Qmenu from './Qmenu.jsx'

function App() {
  const [section, setSection] = useState("main")

  const onChangeSection = (e) => {
    const value = e.currentTarget.attributes.value.value;
    setSection(value);
  }

  return (
    <div className="App">
        <Header />
        <MainPage />
        <Qmenu />
    </div>
  )
}

export default App
