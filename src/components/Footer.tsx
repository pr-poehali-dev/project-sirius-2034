export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-16">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Бренд */}
          <div>
            <p className="font-sentient text-2xl mb-3">Legends of Cars</p>
            <p className="font-mono text-sm text-foreground/50 leading-relaxed">
              Премиальный дилер классических европейских автомобилей. Москва, с 2012 года.
            </p>
          </div>

          {/* Контакты */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-5">Контакты</p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+74951234567"
                className="font-mono text-sm text-foreground/70 hover:text-foreground transition-colors duration-150"
              >
                +7 (495) 123-45-67
              </a>
              <a
                href="mailto:hello@legendsofcars.ru"
                className="font-mono text-sm text-foreground/70 hover:text-foreground transition-colors duration-150"
              >
                hello@legendsofcars.ru
              </a>
              <a
                href="https://t.me/legendsofcars"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-foreground/70 hover:text-foreground transition-colors duration-150"
              >
                Telegram: @legendsofcars
              </a>
            </div>
          </div>

          {/* Адрес */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-5">Шоурум</p>
            <p className="font-mono text-sm text-foreground/70 leading-relaxed">
              Москва, Лесная улица, 43с2<br />
              БЦ «Белорусский», 1 этаж
            </p>
            <p className="font-mono text-xs text-foreground/40 mt-3">
              Пн–Сб: 10:00 – 20:00<br />
              Вс: по записи
            </p>
          </div>

        </div>

        {/* Нижняя строка */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-foreground/30">
            © 2024 Legends of Cars. Все права защищены.
          </p>
          <p className="font-mono text-xs text-foreground/20">
            Москва · Классические автомобили · С 2012 года
          </p>
        </div>

      </div>
    </footer>
  );
}
