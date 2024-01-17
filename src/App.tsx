import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar  from "./components/Navbar"
import Home from "./pages/Home"
import Gallery from "./pages/Gallery"
import Container from "./components/Container"

function App() {

  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App