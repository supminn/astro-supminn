import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Boxes,
  BriefcaseBusiness,
  Code2,
  GitBranch,
  Globe2,
  Hash,
  Layers3,
  Menu,
  Mic2,
  MonitorSmartphone,
  Moon,
  Play,
  Send,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

import {
  articles,
  featuredProjects,
  miniProjects,
  socials,
  talks,
  technologies,
  type MiniProject,
  type PortfolioLink,
  type Project,
} from "../data/portfolio";
import { cn } from "../lib/utils";
import { Badge } from "./ui/badge";
import { buttonVariants, Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Lab", href: "#lab" },
  { label: "Writing", href: "#writing" },
  { label: "Talks", href: "#talks" },
];

const miniFilters = ["All", "Frontend Mentor", "Vanilla JS", "React", "CLI"];

function socialIcon(label: string) {
  if (label === "GitHub") return <GitBranch className="h-4 w-4" />;
  if (label === "Twitter") return <Send className="h-4 w-4" />;
  if (label === "LinkedIn") return <BriefcaseBusiness className="h-4 w-4" />;
  return <Hash className="h-4 w-4" />;
}

function linkIcon(label: string) {
  if (label === "Source") return <GitBranch className="h-4 w-4" />;
  if (label === "Quiz") return <Play className="h-4 w-4" />;
  return <ArrowUpRight className="h-4 w-4" />;
}

function ExternalLink({
  link,
  variant = "outline",
}: {
  link: PortfolioLink;
  variant?: "default" | "secondary" | "outline" | "ghost";
}) {
  const isInternal = link.href.startsWith("/");

  return (
    <a
      className={cn(buttonVariants({ variant, size: "sm" }), "shrink-0")}
      href={link.href}
      rel={isInternal ? undefined : "noopener noreferrer"}
      target={isInternal ? undefined : "_blank"}
    >
      {linkIcon(link.label)}
      {link.label}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="motion-fade-up mb-8 flex flex-col gap-3 md:mb-10 md:max-w-3xl">
      <Badge className="w-fit gap-2" variant="outline">
        {icon}
        {eyebrow}
      </Badge>
      <div className="space-y-3">
        <h2 className="text-balance font-display text-3xl font-bold tracking-normal text-foreground md:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Card
      className={cn(
        "motion-card motion-shine group overflow-hidden",
        featured && "md:col-span-2",
      )}
    >
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img
          alt={`${project.title} screenshot`}
          className="motion-image h-full w-full object-cover object-top"
          loading="lazy"
          src={project.image}
        />
      </div>
      <CardHeader>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant={tag === "MERN" ? "accent" : "secondary"}>
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="flex-wrap">
        {project.links.map((link, index) => (
          <ExternalLink
            key={`${project.title}-${link.href}`}
            link={link}
            variant={index === 0 ? "default" : "outline"}
          />
        ))}
      </CardFooter>
    </Card>
  );
}

function MiniProjectCard({ project }: { project: MiniProject }) {
  return (
    <Card className="motion-card flex h-full flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="outline">{project.category}</Badge>
          <span className="text-xs font-medium text-muted-foreground">
            {project.date}
          </span>
        </div>
        <CardTitle className="text-lg">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm leading-6 text-muted-foreground">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="flex-wrap">
        {project.links.map((link) => (
          <ExternalLink
            key={`${project.title}-${link.href}`}
            link={link}
            variant={
              link.label === "Live" || link.label === "Quiz"
                ? "secondary"
                : "ghost"
            }
          />
        ))}
      </CardFooter>
    </Card>
  );
}

