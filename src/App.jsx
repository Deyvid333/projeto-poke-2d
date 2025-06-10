import {Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Menu from './Menu'
import PokeFlex from './PokeFlex.jsx'
import PokeGrid from './PokeGrid.jsx'


const App = () => {

  return (

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route index element={<menu/>} />
      <Route path="pokeflex" element={<PokeFlex}
       <Route path="pokeflex" element={<PokeGrid}

    </Routes>
  )
}

export default App