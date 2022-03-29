import React, { useState } from 'react';

export default function TextForm(props) {
    // console.log(props.alert.btnType);
    // console.log(props.btn);
    const [currText, updatedText] = useState();

    function upperCase() {
        var text = document.getElementById('myBox').value.toUpperCase();
        updatedText(text);
        props.showAlert("Text converted to Uppercase", "success");
    }

    function lowerCase() {
        var text = document.getElementById('myBox').value.toLowerCase();
        updatedText(text);
        props.showAlert("Text converted to Lowercase", "success");
    }

    const typeText = () => {
        var text = document.getElementById('myBox').value
        updatedText(text);
    }

    const clearText = () => {
        let text = document.getElementById('myBox').value;
        text = "";
        updatedText(text);
        props.showAlert("Text Cleared", "success");
    }

    const removeExtraSpace = () => {
        let text = document.getElementById("myBox").value;
        text = text.replace(/\s\s+/g, ' ');
        updatedText(text);
        props.showAlert("Extra spaces removed", "primary")
    }
    return (
        <>
            <div className='container mt-3'>
                <u><h1 className='text-center'>{props.heading}</h1></u>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "light" ? 'white' : 'black', color: 'grey' }} id="myBox" rows="8" value={currText} onChange={typeText} placeholder='Enter your text here...'></textarea>
                </div>
                <button className={`btn btn-${props.btn} me-2`} onClick={upperCase}>UPPER CASE</button>
                <button className={`btn btn-${props.btn} me-2`} onClick={lowerCase}>lower case</button>
                <button className={`btn btn-${props.btn} me-2`} onClick={clearText}>Clear</button>
                <button className={`btn btn-${props.btn} me-2`} onClick={removeExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="container my-3">
                <h1>your text summery</h1>
                <p>Words = {currText ? currText.split(" ").length : 0}</p>
                <p>Characters =  {currText ? currText.length : 0}</p>
                <p>Time to read = {currText ? 0.008 * currText.split(" ").length : 0} Minutes</p>
                <h2>Preview</h2>
                <p>{currText ? currText : ""}</p>
            </div>
        </>
    )
}