function Add(){
    return(
        <div className="Add">
            <div className="card">
                <div className="card-header">
                    <br />
                </div>
                <div className="card-body">
                    <p>khodafez</p>
                    <button>Click</button>
                </div>
            </div>
        </div>
    )
}


function AddBar(){
    return(
        <div className="addBar">
            <Add />
            <Add />
            <Add />
            <Add />
            <Add />
            <Add />

        </div>
    )
}

export default AddBar;