import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Menu,
  MessageCircle,
  Phone,
  X,
  Link,
  MoveRight,
} from "lucide-react";
import { business, callUrl, getWhatsAppUrl, whatsappUrl } from "./data/business";
import { projects, type Project } from "./data/projects";
import { cloudinaryImage } from "./utils/cloudinary";

const nav = ["Home", "Services", "Projects", "Gallery", "About"];
const iconProps = { size: 18, strokeWidth: 1.8 };

function Logo() {
  return (
    <a className="logo" href="#home" aria-label="Vishwakarma WoodWorks home">
      <img className="logo-mark" src="/favicon.svg" alt="" />
      <span>
        <b>VISHWAKARMA</b>
        <small>WOODWORKS</small>
      </span>
    </a>
  );
}
function Placeholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`placeholder ${className}`}>
      <span className="grain" />
      <div>
        <i>V</i>
        <small>{label}</small>
      </div>
    </div>
  );
}
function DataImage({
  src,
  alt,
  label,
  className = "",
}: {
  src?: string;
  alt?: string;
  label: string;
  className?: string;
}) {
  const url = cloudinaryImage(src);
  return url ? (
    <img className={className} src={url} alt={alt || label} loading="lazy" />
  ) : (
    <Placeholder label={label} className={className} />
  );
}

function Navbar() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(scrollY > 24);
    addEventListener("scroll", f);
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav shell">
        <Logo />
        <div className="nav-links">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`}>
              {n}
            </a>
          ))}
        </div>
        <button
          className="menu"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
          >
            {nav.map((n) => (
              <a
                onClick={() => setOpen(false)}
                key={n}
                href={`#${n.toLowerCase()}`}
              >
                {n}
                <ChevronRight {...iconProps} />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
const Reveal = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: React.ReactNode;
  copy?: string;
}) {
  return (
    <Reveal className="section-title">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </Reveal>
  );
}

