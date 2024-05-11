import React from 'react'

const ControlPanel = (props) => {
    const _add = () =>{

    }
    const _refresh = () =>{
        
    }
    const _search = () =>{
        
    }
    const _edit = () =>{
        
    }
    
  return (
    <div>
        <div className=" mt-3 d-flex mb-3">
            <div className="col-6 d-flex">
                <input id="search" className="htmlForm-control htmlForm-control-sm me-2" type="search"
                    placeholder="Tìm kiếm sản phẩm" aria-label="Search"/>
                <button 
                id="btn-search" 
                className="col-auto btn btn-sm btn-outline-success" 
                type="submit" 
                onClick={_search()}
                style={{height:'50px'}}
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                    Tìm kiếm
                </button>
            </div>
            <div className="col-6 d-flex justify-content-end">
                <button 
                id="btn-refresh" 
                type="button" 
                className="btn btn-sm btn-primary" 
                onClick={_refresh()}>
                    <i className="fa-solid fa-arrows-rotate"></i>
                    Refresh
                </button>
                <button 
                    id="btn-add" 
                    type="button" 
                    className="btn btn-sm btn-success ms-2" 
                    data-bs-toggle="modal"
                    data-bs-target="#htmlForm-modal"
                    onClick={_add()}
                    >
                    <i className="fa-solid fa-plus"></i>
                    Thêm
                </button>
                <button 
                id="btn-edit" 
                type="button" 
                className="btn btn-sm btn-warning ms-2" 
                data-bs-toggle="modal"
                data-bs-target="#htmlForm-modal" 
                disabled
                onClick={_edit()}
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                    Sửa
                </button>
                <button 
                id="btn-delete" 
                type="button" 
                className="btn btn-sm btn-danger ms-2" 
                data-bs-toggle="modal"
                data-bs-target="#delete-modal" 
                disabled
                onClick={_refresh()}
                >
                    <i className="fa-solid fa-trash"></i>
                    Xóa
                </button>
            </div>
        </div>
    </div>
  )
  
}

export default ControlPanel;