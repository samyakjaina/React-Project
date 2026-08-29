import Doctor from "./Doctor";

function Hospital(props){
    const data = props
    
    return (
        <div>
        <h1>Hospital : {props.name}, Age: {props.age}</h1>
        <h1>Hospital : {props.user.name}, Age: {props.user .age}</h1>   
        <Doctor data = {data}/>
    </div>
    
    );
}

export default Hospital;