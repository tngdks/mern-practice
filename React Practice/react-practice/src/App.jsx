//yaha hum dispatch banayenge jisse hum request reducer yani manager ko de sake

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { trainFighter, takeDamage, changeFighterName } from './fighterSlice';// yeh humari action slips hai

function App() {
    //yaha hum selector lagayenge taki store ko bs read kar sake
    const power = useSelector((state) => state.fighter.powerLevel);

    //yaha hum dispatch yani khidki lagayenge taki request bhej sake
    const dispatch = useDispatch();

    //yaha hum store se naam nikalenge
    const name = useSelector((state) => state.fighter.fighterName);

    //form ya input box se jo string aayegi woh bhejenge
    const [ newName, setNewName ] = useState("");

    return ( 
        <div style={{ textAlign: "center", marginTop: "50px"}}>
            <h1> Fighter Name: {name} </h1>
            <h1> Fighter PowerLevel: {power} </h1>
            

            {/* yaha hum manager ko action slip bhejenge */}
            {/* yaha humne 50 as a payload bheja */}
            <button
                onClick={() => dispatch(trainFighter(50))}
                {/* yaha tailwind ka use kiya gaya hai */}
                className="bg-color-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-lg m-2 cursor-pointer transition">
                    Super Train (+50)
                </button>

                {/* yaha humne 30 as a payload bheja */}
                <button
                    onClick={() => dispatch(takeDamage(30))}
                    style={{ padding: "10px", margin: "10px", backgroundColor: "red", color: "white"}}>
                        Heavy Damage (-30)
                    </button>

            <div style={{ marginTop: "20px "}}>
                {/* yaha input self closing rahega aur onChange mein setNewName aayega */}
                <input
                    type="text"
                    placeholder="Naya Naam likho...."
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />

                {/*yaha button rahega */}
                <button 
                    onClick={() => dispatch(changeFighterName(newName))}
                    style={{ padding: "10px", backgroundColor: "blue", color: "white"}}>
                    Fighter Ka Naam Badlo
                </button>
            </div>
        </div>
    );
}

export default App;