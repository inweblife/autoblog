import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header>
      <div>
        <h3 className="title">AutoBlog</h3>
      </div>
      <div>
        <ul className="menu_list">
          <li>
            <Link href="/">Начало</Link> |
          </li>
          <li>
            <Link href="/about">За нас</Link> |
          </li>
          <li>
            <Link href="/blog">Блог</Link> 
          </li>
        </ul>
      </div>
    </header>
    );
}