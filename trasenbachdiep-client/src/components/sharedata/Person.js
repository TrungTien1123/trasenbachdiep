const Person = props => {
    return(
        <div 
            style={{border: '1px solid green', padding: '10px'}}
            className="person"
        >
            <h2>Full Name: {props.firstName + ' ' + props.lastName}</h2>
            <h3>Id: {props.id}</h3>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default Person;