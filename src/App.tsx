import { isDarkMode, setDarkMode } from './utils/dark-mode'

function App() {
    return (
        <main
            class="dark:bg-black h-full w-full transition-all duration-500"
            // prettier-ignore
            classList={{ "dark": isDarkMode() }}
        >
            <h1 class="dark:text-white text-4xl">Hello World!</h1>
            <button
                class="dark:text-white"
                onclick={() => {
                    setDarkMode(!isDarkMode())
                }}
            >
                AAAAA
            </button>
        </main>
    )
}

export default App
