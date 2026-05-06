"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  X,
  Hammer,
  Home,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  Truck,
} from "lucide-react";

const phone = "0600000000";
const phoneDisplay = "06 00 00 00 00";
const whatsapp = "33600000000";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const trustItems = [
  { label: "Intervention rapide", icon: Clock3 },
  { label: "Disponible 7j/7", icon: CalendarCheck },
  { label: "Devis gratuit", icon: Sparkles },
  { label: "Travail sécurisé", icon: ShieldCheck },
];

const services = [
  {
    title: "Élagage & Abattage",
    text: "Taille précise, démontage contrôlé et abattage d'arbres complexes avec sécurisation du terrain.",
    icon: Trees,
  },
  {
    title: "Débarras",
    text: "Évacuation de maisons, garages, caves, dépendances et espaces encombrants après chantier ou déménagement.",
    icon: Home,
  },
  {
    title: "Nettoyage & Chantier",
    text: "Remise au propre après intervention, tri, chargement et évacuation vers les filières adaptées.",
    icon: Hammer,
  },
  {
    title: "Entretien jardin",
    text: "Taille, débroussaillage, remise en état et entretien ponctuel pour conserver un extérieur net.",
    icon: Leaf,
  },
];

const process = [
  "Prise de contact",
  "Devis rapide",
  "Intervention",
  "Nettoyage final",
];

