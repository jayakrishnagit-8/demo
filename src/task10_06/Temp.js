import React, { useState } from 'react'

export default function Temp() {
    const [abc, setFah] = useState(null);
    const [xyz, setCel] = useState(null);

    function output(j) {
        
        if (abc) {
            let c = ((abc - 32) * 5 / 9);  
            setCel(c);

        } 
        else if (xyz) {
            let d = (xyz * 9 / 5) + 32
            setFah(d);
        }

        j.preventDefault();

    }

    function myfah(j) {
        setFah(parseFloat(j.target.value));
    }

    function mycel(j) {
        setCel(parseFloat(j.target.value));
    }

    return (
        <div>
            <h1 style={{ backgroundColor: 'lightgray', padding: '15px', paddingLeft: '30px', marginTop:'-12px' }}>Temperature Convertor</h1>
            <form>
                <div style={{ display: 'flex' }}>
                    <h2 style={{ marginRight: '90px', marginLeft: '30px' }}>Unit</h2>
                    <h2 style={{ marginLeft: '90px' }}>Degree</h2>
                </div>
                <label style={{ marginLeft: '30px' }}>1.Fahrenheit:</label>
                <input onChange={myfah} style={{ marginLeft: '140px', height: '30px', width: '200px' }} type="number" 
                    placeholder='Enter degrees' value={abc}>
                </input> <br /><br />
                <label style={{ marginLeft: '30px' }}>1.Celcius:</label>
                <input onChange={mycel} style={{ marginLeft: '165px', height: '30px', width: '200px' }} type="number" 
                    placeholder='Enter degrees' value={xyz}>
                </input> <br /><br />
                <button onClick={output} style={{ backgroundColor: 'green', color: 'white', padding: '10px', marginLeft: '30px', 
                    border: 'none', paddingLeft: '80px', paddingRight: '80px', borderRadius: '5px' }}>Convert
                </button>
            </form>
        </div>
    )
}
