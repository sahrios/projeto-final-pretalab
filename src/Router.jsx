import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Inicio } from './pages/Inicio'
import { Contato} from './pages/Contato'
import { Sobre } from './pages/Sobre'

import { Menu } from './components/Menu'
import { Footer } from './components/Footer'
import { Portfolio } from './pages/Portfolio'

export function Router() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}