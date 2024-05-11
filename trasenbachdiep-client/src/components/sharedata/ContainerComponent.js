import PersonList from "./PersonList";

const ContainerComponent = props => {
    const persons = [
        {
            id: 1,
            firstName: 'Nguyen Quang',
            lastName: 'Hai',
            age: 25
        },
        {
            id: 2,
            firstName: 'Nguyen Tuan',
            lastName: 'Anh',
            age: 27
        },
        {
            id: 3,
            firstName: 'Nguyen Cong',
            lastName: 'Phuong',
            age: 27
        }
    ]
    
    return(
        <div>
            <PersonList persons={persons}/>
        </div>
    )
}

export default ContainerComponent;