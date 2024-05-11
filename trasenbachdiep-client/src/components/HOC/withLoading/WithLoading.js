import { useState } from 'react'
import './WithLoading.css'
const WithLoading = WrappedComponent => {
    const WithLoadingComponent = props =>{
        const [isLoading, setIsLoading] = useState(false);
        
         const _showLoading = isLoading => {
            setIsLoading(isLoading)
            setTimeout(() => {
                setIsLoading(false);
            },3000)
        }
        return(
            <div className= 
            {isLoading?'loading-container showing' : 'loading-container'}
            >
                {isLoading &&
                    <div className='loading-content'>
                        <img src='images/loading.gif' alt=''/>
                        <h4>Loading...</h4>
                    </div>
                }
            <WrappedComponent {...props} showLoading={_showLoading}/>
                
            </div>
        )
    }
    return WithLoadingComponent;
}

export default WithLoading;