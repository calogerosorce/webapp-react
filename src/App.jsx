import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DefaultLayout from "./Layout/DefaultLayout"
import Contacts from "./pages/Contacts"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
