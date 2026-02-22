import Link from "next/link"

export default function CollectionsPreview() {
  return (
    <section className="py-32 bg-blackLuxury text-center">
      <h2 className="text-4xl gold-text mb-16">Collections</h2>
      
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
        {["Frontier", "Ranch Elite", "Private Reserve"].map((item) => (
          <div key={item} className="border border-goldLuxury p-10 hover:scale-105 transition duration-500">
            <h3 className="text-2xl mb-4">{item}</h3>
            <p className="text-sm opacity-70 mb-6">
              Ultra-luxury western craftsmanship.
            </p>
            <Link href="/collections" className="gold-text uppercase text-sm">
              Explore
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}