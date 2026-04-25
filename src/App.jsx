import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ListEmployee } from './components/ListEmployee'
import AddEmployeeForm from './components/AddEmployeeForm'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">

    <BrowserRouter>

      <Header></Header>

      <Routes>
        <Route path="/" element = {<ListEmployee/>}></Route>
        <Route path="/employees" element = {<ListEmployee/>}></Route>
        <Route path="/add-employee" element = {<AddEmployeeForm/>}></Route>

      </Routes>

      <Footer></Footer>
    </BrowserRouter>

    </div>
  )
}

export default App
