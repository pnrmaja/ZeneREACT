import { ZENELISTA } from './adat'
import './App.css'
import Zenek from './component/Zenek'

function App() {
  

  return (
    <>
      <header>
        <h1>Zenék</h1>
      </header>
      <article>
        <p>{/* ide kerül a zene */}</p>
        <Zenek lista={ZENELISTA}/>
      </article>
      <footer>
        <p>Ponauer Maja</p>
      </footer>
    </>
  )
}

export default App
