import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ListEmployee } from './components/ListEmployee'

function App() {
  return (
    <>

    <BrowserRouter>

      <Header></Header>

      <Routes>
        <Route path="/" element = {<ListEmployee/>}></Route>
        <Route path="/employees" element = {<ListEmployee/>}></Route>
      </Routes>

      <Footer></Footer>
    </BrowserRouter>

    </>
  )
}

export default App
