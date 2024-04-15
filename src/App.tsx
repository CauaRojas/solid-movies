import Header from './components/Header'
import { isDarkMode } from './utils/dark-mode'

function App() {
    return (
        <main
            class="dark:bg-black h-full w-full transition-all duration-500"
            // prettier-ignore
            classList={{ "dark": isDarkMode() }}
        >
            <Header />
            <h1 class="dark:text-white text-4xl">Hello World!</h1>
        </main>
    )
}

export default App
