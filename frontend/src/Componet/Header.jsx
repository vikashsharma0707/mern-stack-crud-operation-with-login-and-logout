



// import React, { useState } from 'react';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { FaHome, FaTv, FaPlusCircle, FaSearch, FaEdit, FaUserPlus, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

// // Import the CSS file
// import "../css/style.css"


// const Header = () => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
            

//             <Offcanvas show={show} onHide={handleClose} className="offcanvas" placement="start" style={{ width: "250px" }}>
//                 <Offcanvas.Header closeButton>
//                     <Offcanvas.Title>Menu</Offcanvas.Title>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body className="offcanvas-body">
//                     <div className="section section1">
//                         <h5>Quick Links</h5>
//                         <h4>Dashboard</h4>
//                     </div>

//                     <div className="section section2">
//                         <h5>Navigation</h5>
//                         <Link to="/home" className="nav-link">
//                             <FaHome className="icon" /> Home
//                         </Link>
//                         <Link to="/display" className="nav-link">
//                             <FaTv className="icon" /> Display
//                         </Link>
//                         <Link to="/insert" className="nav-link">
//                             <FaPlusCircle className="icon" /> Insert
//                         </Link>
//                         <Link to="/search" className="nav-link">
//                             <FaSearch className="icon" /> Search
//                         </Link>
//                         <Link to="/update" className="nav-link">
//                             <FaEdit className="icon" /> Update
//                         </Link>
//                     </div>

//                     <div className="section section3">
//                         <h5>Actions</h5>
//                         <Link to="/registration" className="nav-link">
//                             <FaUserPlus className="icon" /> Registration
//                         </Link>
//                         <Link to="/login" className="nav-link">
//                             <FaSignInAlt className="icon" /> Login
//                         </Link>
//                         <Link to="/logout" className="nav-link">
//                             <FaSignOutAlt className="icon" /> Logout
//                         </Link>
//                     </div>
//                 </Offcanvas.Body>
//             </Offcanvas>

//             <div className="row" style={{width:"100%",backgroundColor:"blue",display:"flex",justifyContent:"space-between"}}>
//                 <div className="row1">
//                 <GiHamburgerMenu onClick={handleShow} className="hamburger-menu"  />
//                 </div>

//                 <div className="row2">
//                     <h1>hello</h1>
//                 </div>

//                 <div className="row3">
//                 <h1>hello</h1>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Header;



import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaTv, FaPlusCircle, FaSearch, FaEdit, FaUserPlus, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

// Import the CSS file

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



const Header = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} className="hello" style={{width:"250px"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body">
          <div className="section">
            <h5>Quick Links</h5>
            <h4>Dashboard</h4>
          </div>

          <div className="section">
            <h5>Navigation</h5>
            <Link to="/home" className="nav-link">
              <FaHome className="icon" /> Home
            </Link>
            <Link to="/display" className="nav-link">
              <FaTv className="icon" /> Display
            </Link>
            <Link to="/insert" className="nav-link">
              <FaPlusCircle className="icon" /> Insert
            </Link>
            <Link to="/search" className="nav-link">
              <FaSearch className="icon" /> Search
            </Link>
            <Link to="/update" className="nav-link">
              <FaEdit className="icon" /> Update
            </Link>
          </div>

          <div className="section">
            <h5>Actions</h5>
            <Link to="/registration" className="nav-link">
              <FaUserPlus className="icon" /> Registration
            </Link>
            <Link to="/login" className="nav-link">
              <FaSignInAlt className="icon" /> Login
            </Link>
            <Link to="/logout" className="nav-link">
              <FaSignOutAlt className="icon" /> Logout
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Top Row Section */}
      <div className="header-row">
        <div className="row-item" onClick={handleShow}>
          <GiHamburgerMenu className="hamburger-menu" />
        </div>
        <div className="row-item">
          <input type="text"  style={{width:"250px",height:"30px",borderRadius:"50px"}}/>
        </div>
        <div className="row-item">
        <DropdownButton id="dropdown-basic-button" title="Admin">
      <Dropdown.Item as={Link} to="registration">Registration</Dropdown.Item>
      <Dropdown.Item as={Link} to="login">Login</Dropdown.Item>
      <Dropdown.Item as={Link} to="logout">Logout</Dropdown.Item>
    </DropdownButton>
        </div>
      </div>
    </>
  );
};

export default Header;
