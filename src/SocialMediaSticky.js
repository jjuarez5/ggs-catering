import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function SocialMediaSticky() {
  return (
    <div className="w-full sticky -top-0 z-0 bg-yellow-600 inline-flex p-1">
      <ul className="inline-flex flex-1 justify-center space-x-3">
        <Link
          className="text-xl hover:text-white text-blue-900"
          to="https://www.facebook.com/ggsstreetgrill"
        >
          <FaFacebook />
        </Link>
        <Link
          className="text-xl hover:text-white text-blue-900"
          to="https://www.instagram.com/ggsstreetgrill/?fbclid=IwAR2QvVLab4ITupxOhLj6ZlxEgwxtFqAlJcsbpb6yW3UsU8CAyLT6QjBENvQ"
        >
          <FaInstagram />
        </Link>
      </ul>
    </div>
  );
}

export default SocialMediaSticky;
