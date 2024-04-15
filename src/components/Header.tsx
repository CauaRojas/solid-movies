import { DarkModeToggle } from './DarkModeToggle'

export default function Header() {
    return (
        <header class="dark:text-white flex justify-between p-1">
            <div class="w-1/3">Icon</div>
            <h3 class="w-1/3 text-center text-xl">Bem vindo ao Solid Movies</h3>
            <DarkModeToggle className="w-1/3 text-right" />
        </header>
    )
}
