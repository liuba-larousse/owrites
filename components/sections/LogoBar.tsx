export default function LogoBar() {
  const companies = [
    "Proximus",
    "BNP Paribas",
    "Swiss Life",
    "Decathlon Pro",
    "Dexia",
    "Belnet",
    "Swisscom",
    "AG Insurance",
  ];

  return (
    <section className="border-y border-gray-100 bg-gray-50/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-gray-400 mb-8">
          Ils font confiance à Owrites
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {companies.map((name) => (
            <span
              key={name}
              className="text-base font-display font-semibold text-gray-300 hover:text-gray-400 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
