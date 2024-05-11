

function ProductLeft(){
    return(
        <div className="left-block col-2 p-0">
                            <p className="blur">Bộ lọc sản phẩm</p>
                            <div className="type-identifier">
                                <h3>Loại sản phẩm</h3>
                                <div className="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label className="m-0 ps-2 blur">Trà xanh Thái nguyên</label>
                                </div>
                                <div className="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label className="m-0 ps-2 blur">Trà Ôolong</label>
                                </div>
                                <div className="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label className="m-0 ps-2 blur">Trà Shan Tuyết</label>
                                </div>
                                <div className="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label className="m-0 ps-2 blur">Trà nhài</label>
                                </div>
                                <div className="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label className="m-0 ps-2 blur">Trà thảo dược</label>
                                </div>
                                <div className="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label className="m-0 ps-2 blur">Dụng cụ pha trà</label>
                                </div>
                                <div className="d-flex pt-2 pb-5">
                                    <input type="checkbox"/>
                                    <label className="m-0 ps-2 blur">Nước pha trà</label>
                                </div>
                            </div>  
                            <div className="price-identifier">
                                <h3>Giá thành</h3>
                                <input className="slider" type="range" min="50.000" max="200.000"/>
                                <p className="blur">Từ 50.000 đến 200.000</p>
                            </div>
                            <div className="brand-identifier">
                                <h3>Thương hiệu</h3>
                                <div className="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label className="m-0 ps-2 blur">Trà Tân Cương xanh</label>
                                </div>
                                <div className="d-flex pt-2">
                                    <input type="checkbox"/>
                                    <label className="m-0 ps-2 blur">Trà Sen Tây Hồ</label>
                                </div>
                                <div className="d-flex pt-2 pb-5">
                                    <input type="checkbox"/>
                                    <label className="m-0 ps-2 blur">Trà Lộc Thân</label>
                                </div>
                        </div>
                        </div>
    )
}

export default ProductLeft