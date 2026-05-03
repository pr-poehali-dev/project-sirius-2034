const stats = [
  { value: "12", label: "лет на рынке" },
  { value: "340+", label: "автомобилей продано" },
  { value: "100%", label: "проверка истории" },
  { value: "Москва", label: "шоурум" },
];

const values = [
  {
    title: "Только оригиналы",
    text: "Мы не работаем с восстановленными после аварий или перекрашенными автомобилями. Каждая машина в нашем каталоге — это подлинный экземпляр с документально подтверждённой историей.",
  },
  {
    title: "Экспертная оценка",
    text: "Перед попаданием в каталог каждый автомобиль проходит полную диагностику: кузов, двигатель, ходовая, электрика. Вы получаете честный отчёт без прикрас.",
  },
  {
    title: "Инвестиция в легенду",
    text: "Классические автомобили растут в цене. Мы помогаем выбрать не просто машину мечты, но и актив, который сохранит и приумножит вложения.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 border-t border-white/10">
      <div className="container mx-auto px-4">

        {/* Заголовок */}
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground/50 border border-white/10 px-4 py-2 rounded mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_2px_hsl(var(--primary)/0.5)]" />
            О компании
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient leading-tight">
            Мы находим <br />
            <i className="font-light">настоящие</i> легенды
          </h2>
          <p className="font-mono text-sm text-foreground/60 mt-6 leading-relaxed max-w-xl">
            Legends of Cars — московский дилер классических европейских автомобилей. 
            С 2012 года мы разыскиваем, проверяем и продаём машины, которые стали 
            историей автомобилестроения. Наши клиенты — коллекционеры, энтузиасты 
            и те, кто ценит настоящее качество.
          </p>
        </div>

        {/* Цифры */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-lg overflow-hidden mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0a0a0a] px-6 py-8 text-center">
              <p className="font-sentient text-4xl sm:text-5xl" style={{ color: "hsl(var(--primary))" }}>
                {stat.value}
              </p>
              <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Ценности */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <div
              key={item.title}
              className="border border-white/10 rounded-lg p-6 bg-white/5 hover:border-white/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-mono text-xs text-foreground/30 border border-white/10 w-7 h-7 rounded flex items-center justify-center shrink-0"
                >
                  0{i + 1}
                </span>
                <h3 className="font-sentient text-xl">{item.title}</h3>
              </div>
              <p className="font-mono text-sm text-foreground/55 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
