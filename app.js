import { useState } from 'react';
function TravelerCount() {
    const [travelers, setTravelers] = useState(1);
    //jo pehli value hai woh data rkhta hai aur jo dusra set wala hai waoh use value ko control krta hai ki use ghtana hai ki badhana hai aur usestate mein() ke wah value hai jaha se woh pehla wala suru hoga
    const handlePlus = () => {
        setTravelers(travelers + 1);
        //yaha settravelrs travekers ko ek ek kr ke badha rha hai aur travelers ki initial value 1 hai
    };

    const handleMinus = () => {
        if(travelers > 1){ // yaha agar travelers 1 se bada hai tbhi minus hga
            setTravelers(travelers - 1);
        // yaha settravlers travelrs ki value ko ek ek kr ke ghata raha hai
        }
    };

    return (
        <div>
            <h2>WanderOn Travelers: { travelers } </h2> 
            <button onClick={handlePlus}> + </button>
            <button onClick={handleMinus}> - </button>
        </div>
    );
}

export default TravelerCount;