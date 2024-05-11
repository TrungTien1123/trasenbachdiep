import MessageContext from "./MessageContext";
import ParentComponent from "./ParentComponent";

const GrandParentComponent = props => {
    const message = 'Hello child component';

    return(
        <div>
            <MessageContext.Provider value={message}>
                {/* <ParentComponent message={message}/> */}
                <ParentComponent />
            </MessageContext.Provider>
        </div>
    )
}

export default GrandParentComponent;