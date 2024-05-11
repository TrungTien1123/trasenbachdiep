import Person from "./Person";

const PersonList = props => {
    console.log(props);
    return(
        <div className="person-list">
            {
                props.persons.map((person, index) => {
                    //console.log('index = ' + index);
                    return (
                        <Person 
                            firstName={person.firstName}
                            lastName={person.lastName}
                            id={person.id}
                            age={person.age}
                        />
                    )
                })
            }
        </div>
    )
}

export default PersonList;