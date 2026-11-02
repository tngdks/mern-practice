import { useState } from 'react';

function GuestManager() {
    const [name, setName] = useState("");

    const [guests, setGuests] = useState(["Takao", "Neha"]);

    const handleAdd = () => {
        setGuests([...guests, name]);

        setName("");
    };

    const handleDelete = (indexToRemove) => {
        const updatedGuests = guests.filter((g, index) => index !== indexToRemove);
        setGuests(updatedGuests);
    };

    return (
        <div>
            <h2>WanderOn Trip Guests</h2>
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleAdd}> Add Guests </button>
            <ul>
                {guests.map((guest, index) => (
                    <li key={index}>
                        {guest}
                        <button onClick={() => handleDelete(index)}> Remove </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GuestManager;