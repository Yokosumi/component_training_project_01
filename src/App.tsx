import { Banner } from './components/Banner'
import { HeroSection } from './components/HeroSection'
import { Nav } from './components/Nav'

function App() {
    return (
        <>
            <Nav />
            <Banner>
                <HeroSection />
            </Banner>
        </>
    )
}

export default App
