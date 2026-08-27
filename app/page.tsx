import ProjectPreview from "./project-preview";

const projects = [
  {
    number: "01",
    name: "LOOT",
    type: "Interactive 3D storefront",
    description:
      "A game-like merchandise experience where visitors browse products, rotate 3D items, select sizes, and build an in-page inventory.",
    impact:
      "Built to explore how motion, state, accessibility, and product storytelling can work together without a heavy framework.",
    tags: ["Three.js", "JavaScript", "Responsive UX", "Node tests"],
    live: "https://dekuding1129.github.io/merch-game/",
    source: "https://github.com/Dekuding1129/merch-game",
    className: "project-visual--loot",
    visual: <ProjectPreview src="/project-previews/loot.png" alt="Preview of the LOOT interactive 3D merchandise storefront" sizes="(max-width: 900px) 100vw, 60vw" />,
  },
  {
    number: "02",
    name: "MIZRACH PINAZ",
    type: "Music & culture homepage",
    description:
      "A responsive promotional site for a slow-rock band, bringing identity, music, tour information, gallery content, and booking into one atmospheric page.",
    impact:
      "Translated a distinct visual direction into an expressive interface using gradients, typography, glow, and motion in plain CSS.",
    tags: ["HTML", "CSS", "JavaScript", "Art direction"],
    live: "https://dekuding1129.github.io/mizrach-band/",
    source: "https://github.com/Dekuding1129/mizrach-band",
    className: "project-visual--mizrach",
    visual: <ProjectPreview src="/project-previews/mizrach-pinaz.png" alt="Preview of the MIZRACH PINAZ music and culture homepage" sizes="(max-width: 900px) 100vw, 60vw" />,
  },
  {
    number: "03",
    name: "ICE CREAM INVITATION",
    type: "Playful interactive experience",
    description:
      "A self-contained Shairene tra Ice cream kit invitation with a one-line hero, playful No-button interaction, setup date and time scheduling, and a fireworks confirmation moment.",
    impact:
      "A compact exercise in visual rhythm, mobile performance, accessible form flow, and turning a simple idea into a polished browser moment.",
    tags: ["Creative coding", "CSS motion", "JavaScript", "Mobile-first", "Forms"],
    live: "https://dekuding1129.github.io/ice-cream-invitation/",
    source: "https://github.com/Dekuding1129/ice-cream-invitation",
    className: "project-visual--icecream",
    visual: <ProjectPreview src="/project-previews/ice-cream-invitation.png" alt="Preview of the Ice Cream Invitation interactive page" sizes="(max-width: 900px) 100vw, 60vw" />,
  },
] as const;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="John Gulliver, back to top">
          JG<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="/john-gulliver-resume.pdf" download>Résumé</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-status" href="mailto:johnlipata112904@gmail.com">
          <span aria-hidden="true" /> Available for work
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-kicker">
          <span>Portfolio / 2026</span>
          <span>Based in the Philippines</span>
        </div>
        <h1 id="hero-title">
          Creative frontend
          <span>developer<span className="hero-dot">.</span></span>
        </h1>
        <div className="hero-bottom">
          <p>
            I&apos;m John Gulliver. I build responsive websites, expressive interfaces,
            and playful digital products—turning ideas into experiences people can
            actually use.
          </p>
          <a className="circle-link" href="#work" aria-label="Explore selected work">
            <span>Explore<br />work</span>
            <b aria-hidden="true">↓</b>
          </a>
        </div>
        <div className="hero-grid" aria-hidden="true">
          <span>01 / IDEAS</span><span>02 / INTERACTION</span><span>03 / SHIPPING</span>
        </div>
      </section>

      <section className="work section-shell" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="section-label">Selected work</p>
          <h2 id="work-title">Things I&apos;ve brought<br />to life.</h2>
          <p className="section-intro">
            A selection of frontend experiments spanning 3D commerce, music,
            creative coding, and responsive web design.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <div className={`project-visual ${project.className}`}>
                <span className="project-number">{project.number}</span>
                {project.visual}
                <span className="project-corner">JOHN / FRONTEND</span>
              </div>
              <div className="project-copy">
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p className="project-impact">{project.impact}</p>
                <ul className="tag-list" aria-label={`${project.name} technologies`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-links">
                  <a className="text-link text-link--primary" href={project.live} target="_blank" rel="noreferrer">
                    View live site <span aria-hidden="true">↗</span>
                  </a>
                  <a className="text-link" href={project.source} target="_blank" rel="noreferrer">
                    View source <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <article className="supporting-project">
          <div className="supporting-project__visual">
            <ProjectPreview
              src="/princess-jane-preview.png"
              alt="Screenshot of the Princess Jane Diaz Raagas portfolio homepage"
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <span className="supporting-project__number">04</span>
            <span className="supporting-project__visual-corner">JOHN / FRONTEND</span>
          </div>
          <div className="supporting-project__copy">
            <span>04 / Supporting work</span>
            <h3>Princess Jane Portfolio</h3>
            <p>A responsive static portfolio with project sections, downloadable resources, and a live GitHub Pages deployment.</p>
            <div className="supporting-links">
              <a href="https://dekuding1129.github.io/princess-jane-portfolio/" target="_blank" rel="noreferrer">Live site ↗</a>
              <a href="https://github.com/Dekuding1129/princess-jane-portfolio" target="_blank" rel="noreferrer">Source ↗</a>
            </div>
          </div>
        </article>
      </section>

      <section className="about section-shell" id="about" aria-labelledby="about-title">
        <div className="section-label">About / approach</div>
        <div className="about-grid">
          <h2 id="about-title">Good ideas deserve<br /><em>thoughtful execution.</em></h2>
          <figure className="about-portrait">
            <div className="about-portrait__frame">
              <img
                src="/john-gulliver.jpg"
                alt="Portrait of John Gulliver"
                width="460"
                height="460"
                loading="lazy"
              />
              <span aria-hidden="true">JG / 2026</span>
            </div>
            <figcaption>John Gulliver — Philippines</figcaption>
          </figure>
          <div className="about-copy">
            <p className="about-lead">
              I&apos;m a frontend developer who enjoys the space between visual design
              and working software.
            </p>
            <p>
              My process blends hands-on coding with AI-assisted exploration to move
              from rough idea to clear, responsive experience. I care about the details:
              readable structure, useful motion, keyboard access, and interfaces that
              still feel good on a small screen.
            </p>
            <a className="text-link" href="https://github.com/Dekuding1129" target="_blank" rel="noreferrer">
              More on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="capabilities">
          <div><span>01</span><h3>Build</h3><p>Semantic HTML, modern CSS, JavaScript, responsive systems</p></div>
          <div><span>02</span><h3>Interact</h3><p>Three.js, motion, state, keyboard and pointer experiences</p></div>
          <div><span>03</span><h3>Refine</h3><p>Accessibility, performance thinking, testing, visual polish</p></div>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-top">
          <p className="section-label">Start a conversation</p>
          <span>Open to remote opportunities</span>
        </div>
        <h2 id="contact-title">Have a role or an<br />idea in mind?</h2>
        <a className="contact-email" href="mailto:johnlipata112904@gmail.com">
          johnlipata112904@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <a className="contact-resume" href="/john-gulliver-resume.pdf" download>
          Download résumé <span aria-hidden="true">↓</span>
        </a>
        <footer>
          <span>© 2026 John Gulliver</span>
          <a href="https://github.com/Dekuding1129" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="#top">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