function Hero() {
  return (
    <section id="home" className="hero shell">
      <Reveal className="hero-copy">
        <Eyebrow>Custom woodworking & carpentry</Eyebrow>
        <h1>
          Crafted for your space.
          <br />
          <em>Built to last.</em>
        </h1>
        <p>
          Custom wooden work and furniture, made around the way you live and the
          space you call home.
        </p>
        <img
          className="hero-location"
          src="/ludhiana.png"
          alt="Only in Ludhiana — custom woodwork crafted for your space"
        />
      </Reveal>
      <Reveal className="hero-visual">
        <DataImage
          src="https://res.cloudinary.com/bj5daffd/image/upload/v1791031867/dd664ebf-a348-479c-bae6-0939de926597.png"
          alt="Description of your work"
          label="Your signature project"
          className="hero-image"
        />
        <div className="hero-note">
          <span>01</span>
          <p>
            Made to your
            <br />
            <b>requirements</b>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
function Trust() {
  const values = [
    "Custom work",
    "On-site service",
    "Quality craftsmanship",
    "Built to your requirements",
  ];
  return (
    <section className="trust">
      <div className="shell">
        {values.map((v, i) => (
          <Reveal key={v} className="trust-item">
            <span>0{i + 1}</span>
            <p>{v}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
function Services({
  onSelectCategory,
}: {
  onSelectCategory: (category: string) => void;
}) {
  const categoryTrackRef = useRef<HTMLDivElement>(null);
  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          projects
            .map((project) => project.category?.trim())
            .filter((category): category is string => Boolean(category)),
        ),
      ),
    [],
  );
  const customEnquiryUrl = getWhatsAppUrl(
    "Hello Vishwakarma WoodWorks, I have a custom woodwork requirement that I don't see listed on the website. I would like to discuss my requirement.",
  );
  const selectCategory = (category: string) => {
    onSelectCategory(category);
    document
      .getElementById("gallery")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const moveCategoryTrack = (direction: number) => {
    const track = categoryTrackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth * 0.82,
      behavior: "smooth",
    });
  };
  return (
    <section id="services" className="section shell">
      <SectionTitle
        eyebrow="What we do"
        title={
          <>
            Woodwork made
            <br />
            around <em>you.</em>
          </>
        }
        copy="These categories are a sample of our work. Have another requirement? We would be glad to discuss it."
      />
      <div className="category-services-shell">
        <div
          ref={categoryTrackRef}
          className="services category-services"
          role="list"
          aria-label="Woodwork categories. Use the left and right arrow keys to browse."
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              moveCategoryTrack(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              moveCategoryTrack(1);
            }
            if (event.key === "Home") {
              event.preventDefault();
              categoryTrackRef.current?.scrollTo({
                left: 0,
                behavior: "smooth",
              });
            }
            if (event.key === "End") {
              event.preventDefault();
              const track = categoryTrackRef.current;
              track?.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
            }
          }}
        >
          {categories.map((category, index) => {
            const categoryProjects = projects.filter(
              (project) => project.category?.trim() === category,
            );
            const representative = categoryProjects[0];
            if (!representative) return null;
            return (
              <div
                className="category-service-item"
                key={category}
                role="listitem"
              >
                <motion.button
                  type="button"
                  className="service category-service"
                  whileHover={{ y: -4 }}
                  onClick={() => selectCategory(category)}
                  aria-label={`Explore ${category} projects in the showroom`}
                >
                  <DataImage
                    src={representative.image}
                    alt={representative.alt}
                    label={category}
                    className="service-category-image"
                  />
                  <span className="service-image-shade" />
                  <div className="service-top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <ArrowRight {...iconProps} />
                  </div>
                  <div className="service-content">
                    <p className="service-count">
                      {categoryProjects.length}{" "}
                      {categoryProjects.length === 1 ? "project" : "projects"}
                    </p>
                    <h3>{category}</h3>
                    <p>{representative.description}</p>
                    <span className="service-view">
                      View work <ArrowRight {...iconProps} />
                    </span>
                  </div>
                </motion.button>
              </div>
            );
          })}
          <div className="category-service-item" role="listitem">
            <motion.a
              className="service category-service category-service-custom"
              href={customEnquiryUrl || undefined}
              target={customEnquiryUrl ? "_blank" : undefined}
              rel={customEnquiryUrl ? "noreferrer" : undefined}
              aria-label="Enquire about a custom woodwork requirement on WhatsApp"
              aria-disabled={!customEnquiryUrl}
              onClick={(event) => !customEnquiryUrl && event.preventDefault()}
              whileHover={{ y: -4 }}
            >
              <div className="service-top">
                <span>Custom</span>
                <ArrowRight {...iconProps} />
              </div>
              <div className="service-content">
                <p className="service-count">Made for your needs</p>
                <h3>Something Else?</h3>
                <p>
                  Don&apos;t see what you need? We also take custom woodwork
                  and carpentry requirements.
                </p>
                <span className="service-view">
                  Ask / Enquire <ArrowRight {...iconProps} />
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      className={`project project-${index + 1}`}
      onClick={onOpen}
      aria-label={`View ${project.category} project`}
    >
      <DataImage
        src={project.image}
        alt={project.alt}
        label={project.category}
        className="project-image"
      />
      <span className="project-shade" />
      <div className="project-meta">
        <p>{project.category}</p>
        <h3>{project.description}</h3>
        <span>
          View project <MoveRight {...iconProps} />
        </span>
      </div>
    </motion.button>
  );
}
function shuffle<T>(items: readonly T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function mixedProjects(items: readonly Project[], limit = 12) {
  const groups = new Map<string, Project[]>();
  items.forEach((project) =>
    groups.set(project.category, [
      ...(groups.get(project.category) || []),
      project,
    ]),
  );
  const result: Project[] = [];
  while (groups.size && result.length < limit) {
    for (const category of shuffle([...groups.keys()])) {
      const group = groups.get(category);
      if (!group?.length) {
        groups.delete(category);
        continue;
      }
      result.push(group.splice(Math.floor(Math.random() * group.length), 1)[0]);
      if (!group.length) groups.delete(category);
      if (result.length === limit) break;
    }
  }
  return result;
}
function Projects({ open }: { open: (p: Project) => void }) {
  return (
    <section id="projects" className="section projects-bg">
      <div className="shell">
        <SectionTitle
          eyebrow="Selected craftsmanship"
          title={
            <>
              Our recent <em>work.</em>
            </>
          }

        />
        <div className="project-grid">
          {projects.filter((project) => project.recent).map((p, i) => (
            <Reveal key={p.id}>
              <ProjectCard project={p} index={i} onOpen={() => open(p)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function About() {
  const steps = ["Discuss", "Plan", "Build", "Finish", "Install"];
  return (
    <>
      <section id="about" className="about">
        <div className="shell about-grid">
          <Reveal>
            <Eyebrow>Our approach</Eyebrow>
            <h2>
              Built by hand.
              <br />
              Made for <em>your home.</em>
            </h2>
            <p>
              Every project starts by understanding what you need. From planning
              and materials to precise cutting, finishing and installation, the
              work is shaped around the space.
            </p>
          </Reveal>
          <Reveal className="about-image">
            <DataImage
              src="https://res.cloudinary.com/bj5daffd/image/upload/v1791034086/868684f6-0cc1-43ae-b9f0-24db0f4fa7b0.png"
              alt="Description of craftsmanship"
              label="Approach to craftsmanship"
              className="about-image"
            />
          </Reveal>
        </div>
      </section>
      <section className="section shell process">
        <SectionTitle
          eyebrow="How it comes together"
          title={
            <>
              A considered process,
              <br />
              <em>from first conversation.</em>
            </>
          }
        />
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal key={s}>
              <div className="step">
                <span>0{i + 1}</span>
                <h3>{s}</h3>
                <p>
                  {
                    [
                      "Understand your requirements.",
                      "Measure and plan the work.",
                      "Craft the required woodwork.",
                      "Focus on detailing and finishing.",
                      "Complete on site where applicable.",
                    ][i]
                  }
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
function Gallery({
  open,
  activeCategory,
  onCategoryChange,
}: {
  open: (p: Project) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}) {
  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(
          projects
            .map((project) => project.category?.trim())
            .filter((category): category is string => Boolean(category)),
        ),
      ),
    ],
    [],
  );
  const [visibleProjects, setVisibleProjects] = useState(() =>
    mixedProjects(projects),
  );
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const matching =
      activeCategory === "All"
        ? mixedProjects(projects)
        : shuffle(
            projects.filter(
              (project) => project.category?.trim() === activeCategory,
            ),
          );
    setVisibleProjects(matching);
    requestAnimationFrame(() =>
      trackRef.current?.scrollTo({
        left: 0,
        behavior: reduced ? "auto" : "smooth",
      }),
    );
  }, [activeCategory, reduced]);
  const move = (direction: number) =>
    trackRef.current?.scrollBy({
      left: direction * (trackRef.current.clientWidth * 0.82),
      behavior: reduced ? "auto" : "smooth",
    });
  return (
    <section id="gallery" className="section gallery">
      <div className="shell">
        <SectionTitle
          eyebrow="The showroom"
          title={
            <>
              Details worth
              <br />
              looking <em>closer.</em>
            </>
          }
        />
        <div className="showroom-toolbar">
          <div
            className="showroom-categories"
            role="tablist"
            aria-label="Project categories"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="showroom-controls">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous projects"
            >
              <ArrowLeft {...iconProps} />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next projects"
            >
              <ArrowRight {...iconProps} />
            </button>
          </div>
        </div>
        <div className="showroom-shell">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              ref={trackRef}
              key={activeCategory}
              className="showroom-track"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? {} : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {visibleProjects.map((project, index) => (
                <motion.div
                  className="showroom-card"
                  key={project.id}
                  initial={reduced ? false : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: reduced ? 0 : Math.min(index * 0.04, 0.2),
                  }}
                >
                  <ProjectCard
                    project={project}
                    index={index + 4}
                    onOpen={() => open(project)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="showroom-hint">
          <ArrowLeft {...iconProps} /> Scroll to explore{" "}
          <ArrowRight {...iconProps} />
        </p>
      </div>
    </section>
  );
}
function Why() {
  return (
    <section className="why-section">
      <div className="section shell why">
      <div>
        <SectionTitle
          eyebrow="Why Vishwakarma"
          title={
            <>
              Practical craft.
              <br />
              <em>Personal attention.</em>
            </>
          }
        />
      </div>
      <Reveal>
        <ul>
          {[
            "Custom-made solutions",
            "Direct communication",
            "Attention to detail",
            "Space-focused designs",
            "On-site work ",
          ].map((x) => (
            <li key={x}>
              <span>↗</span>
              {x}
            </li>
          ))}
        </ul>
      </Reveal>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <div className="shell footer">
        <Logo />
        <p>Custom woodworking and carpentry for the spaces you live in.</p>
        <div className="socials">
          {business.instagram && (
            <a aria-label="Instagram" href={business.instagram}>
              <Link />
            </a>
          )}
          {business.facebook && (
            <a aria-label="Facebook" href={business.facebook}>
              <Link />
            </a>
          )}
        </div>
        <small>© {new Date().getFullYear()} Vishwakarma WoodWorks</small>
      </div>
    </footer>
  );
}
function FloatingContact() {
  const reduced = useReducedMotion();
  const actions = [
    {
      label: "WhatsApp",
      detail: "Enquire",
      href: whatsappUrl,
      icon: MessageCircle,
      className: "floating-contact-whatsapp",
      ariaLabel: "Chat with Vishwakarma WoodWorks on WhatsApp",
      title: "Chat on WhatsApp",
      external: true,
    },
    {
      label: "Call",
      detail: "Get a quote",
      href: callUrl,
      icon: Phone,
      className: "floating-contact-call",
      ariaLabel: "Call Vishwakarma WoodWorks",
      title: "Call Vishwakarma WoodWorks",
      external: false,
    },
  ];
  return (
    <motion.aside
      className="floating-contact"
      aria-label="Contact Vishwakarma WoodWorks"
      initial={reduced ? false : { opacity: 0, x: 18, y: 10 }}
      animate={reduced ? {} : { opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.9, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="floating-contact-title">Contact us</span>
      <div className="floating-contact-actions">
        {actions.map(({ icon: Icon, external, ...action }) => (
          <motion.a
            key={action.label}
            className={`floating-contact-action ${action.className}`}
            href={action.href || undefined}
            target={external && action.href ? "_blank" : undefined}
            rel={external && action.href ? "noreferrer" : undefined}
            aria-label={action.ariaLabel}
            aria-disabled={!action.href}
            onClick={(event) => !action.href && event.preventDefault()}
            title={action.title}
            whileHover={reduced ? {} : { scale: 1.025, y: -2 }}
            whileFocus={reduced ? {} : { scale: 1.025, y: -2 }}
            whileTap={reduced ? {} : { scale: 0.98, y: 0 }}
          >
            <Icon aria-hidden="true" size={18} strokeWidth={1.9} />
            <span>
              <b>{action.label}</b>
              <small>{action.detail}</small>
            </span>
          </motion.a>
        ))}
      </div>
    </motion.aside>
  );
}
function Lightbox({
  project,
  close,
}: {
  project: Project | null;
  close: () => void;
}) {
  useEffect(() => {
    const f = (e: KeyboardEvent) => e.key === "Escape" && close();
    addEventListener("keydown", f);
    return () => removeEventListener("keydown", f);
  }, [close]);
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.category} project`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <button onClick={close} aria-label="Close project">
            <X />
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            <DataImage
              src={project.image}
              alt={project.alt}
              label={project.category}
            />
            <p>{project.category}</p>
            <h2>{project.description}</h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default function App() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showroomCategory, setShowroomCategory] = useState("All");
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services onSelectCategory={setShowroomCategory} />
        <Projects open={setSelected} />
        <Gallery
          open={setSelected}
          activeCategory={showroomCategory}
          onCategoryChange={setShowroomCategory}
        />
        <About />
        <Why />
      </main>
      <Footer />
      <FloatingContact />
      <Lightbox project={selected} close={() => setSelected(null)} />
    </>
  );
}
