import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({onSearch}) {
    const [input, setInput] = useState('')

    const handleSearch = (e)=>{
        setInput(e.target.value)
        onSearch(e.target.value)
    }
  return (
    <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1 px-5">
            <Link to="/" className="text-xl font-bold">🛍 BlendFashion</Link>
        </div>
        <div className="flex gap-2 ml-auto">
            <input type="text" placeholder="Search" onChange={handleSearch} value={input} className="input input-bordered w-24 md:w-auto" />
            <Link to="/add" className="btn btn-primary">Add Product</Link>
        </div>
    </div>
  );
}
