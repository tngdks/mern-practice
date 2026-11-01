import { useState } from 'react';

function TravelerForm() {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <h2> Booking Form </h2>
            <input
                type = "text"
                placeholder = "Enter your name"
                value={ name }
                onChange={handleChange}
            />

            <p>Welcome to WanderOn, {name}!</p>
        </div>
    )
}
export default TravelerForm;