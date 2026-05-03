import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface Car {
  brand: string;
  model: string;
  year: string;
  price: string;
  engine: string;
  mileage: string;
  image: string;
  description: string;
}

const cars: Car[] = [
  {
    brand: "Mercedes-Benz",
    model: "W140 S600",
    year: "1994",
    price: "18 500 000 ₽",
    engine: "6.0L V12 394 л.с.",
    mileage: "142 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/a3e040ef-6857-4e62-9a79-05d7b2035ca8.jpg",
    description: "Флагман Mercedes своей эпохи. Легендарный V12, абсолютная тишина в салоне и ощущение неуязвимости — это W140. Один из самых надёжных и престижных седанов 90-х.",
  },
  {
    brand: "Mercedes-Benz",
    model: "W124 E500",
    year: "1993",
    price: "5 800 000 ₽",
    engine: "5.0L V8 326 л.с.",
    mileage: "98 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/3c6be5f8-4710-4380-9033-9fac1fc06e65.jpg",
    description: "Редкая заряженная версия W124 с мотором от SL500. Построен вручную в Affalterbach. Один из самых быстрых седанов своего времени и невероятно редкий экземпляр.",
  },
  {
    brand: "Mercedes-Benz",
    model: "G-Class 500",
    year: "2001",
    price: "12 200 000 ₽",
    engine: "5.0L V8 296 л.с.",
    mileage: "87 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/03dfb942-02e2-4491-b105-8b774a583b48.jpg",
    description: "Культовый внедорожник с военными корнями и статусом иконы. Рамная конструкция, три блокировки дифференциала и неповторимый силуэт, не менявшийся десятилетиями.",
  },
  {
    brand: "BMW",
    model: "E30 M3",
    year: "1988",
    price: "22 000 000 ₽",
    engine: "2.3L I4 200 л.с.",
    mileage: "61 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/2aa6072c-3810-467d-8f1d-38f2e71feecb.jpg",
    description: "Легенда гоночных трасс и объект коллекционирования по всему миру. Высокооборотный мотор S14, расширенные арки и точнейший задний привод. Состояние — на уровне нового.",
  },
  {
    brand: "BMW",
    model: "M1",
    year: "1980",
    price: "85 000 000 ₽",
    engine: "3.5L I6 277 л.с.",
    mileage: "34 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/48bc4dea-bf9e-4576-b60a-0451237ca313.jpg",
    description: "Единственный среднемоторный суперкар BMW в истории. Разработан совместно с Lamborghini, кузов от Giugiaro. Один из 453 экземпляров — редкость мирового масштаба.",
  },
  {
    brand: "BMW",
    model: "E39 M5",
    year: "2001",
    price: "9 400 000 ₽",
    engine: "5.0L V8 400 л.с.",
    mileage: "110 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/3b6663a9-c268-4d44-873d-06984cd0e143.jpg",
    description: "Лучший M5 всех времён по версии большинства экспертов. Атмосферный V8 S62 с характерным воем, идеальный баланс и сдержанный облик бизнес-седана. Драйверский шедевр.",
  },
  {
    brand: "Audi",
    model: "Quattro Sport",
    year: "1984",
    price: "48 000 000 ₽",
    engine: "2.1L I5 Turbo 306 л.с.",
    mileage: "47 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/822de0c7-509b-499b-b89e-ab6bbed2d41d.jpg",
    description: "Короткобазная омологационная версия ралли-легенды. Именно с этой машины началась эра полного привода в автоспорте. Выпущено всего 214 экземпляров. Инвестиция на десятилетия.",
  },
  {
    brand: "Audi",
    model: "V8 Quattro",
    year: "1991",
    price: "3 200 000 ₽",
    engine: "3.6L V8 250 л.с.",
    mileage: "154 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/bda68d8c-0ec4-4be6-a966-e152b9196c5a.jpg",
    description: "Первый Audi с восьмицилиндровым мотором и предшественник A8. Полный привод, 5-ступенчатый автомат и настоящий немецкий люкс 90-х. Редкий и крепкий экземпляр.",
  },
  {
    brand: "Audi",
    model: "A8 L W12",
    year: "2003",
    price: "7 600 000 ₽",
    engine: "6.0L W12 450 л.с.",
    mileage: "131 000 км",
    image: "https://cdn.poehali.dev/projects/3d6095ae-7eb4-458e-bc14-faee429643e7/files/3baa0006-b345-41f0-853e-6c8980cfa0cf.jpg",
    description: "Топовый флагман Audi с уникальным двигателем W12. Алюминиевый кузов ASF, пневмоподвеска и длиннобазный салон класса люкс. Редкая комплектация в отличном состоянии.",
  },
];

