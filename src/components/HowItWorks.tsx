const steps = [
  {
    number: "01",
    title: "Выбираете автомобиль",
    text: "Просматриваете каталог и находите машину мечты. Если нужного нет — расскажите нам, и мы найдём под заказ.",
  },
  {
    number: "02",
    title: "Оставляете заявку",
    text: "Нажимаете «Узнать подробнее» и оставляете имя и телефон. Наш специалист свяжется с вами в течение часа.",
  },
  {
    number: "03",
    title: "Живой осмотр",
    text: "Приезжаете в московский шоурум или организуем выезд к вам. Показываем автомобиль, отвечаем на все вопросы.",
  },
  {
    number: "04",
    title: "Проверка и документы",
    text: "Предоставляем полный пакет документов: история VIN, сервисная книжка, отчёт о техническом состоянии.",
  },
  {
    number: "05",
    title: "Сделка и передача",
    text: "Оформляем куплю-продажу, помогаем с постановкой на учёт. Автомобиль передаётся чистым и готовым к дороге.",
  },
  {
    number: "06",
    title: "Поддержка после покупки",
    text: "Остаёмся на связи. Помогаем с обслуживанием, запчастями и советом — потому что легенды требуют заботы.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 border-t border-white/10">
      <div className="container mx-auto px-4">

        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-foreground/50 border border-white/10 px-4 py-2 rounded mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_2px_hsl(var(--primary)/0.5)]" />
            Процесс покупки
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-sentient leading-tight">
            Как мы <br />
            <i className="font-light">работаем</i>
          </h2>
          <p className="font-mono text-sm text-foreground/60 mt-6 leading-relaxed">
            Шесть шагов от первого взгляда на автомобиль до ключей в руке
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-lg overflow-hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group bg-[#0a0a0a] p-8 hover:bg-white/5 transition-colors duration-300"
            >
              <p
                className="font-sentient text-5xl mb-5 leading-none transition-colors duration-300"
                style={{ color: "hsl(var(--primary) / 0.25)" }}
              >
                {step.number}
              </p>
              <h3 className="font-sentient text-xl mb-3">{step.title}</h3>
              <p className="font-mono text-sm text-foreground/55 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
