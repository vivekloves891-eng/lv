import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-blackLuxury/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold gold-text tracking-widest">
          KV
        </h1>
        <div className="space-x-8 text-sm uppercase">
          <Link href="/">Home</Link>
          <Link href="/collections">Collections</Link>
          <a href="#">Private Reserve</a>
        </div>
      </div>
    </nav>
  )
}