export function Catalog() {
  const [selected, setSelected] = useState<Car | null>(null);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleClose = () => {
    setSelected(null);
    setSent(false);
    setForm({ name: "", phone: "" });
  };

  return (
    <section id="catalog" className="py-24 container mx-auto px-4">
      {/* Заголовок секции */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground/50 border border-white/10 px-4 py-2 rounded mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_2px_hsl(var(--primary)/0.5)]" />
          9 автомобилей в наличии
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient">
          Наш <i className="font-light">каталог</i>
        </h2>
        <p className="font-mono text-sm text-foreground/60 mt-6 max-w-[480px] mx-auto">
          Каждый автомобиль прошёл проверку истории, технический осмотр и оценку состояния
        </p>
      </div>

      {/* Сетка карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.model}
            className="group overflow-hidden rounded-lg border border-white/10 bg-white/5 hover:border-white/25 transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={car.image}
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest">
                    {car.brand} · {car.year}
                  </p>
                  <h3 className="font-sentient text-xl mt-0.5">{car.model}</h3>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest">цена</p>
                  <p className="font-sentient text-lg" style={{ color: "hsl(var(--primary))" }}>
                    {car.price}
                  </p>
                </div>
              </div>

              <div className="flex gap-6 mt-4 pt-4 border-t border-white/10">
                <div>
                  <p className="font-mono text-xs text-foreground/40 uppercase tracking-wider">Двигатель</p>
                  <p className="font-mono text-xs text-foreground/80 mt-0.5">{car.engine}</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-foreground/40 uppercase tracking-wider">Пробег</p>
                  <p className="font-mono text-xs text-foreground/80 mt-0.5">{car.mileage}</p>
                </div>
              </div>

              <button
                onClick={() => { setSelected(car); setSent(false); }}
                className="mt-4 w-full font-mono text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground border border-white/10 hover:border-white/30 py-2.5 px-4 rounded transition-all duration-150 hover:bg-white/5"
              >
                [ Узнать подробнее ]
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      <Dialog.Root open={!!selected} onOpenChange={(open) => { if (!open) handleClose(); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
          <Dialog.Content className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg border border-white/15 bg-[#0f0f0f] shadow-2xl">
            {selected && (
              <>
                <div className="aspect-[16/7] overflow-hidden rounded-t-lg">
                  <img
                    src={selected.image}
                    alt={selected.model}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest">
                        {selected.brand} · {selected.year}
                      </p>
                      <Dialog.Title className="font-sentient text-3xl mt-1">
                        {selected.model}
                      </Dialog.Title>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest">цена</p>
                      <p className="font-sentient text-2xl" style={{ color: "hsl(var(--primary))" }}>
                        {selected.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-8 mt-5 pt-5 border-t border-white/10">
                    <div>
                      <p className="font-mono text-xs text-foreground/40 uppercase tracking-wider">Двигатель</p>
                      <p className="font-mono text-sm text-foreground/90 mt-1">{selected.engine}</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs text-foreground/40 uppercase tracking-wider">Пробег</p>
                      <p className="font-mono text-sm text-foreground/90 mt-1">{selected.mileage}</p>
                    </div>
                  </div>

                  <p className="font-mono text-sm text-foreground/60 mt-5 leading-relaxed">
                    {selected.description}
                  </p>

                  {/* Форма */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    {sent ? (
                      <div className="text-center py-4">
                        <span className="inline-block w-3 h-3 rounded-full bg-primary mb-3 shadow-[0_0_10px_3px_hsl(var(--primary)/0.6)]" />
                        <p className="font-sentient text-xl">Заявка отправлена</p>
                        <p className="font-mono text-xs text-foreground/50 mt-2">
                          Мы свяжемся с вами в ближайшее время
                        </p>
                      </div>
                    ) : (
                      <>
                        <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest mb-4">
                          Оставить заявку на этот автомобиль
                        </p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                          <input
                            required
                            type="text"
                            placeholder="Ваше имя"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 focus:border-white/30 rounded px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30"
                          />
                          <input
                            required
                            type="tel"
                            placeholder="Номер телефона"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 focus:border-white/30 rounded px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30"
                          />
                          <button
                            type="submit"
                            className="w-full font-mono text-xs uppercase tracking-widest py-3 px-4 rounded transition-all duration-150 text-black font-semibold"
                            style={{ background: "hsl(var(--primary))" }}
                          >
                            [ Хочу этот автомобиль ]
                          </button>
                        </form>
                      </>
                    )}
                  </div>
                </div>
                <Dialog.Close asChild>
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-foreground/60 hover:text-foreground transition-colors">
                    <X size={18} />
                  </button>
                </Dialog.Close>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
