import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import CityLeague from './pages/CityLeague'
import CanadianOpen from './pages/CanadianOpen'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="city-league" element={<CityLeague />} />
        <Route path="2026-canadian-open" element={<CanadianOpen />} />
      </Route>
    </Routes>
  )
}
