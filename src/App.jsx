import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DefaultLayout from "./Layout/DefaultLayout"
import Contacts from "./pages/Contacts"
import MoviePage from "./pages/MoviePage"
import Admin from "./components/Admin"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/movie/:id" element={<MoviePage />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
