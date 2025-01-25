export function HeaderBar({toggleIsActive}) {
    return (<>
        <div className="header">
            <h1 className="mainheadding">Warrrom v0.0.2</h1>
            <button className="editToggle" onClick={toggleIsActive}>Toggle Edit</button>
        </div>
    </>)
}