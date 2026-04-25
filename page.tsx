import Image from "next/image";
import FadeIn from "./components/FadeIn";

const devSkills = [
  { name: "HTML",           color: "text-orange-400 border-orange-400/30 bg-orange-400/5" },
  { name: "CSS",            color: "text-blue-400   border-blue-400/30   bg-blue-400/5"   },
  { name: "JavaScript",     color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/5" },
  { name: "Java",           color: "text-red-400    border-red-400/30    bg-red-400/5"    },
  { name: "SQL",            color: "text-sky-400    border-sky-400/30    bg-sky-400/5"    },
  { name: "Android Studio", color: "text-green-400  border-green-400/30  bg-green-400/5"  },
];

const audioSkills = [
  { name: "Adobe Premiere Pro", color: "text-purple-400 border-purple-400/30 bg-purple-400/5" },
  { name: "After Effects",      color: "text-pink-400   border-pink-400/30   bg-pink-400/5"   },
  { name: "DaVinci Resolve",    color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/5" },
  { name: "Photoshop",          color: "text-blue-400   border-blue-400/30   bg-blue-400/5"   },
];

const formacion = [
  { year: "2025", title: "FP DAM – Desarrollo de Aplicaciones Multiplataforma", place: "DAVANTE" },
  { year: "2023", title: "Experto en edición de vídeo y postproducción", place: "CES, Madrid" },
  { year: "2022", title: "Dirección de fotografía", place: "Séptima ARS, Madrid" },
  { year: "2021", title: "Grado superior de Realización de TV", place: "CPA Salduie" },
  { year: "2018", title: "Bachillerato", place: "Colegio San Gabriel, Zaragoza" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Glow de fondo */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 70%, rgba(52,211,153,0.10) 0%, transparent 70%)",
          }}
        />

        <div className="mb-8 h-32 w-32 overflow-hidden rounded-full ring-2 ring-emerald-500/50">
          <Image
            src="/foto-perfil.jpeg"
            alt="Foto de Mike Berges"
            width={128}
            height={128}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <p className="mb-4 text-sm font-medium tracking-widest text-emerald-400 uppercase">
          Hola, soy
        </p>
        <h1 className="bg-gradient-to-br from-white via-white to-emerald-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
          Mike Berges
        </h1>
        <p className="mt-4 text-xl text-zinc-400 sm:text-2xl">
          Programador en formación
        </p>
        <p className="mt-6 max-w-md text-zinc-500">
          Perfil técnico-creativo con ganas de aprender en un entorno profesional.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#proyectos"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-500/50 hover:text-emerald-400"
          >
            Contacto
          </a>
          <a
            href="/cv-mike-berges.pdf"
            download
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-400 transition hover:border-emerald-500/50 hover:text-emerald-400"
          >
            Descargar CV
          </a>
        </div>
      </section>

      {/* Sobre mí */}
      <FadeIn>
        <section id="sobre-mi" className="mx-auto max-w-3xl px-6 py-24">
          <p className="mb-2 text-sm font-medium tracking-widest text-emerald-400 uppercase">
            Sobre mí
          </p>
          <h2 className="text-3xl font-bold">¿Quién soy?</h2>
          <div className="mt-8 space-y-4 text-zinc-400 leading-relaxed">
            <p>
              Programador en formación en{" "}
              <span className="text-white font-medium">
                Desarrollo de Aplicaciones Multiplataforma (DAM)
              </span>
              , con perfil técnico-creativo y ganas de aprender en un entorno
              profesional mediante prácticas.
            </p>
            <p>
              Combino habilidades de desarrollo con una sólida base en producción
              audiovisual, lo que me permite aportar una visión diferente a los
              proyectos digitales.
            </p>
            <p>
              Busco una oportunidad donde pueda aportar, aprender en equipo y
              crecer como desarrollador.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Skills */}
      <FadeIn>
        <section id="skills" className="mx-auto max-w-3xl px-6 py-24">
          <p className="mb-2 text-sm font-medium tracking-widest text-emerald-400 uppercase">
            Tecnologías
          </p>
          <h2 className="text-3xl font-bold">Skills</h2>
          <h3 className="mt-8 mb-4 text-sm font-medium text-zinc-400">Desarrollo</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {devSkills.map((skill) => (
              <div
                key={skill.name}
                className={`rounded-xl border px-6 py-5 text-center font-semibold ${skill.color}`}
              >
                {skill.name}
              </div>
            ))}
          </div>
          <h3 className="mt-10 mb-4 text-sm font-medium text-zinc-400">Audiovisual</h3>
          <div className="grid grid-cols-2 gap-4">
            {audioSkills.map((skill) => (
              <div
                key={skill.name}
                className={`rounded-xl border px-6 py-5 text-center font-semibold ${skill.color}`}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Experiencia */}
      <FadeIn>
        <section id="experiencia" className="mx-auto max-w-3xl px-6 py-24">
          <p className="mb-2 text-sm font-medium tracking-widest text-emerald-400 uppercase">
            Experiencia
          </p>
          <h2 className="text-3xl font-bold">Dónde he trabajado</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Prácticas</p>
              <h3 className="mt-1 text-xl font-bold">Aragón TV</h3>
              <p className="mt-2 text-zinc-400 leading-relaxed">
                Prácticas en el área audiovisual de la televisión pública aragonesa.
                Trabajo en entorno profesional de producción y realización televisiva.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Trabajo</p>
              <h3 className="mt-1 text-xl font-bold">Saltoki</h3>
              <p className="mt-2 text-zinc-400 leading-relaxed">
                Operario de almacén con manejo de PDA y carretillas elevadoras.
                Carné de carretillero – Norma UNE.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Formación */}
      <FadeIn>
        <section id="formacion" className="mx-auto max-w-3xl px-6 py-24">
          <p className="mb-2 text-sm font-medium tracking-widest text-emerald-400 uppercase">
            Formación
          </p>
          <h2 className="text-3xl font-bold">Estudios</h2>
          <div className="mt-8 space-y-0">
            {formacion.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                  {index < formacion.length - 1 && (
                    <div className="w-px flex-1 bg-zinc-800" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-medium text-zinc-500">{item.year}</p>
                  <p className="font-semibold text-white">{item.title}</p>
                  {item.place && (
                    <p className="text-sm text-zinc-500">{item.place}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Proyectos */}
      <FadeIn>
        <section id="proyectos" className="mx-auto max-w-3xl px-6 py-24">
          <p className="mb-2 text-sm font-medium tracking-widest text-emerald-400 uppercase">
            Proyectos
          </p>
          <h2 className="text-3xl font-bold">Lo que he construido</h2>
          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-600">
              <h3 className="text-xl font-bold">FPL Assistant</h3>
              <p className="mt-2 text-zinc-400 leading-relaxed">
                Asistente inteligente para la Fantasy Premier League. Ayuda a
                tomar decisiones sobre fichajes, alineaciones y estrategia
                basándose en datos actualizados de la competición.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://fplagent.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
                >
                  Ver demo
                </a>
                <a
                  href="https://github.com/schmaika/fplagent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold text-white transition hover:border-zinc-400"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-600">
              <h3 className="text-xl font-bold">Coro Coro Collection</h3>
              <p className="mt-2 text-zinc-400 leading-relaxed">
                Tracker personal para gestionar y seguir el estado de una colección
                de cartas Pokémon. Permite registrar qué cartas tienes, cuáles te
                faltan y llevar el control de tu colección.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a
                  href="https://coro-coro-collection.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
                >
                  Ver demo
                </a>
                <a
                  href="https://github.com/schmaika/coro-collection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold text-white transition hover:border-zinc-400"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Contacto */}
      <FadeIn>
        <section id="contacto" className="mx-auto max-w-3xl px-6 py-24">
          <p className="mb-2 text-sm font-medium tracking-widest text-emerald-400 uppercase">
            Contacto
          </p>
          <h2 className="text-3xl font-bold">Hablemos</h2>
          <p className="mt-4 max-w-md text-zinc-400 leading-relaxed">
            Estoy buscando mi primera oportunidad profesional como desarrollador.
            Si tienes un proyecto o una vacante que encaje, estaré encantado de
            hablar.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:miguelbergesbuxeda@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 text-center"
            >
              miguelbergesbuxeda@gmail.com
            </a>
            <a
              href="https://github.com/schmaika"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-500/50 hover:text-emerald-400 text-center"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mikeberges/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-500/50 hover:text-emerald-400 text-center"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </FadeIn>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-600">
        Hecho por Mike Berges · {new Date().getFullYear()}
      </footer>

    </main>
  );
}
