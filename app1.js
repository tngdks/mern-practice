import { useState } from react;

function PackageDetails() {
const [show, setShow] = useState(false);

const toggleDetails = () => {
    setShow(!show);
};

return ( 
    <div>
        <h2> Manali Trip (5 Days)</h2>
        <button onClick = { toggleDetails }> { show ? "Hide Details" : "Show Details" }</button>
        { true && <p>Day 1: Delhi to manali Volvo. Day 2: Solang Valley...</p>}
    </div>
);
}

export default PackageDetails;