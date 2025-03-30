import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
const url = "api/Ballon/";
const Ballons = () => {
    const [allBallons, setAllBallons] = useState([]);

    const getBallons = async () => {
        const options = {
            method: "GET",
            headers:new Headers()
        };
        
        const result = await fetch(url, options);
        if (result.ok) {
            const ballons = await result.json();
            setAllBallons(ballons);
            return ballons;
        }
    };

    const addBallon = async () => {
       // debugger;
        const ballon={
            name: document.querySelector('#name').value,
            r: document.querySelector('#radious').value,
            collor: document.querySelector('#color').value,
            pressureAbs: document.querySelector('#pressureAbs').value,
        }
        console.log(ballon);
        //debugger;
        const options = {
            method: "post",
            headers:new Headers(    { "Content-Type": "application/json" }),
            body: JSON.stringify(ballon),   
        };
        
        const result = await fetch(url, options);
        if (result.ok) {
            const ballon = await result.json();
            allBallons.push(ballon);
            setAllBallons(allBallons.slice());
            return allBallons;
        }
    };
    const deleteBallon = async (id) => {
        const ballon={
            name: document.querySelector('#name').value,
            r: document.querySelector('#radious').value,
            collor: document.querySelector('#color').value,
            pressureAbs: document.querySelector('#pressureAbs').value,
        }
        console.log(ballon);
        //debugger;
        const options = {
            method: "delete",
            headers:new Headers() ,
        };
        
        const result = await fetch(url+"/${id}", options);
        if (result.ok) {
           //const ballon = await result.json();
            
            setAllBallons(allBallons.filter(x=>x.id!==id));
            return allBallons;
        }

    }
    useEffect(() => {
        getBallons();
    }, []);

    return (
        <div>
            <h1>Ballons</h1>
            <p>new Ballon</p>
            <div style={{ margin: "10px" }}>
                <input type="text" id='name' placeholder="Enter Ballon Name" />
                <input type="text" id='radious' placeholder="Enter Ballon Radious" />
                <input type="text" id='color' placeholder="Enter Ballon Color" />
                <input type="text" id='pressureAbs'  placeholder="Enter Ballon PressureAbs" />
            </div>
            <button onClick={addBallon}>Add</button>
            <div>
                <table style={{ margin: "10px" ,border:"1px solid white"}}>
                    {allBallons.map((ballon) => BallonRow(ballon))}
                </table>
            </div>
        </div>
    );
};

export default Ballons;
const BallonRow=(ballon)=>{
    return(
        <thead key={ballon.id} style={{ margin: "10px" }}>
            <tr>
                <td style={{border:"1px solid white"}}>Id: {ballon.id}</td>
                <td style={{border:"1px solid white"}}>Name: {ballon.name}</td>
                <td style={{border:"1px solid white"}}>Radious: {ballon.r}</td>
                <td style={{border:"1px solid white"}}>Color: {ballon.collor}</td>
                <td style={{border:"1px solid white"}}>PressureAbs: {ballon.pressureAbs}</td>
                <td style={{border:"1px solid white"}}><button onClick={()=>{deleteBallon(ballon.id)}} >Delete</button></td>
                <td style={{border:"1px solid white"}}><button>Update</button></td>
                
            </tr>
        </thead>
    );
}