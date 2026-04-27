import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LessonPage from './pages/LessonPage'
import AppShell from './components/AppShell'

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
      </Routes>
    </AppShell>
  )
}
