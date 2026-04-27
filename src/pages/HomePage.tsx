import { Link } from 'react-router-dom'
import { lessons } from '../data/lessons'
import LessonCard from '../components/LessonCard'
import PixelScene from '../components/PixelScene'

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PixelScene />
      <section className="pixel-card rounded-2xl bg-white p-5">
        <p className="text-sm font-bold uppercase tracking-wider text-pink-600">Curso inicial</p>
        <h2 className="mt-1 text-2xl font-black text-gray-900">Inglés práctico para atender en farmacia</h2>
        <p className="mt-3 text-sm leading-6 text-gray-700">Lecciones cortas, tests rápidos y roleplays de mostrador. Todo pensado para practicar frases reales con clientes en inglés.</p>
      </section>
      <section className="space-y-4">{lessons.map((lesson, index) => (<Link key={lesson.id} to={`/lesson/${lesson.id}`} className="block"><LessonCard lesson={lesson} index={index} /></Link>))}</section>
    </div>
  )
}
