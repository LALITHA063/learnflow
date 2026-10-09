'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Bell,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Flame,
  Home,
  LayoutGrid,
  Menu,
  Play,
  Plus,
  Search,
  Sparkles,
  TrendingUp,
  Trophy,
  Users,
  X,
} from 'lucide-react'

type Course = {
  title: string
  category: string
  categoryTone: string
  instructor: string
  lessons: string
  duration: string
  progress: number
  accent: string
  illustration: string
}

const courses: Course[] = [
  {
    title: 'Introduction to Product Design',
    category: 'Design',
    categoryTone: 'bg-[#e9f3ed] text-[#397455]',
    instructor: 'Maya Chen',
    lessons: '12 lessons',
    duration: '4h 20m',
    progress: 68,
    accent: 'bg-[#d6e8df]',
    illustration: '✦',
  },
  {
    title: 'Writing that moves people',
    category: 'Writing',
    categoryTone: 'bg-[#f4e8da] text-[#a8663d]',
    instructor: 'Noah Williams',
    lessons: '8 lessons',
    duration: '2h 45m',
    progress: 32,
    accent: 'bg-[#f2dfcc]',
    illustration: 'Aa',
  },
  {
    title: 'The fundamentals of photography',
    category: 'Creativity',
    categoryTone: 'bg-[#e8e5f3] text-[#655b96]',
    instructor: 'Lena Ortiz',
    lessons: '16 lessons',
    duration: '6h 10m',
    progress: 0,
    accent: 'bg-[#e4e0f1]',
    illustration: '◌',
  },
]

const navItems = [
  { label: 'Overview', icon: Home },
  { label: 'Explore', icon: Compass },
  { label: 'My learning', icon: BookOpen },
  { label: 'Community', icon: Users },
]

