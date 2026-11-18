//yaha hum dispatch banayenge jisse hum request reducer yani manager ko de sake

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { trainFighter, takeDamage, changeFighterName } from './fighterSlice';// yeh humari action slips hai

function App() {
    //yaha hum selector lagayenge taki store ko bs read kar sake
    const power = useSelector((state) => state.fighter.powerLevel);
    //yaha hum store se naam nikalenge
    const name = useSelector((state) => state.fighter.fighterName);

    //yaha hum dispatch yani khidki lagayenge taki request bhej sake
    const dispatch = useDispatch();
    //form ya input box se jo string aayegi woh bhejenge
    const [ newName, setNewName ] = useState("");

    //yaha name change ke liye fucntion banayenge
    const handleNameChange = () => {
        if (newName.trim() !== "") {
            dispatch(changeFighterName(newName));
            setNewName(""); //name update hone ke baad box khali ho jaayega
        }
    };

    return ( 
        // YEH TAILWIND CSS SE KIYA GAYA HAI


        // 1. Poori screen dark aur card ekdum center mein
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
            
            {/* 2. Main Fighter Card */}
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">
                
                {/* Header Section */}
                <div className="text-center mb-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                        Fighter Profile
                    </span>
                    <h1 className="text-3xl font-extrabold mt-1 text-white">
                        {name}
                    </h1>
                </div>

                {/* Power Level Box */}
                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 text-center mb-6">
                    <p className="text-sm text-slate-400 uppercase tracking-wider">
                        Current Power Level
                    </p>
                    <p className="text-5xl font-black text-amber-400 mt-2">
                        {power}
                    </p>
                </div>

                {/* Action Buttons (Side-by-side) */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                        onClick={() => dispatch(trainFighter(50))}
                        className="bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold py-3 px-4 rounded-xl cursor-pointer transition duration-150 shadow-lg shadow-emerald-900/30"
                    >
                        +50 Train
                    </button>

                    <button
                        onClick={() => dispatch(takeDamage(30))}
                        className="bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-bold py-3 px-4 rounded-xl cursor-pointer transition duration-150 shadow-lg shadow-rose-900/30"
                    >
                        -30 Damage
                    </button>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-800 my-6"></div>

                {/* Name Update Form */}
                <div className="space-y-3">
                    <label className="block text-sm font-medium text-slate-400">
                        Update Fighter Name
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Naya naam likho..."
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className="flex-1 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        />
                        <button
                            onClick={handleNameChange}
                            className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold px-5 py-2.5 rounded-xl cursor-pointer transition duration-150"
                        >
                            Update
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;


// yeh sb old basic css se kiya gaya hai 


//         <div style={{ textAlign: "center", marginTop: "50px"}}>
//             <h1> Fighter Name: {name} </h1>
//             <h1> Fighter PowerLevel: {power} </h1>
            

//             {/* yaha hum manager ko action slip bhejenge */}
//             {/* yaha humne 50 as a payload bheja */}
//             <button
//                 onClick={() => dispatch(trainFighter(50))}
//                 {/* yaha tailwind ka use kiya gaya hai */}
//                 className="bg-color-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-lg m-2 cursor-pointer transition">
//                     Super Train (+50)
//                 </button>

//                 {/* yaha humne 30 as a payload bheja */}
//                 <button
//                     onClick={() => dispatch(takeDamage(30))}
//                     style={{ padding: "10px", margin: "10px", backgroundColor: "red", color: "white"}}>
//                         Heavy Damage (-30)
//                     </button>

//             <div style={{ marginTop: "20px "}}>
//                 {/* yaha input self closing rahega aur onChange mein setNewName aayega */}
//                 <input
//                     type="text"
//                     placeholder="Naya Naam likho...."
//                     value={newName}
//                     onChange={(e) => setNewName(e.target.value)}
//                 />

//                 {/*yaha button rahega */}
//                 <button 
//                     onClick={() => dispatch(changeFighterName(newName))}
//                     style={{ padding: "10px", backgroundColor: "blue", color: "white"}}>
//                     Fighter Ka Naam Badlo
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default App;