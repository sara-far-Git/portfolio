import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Work } from './components/Work'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
