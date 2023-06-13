import React, {useState} from "react";

const PersonCard = (props) => {
    const [personAge, setPersonAge] = useState(props.age);
    return(
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p> Age: {personAge}</p>
            <p> Hair Color: {props.hairColor}</p>
            <button onClick={ () => setPersonAge(personAge + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard;