import { useEffect, useState } from "react";
import imgBust from "@/imports/Frame1/7f7ad844441a644ca5f6f163d2c1cbf492088232.png";

const researchAreas = [
  { number: "1", label: "LLM", href: "/llm" },
  { number: "2", label: "Systems" },
  { number: "3", label: "Safety" },
];

const paper = {
  number: "01",
  title: "Why do LLMs attend to the first token?",
  description: "A visual study of attention sinks: why the opening token becomes a stable anchor for information flow across transformer layers.",
};

type Navigate = (path: string) => void;

function useAppear() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);
  return ready;
}

function HomePage({ navigate }: { navigate: Navigate }) {
  const ready = useAppear();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className={`landing ${ready ? "is-ready" : ""}`}>
      <header className="masthead">
        <h1 className="masthead__title">Explore Lab</h1>
      </header>
      <div className="portrait" aria-hidden="true"><div className="portrait__wash" /><img src={imgBust} alt="" /></div>
      <nav className="research-index" aria-label="Research areas">
        <ol>
          {researchAreas.map((area, index) => (
            <li key={area.number}>
              {area.href ? (
                <a
                  className="research-row"
                  href={area.href}
                  onClick={(event) => { event.preventDefault(); navigate(area.href!); }}
                  style={{ "--delay": `${90 + index * 45}ms` } as React.CSSProperties}
                >
                  <span className="research-row__label">{area.label}</span><span className="research-row__number">{area.number}</span><span className="research-row__line" />
                </a>
              ) : (
                <button
                  className="research-row" type="button" aria-pressed={selected === index}
                  style={{ "--delay": `${90 + index * 45}ms` } as React.CSSProperties}
                  onClick={() => setSelected((current) => current === index ? null : index)}
                >
                  <span className="research-row__label">{area.label}</span><span className="research-row__number">{area.number}</span><span className="research-row__line" />
                </button>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <footer className="folio-mark" aria-hidden="true">Notes / 2026</footer>
    </main>
  );
}

function LLMPage({ navigate }: { navigate: Navigate }) {
  const ready = useAppear();
  return (
    <main className={`editorial-page llm-page ${ready ? "is-ready" : ""}`}>
      <header className="subpage-masthead">
        <h1>LLM</h1>
        <div className="subpage-masthead__meta">
          <p>Language models & reasoning</p>
          <a href="/" onClick={(event) => { event.preventDefault(); navigate("/"); }}>← Explore Lab</a>
        </div>
      </header>

      <section className="paper-library" aria-label="LLM research papers">
        <ol className="paper-list">
          <li>
            <div className="paper-entry">
              <div className="paper-entry__body">
                <div className="paper-entry__heading">
                  <span className="paper-entry__number">{paper.number}</span>
                  <h2>{paper.title}</h2>
                </div>
                <p>{paper.description}</p>
              </div>
            </div>
          </li>
        </ol>
      </section>

      <footer className="subpage-footer"><span>Explore Lab / 01</span><span>Selected research & working notes</span></footer>
    </main>
  );
}

export default function App() {
  const normalizePath = (value: string) => value.startsWith("/llm") ? "/llm" : "/";
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    if (window.location.pathname !== path) window.history.replaceState(null, "", path);
    const onPopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate: Navigate = (nextPath) => {
    if (nextPath === path) return;
    const commit = () => {
      window.history.pushState(null, "", nextPath);
      window.scrollTo({ top: 0 });
      setPath(nextPath);
    };
    const viewTransition = (document as Document & { startViewTransition?: (callback: () => void) => void }).startViewTransition;
    if (viewTransition) viewTransition.call(document, commit);
    else commit();
  };

  return path === "/llm" ? <LLMPage navigate={navigate} /> : <HomePage navigate={navigate} />;
}
