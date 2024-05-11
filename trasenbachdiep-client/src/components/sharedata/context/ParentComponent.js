import ChildComponent from "./ChildComponent";

const ParentComponent = props => {
    return(
        <div>
            {/* <ChildComponent message={props.message}/> */}
            <ChildComponent />
        </div>
    )
}

export default ParentComponent;