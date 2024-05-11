import styled from 'styled-components';
import TitleComponent from '../HOC/TitleComponent';
import WithColor from '../HOC/WithColor';
const MainContainer = styled.div `
    height: 60rem;

`
const TitleWithRandomColor = WithColor(TitleComponent);
const Main = props => {
    return (
        <MainContainer className="main">
            <h2>Main content</h2>
            {/* <TitleWithRandomColor shortTitle='ReactJS buoi7'/> */}
            {/* <ArticleComponent/> */}
            {/* Render props */}
            {/* <div style={{border: '1px solid #aabb44'}}>
            <OnMouseHover
            render = {
                (point) => {
                    return(
                        <div>
                            <h3>The mouse's current position: {point.x} ; {point.y}</h3>
                        </div>
                    )
                }
            }
            />
            </div> */}
             {/* Buoi 8 Hooks */}
            {/* <DemoLifeCycle/> */}
            {/* <br></br> */}
            {/* <br></br> */}
            {/* <hr/> */}
            {/* <ParentComponentMemo/> */}

        </MainContainer>
    )
}

export default Main;