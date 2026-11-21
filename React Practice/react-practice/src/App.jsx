//useMemo KA USE AISE HOTA HAI
import { useState, useMemo } from 'react';
function PowerCalculator({ basePower, bonus }) {
    const [clicks, setClicks] = useState(0);

    //sirf tab chalega jab basePower ya bonus badlega; clicks badlne par nahi
    
}









// useRef KA USE AISE HAOTA HAI

// import { useRef } from 'react';

// function FocusInput() {
//     const inputRef = useRef(null);

//     const handleFocus = () => {
//         inputRef.current.focus();// yaha se seedha DOM input pr focus hoga
//     };

//     return (
//         <div className="p-4 fles gap-2">
//             <input 
//                 ref={inputRef}
//                 type="text"
//                 placeholder="Yaha click ya focus hoga"
//                 className="bg-slate-800 text-white px-3 py-2 rounded-lg"
//             />
//             <button
//                 onClick={handleFocus}
//                 className="bg-indigo-600 text-white px-4 py-2 rounded-lg cursor-pointer"
//             >
//                 Focus Box
//             </button>
//         </div>
//     );
// }

// export default App;







// import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { loginFighter, logoutFighter } from './fighterSlice';

// // yaha pe Protected Route khud Redux store se isLoggedIn Check kar raha hai
// function ProtectedRoute({ children }){
//     const isLoggedIn = useSelector((state) => state.fighter.isLoggedIn);

//     if (!isLoggedIn) {
//         return <Navigate to ="/login" replace />;
//     }

//     return children;
// }

// //yaha login page rahega
//  function LoginPage() {
//     const dispatch = useDispatch();
//     const fighterName = useSelector((state) => state.fighter.fighterName);


//     return (
//         <div className="p-6 text-center space-y-4">
//             <h2 className="text-2xl font-bold">Fighter Login: {fighterName}</h2>
//             <button 
//                 onClick={() => dispatch(loginFighter())}
//                 className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-lg font-semibold curson-pointer"
//             >
//                 Login
//             </button>
//         </div>
//     );
//  }

//  //yaha pe protected Arena / dashboard page rahega
//  function ArenaPage() {
//     const dispatch = useDispatch();
//     const { fighterName, powerLevel } = useSelector((state) => state.fighter);

//     return (
//         <div className="p-6 text-center space-y-4">
//             <h2 className="text-2xl font-bold text-emerald-400">Battle Arena</h2>
//             <p className="text-lg">
//                 Fighter: <span className="font-bold">{fighterName}</span> | Power: {' '}
//             </p>
//             <button 
//                 onClick={() => dispatch(logoutFighter())}
//                 className="bg-rose-600 hover:bg-rose-500 px-5 py-2.5 rounded-lg font-semibold curson-pointer"
//                 >
//                     Logout
//             </button>
//         </div>
            
//     );
//  }


//  //yaha main App funciton rahega
//  function App() {
//     return (
//         <BrowserRouter>
//             <div className="min-h-screen bg-slate-950 text-white">
//                 <nav className="flex gap-4 p-4 bg-slate-900 border-b border-slate-800">
//                     <Link to="/login" className="hover:text-indigo-400">Login</Link>
//                     <Link to="/arena" className="hover:text-indigo-400">Arena</Link>
//                 </nav>

//                 <Routes>
//                     <Route path="/login" element={<LoginPage />} />
//                     <Route
//                         path="/arena"
//                         element={
//                             <ProtectedRoute>
//                                 <ArenaPage />
//                             </ProtectedRoute>
//                         }
//                     />
//                     <Route path="*" element={<Navigate to="/login" replace />} />
//                 </Routes>
//             </div>
//         </BrowserRouter>
//     );
//  }

//  export default App;












// //yaha hum dispatch banayenge jisse hum request reducer yani manager ko de sake

// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { trainFighter, takeDamage, changeFighterName } from './fighterSlice';// yeh humari action slips hai

// function App() {
//     //yaha hum selector lagayenge taki store ko bs read kar sake
//     const power = useSelector((state) => state.fighter.powerLevel);
//     //yaha hum store se naam nikalenge
//     const name = useSelector((state) => state.fighter.fighterName);

//     //yaha hum dispatch yani khidki lagayenge taki request bhej sake
//     const dispatch = useDispatch();
//     //form ya input box se jo string aayegi woh bhejenge
//     const [ newName, setNewName ] = useState("");

//     //yaha name change ke liye fucntion banayenge
//     const handleNameChange = () => {
//         if (newName.trim() !== "") {
//             dispatch(changeFighterName(newName));
//             setNewName(""); //name update hone ke baad box khali ho jaayega
//         }
//     };

//     return ( 
//         // YEH TAILWIND CSS SE KIYA GAYA HAI
//         <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
            
//             {/* 1. Card padding: Mobile par p-5, badi screen par p-8 */}
//             <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-5 sm:p-8">
                
//                 {/* Header Section */}
//                 <div className="text-center mb-6">
//                     <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
//                         Fighter Profile
//                     </span>
//                     {/* 2. Naam ka size: Mobile par text-2xl, badi screen par text-3xl */}
//                     <h1 className="text-2xl sm:text-3xl font-extrabold mt-1 text-white">
//                         {name}
//                     </h1>
//                 </div>

//                 {/* Power Level Box */}
//                 <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 sm:p-6 text-center mb-6">
//                     <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider">
//                         Current Power Level
//                     </p>
//                     {/* 3. Power number: Mobile par text-4xl, badi screen par text-5xl */}
//                     <p className="text-4xl sm:text-5xl font-black text-amber-400 mt-2">
//                         {power}
//                     </p>
//                 </div>

