import React, { useState } from 'react'

export default function Modal() {
    const [modal, setmodal] = useState();
    const clearText=()=>{
        // let text = document.getElementById('myBox').value;
        // text = "";
        // updatedText(text);
        setmodal("Are you sure to delete this text ?");
    }
    return (
        <>   
            <div className="modal fade" id="clearModal" tabIndex="-1" aria-labelledby="clearModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="clearModalLabel">Modal title</h5> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {modal}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={clearText}>YES</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
