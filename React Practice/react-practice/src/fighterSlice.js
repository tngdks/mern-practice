import { createSlice } from '@reduxjs/toolkit';

//yaha initial state rahegi tijori mein jo data hai uski
const initialState = {
    powerLevel: 100, //Goku ka default powerLevel
    fighterName: "Goku", //fighter ke naam ki entry
};

//yaha slice banayenge( manager yani reducer aur uske rules )
const fighterSlice = createSlice({
    name: 'fighter',
    initialState,
    reducers: {

        //yaha Action slip 1 rahegi jo ki training
        //yeh puchega ki kitna add karna hai
        trainFighter: (state, action) => {
            state.powerLevel += action.payload;
        },

        //yaha Actionslip 2 rahegi jo ki damage
        //yeh puchega kitna kam karna hai
        takeDamage: (state, action) => {
            state.powerLevel -= action.payload;
        },

        //yaha string update krne ka rule hoga
        changeFighterName: (state, action) => {
            //action payload mein jo bhi naya naam aayega woh purne ko replace kr dega
            state.fighterName = action.payload;
        }
    }
});

//yaha hum Action slips yani in function ko export karenge taki workers ise use kr sake
export const { trainFighter, takeDamage, changeFighterName } = fighterSlice.actions;

//ab manager yani reducer ko yaha se export kare taki woh Main vault(store)
//mein baith sake
export default fighterSlice.reducer;