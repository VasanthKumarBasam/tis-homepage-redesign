import { tisAsset } from '@/lib/asset'

/** Official crest; sits on a white chip in dark mode so its colours stay true. */
export function Logo() {
  return (
    <a href="#top" className="flex shrink-0 items-center rounded-lg dark:bg-white dark:px-2 dark:py-1">
      <img
        src={tisAsset('schoolLogo.95f6e121.png')}
        alt="Tulas International School home"
        width={150}
        height={44}
        className="h-10 w-auto sm:h-11"
      />
    </a>
  )
}
