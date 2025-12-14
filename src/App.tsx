import { HashRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Works from "./pages/Works"


export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </HashRouter>
  )
}
