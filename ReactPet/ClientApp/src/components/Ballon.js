import React, { useEffect, useState } from 'react';

const Ballons = () => {
    const [allBallons, setAllBallons] = useState([]);

    const getBallons = async () => {
        const options = {
            method: "GET",
        };
        
        //console.log('Get Ballons');
        const result = await fetch("api/Ballon/", options);
        if (result.ok) {
            //console.log('result ok');
            const ballons = await result.json();
            setAllBallons(ballons);
            return ballons;
        }
    };
    const tst=[
        {
            "id": 1,
            "r": 11,
            "collor": 2,
            "name": "24",
            "pressureAbs": 11.12
        },
        {
            "id": 2,
            "r": 12,
            "collor": 22,
            "name": "2",
            "pressureAbs": 12.12
        },
        {
            "id": 3,
            "r": 3,
            "collor": 6,
            "name": "5",
            "pressureAbs": 55
        }
    ]
useEffect(() => {
   //console.log('useEffect');
   // console.log(getBallons())
    getBallons();}, []);
   // console.log(allBallons);
    return (
        <div>
            <h1>Ballons</h1>
            <p>new Ballon</p>
            <div style={{ margin: "10px" }}>
                <input type="text" placeholder="Enter Ballon Name" />
                <input type="text" placeholder="Enter Ballon Radious" />
                <input type="text" placeholder="Enter Ballon Color" />
                <input type="text" placeholder="Enter Ballon PressureAbs" />
            </div>
            <button>Add</button>
            <div>
            <table style={{ margin: "10px" }}>
                {
                    //tst
                   
                    allBallons.map((ballon) => {
                        const ballonInfo =(
                            <thead key={ballon.id} style={{ margin: "10px" }}>
                                <tr>
                                <td>Name: {ballon.name}</td>
                                <td>Radious: {ballon.r}</td>
                                <td>Color: {ballon.collor}</td>
                                <td>PressureAbs: {ballon.pressureAbs}</td>
                                </tr>
                            </thead>
                            );
                        return ballonInfo;
                    })
                }
                 </table>
            </div>
        </div>
    );
};

export default Ballons;