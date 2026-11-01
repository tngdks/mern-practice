import { useState } from 'react';

function PackingList() {
    const [items, setItems] = useState(["Tent", "Water Bottle", "Jacket"]);

    const handleDelete = (indexToRemove) => {
        const updatedList = items.filter((item, index) => index != indexToRemove);

        setItems(updatedList);
    };

    return (
        <div>
            <h2>WanderOn Packing List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleDelete(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PackingList;