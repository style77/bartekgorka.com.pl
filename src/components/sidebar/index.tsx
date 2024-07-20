import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">BARTEK<br />GÓRKA</h1>
      <ul className="sidebar-items">
        <li><a href="/" className="sidebar-item">FOTOGRAFIA</a></li>
        <li><a href="/videos" className="sidebar-item">FILMOWANIE</a></li>
        <li><a href="/contact" className="sidebar-item">KONTAKT</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;