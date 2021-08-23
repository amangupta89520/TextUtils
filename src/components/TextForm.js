import { useState } from "react";

const TextForm = (props) => {

    const [text, setText] = useState('');
    const [textToReplace, setTextToReplace] = useState('');
    const [textToReplaceWith, setTextToReplaceWith] = useState('');

    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if(newText.length > 0)
            props.showAlert('Converted to Uppercase!', 'success');
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if(newText.length > 0)
            props.showAlert('Converted to Lowercase!', 'success');
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text has been Cleared!', 'success');
    }


    const testClick = () => {
        document.getElementById("replace").toggleAttribute('hidden');
    }

    const handleReplace = () => {
        let newText = text.replace(textToReplace, textToReplaceWith);
        setText(newText);
        if(newText.length > 0)
            props.showAlert('Text has been Replaced!', 'success');
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }
    
    const handleTextToReplaceChange = (e) => {
        setTextToReplace(e.target.value);
    }

    const handleTextToReplaceWithChange = (e) => {
        setTextToReplaceWith(e.target.value);
    } 

    return (
        <>
            <div className="container my-3">
                <h1 className={ props.mode === 'light'? "text-dark" : "text-light"}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={ props.mode === 'light'? "form-control" : "form-control bg-dark text-light"} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <div className="my-3" id="replace" hidden>
                    <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleTextToReplaceChange} placeholder="Enter the word which you want to replace" />
                    <input type="text" class="form-control mt-3" id="exampleFormControlInput2" onChange={handleTextToReplaceWithChange} placeholder="Enter the the word which you want to replace with" />
                    <button className="btn btn-primary mt-2" onClick={handleReplace}>Replace</button>
                </div>
                <button className="btn btn-primary" onClick={testClick}>Replace Text</button>
            </div>
            <div className="container my-3">
                <h2 className={ props.mode === 'light'? "text-dark" : "text-light"}>Your text summary</h2>
                {/* text.split returns an array */}
                <p className={ props.mode === 'light'? "text-dark" : "text-light"}>{text.length > 0? text.trim().split(" ").length : 0} words, {text.length} characters</p>
                <p className={ props.mode === 'light'? "text-dark" : "text-light"}>{0.008 * text.split(" ").length} minutes read</p>
                <h2 className={ props.mode === 'light'? "text-dark" : "text-light"}>Preview</h2>
                <p className={ props.mode === 'light'? "text-dark" : "text-light"}>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
            </div>
        </>
    );
}
 
export default TextForm;