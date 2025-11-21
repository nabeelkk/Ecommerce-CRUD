import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // ensure path matches

export default function Navbar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="app-navbar w-full">
      {/* Centered container for consistent width */}
      <div className="navbar-container">
        {/* Brand */}
        <Link to="/" className="nav-brand">🛍 Blend</Link>

        {/* Search + Add Button */}
        <div className="nav-right">
          <input
            type="text"
            placeholder="Search products..."
            onChange={handleSearch}
            value={input}
            className="nav-search"
          />
          <Link to="/add">
            <button className="nav-btn">Add Product</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
