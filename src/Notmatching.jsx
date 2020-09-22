import React from "react";
// import Appp from "./Appp";


const Notmatching = (props)=>{
    return (
        <>
            <div className={'slot_inner'}>
                <h1>{props.x} {props.y} {props.z}</h1>
                <h1>This is Not Matching.</h1>
                <hr/>
            </div>
        </>
    )
};

export default Notmatching;