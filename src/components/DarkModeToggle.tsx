import { isDarkMode, setDarkMode } from '../utils/dark-mode'

type props = {
    className?: string
}

export function DarkModeToggle({ className }: props) {
    return (
        <button
            class={'dark:text-white ' + className}
            onclick={() => {
                setDarkMode(!isDarkMode())
            }}
        >
            {isDarkMode() ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
        </button>
    )
}
