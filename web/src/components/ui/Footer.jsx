import Logo from '@assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="p-8 ">
      <div className="mb-4 flex justify-between">
        <div className="flex gap-2">
          <img src={Logo} alt="Logo" />
          <span className="text-2xl font-bold tracking-tighter">ACME</span>
        </div>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/asynched"
          >
            GitHub
          </a>
          <Link to="/">Terms</Link>
          <Link to="/">Shipping & Returns</Link>
        </div>
      </div>
      <div className="text-gray-600 text-sm flex justify-between gap-2">
        <span className="text-gray-600">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/asynched"
            className="hover:underline"
          >
            @asynched
          </a>{' '}
          - 2022
        </span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://vercel.com"
          className="hover:underline"
        >
          Original layout by the awesome guys @Vercel! ❤️
        </a>
      </div>
    </footer>
  )
}
