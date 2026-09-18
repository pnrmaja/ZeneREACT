import type { ZeneTipus } from "../adat";
import './zene.css'

interface ZeneProps{
    zenek : ZeneTipus
}

export default function Zene({zenek}: ZeneProps){
    return(
        <div className="Zene">
            <h2>{zenek.szerzo}</h2>
            <p><span>Zene neve: </span>{zenek.zene}</p>
            <p><span>Megjelenés éve: </span>{zenek.megjelenesiEv}</p>
            <button>Kiválaszt</button>
        </div>
    )
}