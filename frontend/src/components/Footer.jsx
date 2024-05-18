import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li><Link to="/posts/categories/Beach">Beach</Link></li>
        <li><Link to="/posts/categories/Landscapes">Landscapes</Link></li>
        <li><Link to="/posts/categories/Snow">Snow</Link></li>
        <li><Link to="/posts/categories/Monuments">Monuments</Link></li>
        <li><Link to="/posts/categories/Art">Art</Link></li>
        <li><Link to="/posts/categories/Village">Village</Link></li>
        <li><Link to="/posts/categories/Others">Others</Link></li>
        <li><Link to="/posts/categories/Friends">Friends</Link></li>
      </ul>
      <div className="footer__copyright">
        <small>All Rights Reserved &copy; trxperience S.A</small>
      </div>
    </footer>
  );
};

export default Footer;
