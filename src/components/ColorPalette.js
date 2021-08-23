const ColorPalette = (props) => {

    const handleClick = (e) => {
        props.toggleColor(e.target.value);
    }

    return (
        <div class="btn-toolbar mx-2" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group me-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-outline-light" style={{"backgroundColor": '#F1948A'}} value="#F1948A" onClick={handleClick}></button>
                <button type="button" class="btn btn-outline-light" style={{"backgroundColor": '#C39BD3'}} value="#C39BD3" onClick={handleClick}></button>
                <button type="button" class="btn btn-outline-light" style={{"backgroundColor": '#0982A7'}} value="#0982A7" onClick={handleClick}></button>
                <button type="button" class="btn btn-outline-light" style={{"backgroundColor": '#17202A'}} value="#17202A " onClick={handleClick}></button>
            </div>
        </div>
    );
}
 
export default ColorPalette;