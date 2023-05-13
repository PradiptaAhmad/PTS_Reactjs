import './header.css'

function Header(props) {
    return(
        <div className="header">
            <h2>{props.NamaData}</h2>
        </div>
    )
}

export default Header