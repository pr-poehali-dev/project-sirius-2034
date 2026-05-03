import { Pill } from "./Pill";

const cars = [
  {
    brand: "Mercedes-Benz",
    model: "W140 S600",
    year: "1994",
    price: "18 500 000 ₽",
    engine: "6.0L V12 394 л.с.",
    mileage: "142 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/a3e040ef-6857-4e62-9a79-05d7b2035ca8.jpg",
  },
  {
    brand: "Mercedes-Benz",
    model: "W124 E500",
    year: "1993",
    price: "5 800 000 ₽",
    engine: "5.0L V8 326 л.с.",
    mileage: "98 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/3c6be5f8-4710-4380-9033-9fac1fc06e65.jpg",
  },
  {
    brand: "Mercedes-Benz",
    model: "G-Class 500",
    year: "2001",
    price: "12 200 000 ₽",
    engine: "5.0L V8 296 л.с.",
    mileage: "87 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/03dfb942-02e2-4491-b105-8b774a583b48.jpg",
  },
  {
    brand: "BMW",
    model: "E30 M3",
    year: "1988",
    price: "22 000 000 ₽",
    engine: "2.3L I4 200 л.с.",
    mileage: "61 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/2aa6072c-3810-467d-8f1d-38f2e71feecb.jpg",
  },
  {
    brand: "BMW",
    model: "M1",
    year: "1980",
    price: "85 000 000 ₽",
    engine: "3.5L I6 277 л.с.",
    mileage: "34 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/48bc4dea-bf9e-4576-b60a-0451237ca313.jpg",
  },
  {
    brand: "BMW",
    model: "E39 M5",
    year: "2001",
    price: "9 400 000 ₽",
    engine: "5.0L V8 400 л.с.",
    mileage: "110 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/3b6663a9-c268-4d44-873d-06984cd0e143.jpg",
  },
  {
    brand: "Audi",
    model: "Quattro Sport",
    year: "1984",
    price: "48 000 000 ₽",
    engine: "2.1L I5 Turbo 306 л.с.",
    mileage: "47 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/822de0c7-509b-499b-b89e-ab6bbed2d41d.jpg",
  },
  {
    brand: "Audi",
    model: "V8 Quattro",
    year: "1991",
    price: "3 200 000 ₽",
    engine: "3.6L V8 250 л.с.",
    mileage: "154 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/bda68d8c-0ec4-4be6-a966-e152b9196c5a.jpg",
  },
  {
    brand: "Audi",
    model: "A8 L W12",
    year: "2003",
    price: "7 600 000 ₽",
    engine: "6.0L W12 450 л.с.",
    mileage: "131 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/3baa0006-b345-41f0-853e-6c8980cfa0cf.jpg",
  },
];

export function Catalog() {
  return (
    <section id="catalog" className="py-24 px-4 container mx-auto">
      <div className="text-center mb-16">
        <Pill className="mb-6">9 АВТОМОБИЛЕЙ В НАЛИЧИИ</Pill>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient">
          Наш <i className="font-light">каталог</i>
        </h2>
        <p className="font-mono text-sm text-foreground/60 mt-6 max-w-[480px] mx-auto">
          Каждый автомобиль прошёл проверку истории, технический осмотр и оценку состояния
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.model}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 hover:border-white/25 transition-all duration-300 cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest">
                    {car.brand} · {car.year}
                  </p>
                  <h3 className="font-sentient text-xl mt-0.5">{car.model}</h3>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest">цена</p>
                  <p className="font-sentient text-lg text-primary">{car.price}</p>
                </div>
              </div>
              <div className="flex gap-4 mt-4 pt-4 border-t border-white/10">
                <div>
                  <p className="font-mono text-xs text-foreground/40 uppercase tracking-wider">Двигатель</p>
                  <p className="font-mono text-xs text-foreground/80 mt-0.5">{car.engine}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-foreground/40 uppercase tracking-wider">Пробег</p>
                  <p className="font-mono text-xs text-foreground/80 mt-0.5">{car.mileage}</p>
                </div>
              </div>
              <button className="mt-4 w-full font-mono text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground border border-white/10 hover:border-white/30 py-2 px-4 rounded transition-all duration-150">
                [ Узнать подробнее ]
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