const testimonials = [
  {
    name: "Marion L.",
    city: "Nancy",
    text: "Intervention très propre pour l'abattage d'un arbre proche de la maison. Devis clair et chantier laissé impeccable.",
  },
  {
    name: "Patrick D.",
    city: "Laxou",
    text: "Débarras complet d'un garage en une matinée. Équipe ponctuelle, efficace et respectueuse.",
  },
  {
    name: "Sophie R.",
    city: "Vandœuvre-lès-Nancy",
    text: "Excellent contact, travail sécurisé et résultat net. Je recommande pour l'élagage autour de Nancy.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Coussantien Angelo - Élagage et Débarras",
  description:
    "Entreprise d'élagage, abattage d'arbres, débarras, nettoyage de chantier et entretien de jardin à Nancy et alentours.",
  image: "/assets/hero-elagueur.jpg",
  telephone: `+33${phone.slice(1)}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nancy",
    postalCode: "54000",
    addressCountry: "FR",
  },
  areaServed: [
    "Nancy",
    "Laxou",
    "Vandœuvre-lès-Nancy",
    "Tomblaine",
    "Saint-Max",
    "Maxeville",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "21:00",
    },
  ],
  priceRange: "$$",
};

function MotionSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      variants={stagger}
    >
      {children}
    </motion.section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
  titleClassName = "text-[var(--ink)]",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  titleClassName?: string;
}) {
  return (
    <motion.div variants={fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold leading-tight md:text-5xl ${titleClassName}`}>
        {title}
      </h2>
      {text ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

export default function HomePage() {
  const [comparison, setComparison] = useState(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
        <nav className="glass mx-auto flex h-16 w-full max-w-6xl items-center justify-between rounded-full px-4 md:px-6">
          <a href="#accueil" className="flex items-center gap-3 focus-ring rounded-full">
            <span className="grid size-10 place-items-center rounded-full bg-[var(--forest)] text-white">
              <Leaf size={19} />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold">Coussantien Angelo</span>
              <span className="hidden text-xs text-[var(--muted)] sm:block">Élagage & débarras</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-[var(--muted)] md:flex">
            <a href="#services" className="transition hover:text-[var(--forest)]">Services</a>
            <a href="#galerie" className="transition hover:text-[var(--forest)]">Avant / Apres</a>
            <a href="#contact" className="transition hover:text-[var(--forest)]">Contact</a>
          </div>
          <a
            href={`tel:${phone}`}
            className="hidden rounded-full bg-[var(--forest)] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(31,61,43,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--forest-deep)] md:inline-flex"
          >
            Appeler
          </a>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="grid size-11 place-items-center rounded-full bg-white/70 text-[var(--forest)] md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {mobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="glass mx-auto mt-3 grid w-full max-w-6xl gap-2 rounded-[28px] p-3 md:hidden"
          >
            {[
              { href: "#services", label: "Services" },
              { href: "#galerie", label: "Avant / Après" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-5 py-4 font-semibold text-[var(--forest)] transition hover:bg-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${phone}`}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-3 rounded-full bg-[var(--forest)] px-5 py-4 font-semibold text-white"
            >
              <Phone size={18} />
              Appeler maintenant
            </a>
          </motion.div>
        ) : null}
      </header>

      <section id="accueil" className="noise relative min-h-[92svh] overflow-hidden bg-[var(--forest-deep)] text-white">
        <Image
          src="/assets/hero-elagueur.jpg"
          alt="Élagueur en hauteur sécurisé intervenant dans un jardin à Nancy"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/28 to-[var(--forest-deep)]" />
        <div className="section-shell relative z-10 flex min-h-[92svh] items-end pb-16 pt-32 md:items-center md:pb-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white/88 backdrop-blur-xl"
            >
              <MapPin size={16} />
              Nancy, Laxou, Vandœuvre et alentours
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-5xl font-semibold leading-[0.98] md:text-7xl lg:text-8xl"
            >
              Expert en élagage et débarras à Nancy
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl"
            >
              Interventions sécurisées, devis gratuit et remise au propre impeccable pour particuliers exigeants dans toute l'agglomération nancéienne.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${phone}`}
                className="focus-ring inline-flex items-center justify-center gap-3 rounded-full bg-[var(--leaf-bright)] px-7 py-4 font-semibold text-[var(--forest-deep)] shadow-[0_22px_55px_rgba(184,229,189,0.34)] transition hover:-translate-y-1 hover:bg-white"
              >
                <Phone size={19} />
                Appeler maintenant
              </a>
              <a
                href="#contact"
                className="focus-ring inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/12 px-7 py-4 font-semibold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/18"
              >
                Devis gratuit
                <ArrowRight size={19} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <MotionSection className="section-shell -mt-10 relative z-20 grid gap-4 md:grid-cols-4">
        {trustItems.map((item) => (
          <motion.div
            key={item.label}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.015 }}
            className="glass rounded-[28px] p-6"
          >
            <item.icon className="mb-5 text-[var(--forest)]" size={28} />
            <p className="text-lg font-semibold">{item.label}</p>
          </motion.div>
        ))}
      </MotionSection>

      <MotionSection id="apropos" className="py-24 md:py-32">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div variants={fadeUp} className="relative aspect-[4/5] overflow-hidden rounded-[34px] shadow-[0_30px_90px_rgba(18,36,25,0.18)]">
            <Image
              src="/assets/camion-professionnel.jpg"
              alt="Camion professionnel pour débarras et élagage à Nancy"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">
              À propos
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              Des espaces extérieurs plus sûrs, plus nets, plus simples à vivre.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-[var(--muted)]">
              <p>
                Coussantien Angelo met son expertise au service des particuliers pour transformer et sécuriser leurs espaces extérieurs. Spécialisé dans l'élagage et l'abattage d'arbres complexes, notre entreprise garantit des interventions précises, sécurisées et adaptées à chaque situation.
              </p>
              <p>
                Nous proposons également des solutions complètes de débarras, que ce soit après un chantier, un déménagement ou pour libérer un espace encombré.
              </p>
              <p>
                Notre engagement : un travail soigné, rapide et efficace, pour un résultat impeccable.
              </p>
            </div>
          </motion.div>
        </div>
      </MotionSection>

      <MotionSection id="services" className="bg-white py-24 md:py-32">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Services"
            title="Une intervention claire, maîtrisée, sans surprise."
            text="Élagage à Nancy, débarras, abattage d'arbre et nettoyage : chaque prestation est pensée pour protéger votre bien et vous rendre un espace propre."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="group rounded-[30px] border border-[#dde8dc] bg-[#fbfdf9] p-7 shadow-[0_18px_45px_rgba(18,36,25,0.06)] transition hover:border-[var(--leaf)] hover:shadow-[0_28px_70px_rgba(31,61,43,0.12)]"
              >
                <div className="mb-8 grid size-14 place-items-center rounded-2xl bg-[var(--mist)] text-[var(--forest)] transition group-hover:rotate-3 group-hover:bg-[var(--forest)] group-hover:text-white">
                  <service.icon size={27} />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{service.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="galerie" className="py-24 md:py-32">
        <div className="section-shell">
          <SectionTitle
            eyebrow="Avant / Après"
            title="Des résultats visibles dès la fin du chantier."
          />
          <motion.div variants={fadeUp} className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[470px] overflow-hidden rounded-[34px] bg-[var(--forest-deep)] shadow-[0_30px_90px_rgba(18,36,25,0.16)]">
              <Image
                src="/assets/jardin-avant.jpg"
                alt="Jardin encombré avant intervention à Nancy"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white/90"
                style={{ width: `${comparison}%` }}
              >
                <Image
                  src="/assets/jardin-apres.jpg"
                  alt="Jardin propre après élagage et débarras"
                  fill
                  sizes="50vw"
                  className="max-w-none object-cover"
                />
              </div>
              <div className="absolute left-5 top-5 rounded-full bg-white/88 px-4 py-2 text-sm font-semibold text-[var(--forest)] backdrop-blur">Après</div>
              <div className="absolute right-5 top-5 rounded-full bg-black/38 px-4 py-2 text-sm font-semibold text-white backdrop-blur">Avant</div>
              <div
                className="absolute top-0 h-full w-1 -translate-x-1/2 bg-white/90 shadow-2xl"
                style={{ left: `${comparison}%` }}
              />
              <div
                className="absolute top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/80 bg-white/90 text-[var(--forest)] shadow-2xl"
                style={{ left: `${comparison}%` }}
                aria-hidden="true"
              >
                <ArrowRight size={19} />
              </div>
              <label className="sr-only" htmlFor="comparison-slider">Comparer avant après</label>
              <input
                id="comparison-slider"
                type="range"
                min="18"
                max="82"
                value={comparison}
                onChange={(event) => setComparison(Number(event.target.value))}
                className="absolute inset-x-5 bottom-6 h-2 cursor-ew-resize appearance-none rounded-full bg-white/35 accent-white backdrop-blur"
              />
            </div>
            <div className="grid gap-6">
              <div className="relative min-h-[230px] overflow-hidden rounded-[30px]">
                <Image src="/assets/equipe-debarras.jpg" alt="Équipe de débarras en intervention" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
              <div className="glass rounded-[30px] p-8">
                <h3 className="text-2xl font-semibold">Slider interactif</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  Déplacez le curseur de l'image principale pour comparer le jardin avant et après l'intervention. L'effet reste léger, rapide et compatible mobile.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </MotionSection>

      <MotionSection className="bg-[var(--forest-deep)] py-24 text-white md:py-32">
        <div className="section-shell">
          <SectionTitle eyebrow="Process" title="Quatre étapes, une exécution fluide." titleClassName="text-white" />
          <div className="relative grid gap-5 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-white/18 md:block" />
            {process.map((step, index) => (
              <motion.div key={step} variants={fadeUp} className="relative rounded-[28px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur">
                <span className="grid size-12 place-items-center rounded-full bg-[var(--leaf)] text-lg font-semibold text-[var(--forest-deep)]">
                  {index + 1}
                </span>
                <h3 className="mt-7 text-xl font-semibold">{step}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  Un contact simple, des délais annoncés et un chantier rendu propre.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-24 md:py-32">
        <div className="section-shell">
          <SectionTitle eyebrow="Avis clients" title="Des retours simples, concrets, locaux." />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <motion.article key={item.name} variants={fadeUp} className="rounded-[30px] bg-white p-7 shadow-[0_24px_70px_rgba(18,36,25,0.08)]">
                <div className="mb-5 flex gap-1 text-[#e0a529]" aria-label="5 étoiles">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="leading-8 text-[var(--muted)]">"{item.text}"</p>
                <div className="mt-7">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-[var(--muted)]">{item.city}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="contact" className="bg-white py-24 md:py-32">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div variants={fadeUp}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--forest)]">Contact</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">Devis gratuit pour élagage ou débarras à Nancy.</h2>
            <div className="mt-8 grid gap-4">
              <a href={`tel:${phone}`} className="glass flex items-center gap-4 rounded-[24px] p-5 transition hover:-translate-y-1">
                <span className="grid size-12 place-items-center rounded-full bg-[var(--forest)] text-white"><Phone size={20} /></span>
                <span><strong className="block">Appel direct</strong><span className="text-[var(--muted)]">{phoneDisplay}</span></span>
              </a>
              <div className="glass flex items-center gap-4 rounded-[24px] p-5">
                <span className="grid size-12 place-items-center rounded-full bg-[var(--forest)] text-white"><Clock3 size={20} /></span>
                <span><strong className="block">Horaires</strong><span className="text-[var(--muted)]">7j/7 - 07:00 à 21:00</span></span>
              </div>
              <div className="glass flex items-center gap-4 rounded-[24px] p-5">
                <span className="grid size-12 place-items-center rounded-full bg-[var(--forest)] text-white"><MapPin size={20} /></span>
                <span><strong className="block">Zone</strong><span className="text-[var(--muted)]">Nancy et communes alentours</span></span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-[34px] bg-[#f6faf4] p-4 shadow-[0_30px_90px_rgba(18,36,25,0.12)] md:p-6">
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input aria-label="Nom" placeholder="Nom" className="focus-ring rounded-2xl border border-[#dde8dc] bg-white px-5 py-4 outline-none" />
                <input aria-label="Téléphone" placeholder="Téléphone" className="focus-ring rounded-2xl border border-[#dde8dc] bg-white px-5 py-4 outline-none" />
              </div>
              <input aria-label="Ville" placeholder="Ville / commune" className="focus-ring rounded-2xl border border-[#dde8dc] bg-white px-5 py-4 outline-none" />
              <textarea aria-label="Message" placeholder="Décrivez votre besoin : élagage, abattage, débarras..." rows={5} className="focus-ring resize-none rounded-2xl border border-[#dde8dc] bg-white px-5 py-4 outline-none" />
              <button type="button" className="focus-ring inline-flex items-center justify-center gap-3 rounded-full bg-[var(--forest)] px-7 py-4 font-semibold text-white shadow-[0_18px_38px_rgba(31,61,43,0.2)] transition hover:-translate-y-1 hover:bg-[var(--forest-deep)]">
                Demander un devis gratuit
                <ArrowRight size={19} />
              </button>
            </form>
            <iframe
              title="Carte Google Maps Nancy"
              className="mt-5 h-72 w-full rounded-[26px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Nancy%2054000&output=embed"
            />
          </motion.div>
        </div>
      </MotionSection>

      <footer className="bg-[var(--forest-deep)] py-12 text-white">
        <div className="section-shell grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-white text-[var(--forest)]"><Leaf size={19} /></span>
              <strong>Coussantien Angelo</strong>
            </div>
            <p className="max-w-md leading-7 text-white/68">
              Élagage, abattage d'arbre, débarras, nettoyage de chantier et entretien de jardin à Nancy.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Liens rapides</h3>
            <div className="grid gap-3 text-white/68">
              <a href="#services">Services</a>
              <a href="#galerie">Avant / Après</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Infos</h3>
            <div className="grid gap-3 text-white/68">
              <span>{phoneDisplay}</span>
              <span>7j/7 - 07:00 à 21:00</span>
              <span>Nancy et alentours</span>
            </div>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${whatsapp}`}
        aria-label="Contacter sur WhatsApp"
        className="fixed bottom-24 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#20b15a] text-white shadow-[0_20px_50px_rgba(32,177,90,0.35)] transition hover:-translate-y-1 md:bottom-6"
      >
        <MessageCircle size={25} />
      </a>
      <a
        href={`tel:${phone}`}
        className="fixed bottom-4 left-4 right-4 z-50 inline-flex items-center justify-center gap-3 rounded-full bg-[var(--forest)] px-5 py-4 font-semibold text-white shadow-[0_22px_50px_rgba(18,36,25,0.28)] md:hidden"
      >
        <Phone size={19} />
        Appel rapide
      </a>
    </main>
  );
}
