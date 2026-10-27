import { Helmet } from 'react-helmet-async'
import {
  Mail,
  Phone,
  MessageCircle,
  Globe,
  MapPin,
  IndianRupee,
  Calendar,
  GraduationCap,
  Briefcase,
  Users,
  Clock,
  Paperclip,
  FileText,
  Send,
  Layers,
} from 'lucide-react'
import {
  SITE_URL,
  EMAIL,
  PHONE,
  APPLY_URL,
  PLAIN_EMAIL_URL,
  TEL_URL,
  WHATSAPP_URL,
  DEADLINE_TEXT,
} from './config.js'

const TITLE = 'Careers | Freedom Odisha – Cluster Development Executive'
const DESCRIPTION =
  'Freedom Odisha invites applications for one Cluster Development Executive (CDE) for the Bhadrak Agro Jaggery Products Cluster, Bhadrak, Odisha under the SFURTI scheme. Postgraduate, 25–40 years, ₹25,000 per month.'

const NAV = [
  { href: '#vacancy', label: 'Vacancy Details' },
  { href: '#eligibility', label: 'Eligibility' },
  { href: '#contact', label: 'Contact' },
]

const eligibility = [
  {
    icon: GraduationCap,
    title: 'Educational Qualification',
    items: ['Postgraduate qualification.'],
  },
  {
    icon: Briefcase,
    title: 'Experience',
    items: [
      'At least one year of experience in cluster development, community development, rural development, or a similar field.',
    ],
  },
  {
    icon: FileText,
    title: 'Additional Skills',
    items: [
      'Report writing and documentation.',
      'Good communication skills.',
      'Computer knowledge.',
    ],
  },
  {
    icon: Users,
    title: 'Other Requirements',
    items: ['Willingness to travel extensively.', 'Community interaction is essential.'],
  },
]

const highlights = [
  { label: 'Position', value: 'Cluster Development Executive (CDE)' },
  { label: 'Vacancies', value: 'One' },
  { label: 'Location', value: 'Bhadrak, Odisha' },
  { label: 'Monthly Salary', value: '₹25,000' },
  { label: 'Age Limit', value: '25–40 years' },
]

function ApplyButton({ className = 'btn-green', children = 'Apply Now', ...rest }) {
  return (
    <a href={APPLY_URL} className={className} {...rest}>
      <Send size={18} aria-hidden="true" />
      {children}
    </a>
  )
}

