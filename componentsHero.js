export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}>
      
      <div className="bg-blackLuxury/70 p-12">
        <h1 className="text-6xl md:text-8xl font-luxury gold-text tracking-widest">
          KV
        </h1>
        <p className="mt-6 text-xl uppercase tracking-[6px]">
          Exclusivity Redefined
        </p>
      </div>
    </section>
  )
}