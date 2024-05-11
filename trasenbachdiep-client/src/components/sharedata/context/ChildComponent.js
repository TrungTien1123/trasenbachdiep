import MessageContext from "./MessageContext";

const ChildComponent = props => {
    return(
        <MessageContext.Consumer>
            {   

                message => (
                    <div>
                        Message from grandparent: {message}
                    </div>
                )
            }
        </MessageContext.Consumer>
    )
}

// (message) => {
//     return (
//         <div>
//             Message from grandparent: {message}
//         </div>
//     )
// }


export default ChildComponent;