export function LearningDashboard() {
  const [activeNav, setActiveNav] = useState('Overview')
  const [search, setSearch] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [saved, setSaved] = useState<string[]>([])

  const filteredCourses = useMemo(() => {
    const query = search.toLowerCase().trim()
    if (!query) return courses
    return courses.filter((course) =>
      `${course.title} ${course.category} ${course.instructor}`.toLowerCase().includes(query),
    )
  }, [search])

  const toggleSaved = (title: string) => {
    setSaved((current) =>
      current.includes(title) ? current.filter((item) => item !== title) : [...current, title],
    )
  }

  return (
    <div className="min-h-screen bg-[#f8f8f5] text-[#1f3029]">
      <aside className={`fixed inset-y-0 left-0 z-30 flex w-[248px] flex-col border-r border-[#e5e8e2] bg-[#fbfcf9] px-5 py-6 transition-transform lg:translate-x-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="mb-12 flex items-center justify-between px-2">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#255c47] text-white"><Sparkles size={16} /></div>
            <span className="text-[19px] font-semibold tracking-[-0.04em]">luma</span>
          </div>
          <button className="rounded-lg p-1 text-[#7b8981] lg:hidden" onClick={() => setIsMenuOpen(false)} aria-label="Close menu"><X size={19} /></button>
        </div>
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9ba8a0]">Workspace</p>
        <nav className="space-y-1">
          {navItems.map(({ label, icon: Icon }) => (
            <button key={label} onClick={() => { setActiveNav(label); setIsMenuOpen(false) }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-colors ${activeNav === label ? 'bg-[#e5f0e9] text-[#255c47]' : 'text-[#718078] hover:bg-[#f0f4ef]'}`}>
              <Icon size={17} strokeWidth={activeNav === label ? 2.2 : 1.8} />{label}
              {label === 'Community' && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#df9063]" />}
            </button>
          ))}
        </nav>
        <div className="my-8 h-px bg-[#e6ebe5]" />
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9ba8a0]">Your space</p>
        <nav className="space-y-1">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-[#718078] hover:bg-[#f0f4ef]"><Trophy size={17} />Achievements</button>
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-[#718078] hover:bg-[#f0f4ef]"><LayoutGrid size={17} />Collections</button>
        </nav>
        <div className="mt-auto rounded-2xl bg-[#e8f1eb] p-4">
          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#397455]"><Flame size={16} /></div>
          <p className="text-[13px] font-semibold text-[#255c47]">Keep your streak alive</p>
          <p className="mt-1 text-[11px] leading-4 text-[#6d897a]">You&apos;re 12 minutes away from your next milestone.</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white"><div className="h-full w-[72%] rounded-full bg-[#70a889]" /></div>
        </div>
        <div className="mt-5 flex items-center gap-2.5 border-t border-[#e6ebe5] pt-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d9b49a] text-[11px] font-bold text-[#754b36]">AR</div>
          <div><p className="text-xs font-semibold">Alex Rivera</p><p className="text-[10px] text-[#8b9890]">Learner</p></div>
          <ChevronDown className="ml-auto text-[#9ba8a0]" size={15} />
        </div>
      </aside>

      {isMenuOpen && <button className="fixed inset-0 z-20 bg-[#1f3029]/20 lg:hidden" onClick={() => setIsMenuOpen(false)} aria-label="Close navigation" />}
      <main className="lg:ml-[248px]">
        <header className="flex h-[76px] items-center justify-between border-b border-[#e5e8e2] bg-[#fbfcf9]/80 px-5 backdrop-blur sm:px-8 lg:px-12">
          <button className="rounded-lg p-2 text-[#617168] lg:hidden" onClick={() => setIsMenuOpen(true)} aria-label="Open navigation"><Menu size={20} /></button>
          <div className="relative hidden w-full max-w-[280px] sm:block"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da9a2]" size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search courses..." className="h-9 w-full rounded-lg border-0 bg-[#f0f3ef] pl-9 pr-3 text-xs text-[#1f3029] outline-none placeholder:text-[#9da9a2] focus:ring-2 focus:ring-[#b8d7c2]" /></div>
          <div className="ml-auto flex items-center gap-4"><button className="relative text-[#718078]" aria-label="Notifications"><Bell size={18} /><span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[#df9063]" /></button><div className="h-7 w-7 rounded-full bg-[#d9b49a] p-1 text-center text-[9px] font-bold leading-5 text-[#754b36]">AR</div></div>
        </header>

        <div className="mx-auto max-w-[1180px] px-5 py-8 sm:px-8 lg:px-12 lg:py-11">
          <section className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-medium text-[#829088]">Tuesday, October 9, 2026</p><h1 className="text-[32px] font-semibold tracking-[-0.055em] text-[#1f3029] sm:text-[38px]">Good morning, Alex <span className="text-[#7caa8f]">✦</span></h1><p className="mt-2 text-sm text-[#7f8d85]">Small steps add up. What will you learn today?</p></div><button className="flex w-fit items-center gap-2 rounded-xl bg-[#255c47] px-4 py-2.5 text-xs font-semibold text-white shadow-[0_5px_12px_rgba(37,92,71,0.16)] transition hover:bg-[#1c4c3a]"><Plus size={15} /> Add a goal</button></section>

          <section className="mb-11 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="relative overflow-hidden rounded-[20px] bg-[#255c47] p-6 text-white sm:p-8"><div className="relative z-10 max-w-[360px]"><div className="mb-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#a6cbb5]"><Play size={12} fill="currentColor" /> Continue learning</div><h2 className="text-[25px] font-semibold leading-[1.15] tracking-[-0.04em] sm:text-[29px]">Introduction to<br />Product Design</h2><p className="mt-3 text-xs text-[#b8d5c1]">Lesson 8 of 12 · Designing with intention</p><div className="mt-7 flex items-center gap-3"><div className="h-1.5 w-32 overflow-hidden rounded-full bg-[#507e6b]"><div className="h-full w-[68%] rounded-full bg-[#d1e5d7]" /></div><span className="text-[11px] text-[#c5dccb]">68% complete</span></div><button className="mt-7 flex items-center gap-2 rounded-lg bg-[#eaf4ed] px-4 py-2.5 text-xs font-semibold text-[#255c47] hover:bg-white">Resume lesson <ArrowRight size={14} /></button></div><div className="absolute -right-5 -top-9 h-52 w-52 rounded-full border-[1px] border-[#6b9e83]/40" /><div className="absolute -bottom-24 right-14 h-56 w-56 rounded-full border-[1px] border-[#6b9e83]/40" /><div className="absolute right-10 top-9 hidden text-[100px] font-light text-[#6b9e83]/40 sm:block">✦</div></div>
            <div className="rounded-[20px] border border-[#e4e9e3] bg-[#fbfcf9] p-6 sm:p-7"><div className="mb-5 flex items-start justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9aa69e]">This week</p><p className="mt-2 text-[28px] font-semibold tracking-[-0.05em]">2h 40m</p></div><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f3eadb] text-[#ba7a4c]"><Clock3 size={17} /></div></div><div className="flex h-20 items-end gap-2 border-b border-[#e9ede8] pb-2">{[35, 48, 26, 64, 42, 78, 32].map((height, index) => <div key={index} className="flex flex-1 flex-col items-center gap-1.5"><div className={`w-full rounded-t-md ${index === 5 ? 'bg-[#70a889]' : 'bg-[#d8e7dc]'}`} style={{ height: `${height}%` }} /><span className="text-[9px] text-[#a1aca4]">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</span></div>)}</div><p className="mt-4 flex items-center gap-1.5 text-[11px] text-[#7e8d83]"><TrendingUp size={13} className="text-[#70a889]" /> 24% more than last week</p></div>
          </section>

          <section><div className="mb-5 flex items-center justify-between"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9aa69e]">Curated for you</p><h2 className="mt-1.5 text-[21px] font-semibold tracking-[-0.04em]">Keep exploring</h2></div><button className="flex items-center gap-1.5 text-xs font-semibold text-[#397455] hover:text-[#255c47]">View all <ArrowRight size={14} /></button></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filteredCourses.map((course) => <article key={course.title} className="group overflow-hidden rounded-[17px] border border-[#e5e9e4] bg-[#fbfcf9] transition hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(36,69,52,0.08)]"><div className={`relative flex h-[130px] items-center justify-center ${course.accent}`}><span className="text-[64px] font-semibold tracking-[-0.1em] text-white/75">{course.illustration}</span><button onClick={() => toggleSaved(course.title)} aria-label={saved.includes(course.title) ? `Remove ${course.title} from saved` : `Save ${course.title}`} className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-[#397455] backdrop-blur transition hover:bg-white ${saved.includes(course.title) ? 'text-[#ba7a4c]' : ''}`}>{saved.includes(course.title) ? <Check size={15} /> : <Plus size={16} />}</button></div><div className="p-5"><span className={`rounded-md px-2 py-1 text-[10px] font-semibold ${course.categoryTone}`}>{course.category}</span><h3 className="mt-3 min-h-[42px] text-[15px] font-semibold leading-5 tracking-[-0.02em]">{course.title}</h3><p className="mt-2 text-[11px] text-[#8b9890]">By {course.instructor}</p><div className="mt-4 flex items-center gap-3 text-[10px] text-[#87948c]"><span>{course.lessons}</span><span className="h-1 w-1 rounded-full bg-[#bac4bd]" /><span>{course.duration}</span></div>{course.progress > 0 && <div className="mt-4"><div className="mb-1.5 flex justify-between text-[10px] text-[#839188]"><span>In progress</span><span>{course.progress}%</span></div><div className="h-1 overflow-hidden rounded-full bg-[#e5ece6]"><div className="h-full rounded-full bg-[#70a889]" style={{ width: `${course.progress}%` }} /></div></div>}</div></article>)}</div>{filteredCourses.length === 0 && <div className="rounded-2xl border border-dashed border-[#d6dfd7] py-12 text-center text-sm text-[#87948c]">No courses found for “{search}”.</div>}</section>
          <section className="mt-12 border-t border-[#e5e9e4] pt-8"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9aa69e]">Your momentum</p><h2 className="mt-1.5 text-[21px] font-semibold tracking-[-0.04em]">You&apos;re building a habit</h2></div><div className="flex gap-8"><div><p className="text-xl font-semibold">7</p><p className="mt-1 text-[10px] text-[#89968e]">day streak</p></div><div><p className="text-xl font-semibold">4</p><p className="mt-1 text-[10px] text-[#89968e]">courses started</p></div><div><p className="text-xl font-semibold">12</p><p className="mt-1 text-[10px] text-[#89968e]">lessons finished</p></div></div></div></section>
        </div>
      </main>
    </div>
  )
}

export default LearningDashboard

