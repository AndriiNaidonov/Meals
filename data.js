/* ============================================================================
   MEALS — базові дані циклу харчування
   ----------------------------------------------------------------------------
   Це єдине джерело правди. Файл можна редагувати вручну: змінюйте цифри,
   додавайте продукти та страви — застосунок підхопить зміни після оновлення.

   Правила:
   • kcal / protein вказані НА 100 г (або на 100 мл для рідин),
     крім продуктів з unit:'шт' / 'порція' — там значення на одну одиницю.
   • dry:true означає, що продукт обліковується в СУХОМУ вигляді
     (гречка, рис, макарони, вівсянка). cookRatio — у скільки разів
     збільшується вага після варіння. Це потрібно, щоб не переплутати
     90 г сухої гречки з 230 г готової.
   • price — орієнтовна ціна в грн за 1 кг / 1 л / 1 шт (серпень 2026,
     звичайні українські супермаркети). Це ОЦІНКА, правиться в Налаштуваннях.
   • qty у стравах — цільова кількість; min/max — допустимий діапазон.
   ========================================================================== */

window.SEED = {

  meta: {
    version: 3,
    updated: '2026-08-14',
    cycleLength: 14,
    note: 'Етикетка конкретного продукту завжди пріоритетніша за ці усереднені значення — особливо для йогурту, творогу, пельменів, консервів, піци та шаурми.'
  },

  /* ------------------------------------------------------------------ */
  /* КАТАЛОГ ПРОДУКТІВ                                                   */
  /* ------------------------------------------------------------------ */
  products: {
    coffee:      { name: 'Кава',                 unit: 'порція', kcal: 5,   protein: 0,    price: 0,    cat: 'напої',    noBuy: true },
    chocolate:   { name: 'Шоколад',              unit: 'г',      kcal: 550, protein: 6,    price: 600,  cat: 'снеки' },
    buckwheat:   { name: 'Гречка',               unit: 'г',      kcal: 338, protein: 12.6, price: 65,   cat: 'крупи',    dry: true, cookRatio: 2.6 },
    rice:        { name: 'Рис',                  unit: 'г',      kcal: 360, protein: 7,    price: 60,   cat: 'крупи',    dry: true, cookRatio: 2.8 },
    pasta:       { name: 'Макарони',             unit: 'г',      kcal: 350, protein: 12,   price: 45,   cat: 'крупи',    dry: true, cookRatio: 2.4 },
    oats:        { name: 'Вівсянка',             unit: 'г',      kcal: 375, protein: 13,   price: 50,   cat: 'крупи',    dry: true, cookRatio: 3.5 },
    chicken:     { name: 'Курка',                unit: 'г',      kcal: 165, protein: 25,   price: 205,  cat: "м'ясо",    rawRatio: 1.4, priceNote: 'за кг сирої' },
    fish_can:    { name: 'Риба консервована',    unit: 'г',      kcal: 168, protein: 20,   price: 450,  cat: 'риба',     spread: 0.28 },
    egg:         { name: 'Яйце',                 unit: 'шт',     kcal: 75,  protein: 6.3,  price: 5.8,  cat: 'яйця' },
    cottage:     { name: 'Творог 5%',            unit: 'г',      kcal: 120, protein: 16,   price: 200,  cat: 'молочне' },
    yogurt:      { name: 'Грецький йогурт',      unit: 'г',      kcal: 70,  protein: 8,    price: 160,  cat: 'молочне' },
    kefir:       { name: 'Кефір',                unit: 'мл',     kcal: 50,  protein: 3,    price: 45,   cat: 'молочне' },
    cheese:      { name: 'Сир твердий',          unit: 'г',      kcal: 340, protein: 25,   price: 450,  cat: 'молочне' },
    banana:      { name: 'Банан',                unit: 'г',      kcal: 87,  protein: 1.1,  price: 65,   cat: 'фрукти' },
    fruit:       { name: 'Фрукт (яблуко/груша)', unit: 'г',      kcal: 50,  protein: 0.5,  price: 55,   cat: 'фрукти' },
    veg:         { name: 'Овочі',                unit: 'г',      kcal: 36,  protein: 2.5,  price: 70,   cat: 'овочі' },
    beans:       { name: 'Фасоля консервована',  unit: 'г',      kcal: 100, protein: 6,    price: 130,  cat: 'бакалія' },
    nuts:        { name: 'Горіхи',               unit: 'г',      kcal: 600, protein: 15,   price: 450,  cat: 'горіхи' },
    nutbutter:   { name: 'Горіхова паста',       unit: 'г',      kcal: 600, protein: 25,   price: 400,  cat: 'горіхи' },
    honey:       { name: 'Мед',                  unit: 'г',      kcal: 300, protein: 0.3,  price: 300,  cat: 'бакалія' },
    granola:     { name: 'Гранола',              unit: 'г',      kcal: 450, protein: 9,    price: 250,  cat: 'бакалія' },
    oil:         { name: 'Олія',                 unit: 'г',      kcal: 900, protein: 0,    price: 90,   cat: 'бакалія' },
    dumplings:   { name: 'Пельмені',             unit: 'г',      kcal: 250, protein: 11,   price: 190,  cat: 'заморожене', spread: 0.07 },
    bread_white: { name: 'Хліб білий',           unit: 'г',      kcal: 256, protein: 8,    price: 80,   cat: 'хліб' },
    bread_rye:   { name: 'Хліб чорний',          unit: 'г',      kcal: 250, protein: 8,    price: 85,   cat: 'хліб' },
    popcorn:     { name: 'Зерно для попкорну',   unit: 'г',      kcal: 375, protein: 11,   price: 90,   cat: 'снеки' },
    chips:       { name: 'Чіпси',                unit: 'г',      kcal: 520, protein: 6,    price: 400,  cat: 'снеки' },
    juice:       { name: 'Сік',                  unit: 'мл',     kcal: 45,  protein: 0.5,  price: 45,   cat: 'напої' },
    cola_zero:   { name: 'Cola Zero 0,5 л',      unit: 'шт',     kcal: 0,   protein: 0,    price: 30,   cat: 'напої',    onDemand: true },
    beer_na:     { name: 'Пиво 0% 0,5 л',        unit: 'шт',     kcal: 115, protein: 2,    price: 40,   cat: 'напої' },
    shawarma:    { name: 'Шаурма',               unit: 'шт',     kcal: 850, protein: 45,   price: 180,  cat: 'вільна їжа', onDemand: true, est: 'all' },
    pizza_half:  { name: '½ піци 30–32 см',      unit: 'порція', kcal: 850, protein: 35,   price: 170,  cat: 'вільна їжа', onDemand: true, est: 'all' }
  },

  /* ------------------------------------------------------------------ */
  /* ПРЕСЕТИ СТОЛОВОЇ                                                    */
  /* Найбільша похибка в обліку. Перші кілька разів варто просто         */
  /* подивитись очима на реальні порції і вибрати відповідний пресет.    */
  /* ------------------------------------------------------------------ */
  canteen: {
    components: [
      { id: 'soup',  name: 'Перше (борщ/суп) 350–400 мл', kcal: 180, min: 150, max: 250, protein: 8 },
      { id: 'side',  name: 'Гарнір 150–200 г',            kcal: 200, min: 170, max: 280, protein: 6 },
      { id: 'meat',  name: "М'ясо / котлета",             kcal: 240, min: 180, max: 350, protein: 24 },
      { id: 'salad', name: 'Салат',                       kcal: 80,  min: 50,  max: 150, protein: 2 }
    ],
    presets: [
      { id: 'full',  name: 'Повний обід',        parts: ['soup','side','meat','salad'], kcal: 700, protein: 40, hint: 'Перше + друге + салат — базовий варіант' },
      { id: 'nosal', name: 'Перше + друге',      parts: ['soup','side','meat'],         kcal: 620, protein: 38, hint: 'Без салату' },
      { id: 'light', name: 'Легкий',             parts: ['soup','side','meat','salad'], kcal: 550, protein: 38, hint: 'Суп, гречка, шматок курки, овочевий салат' },
      { id: 'heavy', name: 'Ситний',             parts: ['soup','side','meat','salad'], kcal: 900, protein: 42, hint: 'Смажена котлета, пюре з маслом, салат з майонезом' },
      { id: 'soup1', name: 'Тільки перше',       parts: ['soup'],                       kcal: 200, protein: 8,  hint: 'Якщо не голодний' }
    ],
    defaultPreset: 'full',
    defaultPrice: 0
  },

  /* ------------------------------------------------------------------ */
  /* ЦИКЛ: 14 ДНІВ                                                       */
  /* ------------------------------------------------------------------ */
  days: [
    /* ===== ТИЖДЕНЬ 1 ===== */
    { n: 1, week: 1, dow: 'Пн', type: 'weekday', meals: [
      { id: 'd1m1', time: '10:00', title: 'Кава + шоколад', items: [ {p:'coffee',q:1}, {p:'chocolate',q:20} ] },
      { id: 'd1m2', time: '13:00', title: 'Обід у столовій', canteen: true, preset: 'full' },
      { id: 'd1m3', time: '18:00', title: 'Гречка + курка + овочі', prep: true, items: [ {p:'buckwheat',q:90}, {p:'chicken',q:200}, {p:'veg',q:275,min:250,max:300}, {p:'oil',q:5} ] },
      { id: 'd1m4', time: '21:30', title: 'Енергетичний йогурт-боул', items: [ {p:'yogurt',q:250}, {p:'banana',q:120,min:100,max:120}, {p:'honey',q:10}, {p:'nutbutter',q:15}, {p:'nuts',q:15} ] }
    ]},
    { n: 2, week: 1, dow: 'Вт', type: 'weekday', meals: [
      { id: 'd2m1', time: '10:00', title: 'Кава + шоколад', items: [ {p:'coffee',q:1}, {p:'chocolate',q:20} ] },
      { id: 'd2m2', time: '13:00', title: 'Обід у столовій', canteen: true, preset: 'full' },
      { id: 'd2m3', time: '18:00', title: 'Рис + курка + овочі', prep: true, items: [ {p:'rice',q:80}, {p:'chicken',q:200}, {p:'veg',q:250} ] },
      { id: 'd2m4', time: '21:30', title: 'Творог + фрукт + мед', items: [ {p:'cottage',q:200}, {p:'fruit',q:175,min:150,max:200}, {p:'honey',q:10} ] }
    ]},
    { n: 3, week: 1, dow: 'Ср', type: 'weekday', meals: [
      { id: 'd3m1', time: '10:00', title: 'Кава + шоколад', items: [ {p:'coffee',q:1}, {p:'chocolate',q:20} ] },
      { id: 'd3m2', time: '13:00', title: 'Обід у столовій', canteen: true, preset: 'full' },
      { id: 'd3m3', time: '18:00', title: 'Макарони + риба + овочі', prep: true, items: [ {p:'pasta',q:90}, {p:'fish_can',q:140,min:130,max:150}, {p:'veg',q:250} ] },
      { id: 'd3m4', time: '21:30', title: 'Кефір + фрукт + кешью', items: [ {p:'kefir',q:400}, {p:'fruit',q:175,min:150,max:200}, {p:'nuts',q:15} ] }
    ]},
    { n: 4, week: 1, dow: 'Чт', type: 'weekday', meals: [
      { id: 'd4m1', time: '10:00', title: 'Кава + шоколад', items: [ {p:'coffee',q:1}, {p:'chocolate',q:20} ] },
      { id: 'd4m2', time: '13:00', title: 'Обід у столовій', canteen: true, preset: 'full' },
      { id: 'd4m3', time: '18:00', title: 'Гречка + яйця + фасоля', prep: true, freezer: true, items: [ {p:'buckwheat',q:80}, {p:'egg',q:3}, {p:'beans',q:100}, {p:'veg',q:250} ] },
      { id: 'd4m4', time: '21:30', title: 'Йогурт + гранола + мед', items: [ {p:'yogurt',q:250}, {p:'granola',q:35}, {p:'honey',q:10} ] }
    ]},
    { n: 5, week: 1, dow: 'Пт', type: 'weekday', meals: [
      { id: 'd5m1', time: '10:00', title: 'Кава + шоколад', items: [ {p:'coffee',q:1}, {p:'chocolate',q:20} ] },
      { id: 'd5m2', time: '13:00', title: 'Обід у столовій', canteen: true, preset: 'full' },
      { id: 'd5m3', time: '18:00', title: 'Пельмені + овочевий салат', items: [ {p:'dumplings',q:290,min:280,max:300}, {p:'veg',q:300} ], note: 'Пельмені краще зварити свіжими — це ~10 хвилин.' },
      { id: 'd5m4', time: '21:30', title: 'Творог + фрукт', items: [ {p:'cottage',q:200}, {p:'fruit',q:175,min:150,max:200} ] }
    ]},
    { n: 6, week: 1, dow: 'Сб', type: 'free', meals: [
      { id: 'd6m1', time: '10:00', title: 'Кава + вівсянка з бананом', items: [ {p:'coffee',q:1}, {p:'oats',q:70}, {p:'banana',q:120}, {p:'honey',q:10} ], note: 'Додано, щоб субота не була надто скромною перед недільною довгою.' },
      { id: 'd6m2', time: '14:00', title: 'Вільна їжа: шаурма', items: [ {p:'shawarma',q:1}, {p:'cola_zero',q:1} ] },
      { id: 'd6m3', time: '18:30', title: 'Йогурт, якщо голодний', optional: true, items: [ {p:'yogurt',q:200} ] },
      { id: 'd6m4', time: '20:30', title: 'Рис + курка + овочі', prep: true, freezer: true, items: [ {p:'rice',q:95,min:90,max:100}, {p:'chicken',q:180}, {p:'veg',q:200} ] }
    ]},
    { n: 7, week: 1, dow: 'Нд', type: 'longrun', meals: [
      { id: 'd7m1', time: '07:30', title: 'Перед бігом (за 90–120 хв)', items: [ {p:'bread_white',q:75,min:70,max:80}, {p:'honey',q:20}, {p:'banana',q:120}, {p:'coffee',q:1} ], note: 'Плюс 400–500 мл води.' },
      { id: 'd7m2', time: '11:00', title: 'Одразу після бігу', optional: true, items: [ {p:'kefir',q:275,min:250,max:300}, {p:'banana',q:120} ], note: 'Тільки якщо повноцінна їжа буде не одразу.' },
      { id: 'd7m3', time: '12:30', title: 'Основний прийом (через 30–90 хв)', prep: true, items: [ {p:'rice',q:115,min:110,max:120}, {p:'chicken',q:220}, {p:'veg',q:275,min:250,max:300}, {p:'juice',q:200} ] },
      { id: 'd7m4', time: '19:00', title: 'Макарони + рибна консерва', prep: true, items: [ {p:'pasta',q:80}, {p:'fish_can',q:140,min:130,max:150}, {p:'veg',q:250} ] },
      { id: 'd7m5', time: '21:30', title: 'Творог + мед', items: [ {p:'cottage',q:200}, {p:'honey',q:10} ] }
    ]},

    /* ===== ТИЖДЕНЬ 2 ===== */
    { n: 8, week: 2, dow: 'Пн', type: 'weekday', meals: [
      { id: 'd8m1', time: '10:00', title: 'Кава + шоколад', items: [ {p:'coffee',q:1}, {p:'chocolate',q:20} ] },
      { id: 'd8m2', time: '13:00', title: 'Обід у столовій', canteen: true, preset: 'full' },
      { id: 'd8m3', time: '18:00', title: 'Рис + курка + овочі', prep: true, items: [ {p:'rice',q:90}, {p:'chicken',q:200}, {p:'veg',q:300} ] },
      { id: 'd8m4', time: '21:30', title: 'Йогурт + гранола + фрукт', items: [ {p:'yogurt',q:250}, {p:'granola',q:38,min:35,max:40}, {p:'fruit',q:150} ] }
    ]},
    { n: 9, week: 2, dow: 'Вт', type: 'weekday', meals: [
      { id: 'd9m1', time: '10:00', title: 'Кава + шоколад', items: [ {p:'coffee',q:1}, {p:'chocolate',q:20} ] },
      { id: 'd9m2', time: '13:00', title: 'Обід у столовій', canteen: true, preset: 'full' },
      { id: 'd9m3', time: '18:00', title: 'Макарони + яйця + сир', prep: true, items: [ {p:'pasta',q:90}, {p:'egg',q:3}, {p:'cheese',q:25}, {p:'veg',q:250} ] },
      { id: 'd9m4', time: '21:30', title: 'Творог + горіхи + мед', items: [ {p:'cottage',q:200}, {p:'nuts',q:15}, {p:'honey',q:10} ] }
    ]},
    { n: 10, week: 2, dow: 'Ср', type: 'weekday', meals: [
      { id: 'd10m1', time: '10:00', title: 'Кава + шоколад', items: [ {p:'coffee',q:1}, {p:'chocolate',q:20} ] },
      { id: 'd10m2', time: '13:00', title: 'Обід у столовій', canteen: true, preset: 'full' },
      { id: 'd10m3', time: '18:00', title: 'Гречка + риба + овочі', prep: true, items: [ {p:'buckwheat',q:90}, {p:'fish_can',q:140,min:130,max:150}, {p:'veg',q:300} ] },
      { id: 'd10m4', time: '21:30', title: 'Кефір + банан', items: [ {p:'kefir',q:400}, {p:'banana',q:120} ] }
    ]},
    { n: 11, week: 2, dow: 'Чт', type: 'weekday', meals: [
      { id: 'd11m1', time: '10:00', title: 'Кава + шоколад', items: [ {p:'coffee',q:1}, {p:'chocolate',q:20} ] },
      { id: 'd11m2', time: '13:00', title: 'Обід у столовій', canteen: true, preset: 'full' },
      { id: 'd11m3', time: '18:00', title: 'Рис + курка + фасоля', prep: true, freezer: true, items: [ {p:'rice',q:80}, {p:'chicken',q:200}, {p:'beans',q:100}, {p:'veg',q:225,min:200,max:250} ] },
      { id: 'd11m4', time: '21:30', title: 'Енергетичний йогурт-боул', items: [ {p:'yogurt',q:250}, {p:'banana',q:120,min:100,max:120}, {p:'honey',q:10}, {p:'nutbutter',q:15}, {p:'nuts',q:15} ] }
    ]},
    { n: 12, week: 2, dow: 'Пт', type: 'weekday', meals: [
      { id: 'd12m1', time: '10:00', title: 'Кава + шоколад', items: [ {p:'coffee',q:1}, {p:'chocolate',q:20} ] },
      { id: 'd12m2', time: '13:00', title: 'Обід у столовій', canteen: true, preset: 'full' },
      { id: 'd12m3', time: '18:00', title: 'Пельмені + овочі', items: [ {p:'dumplings',q:290,min:280,max:300}, {p:'veg',q:300} ], note: 'Пельмені краще зварити свіжими — це ~10 хвилин.' },
      { id: 'd12m4', time: '21:30', title: 'Творог + фрукт', items: [ {p:'cottage',q:200}, {p:'fruit',q:175,min:150,max:200} ] }
    ]},
    { n: 13, week: 2, dow: 'Сб', type: 'free', meals: [
      { id: 'd13m1', time: '10:00', title: 'Кава + вівсянка з бананом', items: [ {p:'coffee',q:1}, {p:'oats',q:70}, {p:'banana',q:120}, {p:'honey',q:10} ], note: 'Додано, щоб субота не була надто скромною перед недільною довгою.' },
      { id: 'd13m2', time: '14:00', title: 'Вільна їжа: ½ піци', items: [ {p:'pizza_half',q:1}, {p:'cola_zero',q:1} ], note: 'Замість Cola Zero можна 0,5 л безалкогольного пива — це +100–130 ккал.' },
      { id: 'd13m3', time: '18:30', title: 'Йогурт, якщо голодний', optional: true, items: [ {p:'yogurt',q:200} ] },
      { id: 'd13m4', time: '20:30', title: 'Макарони + курка + овочі', prep: true, freezer: true, items: [ {p:'pasta',q:95,min:90,max:100}, {p:'chicken',q:180}, {p:'veg',q:200} ] }
    ]},
    { n: 14, week: 2, dow: 'Нд', type: 'longrun', meals: [
      { id: 'd14m1', time: '07:30', title: 'Перед бігом (за 90–120 хв)', items: [ {p:'bread_white',q:75,min:70,max:80}, {p:'honey',q:20}, {p:'banana',q:120}, {p:'coffee',q:1} ], note: 'Плюс 400–500 мл води.' },
      { id: 'd14m2', time: '11:00', title: 'Одразу після бігу', optional: true, items: [ {p:'kefir',q:275,min:250,max:300}, {p:'fruit',q:175} ], note: 'Тільки якщо повноцінна їжа буде не одразу.' },
      { id: 'd14m3', time: '12:30', title: 'Основний прийом', prep: true, items: [ {p:'pasta',q:115,min:110,max:120}, {p:'chicken',q:220}, {p:'veg',q:300}, {p:'juice',q:200} ] },
      { id: 'd14m4', time: '19:00', title: 'Гречка + яйця + овочі', prep: true, items: [ {p:'buckwheat',q:80}, {p:'egg',q:2}, {p:'veg',q:250} ] },
      { id: 'd14m5', time: '21:30', title: 'Творог + мед', items: [ {p:'cottage',q:200}, {p:'honey',q:10} ] }
    ]}
  ],

  /* ------------------------------------------------------------------ */
  /* СНЕКИ ПІД ФІЛЬМ — 2–3 рази на тиждень, один варіант за раз          */
  /* ------------------------------------------------------------------ */
  snacks: [
    { id: 'popcorn',  name: 'Домашній попкорн',     items: [ {p:'popcorn',q:47}, {p:'oil',q:5} ] },
    { id: 'croutons', name: 'Домашні житні сухарики', items: [ {p:'bread_rye',q:70}, {p:'oil',q:5} ] },
    { id: 'fruitnut', name: 'Фрукт + горіхи',       items: [ {p:'fruit',q:175}, {p:'nuts',q:17} ] },
    { id: 'yogurt',   name: 'Йогурт + гранола',     items: [ {p:'yogurt',q:200}, {p:'granola',q:25} ] },
    { id: 'chips50',  name: 'Чіпси 50 г',           items: [ {p:'chips',q:50} ], limited: true },
    { id: 'chips70',  name: 'Чіпси 70 г',           items: [ {p:'chips',q:70} ], limited: true },
    { id: 'choco',    name: 'Додаткові 20 г шоколаду', items: [ {p:'chocolate',q:20} ] }
  ],

  limits: [
    { id: 'snack',  name: 'Снеки під фільм', max: 3, per: 'week',  hint: '2–3 рази на тиждень' },
    { id: 'chips',  name: 'Чіпси',           max: 1, per: 'cycle', hint: 'Одна пачка за двотижневий цикл' },
    { id: 'street', name: 'Шаурма / піца',   max: 1, per: 'week',  hint: 'Субота' }
  ],

  /* ------------------------------------------------------------------ */
  /* ЗАКУПІВЛІ                                                           */
  /* day — день циклу, coversDays — які дні циклу покриває ця закупівля  */
  /* baseline — список із вихідного плану (довідково, для звірки)        */
  /* ------------------------------------------------------------------ */
  shopping: [
    {
      id: 'big', day: 0, dayLabel: 'Субота перед тижнем 1', name: 'Велика закупівля',
      hint: 'Сухий запас на два тижні + свіже на тиждень 1. Одразу після неї — недільне готування.',
      coversDays: [1,2], prepDays: [1,2,3,4,5,6,7], stock: true,
      baseline: [
        {p:'buckwheat',q:500},{p:'rice',q:500},{p:'pasta',q:500},{p:'oats',q:500},
        {p:'granola',q:300},{p:'dumplings',q:600},{p:'fish_can',q:600,note:'4 банки по 130–180 г'},
        {p:'beans',q:480,note:'2 банки'},{p:'nuts',q:200},{p:'nutbutter',q:200},{p:'honey',q:250},
        {p:'chocolate',q:225},{p:'oil',q:250,note:'якщо закінчується'},{p:'juice',q:1000},
        {p:'popcorn',q:250},
        {p:'chicken',q:1400,raw:true},{p:'egg',q:10},{p:'yogurt',q:500},{p:'cottage',q:275},
        {p:'kefir',q:500},{p:'banana',q:480,note:'4 шт'},{p:'fruit',q:600},{p:'veg',q:2000,note:'1 кг свіжих + 1 кг заморожених'},
        {p:'bread_white',q:350},{p:'bread_rye',q:350}
      ]
    },
    {
      id: 'tue1', day: 2, dayLabel: 'Вівторок тижня 1', name: 'Коротка дозакупівля',
      hint: 'Ніякої готовки. Просто поповнюєш холодильник.',
      coversDays: [3,4,5,6],
      baseline: [
        {p:'yogurt',q:500},{p:'cottage',q:450},{p:'kefir',q:1000},{p:'banana',q:360,note:'3 шт'},
        {p:'fruit',q:750},{p:'veg',q:1100},{p:'bread_white',q:350,note:'якщо закінчується'},{p:'cheese',q:125}
      ]
    },
    {
      id: 'sat2', day: 6, dayLabel: 'Субота тижня 1', name: 'Закупівля на тиждень 2',
      hint: 'Сухі продукти вже є, тому кошик менший. Плюс піца та Cola Zero / безалкогольне пиво на суботу.',
      coversDays: [7,8,9], prepDays: [8,9,10,11,12,13,14],
      baseline: [
        {p:'chicken',q:1400,raw:true},{p:'egg',q:10},{p:'yogurt',q:500},{p:'cottage',q:275},
        {p:'kefir',q:500},{p:'banana',q:480,note:'4 шт'},{p:'fruit',q:600},
        {p:'veg',q:2000,note:'1 кг свіжих + 1 кг заморожених'},
        {p:'bread_white',q:325},{p:'bread_rye',q:325},{p:'juice',q:1000,note:'якщо закінчився'},
        {p:'pizza_half',q:1},{p:'cola_zero',q:1}
      ]
    },
    {
      id: 'tue2', day: 9, dayLabel: 'Вівторок тижня 2', name: 'Коротка дозакупівля',
      hint: 'Повторюємо першу вівторкову закупівлю.',
      coversDays: [10,11,12,13,14],
      baseline: [
        {p:'yogurt',q:500},{p:'cottage',q:450},{p:'kefir',q:1000},{p:'banana',q:360,note:'3 шт'},
        {p:'fruit',q:750},{p:'veg',q:1100},{p:'bread_white',q:350,note:'якщо закінчується'}
      ]
    }
  ],

  /* ------------------------------------------------------------------ */
  /* НЕДІЛЬНЕ ГОТУВАННЯ ВПРОК                                            */
  /* ------------------------------------------------------------------ */
  prep: {
    intro: 'Приблизно 60–90 хвилин, причому більшу частину часу їжа займається собою. Їжу на Пн–Ср лишаєш у холодильнику. Порції на Чт–Сб після охолодження — у морозилку: готовим залишкам у холодильнику безпечно давати 3–4 дні.',
    steps: [
      { id: 'chicken', title: 'Базова курка', minutes: 35, storage: 'both',
        ingredients: '1,4 кг сирої курки, 15–20 г олії, сіль, перець, паприка, сухий часник',
        body: [
          'Наріж великими шматками. Додай олію і спеції.',
          'Духовка: розклади на деко, 25–30 хв при 190–200 °C до повної готовності.',
          'Тільки плита: велика сковорода, злегка обсмажити, додати 100–150 мл води, накрити кришкою і довести до готовності.'
        ],
        portions: 'Розділити: 220 г — неділя, 200 г — понеділок, 200 г — вівторок, 180–200 г — субота, решта в резерв. Частину на кінець тижня — заморозити.' },
      { id: 'buckwheat', title: 'Гречка', minutes: 20, storage: 'both',
        ingredients: '≈250 г сухої на тиждень',
        body: ['Пропорція приблизно 1 частина гречки : 2 частини води.','Промити, залити водою, трохи солі. Довести до кипіння, зменшити вогонь, накрити кришкою і варити 15–20 хв.'],
        portions: 'Розкласти порціями за сухим еквівалентом: контейнер «90 г сухої» важитиме вже приблизно 220–250 г готової каші.' },
      { id: 'rice', title: 'Рис', minutes: 25, storage: 'both',
        ingredients: '250–300 г сухого',
        body: ['Промити кілька разів. Зазвичай близько 1 частини рису до 1,7–2 частин води, але конкретна пропорція залежить від сорту.','Після приготування швидко охолодити і розкласти на порції.'],
        portions: 'Частину, яка знадобиться лише через 4–6 днів, одразу заморозити. Саме для рису не варто практикувати «зварив у неділю і хай стоїть до суботи».' },
      { id: 'pasta', title: 'Макарони впрок', minutes: 15, storage: 'both',
        ingredients: '250–300 г сухих',
        body: ['Відварити злегка al dente. Злити воду.','Додати буквально 5–10 г олії на всю каструлю, перемішати. Охолодити і розкласти.'],
        portions: 'Порції на найближчі дні — холодильник, пізні — морозилка. При розігріві додати столову ложку води і закрити кришкою — макарони не будуть сухими.' },
      { id: 'veg', title: 'Заморожені овочі', minutes: 0, storage: 'freezer',
        ingredients: '200–300 г суміші на порцію',
        body: ['Готувати заздалегідь не потрібно взагалі.','У день їжі: миска → мікрохвильовка. Додати сіль, спеції і за бажанням буквально 5 г олії.'],
        portions: '' },
      { id: 'combo_rice', title: 'Контейнер: курка + рис + овочі', minutes: 5, storage: 'fridge',
        ingredients: 'рис — еквівалент 80–100 г сухого, курка 180–200 г, овочі 250 г',
        body: ['У мікрохвильовку все разом.','Після нагріву можна додати соєвий соус, спеції, трохи гірчиці — це один зі способів зробити одну й ту саму базу менш нудною.'],
        portions: '' },
      { id: 'combo_buck', title: 'Контейнер: курка + гречка', minutes: 5, storage: 'fridge',
        ingredients: 'гречка 80–90 г сухого еквівалента, курка 200 г, овочі 250–300 г',
        body: ['Розігрів — готово.'], portions: '' },
      { id: 'combo_fish', title: 'Контейнер: макарони з рибною консервою', minutes: 5, storage: 'fridge',
        ingredients: 'макарони 80–100 г сухого еквівалента, риба 130–150 г, овочі 200–250 г',
        body: ['Розігріти макарони, додати тунця, скумбрію або сардини.','Якщо тунець сухий — додати чайну ложку олії або трохи рідини з банки.'], portions: '' },
      { id: 'combo_egg', title: 'Контейнер: гречка з яйцями і фасолею', minutes: 10, storage: 'fridge',
        ingredients: 'гречка, 3 яйця, 100 г фасолі, 250 г овочів',
        body: ['Розігріти порцію гречки.','За цей час підсмажити або зробити омлет із 3 яєць.','Додати фасолю та овочі. Виходить повноцінна вечеря без курки.'], portions: '' },
      { id: 'dumplings', title: 'Пельмені', minutes: 10, storage: 'freezer',
        ingredients: '280–300 г на порцію',
        body: ['Найсмачніший варіант — зварити у п’ятницю, це близько 10 хвилин.','Якщо принцип «взагалі нічого не готую» жорсткий — зварити в неділю, охолодити, злегка змастити олією, заморозити однією порцією. У п’ятницю розморозити.'],
        portions: 'Перший варіант помітно кращий за текстурою.' },
      { id: 'bowl', title: 'Енергетичний йогурт-боул', minutes: 3, storage: 'fresh',
        ingredients: 'грецький йогурт 250 г, банан 100–120 г, мед 10 г, горіхова паста 15 г, горіхи 15 г',
        body: ['Банан розім’яти виделкою, все змішати.','Якщо хочеться майже десерт — трохи кориці або какао.'],
        portions: 'Гранолу сюди краще не додавати: без неї це вже ~500 ккал, з гранолою легко вийде 650–700.' },
      { id: 'croutons', title: 'Домашні сухарики', minutes: 20, storage: 'pantry',
        ingredients: 'чорний хліб 70 г, 5 г олії, сіль, паприка, сухий часник',
        body: ['Нарізати невеликими кубиками, перемішати зі спеціями та олією.','Духовка 160–170 °C на 15–20 хв, кілька разів перемішати.'],
        portions: 'Можна зробити одразу 3–4 порції. Головне — не вилити туди півсклянки олії.' },
      { id: 'popcorn', title: 'Попкорн', minutes: 10, storage: 'fresh',
        ingredients: '40–50 г сухої кукурудзи + близько 5 г олії',
        body: ['Каструля з кришкою: нагріти олію, додати кукурудзу, закрити. Періодично струшувати.','Коли бавовни майже припинилися — зняти. Сіль уже після приготування.'], portions: '' }
    ]
  },

  /* ------------------------------------------------------------------ */
  /* МІСЯЧНИЙ БЮДЖЕТ (орієнтир із плану, грн)                            */
  /* ------------------------------------------------------------------ */
  budget: {
    currency: 'грн',
    note: 'Столова сюди не входить. Спортивні гелі / ізотонік для недільних довгих — окрема стаття, яка зростатиме разом із дистанцією.',
    categories: [
      { name: 'Курка ~5,5–6 кг',            min: 1100, max: 1350 },
      { name: 'Рибні консерви',             min: 450,  max: 650 },
      { name: 'Яйця',                       min: 180,  max: 250 },
      { name: 'Творог, йогурт, кефір',      min: 1150, max: 1450 },
      { name: 'Рис, гречка, вівсянка, макарони', min: 350, max: 500 },
      { name: 'Пельмені',                   min: 200,  max: 300 },
      { name: 'Овочі',                      min: 700,  max: 1000 },
      { name: 'Фрукти / банани',            min: 550,  max: 800 },
      { name: 'Горіхи + горіхова паста',    min: 350,  max: 500 },
      { name: 'Хліб, гранола, мед',         min: 350,  max: 500 },
      { name: 'Шоколад + снеки',            min: 300,  max: 450 },
      { name: 'Сік / Cola Zero / пиво 0%',  min: 250,  max: 400 },
      { name: '2 шаурми + 2 піца-прийоми',  min: 700,  max: 1000 },
      { name: 'Олія, спеції, дрібниці',     min: 150,  max: 250 },
      { name: 'Паливо на біг (гелі, ізотонік)', min: 0, max: 400 }
    ]
  },

  /* ------------------------------------------------------------------ */
  /* ЗА ЗАМОВЧУВАННЯМ                                                    */
  /* ------------------------------------------------------------------ */
  defaults: {
    kcalTarget: 2000,
    proteinTarget: 130,
    weeklyKcalTarget: 2000,
    reminders: {
      meals: true,
      defrost: true,
      shopping: true,
      prep: true
    },
    principle: 'Не тримай жорсткий добовий ліміт. Дивись на середнє за 7 днів + динаміку ваги + якість відновлення. Постійний голод, падіння якості бігу або надто швидка втрата ваги = раціон треба збільшувати, а не радіти дефіциту.'
  }
};
