import { useState } from 'react';

function TravelerList() {
    const [name, setName] = useState("");

    const [travelers, setTravelers] = useState([]);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleAdd = () => {
        setTravelers([...travelers, setName]);

        setName("");
    };

    return (
        <div>
            <h2> Add travelers </h2>

            <input 
                value={name}
                onChange={handleChange}
                placeHolder="Traveler Name"
            />

            <button onClick={handleAdd}> Add </button>

            <ul>
                {travelers.map((person, index) =>(
                    <li key={index} > { person } </li>
                ))}
            </ul>
        </div>
    );
}

export default TravelerList;