function WhatsAppButton({ className = 'btn-outline', children = 'Contact on WhatsApp', ...rest }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...rest}
    >
      <MessageCircle size={18} aria-hidden="true" />
      {children}
    </a>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Freedom Odisha – home">
          <img src="./favicon.svg" alt="" width="36" height="36" className="h-9 w-9" />
          <span className="leading-tight">
            <span className="block text-base font-bold text-navy-900">Freedom Odisha</span>
            <span className="block text-[11px] font-medium uppercase tracking-wide text-leaf-700">
              Careers
            </span>
          </span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-slate-700 hover:text-navy-900"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <ApplyButton className="btn-green !min-h-[40px] !px-4">Apply Now</ApplyButton>
      </div>
      <nav
        aria-label="Primary mobile"
        className="flex justify-around border-t border-slate-100 bg-slate-50 md:hidden"
      >
        {NAV.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="flex min-h-[44px] items-center px-2 text-sm font-medium text-slate-700"
          >
            {n.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="border-b border-slate-200 bg-navy-50" aria-labelledby="hero-title">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <p className="inline-block rounded border border-leaf-600 bg-white px-2.5 py-1 text-xs font-bold tracking-widest text-leaf-700">
          RECRUITMENT ANNOUNCEMENT
        </p>
        <h1
          id="hero-title"
          className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-navy-900 sm:text-4xl lg:text-5xl"
        >
          We're Hiring: Cluster Development Executive (CDE)
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
          Freedom, Free Duty of Mankind, invites applications from eligible candidates for the
          Bhadrak Agro Jaggery Products Cluster under the SFURTI scheme.
        </p>

        <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {highlights.map((h) => (
            <div key={h.label} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                {h.label}
              </dt>
              <dd className="mt-1 text-base font-bold text-navy-900">{h.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ApplyButton className="btn-green sm:min-w-[180px]" />
          <WhatsAppButton className="btn-outline sm:min-w-[220px]" />
        </div>
        <p className="mt-3 text-sm text-slate-600">
          Remember to attach your CV manually before sending the email.
        </p>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="vacancy" aria-labelledby="about-title" className="mx-auto max-w-6xl px-4 py-12">
      <h2 id="about-title" className="section-title">
        About the Recruitment
      </h2>
      <div className="mt-2 h-1 w-14 rounded bg-leaf-600" aria-hidden="true" />
      <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700">
        Freedom, Free Duty of Mankind (Implementing Agency), under the aegis of KVIC, Bhubaneswar,
        as Nodal Agency for SFURTI, invites applications for one Cluster Development Executive for
        the Bhadrak Agro Jaggery Products Cluster, Bhadrak, Odisha.
      </p>
    </section>
  )
}

function Eligibility() {
  return (
    <section
      id="eligibility"
      aria-labelledby="elig-title"
      className="border-y border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 id="elig-title" className="section-title">
          Eligibility Criteria
        </h2>
        <div className="mt-2 h-1 w-14 rounded bg-leaf-600" aria-hidden="true" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {eligibility.map(({ icon: Icon, title, items }) => (
            <article key={title} className="card">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-navy-900">
                <Icon size={20} className="text-leaf-600" aria-hidden="true" />
                {title}
              </h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-700 marker:text-leaf-600">
                {items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SalaryLocation() {
  const rows = [
    { icon: IndianRupee, label: 'Monthly Remuneration', value: '₹25,000' },
    { icon: Users, label: 'Age Requirement', value: '25–40 years' },
    { icon: Layers, label: 'Cluster', value: 'Bhadrak Agro Jaggery Products Cluster' },
    {
      icon: MapPin,
      label: 'Work Location',
      value: 'Talpada Samil Chaka, Ichhapur, Bhadrak – 756117, Odisha',
    },
    { icon: Clock, label: 'Application Deadline', value: DEADLINE_TEXT },
  ]
  return (
    <section aria-labelledby="salary-title" className="mx-auto max-w-6xl px-4 py-12">
      <h2 id="salary-title" className="section-title">
        Salary and Job Location
      </h2>
      <div className="mt-2 h-1 w-14 rounded bg-leaf-600" aria-hidden="true" />
      <dl className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white shadow-sm">
        {rows.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-6">
            <dt className="flex items-center gap-2 text-sm font-semibold text-slate-600 sm:w-64">
              <Icon size={18} className="text-leaf-600" aria-hidden="true" />
              {label}
            </dt>
            <dd className="font-semibold text-navy-900">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function HowToApply() {
  const steps = [
    'Prepare your updated biodata or CV.',
    'Click the Apply Now button to open your default email application.',
    'Attach your CV and submit your application to the official recruitment email address.',
  ]
  return (
    <section
      id="apply"
      aria-labelledby="apply-title"
      className="border-y border-slate-200 bg-navy-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 id="apply-title" className="section-title">
          How to Apply
        </h2>
        <div className="mt-2 h-1 w-14 rounded bg-leaf-600" aria-hidden="true" />
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s} className="card flex gap-4">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <p className="text-slate-700">
                <span className="sr-only">Step {i + 1}: </span>
                {s}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-lg border border-leaf-600 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">
            Send your application to
          </p>
          <p className="mt-1 break-all text-xl font-bold text-navy-900 sm:text-2xl">{EMAIL}</p>
          <p className="mt-3 flex items-start gap-2 text-sm text-slate-700">
            <Paperclip size={18} className="mt-0.5 shrink-0 text-leaf-600" aria-hidden="true" />
            Please attach your CV manually. Email links cannot attach files from your device
            automatically.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ApplyButton className="btn-green sm:min-w-[180px]" />
            <a
              href={PLAIN_EMAIL_URL}
              className="text-sm font-semibold text-navy-900 underline underline-offset-4 hover:text-leaf-700"
            >
              Button not working? Email {EMAIL} directly
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-4 py-12">
      <h2 id="contact-title" className="section-title">
        Contact
      </h2>
      <div className="mt-2 h-1 w-14 rounded bg-leaf-600" aria-hidden="true" />
      <div className="card mt-6">
        <h3 className="text-lg font-bold text-navy-900">Freedom Odisha</h3>
        <ul className="mt-3 space-y-2 text-slate-700">
          <li className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <Globe size={18} className="text-leaf-600" aria-hidden="true" />
            <span>Website:</span>
            <a href={SITE_URL} className="break-all font-medium text-navy-900 underline">
              {SITE_URL}
            </a>
          </li>
          <li className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <Phone size={18} className="text-leaf-600" aria-hidden="true" />
            <span>Phone:</span>
            <a href={TEL_URL} className="font-medium text-navy-900 underline">
              {PHONE}
            </a>
          </li>
          <li className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <MessageCircle size={18} className="text-leaf-600" aria-hidden="true" />
            <span>WhatsApp:</span>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-navy-900 underline"
            >
              {PHONE}
            </a>
          </li>
          <li className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
            <Mail size={18} className="text-leaf-600" aria-hidden="true" />
            <span>Email:</span>
            <a href={PLAIN_EMAIL_URL} className="font-medium text-navy-900 underline">
              {EMAIL}
            </a>
          </li>
        </ul>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <a href={TEL_URL} className="btn-primary">
            <Phone size={18} aria-hidden="true" />
            Call Now
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-green">
            <MessageCircle size={18} aria-hidden="true" />
            Chat on WhatsApp
          </a>
          <a href={PLAIN_EMAIL_URL} className="btn-outline">
            <Mail size={18} aria-hidden="true" />
            Send Email
          </a>
          <a href={SITE_URL} className="btn-outline">
            <Globe size={18} aria-hidden="true" />
            Visit Website
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© Freedom Odisha | Official Recruitment Information</p>
        <a href={SITE_URL} className="break-all font-medium underline underline-offset-4">
          {SITE_URL}
        </a>
      </div>
    </footer>
  )
}

function StickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white p-2 shadow-[0_-2px_8px_rgba(0,0,0,0.08)] md:hidden"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
    >
      <ApplyButton className="btn-green" />
      <WhatsAppButton className="btn-outline" aria-label="Contact on WhatsApp">
        WhatsApp
      </WhatsAppButton>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:site_name" content="Freedom Odisha" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Helmet>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to main content
      </a>
      <div id="top" />
      <Header />
      <main id="main" className="pb-20 md:pb-0">
        <Hero />
        <About />
        <Eligibility />
        <SalaryLocation />
        <HowToApply />
        <Contact />
      </main>
      <Footer />
      <div className="h-16 md:hidden" aria-hidden="true" />
      <StickyBar />
    </>
  )
}
