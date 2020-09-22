import React from "react";
import Matching from "./Matching";
import Notmatching from "./Notmatching";


const SlotM = (props)=>{
	// let x = 'smile';
	// let y = 'smile';
	// let z = 'smile';

	// let x = props.x;
	// let y = props.y;
	// let z = props.z;

//OBJECT DESTRUCTING
	let {x,y,z} = props;

	if ((x === y) && (y === z) ){
		return (
			<Matching x={x} y={y} z={z}/>
		// 	<>
		// 		<div className={'slot_inner'}>
		// 			<h1>{x} {y} {z}</h1>
		// 			<h1>This is Matching.</h1>
		// 			<hr/>
		// 		</div>
		// 	</>
		)
	} else {
		return (
			<Notmatching x={x} y={y} z={z}/>
			// <>
			// 	<div className={'slot_inner'}>
			// 		<h1>{x} {y} {z}</h1>
			// 		<h1>This is Not Matching.</h1>
			// 		<hr/>
			// 	</div>
			// </>
		)
	}
};

export default SlotM;