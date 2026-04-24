const links = [
  { label: "Sobre mí",   href: "#sobre-mi"   },
  { label: "Skills",     href: "#skills"     },
  { label: "Experiencia",href: "#experiencia"},
  { label: "Formación",  href: "#formacion"  },
  { label: "Proyectos",  href: "#proyectos"  },
  { label: "Contacto",   href: "#contacto"   },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <span className="font-bold tracking-tight text-emerald-400">Mike Berges</span>
        <ul className="hidden gap-6 text-sm text-zinc-400 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition hover:text-emerald-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
