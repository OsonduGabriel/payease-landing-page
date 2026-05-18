import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import NavBar from './components/NavBar'
import './App.css'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import BackToTop from './components/BackToTop'
import SignUp from './components/SignUp'
import Footer from './components/Footer'

function App() {
 return (
    <>
        <NavBar />
        <main>
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <SignUp />
        </main>
        <Footer />
        <BackToTop />
    </>
 )
  
}

export default App
