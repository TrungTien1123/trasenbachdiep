import thumbnail from "../../images/Tintuc/thumbnail.png"
import thumbnail02 from "../../images/Tintuc/thumbnail02.png"
import thumbnail03 from "../../images/Tintuc/thumbnail_03.png"
import './tintuc.css'

function News(){
    return(
        <div>
            <section className="news-content pt-5">
        <h2 className="text-center title">TIN TỨC</h2>
        <div className="main-content col-8 d-flex justify-content-between flex-wrap m-auto">
            <div className="post pt-5">
                <img src={thumbnail} alt=""/>
                <h4 className="pt-3"><a className="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div className="post pt-5">
                <img src={thumbnail02} alt=""/>
                <h4 className="pt-3"><a className="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div className="post pt-5">
                <img src={thumbnail03} alt=""/>
                <h4 className="pt-3"><a className="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div className="post pt-5">
                <img src={thumbnail} alt=""/>
                <h4 className="pt-3"><a className="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div className="post pt-5">
                <img src={thumbnail02} alt=""/>
                <h4 className="pt-3"><a className="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div className="post pt-5">
                <img src={thumbnail03} alt=""/>
                <h4 className="pt-3"><a className="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div className="post pt-5">
                <img src={thumbnail} alt=""/>
                <h4 className="pt-3"><a className="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div className="post pt-5">
                <img src={thumbnail02} alt=""/>
                <h4 className="pt-3"><a className="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
            <div className="post pt-5">
                <img src={thumbnail03} alt=""/>
                <h4 className="pt-3"><a className="post-title" href="!#">Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h4>
                <p className="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, amet necessitatibus consequatur animi fugit iusto architecto, nihil, a ex ad nostrum blanditiis aliquid </p>
            </div>
        </div>
        <div className="list-pages d-flex justify-content-between m-auto pb-5 pt-5">
            <div className="pages text-center">1</div>
            <div className="pages text-center">2</div>
            <div className="pages text-center">3</div>
            <div className="pages text-center">4</div>
            <div className="pages text-center">{'>'}</div>
        </div>
    </section>
        </div>
    )
}

export default News;