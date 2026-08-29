import { useEffect } from "react";
function Doctor(props){

    return (
        <div>
        <h1>Doctor : {props.data.user.name}, Age: {props.data.user.age}</h1>
        <h1>Doctor : {props.data.name}, Age: {props.data.age}</h1> 

    </div>
    
    );
}

export default Doctor;