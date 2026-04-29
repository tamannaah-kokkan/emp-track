import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ListEmployee } from './components/ListEmployee'
import AddOrUpdateEmployeeForm from './components/AddOrUpdateEmployeeForm'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">

    <BrowserRouter>

      <Header></Header>

      <Routes>
        <Route path="/" element = {<ListEmployee/>}></Route>
        <Route path="/employees" element = {<ListEmployee/>}></Route>
        <Route path="/add-employee" element = {<AddOrUpdateEmployeeForm/>}></Route>
        <Route path="/update-employee/:id" element = {<AddOrUpdateEmployeeForm></AddOrUpdateEmployeeForm>}></Route>
        {/* <Route path="/delete-employee/:id" element = {<AddOrUpdateEmployeeForm></AddOrUpdateEmployeeForm>}></Route> */}
      </Routes>

      <Footer></Footer>
    </BrowserRouter>

    </div>
  )
}

export default App
