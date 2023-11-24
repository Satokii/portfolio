import { Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Main from './components/main'
import AboutMe from './components/about-me'
import Projects from './components/projects'
import Footer from './components/footer'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        >
        </Route>
        <Route
          path='/about-me'
          element={<AboutMe />}
        >
        </Route>
        <Route
          path='/projects'
          element={<Projects />}
        >
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
