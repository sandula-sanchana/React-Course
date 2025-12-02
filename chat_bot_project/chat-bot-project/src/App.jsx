import { useState } from 'react'
import { InputElement } from './components/InputElement';
import { MassageElement } from './components/MassageElement';
import './App.css'

 const App=()=>{

        const [massage,setMessage]=useState([{ //lifting the state up(tree)
            message:"Hello Chat",
            sender:"user",
            key:"k1"
        },{
            message:"Hello Chat-bot!",
            sender:"bot",
            key:"k2"
        },{
            message:"Hello Chat",
            sender:"user",
            key:"k3"
        },{
            message:"Hello Chat-bot!",
            sender:"bot",
            key:"k4"
        }]);

        return (<div >
                    <InputElement massage={massage} setMessage={setMessage}/>
                    <MassageElement massage={massage}/>
            </div>
        )
    }

export default App
