/* ============================================================================
   MEALS v2 — база продуктів для харчового щоденника
   ----------------------------------------------------------------------------
   Значення УСЕРЕДНЕНІ. Етикетка конкретного продукту завжди пріоритетніша.

   Формат продукту:
   • unit: 'г' | 'мл'  → kcal/p/f/c вказані НА 100 г (мл)
   • unit: 'шт' | 'порція' → kcal/p/f/c вказані НА 1 ОДИНИЦЮ
   • p/f/c — білки / жири / вуглеводи, г
   • portion — типова порція (у грамах/мл або штуках) — підставляється
     автоматично при додаванні в щоденник
   • h — оцінка корисності 1–5:
       5 = основа раціону (овочі, риба, курка, творог)
       4 = добра їжа щодня (крупи, яйця, кисломолочне, горіхи)
       3 = нейтральне (рис білий, хліб, сир, гранола)
       2 = зрідка (пельмені, шаурма, мед, солодкий йогурт)
       1 = задоволення (чіпси, ковбаса, кола, печиво)
   • cat — категорія для групування в списку

   Власні продукти додаються в застосунку і зберігаються на телефоні.
   ========================================================================== */

window.SEED = {
  meta: { version: 2, updated: '2026-08-15' },

  cats: ['гарніри','білкове','молочне','овочі','фрукти','горіхи і солодке',
         'снеки','напої','вулична їжа','столова','готові страви','спорт'],

  products: {
    /* ---------- ГАРНІРИ ---------- */
    buckwheat_c:  { name:'Гречка варена',            unit:'г', kcal:110, p:4,    f:1.1,  c:21,  h:4, portion:250, cat:'гарніри' },
    rice_c:       { name:'Рис варений',              unit:'г', kcal:130, p:2.4,  f:0.3,  c:28,  h:3, portion:250, cat:'гарніри' },
    pasta_c:      { name:'Макарони варені',          unit:'г', kcal:150, p:5,    f:1,    c:30,  h:3, portion:250, cat:'гарніри' },
    oats_c:       { name:'Вівсянка на воді (готова)',unit:'г', kcal:90,  p:3,    f:1.7,  c:15,  h:4, portion:250, cat:'гарніри' },
    buckwheat_d:  { name:'Гречка суха',              unit:'г', kcal:338, p:12.6, f:3.3,  c:62,  h:4, portion:90,  cat:'гарніри' },
    rice_d:       { name:'Рис сухий',                unit:'г', kcal:360, p:7,    f:1,    c:79,  h:3, portion:90,  cat:'гарніри' },
    pasta_d:      { name:'Макарони сухі',            unit:'г', kcal:350, p:12,   f:1.5,  c:71,  h:3, portion:90,  cat:'гарніри' },
    oats_d:       { name:'Вівсянка суха',            unit:'г', kcal:375, p:13,   f:7,    c:62,  h:4, portion:70,  cat:'гарніри' },
    potato:       { name:'Картопля варена',          unit:'г', kcal:82,  p:2,    f:0.1,  c:17,  h:3, portion:250, cat:'гарніри' },
    mash:         { name:'Пюре картопляне з маслом', unit:'г', kcal:106, p:2,    f:3.5,  c:16,  h:2, portion:250, cat:'гарніри' },
    bread_w:      { name:'Хліб білий (скибка 30 г)', unit:'шт', kcal:77, p:2.3,  f:0.8,  c:15,  h:2, portion:2,   cat:'гарніри' },
    bread_r:      { name:'Хліб житній (скибка 35 г)',unit:'шт', kcal:80, p:2.8,  f:0.4,  c:15,  h:3, portion:2,   cat:'гарніри' },
    lavash:       { name:'Лаваш тонкий',             unit:'г', kcal:275, p:8,    f:1,    c:56,  h:2, portion:60,  cat:'гарніри' },

    /* ---------- БІЛКОВЕ ---------- */
    chicken:      { name:'Курка запечена (філе)',    unit:'г', kcal:165, p:30,   f:4,    c:0,   h:5, portion:200, cat:'білкове' },
    chicken_leg:  { name:'Куряче стегно запечене',   unit:'г', kcal:210, p:25,   f:12,   c:0,   h:4, portion:180, cat:'білкове' },
    egg:          { name:'Яйце варене',              unit:'шт', kcal:75, p:6.3,  f:5.3,  c:0.6, h:4, portion:2,   cat:'білкове' },
    egg_fried:    { name:'Яєчня (на 1 яйце, з олією)',unit:'шт',kcal:110,p:6.5,  f:9,    c:0.6, h:3, portion:2,   cat:'білкове' },
    tuna:         { name:'Тунець у власному соку',   unit:'г', kcal:100, p:23,   f:1,    c:0,   h:5, portion:140, cat:'білкове' },
    sardines:     { name:'Сардини в олії',           unit:'г', kcal:220, p:24,   f:14,   c:0,   h:4, portion:140, cat:'білкове' },
    mackerel:     { name:'Скумбрія консервована',    unit:'г', kcal:200, p:19,   f:13,   c:0,   h:4, portion:140, cat:'білкове' },
    herring:      { name:'Оселедець',                unit:'г', kcal:220, p:17,   f:16,   c:0,   h:3, portion:100, cat:'білкове' },
    beef_stew:    { name:'Яловичина тушкована',      unit:'г', kcal:220, p:26,   f:12,   c:0,   h:4, portion:150, cat:'білкове' },
    pork:         { name:'Свинина смажена',          unit:'г', kcal:290, p:24,   f:21,   c:0,   h:2, portion:150, cat:'білкове' },
    sausage:      { name:'Сосиска (1 шт ~50 г)',     unit:'шт', kcal:130,p:5,    f:11,   c:2,   h:1, portion:2,   cat:'білкове' },
    kovbasa:      { name:'Ковбаса варена',           unit:'г', kcal:260, p:12,   f:22,   c:2,   h:1, portion:50,  cat:'білкове' },
    kovbasa_s:    { name:'Ковбаса сирокопчена',      unit:'г', kcal:400, p:24,   f:34,   c:1,   h:1, portion:30,  cat:'білкове' },
    cutlet:       { name:'Котлета смажена (1 шт)',   unit:'шт', kcal:220,p:11,   f:15,   c:9,   h:2, portion:1,   cat:'білкове' },
    dumplings:    { name:'Пельмені варені',          unit:'г', kcal:250, p:11,   f:10,   c:28,  h:2, portion:300, cat:'білкове' },
    vareniki:     { name:'Вареники з картоплею',     unit:'г', kcal:200, p:5,    f:4,    c:36,  h:2, portion:300, cat:'білкове' },
    beans:        { name:'Фасоля консервована',      unit:'г', kcal:100, p:6,    f:0.5,  c:17,  h:4, portion:100, cat:'білкове' },

    /* ---------- МОЛОЧНЕ ---------- */
    cottage5:     { name:'Творог 5%',                unit:'г', kcal:120, p:16,   f:5,    c:3,   h:5, portion:200, cat:'молочне' },
    cottage9:     { name:'Творог 9%',                unit:'г', kcal:155, p:16,   f:9,    c:3,   h:4, portion:200, cat:'молочне' },
    greek:        { name:'Грецький йогурт',          unit:'г', kcal:70,  p:8,    f:3,    c:4,   h:5, portion:250, cat:'молочне' },
    yog_sweet:    { name:'Йогурт солодкий питний',   unit:'мл', kcal:80, p:3,    f:2.5,  c:12,  h:2, portion:250, cat:'молочне' },
    kefir:        { name:'Кефір 2,5%',               unit:'мл', kcal:50, p:3,    f:2.5,  c:4,   h:4, portion:400, cat:'молочне' },
    milk:         { name:'Молоко 2,6%',              unit:'мл', kcal:52, p:2.8,  f:2.6,  c:4.7, h:3, portion:200, cat:'молочне' },
    cheese:       { name:'Сир твердий',              unit:'г', kcal:340, p:25,   f:26,   c:0,   h:3, portion:30,  cat:'молочне' },
    cheese_melt:  { name:'Сир плавлений',            unit:'г', kcal:290, p:12,   f:26,   c:3,   h:2, portion:30,  cat:'молочне' },
    smetana:      { name:'Сметана 15%',              unit:'г', kcal:160, p:2.6,  f:15,   c:3.6, h:2, portion:30,  cat:'молочне' },
    icecream:     { name:'Морозиво пломбір',         unit:'г', kcal:230, p:3.7,  f:12,   c:23,  h:1, portion:80,  cat:'молочне' },

    /* ---------- ОВОЧІ ---------- */
    veg_fresh:    { name:'Овочі свіжі / салат',      unit:'г', kcal:30,  p:1.5,  f:0.2,  c:5,   h:5, portion:200, cat:'овочі' },
    veg_frozen:   { name:'Овочева суміш заморожена', unit:'г', kcal:45,  p:2.5,  f:0.5,  c:7,   h:5, portion:250, cat:'овочі' },
    cucumber:     { name:'Огірок / помідор',         unit:'г', kcal:18,  p:0.8,  f:0.1,  c:3.5, h:5, portion:150, cat:'овочі' },
    peas:         { name:'Горошок зелений конс.',    unit:'г', kcal:55,  p:3.6,  f:0.2,  c:9,   h:4, portion:100, cat:'овочі' },
    corn:         { name:'Кукурудза консервована',   unit:'г', kcal:90,  p:2.5,  f:1,    c:17,  h:3, portion:100, cat:'овочі' },
    sauerkraut:   { name:'Квашена капуста',          unit:'г', kcal:20,  p:1,    f:0.1,  c:4,   h:5, portion:100, cat:'овочі' },

    /* ---------- ФРУКТИ ---------- */
    banana:       { name:'Банан (1 шт ~120 г)',      unit:'шт', kcal:105,p:1.3,  f:0.4,  c:27,  h:4, portion:1,   cat:'фрукти' },
    apple:        { name:'Яблуко (1 шт ~180 г)',     unit:'шт', kcal:90, p:0.4,  f:0.3,  c:23,  h:5, portion:1,   cat:'фрукти' },
    pear:         { name:'Груша (1 шт)',             unit:'шт', kcal:85, p:0.6,  f:0.2,  c:22,  h:5, portion:1,   cat:'фрукти' },
    orange:       { name:'Апельсин (1 шт)',          unit:'шт', kcal:80, p:1.5,  f:0.2,  c:19,  h:5, portion:1,   cat:'фрукти' },
    grapes:       { name:'Виноград',                 unit:'г', kcal:70,  p:0.6,  f:0.3,  c:17,  h:3, portion:150, cat:'фрукти' },
    berries:      { name:'Ягоди сезонні',            unit:'г', kcal:45,  p:1,    f:0.4,  c:9,   h:5, portion:150, cat:'фрукти' },
    dried_fruit:  { name:'Сухофрукти',               unit:'г', kcal:270, p:2,    f:0.5,  c:65,  h:3, portion:40,  cat:'фрукти' },
    avocado:      { name:'Авокадо',                  unit:'г', kcal:160, p:2,    f:15,   c:2,   h:5, portion:70,  cat:'фрукти' },

    /* ---------- ГОРІХИ І СОЛОДКЕ ---------- */
    cashew:       { name:'Кешью',                    unit:'г', kcal:570, p:18,   f:44,   c:27,  h:4, portion:30,  cat:'горіхи і солодке' },
    walnut:       { name:'Грецький горіх',           unit:'г', kcal:650, p:15,   f:65,   c:7,   h:4, portion:30,  cat:'горіхи і солодке' },
    almond:       { name:'Мигдаль',                  unit:'г', kcal:600, p:21,   f:52,   c:10,  h:4, portion:30,  cat:'горіхи і солодке' },
    nutbutter:    { name:'Арахісова / горіхова паста',unit:'г',kcal:600, p:25,   f:50,   c:16,  h:3, portion:15,  cat:'горіхи і солодке' },
    honey:        { name:'Мед',                      unit:'г', kcal:300, p:0.3,  f:0,    c:82,  h:2, portion:10,  cat:'горіхи і солодке' },
    choc_dark:    { name:'Шоколад чорний',           unit:'г', kcal:550, p:6,    f:35,   c:48,  h:2, portion:20,  cat:'горіхи і солодке' },
    choc_milk:    { name:'Шоколад молочний',         unit:'г', kcal:545, p:7,    f:31,   c:57,  h:1, portion:20,  cat:'горіхи і солодке' },
    candy:        { name:'Цукерка (1 шт)',           unit:'шт', kcal:50, p:0.5,  f:2,    c:8,   h:1, portion:2,   cat:'горіхи і солодке' },
    cookies:      { name:'Печиво',                   unit:'г', kcal:450, p:6,    f:18,   c:68,  h:1, portion:40,  cat:'горіхи і солодке' },
    granola:      { name:'Гранола',                  unit:'г', kcal:450, p:9,    f:16,   c:64,  h:3, portion:35,  cat:'горіхи і солодке' },

    /* ---------- СНЕКИ ---------- */
    chips:        { name:'Чіпси',                    unit:'г', kcal:520, p:6,    f:33,   c:50,  h:1, portion:50,  cat:'снеки' },
    popcorn:      { name:'Попкорн домашній (готовий)',unit:'г',kcal:450, p:11,   f:15,   c:65,  h:2, portion:50,  cat:'снеки' },
    croutons:     { name:'Сухарики домашні (порція)', unit:'порція', kcal:220, p:5, f:6, c:36, h:2, portion:1,   cat:'снеки' },

    /* ---------- НАПОЇ ---------- */
    coffee:       { name:'Кава чорна / еспресо',     unit:'шт', kcal:2,  p:0.1,  f:0,    c:0,   h:3, portion:1,   cat:'напої' },
    cappuccino:   { name:'Капучино (чашка 150 мл)',  unit:'шт', kcal:60, p:3,    f:3,    c:5,   h:3, portion:1,   cat:'напої' },
    cappuccino_s: { name:'Капучино з цукром',        unit:'шт', kcal:90, p:3,    f:3,    c:13,  h:2, portion:1,   cat:'напої' },
    latte:        { name:'Латте (250 мл)',           unit:'шт', kcal:110,p:5.5,  f:5.5,  c:10,  h:3, portion:1,   cat:'напої' },
    juice:        { name:'Сік',                      unit:'мл', kcal:45, p:0.5,  f:0,    c:10,  h:2, portion:200, cat:'напої' },
    cola:         { name:'Cola звичайна 0,5 л',      unit:'шт', kcal:210,p:0,    f:0,    c:53,  h:1, portion:1,   cat:'напої' },
    cola_zero:    { name:'Cola Zero 0,5 л',          unit:'шт', kcal:0,  p:0,    f:0,    c:0,   h:2, portion:1,   cat:'напої' },
    beer:         { name:'Пиво звичайне 0,5 л',      unit:'шт', kcal:215,p:2.5,  f:0,    c:18,  h:1, portion:1,   cat:'напої' },
    beer_na:      { name:'Пиво безалкогольне 0,5 л', unit:'шт', kcal:115,p:2,    f:0,    c:26,  h:2, portion:1,   cat:'напої' },
    wine:         { name:'Вино сухе (келих 150 мл)', unit:'шт', kcal:125,p:0.1,  f:0,    c:4,   h:2, portion:1,   cat:'напої' },
    kompot:       { name:'Компот',                   unit:'мл', kcal:60, p:0.2,  f:0,    c:15,  h:2, portion:250, cat:'напої' },

    /* ---------- ВУЛИЧНА ЇЖА ---------- */
    shawarma:     { name:'Шаурма велика',            unit:'шт', kcal:850,p:45,   f:40,   c:80,  h:2, portion:1,   cat:'вулична їжа' },
    shawarma_s:   { name:'Шаурма мала',              unit:'шт', kcal:600,p:32,   f:28,   c:56,  h:2, portion:1,   cat:'вулична їжа' },
    pizza_slice:  { name:'Піца (шматок ~110 г)',     unit:'шт', kcal:285,p:11,   f:11,   c:34,  h:2, portion:2,   cat:'вулична їжа' },
    burger:       { name:'Бургер',                   unit:'шт', kcal:500,p:25,   f:25,   c:40,  h:1, portion:1,   cat:'вулична їжа' },
    fries:        { name:'Картопля фрі (порція)',    unit:'порція', kcal:400, p:5, f:20, c:50, h:1, portion:1,   cat:'вулична їжа' },
    hotdog:       { name:'Хот-дог',                  unit:'шт', kcal:350,p:12,   f:18,   c:34,  h:1, portion:1,   cat:'вулична їжа' },
    sushi:        { name:'Суші рол (8 шт)',          unit:'порція', kcal:350, p:10, f:5, c:64, h:3, portion:1,   cat:'вулична їжа' },
    nalysnyk:     { name:'Налисник із сиром (1 шт)', unit:'шт', kcal:180,p:7,    f:7,    c:22,  h:2, portion:2,   cat:'вулична їжа' },

    /* ---------- СТОЛОВА ---------- */
    canteen_soup: { name:'Борщ / суп (столова)',     unit:'порція', kcal:200, p:8,  f:8,  c:22, h:4, portion:1,  cat:'столова' },
    canteen_side: { name:'Гарнір (столова)',         unit:'порція', kcal:200, p:5,  f:4,  c:36, h:3, portion:1,  cat:'столова' },
    canteen_meat: { name:'М’ясо / котлета (столова)',unit:'порція', kcal:240, p:22, f:14, c:8,  h:3, portion:1,  cat:'столова' },
    canteen_salad:{ name:'Салат овочевий (столова)', unit:'порція', kcal:80,  p:2,  f:5,  c:7,  h:4, portion:1,  cat:'столова' },
    canteen_full: { name:'Обід столова: повний',     unit:'порція', kcal:700, p:40, f:28, c:72, h:3, portion:1,  cat:'столова' },
    canteen_light:{ name:'Обід столова: легкий',     unit:'порція', kcal:550, p:38, f:18, c:58, h:4, portion:1,  cat:'столова' },
    canteen_heavy:{ name:'Обід столова: ситний',     unit:'порція', kcal:900, p:42, f:45, c:82, h:2, portion:1,  cat:'столова' },
    olivier:      { name:'Салат олів’є',             unit:'г', kcal:200, p:4,    f:15,   c:8,   h:2, portion:150, cat:'столова' },

    /* ---------- ГОТОВІ СТРАВИ ---------- */
    yogurt_bowl:  { name:'Енергетичний йогурт-боул', unit:'порція', kcal:500, p:23, f:20, c:57, h:4, portion:1,  cat:'готові страви' },
    buck_chicken: { name:'Гречка + курка + овочі (контейнер)', unit:'порція', kcal:660, p:55, f:12, c:80, h:5, portion:1, cat:'готові страви' },
    rice_chicken: { name:'Рис + курка + овочі (контейнер)',    unit:'порція', kcal:700, p:52, f:11, c:95, h:4, portion:1, cat:'готові страви' },
    pasta_fish:   { name:'Макарони + рибна консерва (контейнер)', unit:'порція', kcal:650, p:42, f:18, c:78, h:4, portion:1, cat:'готові страви' },

    /* ---------- СПОРТ ---------- */
    gel:          { name:'Гель енергетичний',        unit:'шт', kcal:100,p:0,    f:0,    c:25,  h:3, portion:1,   cat:'спорт' },
    isotonic:     { name:'Ізотонік 500 мл',          unit:'шт', kcal:130,p:0,    f:0,    c:32,  h:3, portion:1,   cat:'спорт' },
    protein_bar:  { name:'Протеїновий батончик',     unit:'шт', kcal:200,p:20,   f:7,    c:20,  h:3, portion:1,   cat:'спорт' }
  }
};