//                 {/* 4. Action Buttons: Mobile par upar-neeche (cols-1), badi screen par side-by-side (sm:grid-cols-2) */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
//                     <button
//                         onClick={() => dispatch(trainFighter(50))}
//                         className="bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold py-3 px-4 rounded-xl cursor-pointer transition duration-150 shadow-lg shadow-emerald-900/30"
//                     >
//                         +50 Train
//                     </button>

//                     <button
//                         onClick={() => dispatch(takeDamage(30))}
//                         className="bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-bold py-3 px-4 rounded-xl cursor-pointer transition duration-150 shadow-lg shadow-rose-900/30"
//                     >
//                         -30 Damage
//                     </button>
//                 </div>

//                 {/* Divider */}
//                 <div className="border-t border-slate-800 my-6"></div>

//                 {/* Name Update Form */}
//                 <div className="space-y-3">
//                     <label className="block text-sm font-medium text-slate-400">
//                         Update Fighter Name
//                     </label>
//                     {/* 5. Input & Button: Mobile par upar-neeche (flex-col), badi screen par ek line mein (sm:flex-row) */}
//                     <div className="flex flex-col sm:flex-row gap-2">
//                         <input
//                             type="text"
//                             placeholder="Naya naam likho..."
//                             value={newName}
//                             onChange={(e) => setNewName(e.target.value)}
//                             className="flex-1 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//                         />
//                         <button
//                             onClick={handleNameChange}
//                             className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold px-5 py-2.5 rounded-xl cursor-pointer transition duration-150"
//                         >
//                             Update
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }

// //         // 1. Poori screen dark aur card ekdum center mein
// //         <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
            
// //             {/* 2. Main Fighter Card */}
// //             <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8">
                
// //                 {/* Header Section */}
// //                 <div className="text-center mb-6">
// //                     <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
// //                         Fighter Profile
// //                     </span>
// //                     <h1 className="text-3xl font-extrabold mt-1 text-white">
// //                         {name}
// //                     </h1>
// //                 </div>

// //                 {/* Power Level Box */}
// //                 <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-6 text-center mb-6">
// //                     <p className="text-sm text-slate-400 uppercase tracking-wider">
// //                         Current Power Level
// //                     </p>
// //                     <p className="text-5xl font-black text-amber-400 mt-2">
// //                         {power}
// //                     </p>
// //                 </div>

// //                 {/* Action Buttons (Side-by-side) */}
// //                 <div className="grid grid-cols-2 gap-4 mb-6">
// //                     <button
// //                         onClick={() => dispatch(trainFighter(50))}
// //                         className="bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold py-3 px-4 rounded-xl cursor-pointer transition duration-150 shadow-lg shadow-emerald-900/30"
// //                     >
// //                         +50 Train
// //                     </button>

// //                     <button
// //                         onClick={() => dispatch(takeDamage(30))}
// //                         className="bg-rose-600 hover:bg-rose-500 active:scale-95 text-white font-bold py-3 px-4 rounded-xl cursor-pointer transition duration-150 shadow-lg shadow-rose-900/30"
// //                     >
// //                         -30 Damage
// //                     </button>
// //                 </div>

// //                 {/* Divider */}
// //                 <div className="border-t border-slate-800 my-6"></div>

// //                 {/* Name Update Form */}
// //                 <div className="space-y-3">
// //                     <label className="block text-sm font-medium text-slate-400">
// //                         Update Fighter Name
// //                     </label>
// //                     <div className="flex gap-2">
// //                         <input
// //                             type="text"
// //                             placeholder="Naya naam likho..."
// //                             value={newName}
// //                             onChange={(e) => setNewName(e.target.value)}
// //                             className="flex-1 bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
// //                         />
// //                         <button
// //                             onClick={handleNameChange}
// //                             className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold px-5 py-2.5 rounded-xl cursor-pointer transition duration-150"
// //                         >
// //                             Update
// //                         </button>
// //                     </div>
// //                 </div>

// //             </div>
// //         </div>
// //     );
// // }

// export default App;


// // yeh sb old basic css se kiya gaya hai 


// //         <div style={{ textAlign: "center", marginTop: "50px"}}>
// //             <h1> Fighter Name: {name} </h1>
// //             <h1> Fighter PowerLevel: {power} </h1>
            

// //             {/* yaha hum manager ko action slip bhejenge */}
// //             {/* yaha humne 50 as a payload bheja */}
// //             <button
// //                 onClick={() => dispatch(trainFighter(50))}
// //                 {/* yaha tailwind ka use kiya gaya hai */}
// //                 className="bg-color-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-lg m-2 cursor-pointer transition">
// //                     Super Train (+50)
// //                 </button>

// //                 {/* yaha humne 30 as a payload bheja */}
// //                 <button
// //                     onClick={() => dispatch(takeDamage(30))}
// //                     style={{ padding: "10px", margin: "10px", backgroundColor: "red", color: "white"}}>
// //                         Heavy Damage (-30)
// //                     </button>

// //             <div style={{ marginTop: "20px "}}>
// //                 {/* yaha input self closing rahega aur onChange mein setNewName aayega */}
// //                 <input
// //                     type="text"
// //                     placeholder="Naya Naam likho...."
// //                     value={newName}
// //                     onChange={(e) => setNewName(e.target.value)}
// //                 />

// //                 {/*yaha button rahega */}
// //                 <button 
// //                     onClick={() => dispatch(changeFighterName(newName))}
// //                     style={{ padding: "10px", backgroundColor: "blue", color: "white"}}>
// //                     Fighter Ka Naam Badlo
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // }

// // export default App;