export default function PortfolioApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [activeMiniFilter, setActiveMiniFilter] = useState("All");

  useEffect(() => {
    setIsDarkTheme(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((currentValue) => {
      const nextValue = !currentValue;

      document.documentElement.classList.toggle("dark", nextValue);
      localStorage.setItem("theme", nextValue ? "dark" : "light");

      return nextValue;
    });
  };

  const filteredMiniProjects = useMemo(() => {
    if (activeMiniFilter === "All") return miniProjects;
    return miniProjects.filter(
      (project) => project.category === activeMiniFilter,
    );
  }, [activeMiniFilter]);

  const stats = [
    { label: "Featured builds", value: featuredProjects.length },
    { label: "Mini projects", value: miniProjects.length },
    { label: "Articles", value: articles.length },
    { label: "Talks", value: talks.length },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef7f6_42%,#fff_100%)] text-foreground transition-colors dark:bg-[linear-gradient(180deg,#071512_0%,#0f1f1e_42%,#071512_100%)]">
      <header className="motion-nav sticky top-0 z-50 border-b bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
        <nav className="section-shell flex h-16 items-center justify-between gap-4">
          <a className="flex items-center gap-2 font-display font-bold" href="#home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Code2 className="h-5 w-5" />
            </span>
            <span>SupTECH</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                className={buttonVariants({ variant: "ghost", size: "sm" })}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            {socials.map((social) => (
              <a
                aria-label={social.label}
                className={buttonVariants({ variant: "outline", size: "icon" })}
                href={social.href}
                key={social.label}
                rel="noopener noreferrer"
                target="_blank"
                title={social.label}
              >
                {socialIcon(social.label)}
              </a>
            ))}
            <Button
              aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} theme`}
              onClick={toggleTheme}
              size="icon"
              title={`Switch to ${isDarkTheme ? "light" : "dark"} theme`}
              variant="outline"
            >
              {isDarkTheme ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          </div>

          <Button
            aria-label={`Switch to ${isDarkTheme ? "light" : "dark"} theme`}
            className="ml-auto lg:hidden"
            onClick={toggleTheme}
            size="icon"
            title={`Switch to ${isDarkTheme ? "light" : "dark"} theme`}
            variant="outline"
          >
            {isDarkTheme ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          <Button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            size="icon"
            variant="outline"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {menuOpen && (
          <div className="border-t bg-background lg:hidden">
            <div className="section-shell flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <a
                  className={buttonVariants({
                    variant: "ghost",
                    size: "default",
                    className: "justify-start",
                  })}
                  href={item.href}
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          className="relative isolate border-b bg-cover bg-center"
          id="home"
          style={{ backgroundImage: "url('/assets/portfolio/home-bg.jpg')" }}
        >
          <div className="absolute inset-0 -z-10 bg-background/90 dark:bg-background/94" />
          <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-10 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20 lg:py-24">
            <div className="max-w-3xl space-y-8">
              <div className="motion-fade-up flex flex-wrap items-center gap-3">
                <Badge className="gap-2" variant="accent">
                  <Sparkles className="h-3.5 w-3.5" />
                  Web developer
                </Badge>
                <Badge variant="outline">Writer</Badge>
                <Badge variant="outline">Speaker</Badge>
              </div>

              <div className="motion-fade-up motion-delay-1 space-y-5">
                <h1 className="text-balance font-display text-4xl font-bold leading-[1.02] tracking-normal text-foreground sm:text-6xl lg:text-7xl">
                  Supriya Minnasandram
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Frontend and full-stack developer building React and MERN
                  products, documenting the journey through technical writing,
                  and presenting community talks.
                </p>
              </div>

              <div className="motion-fade-up motion-delay-2 flex flex-wrap gap-3">
                <a className={buttonVariants({ size: "lg" })} href="#projects">
                  See projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                  href="#writing"
                >
                  Read articles
                  <BookOpenText className="h-4 w-4" />
                </a>
              </div>

              <dl className="motion-fade-up motion-delay-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    className="motion-card rounded-lg border bg-card/90 p-4 shadow-sm"
                    key={stat.label}
                  >
                    <dt className="text-xs font-medium uppercase text-muted-foreground">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 font-display text-3xl font-bold">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="motion-fade-up motion-delay-4 relative mx-auto w-full max-w-xl">
              <div className="motion-float rounded-lg border bg-card/90 p-4 shadow-soft">
                <img
                  alt="Developer illustration from Supriya's original portfolio"
                  className="aspect-[4/3] w-full object-contain"
                  src="/assets/portfolio/programmer.svg"
                />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="motion-card rounded-lg border bg-card/90 p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <Layers3 className="h-4 w-4 text-primary" />
                    MERN stack
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Product UI, APIs, state, and data.
                  </p>
                </div>
                <div className="motion-card rounded-lg border bg-card/90 p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <Mic2 className="h-4 w-4 text-accent" />
                    Community
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Blogs, talks, and learning notes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-16 md:py-20" id="about">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                description="The original portfolio framed the story around neoGcamp, curiosity, and steady practice. This version keeps that spirit and gives the work a sharper, current presentation."
                eyebrow="About"
                icon={<MonitorSmartphone className="h-3.5 w-3.5" />}
                title="A developer profile with build history, writing depth, and speaking proof."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="motion-card">
                <CardHeader>
                  <CardTitle className="text-xl">Technology stack</CardTitle>
                  <CardDescription>
                    Skills highlighted from the original portfolio.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <Badge key={technology} variant="secondary">
                      {technology}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
              <Card className="motion-card">
                <CardHeader>
                  <CardTitle className="text-xl">Learning rhythm</CardTitle>
                  <CardDescription>
                    Projects from bootcamp foundations through MERN applications,
                    with public writing to document the path.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                    href="https://twitter.com/supminn"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Send className="h-4 w-4" />
                    Twitter updates
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-y bg-card/80 py-16 md:py-20" id="projects">
          <div className="section-shell">
            <SectionHeading
              description="A curated set of full-stack and frontend applications from the original portfolio, now presented with the real product screenshots."
              eyebrow="Selected work"
              icon={<Boxes className="h-3.5 w-3.5" />}
              title="Portfolio projects with visible product context."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  featured={index === 0 || index === 1}
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-16 md:py-20" id="lab">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              description="The smaller builds show the practice reps: UI challenges, VanillaJS apps, React experiments, and early CLI quizzes."
              eyebrow="Mini projects"
              icon={<Code2 className="h-3.5 w-3.5" />}
              title="A learning lab with every archived build."
            />
            <div className="flex flex-wrap gap-2">
              {miniFilters.map((filter) => (
                <Button
                  aria-pressed={activeMiniFilter === filter}
                  key={filter}
                  onClick={() => setActiveMiniFilter(filter)}
                  size="sm"
                  variant={activeMiniFilter === filter ? "default" : "outline"}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredMiniProjects.map((project) => (
              <MiniProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="border-y bg-card/80 py-16 md:py-20" id="writing">
          <div className="section-shell">
            <SectionHeading
              description="Articles from the existing portfolio, spanning styling systems, micro-frontends, monorepos, React, performance, PWAs, JavaScript fundamentals, and early HTML/CSS notes."
              eyebrow="Writing"
              icon={<BookOpenText className="h-3.5 w-3.5" />}
              title="Technical notes with a real archive behind them."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {articles.map((article) => (
                <Card className="motion-card flex h-full flex-col" key={article.title}>
                  <CardHeader>
                    <div className="text-xs font-semibold uppercase text-primary">
                      {article.date}
                    </div>
                    <CardTitle>{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="mt-auto flex-wrap">
                    {article.links.map((link) => (
                      <ExternalLink
                        key={`${article.title}-${link.href}`}
                        link={link}
                        variant={link.label === "Hashnode" ? "default" : "outline"}
                      />
                    ))}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-16 md:py-20" id="talks">
          <SectionHeading
            description="The original portfolio included five embedded talks. They are preserved here in a cleaner responsive layout."
            eyebrow="Talks"
            icon={<Mic2 className="h-3.5 w-3.5" />}
            title="Community sessions and technical conversations."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {talks.map((talk, index) => (
              <Card className="motion-card overflow-hidden" key={talk}>
                <div className="aspect-video bg-muted">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    loading="lazy"
                    src={talk}
                    title={`Supriya technical talk ${index + 1}`}
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 text-white">
        <div className="section-shell flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold">SupTECH</p>
            <p className="mt-1 text-sm text-white/70">
              Copyright 2020-2026 Supriya Minnasandram.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "bg-white/10 text-white hover:bg-white/20",
                )}
                href={social.href}
                key={social.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                {socialIcon(social.label)}
                {social.label}
              </a>
            ))}
            <a
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "bg-white/10 text-white hover:bg-white/20",
              )}
              href="#home"
            >
              <Globe2 className="h-4 w-4" />
              Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
