import React from "react";
import SlotM from "./Slotmachine";


const Appp = () => {
	return (
		<>
			<h1 className={"heading_style"}>
				Welcome To <span style={{fontWeight:"bold"}}>  Slot machine game </span>
			</h1>
			<div className={"slotmachine"}>
				<SlotM x={"smile"} y={"smile"} z={"smile"}/>
				<hr/>
				<SlotM x={"smile"} y={"sad"} z={"apple"} />
				<hr/>
				<SlotM x={"angry"} y={"angry"} z={"apple"}/>
				<hr/>
				<SlotM x={"apple"} y={"apple"} z={"apple"}/>
				<hr/>
				<SlotM x={"apple"} y={"Sad"} z={"apple"}/>

			</div>


		</>
	)
};


export default Appp;