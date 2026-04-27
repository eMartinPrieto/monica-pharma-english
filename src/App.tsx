import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LessonPage from './pages/LessonPage'
import AppShell from './components/AppShell'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <AppShell>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lesson/:lessonId" element={<LessonPage />} />
      </Routes>
    </AppShell>
  )
}
