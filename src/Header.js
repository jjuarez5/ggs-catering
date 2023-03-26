import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full sticky -top-0 z-0 font-semibold inline-flex flex-1 bg-blue-900 text-zinc-100 p-1 drop-shadow-lg">
      <h1 className="text-5xl">G&G's Catering</h1>
      <ul className="inline-flex flex-1 justify-center text-lg space-x-8 mt-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
