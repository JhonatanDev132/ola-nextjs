import Link from "next/link";

function Menu() {
    return (
        <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/equipe">Equipe</Link></li>
          <li><Link href="/servicos">Serviços</Link></li>
        </ul>
      </nav>
    )
}

export default Menu;