import '../css/Sidebar.css';


export default function Sidebar(){
    return(
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: '280px', height: '90vh'}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <i className="bi bi-shop"></i>
            <span className="fs-4">Jadmin Services</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
                <a href="#" className="nav-link active" aria-current="page">
                <i className="bi bi-archive"></i>
                All Orders
                </a>
            </li>
            <li>
                <a href="#" className="nav-link text-white">
                <i className="bi bi-check-circle"></i>
                Completed
                </a>
            </li>
            <li>
                <a href="#" className="nav-link text-white">
                <i className="bi bi-basket3"></i>
                In Progress
                </a>
            </li>
            </ul>
            <hr />
            <div className="dropdown">
            <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                <strong>Rox</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
            </div>
        </div>

    )
}