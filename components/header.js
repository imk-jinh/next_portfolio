import Link from 'next/link';
import Dark_Mode from './dark-mode';

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" legacyBehavior>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Jinhyung's CHANNEL</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" legacyBehavior>
              {/* 13버전 이후부터 Link태그 안에 a태그 넣는것 지원하지 않음 그래서 넣으려면 legacyBehavior 사용 */}
              <a className="mr-5 hover:text-gray-900">Home</a>
            </Link>
            <Link href="/projects" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">Projects</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="mr-5 hover:text-gray-900">About</a>
            </Link>
            <a
              href="https://www.instagram.com/imk.h_/"
              className="mr-5 hover:text-gray-900"
            >
              Contact
            </a>
          </nav>
          <Dark_Mode></Dark_Mode>
        </div>
      </header>
    </>
  );
}
