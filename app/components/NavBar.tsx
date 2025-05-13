import { Link } from "@remix-run/react";

export default function NavBar() {
  return (
    <nav className="w-64 bg-gray-800 h-screen p-4">
      <ul>
        <li className="mb-4">
          <Link to="/" className="text-white hover:text-gray-300">首頁</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-300">關於</Link>
        </li>
        {/* 可以添加更多連結 */}
      </ul>
    </nav>
  );
}
