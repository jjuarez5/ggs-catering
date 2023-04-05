import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full sticky -top-0 z-0 font-semibold inline-flex flex-1 bg-blue-900 text-zinc-100 p-1">
      <ul className="inline-flex flex-1 text-lg space-x-4 mt-3">
        <li className="justify-start">
          <Link to="/">
            <h1 className="font-rye text-red-500 text-3xl hover:text-white">
              G&G's Catering
            </h1>
          </Link>
        </li>
        <div className="inline-flex text-red-500 flex-1 text-lg justify-end space-x-4 mt-3 pr-1">
          <li className="hover:text-yellow-600">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="hover:text-yellow-600">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="hover:text-yellow-600">
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Header;
