import {
  BilingualLine,
  ChecklistTopic,
  ExamQA,
  FigureDetail,
  FigurePracticeItem,
  SentenceExerciseRow,
  SimpleQA,
  TheoryQA,
} from './types';

// ================= PREP EXAM 6: El romance, la leyenda, el cuento y el mito =================
export const PREP6_ROMANCE_QA: TheoryQA[] = [
  {
    number: '1.',
    questionEs: '¿Qué es un romance?',
    questionHy: 'Ի՞նչ է ռոմանսը։',
    answerEs:
      'El romance es una composición poética formada por un número indeterminado de versos octosílabos, con rima asonante en los versos pares y sin rima obligatoria en los impares.',
    answerHy:
      'Ռոմանսը բանաստեղծական ստեղծագործություն է, որը կազմված է անորոշ քանակությամբ ութվանկանի տողերից։ Զույգ տողերն ունեն առձայնույթային հանգ, իսկ կենտ տողերը պարտադիր չեն հանգավորվում։',
  },
  {
    number: '2.',
    questionEs: '¿Qué significa que un verso es octosílabo?',
    questionHy: 'Ի՞նչ է նշանակում ութվանկանի տող։',
    answerEs: 'Significa que el verso tiene ocho sílabas métricas.',
    answerHy: 'Նշանակում է, որ տողն ունի ութ չափածո վանկ։',
  },
  {
    number: '3.',
    questionEs: '¿Qué diferencia hay entre la rima asonante y la consonante?',
    questionHy: 'Ի՞նչ տարբերություն կա առձայնույթային և լիակատար հանգերի միջև։',
    answerEs:
      'Rima asonante: Coinciden únicamente los sonidos vocálicos desde la última vocal tónica. Rima consonante: Coinciden todos los sonidos, vocales y consonantes, desde la última vocal tónica.',
    answerHy:
      'Առձայնույթային հանգ՝ համընկնում են միայն ձայնավորները՝ սկսած վերջին շեշտված ձայնավորից։ Լիակատար հանգ՝ համընկնում են բոլոր հնչյունները՝ և՛ ձայնավորները, և՛ բաղաձայնները։',
    examples: [
      { es: 'Rima asonante: casa — rama (a-a).', hy: 'Առձայնույթային հանգ՝ casa — rama (a-a)։' },
      { es: 'Rima consonante: corazón — canción.', hy: 'Լիակատար հանգ՝ corazón — canción։' },
    ],
  },
  {
    number: '4.',
    questionEs: '¿Qué es la sinalefa?',
    questionHy: 'Ի՞նչ է սինալեֆան։',
    answerEs:
      'La sinalefa consiste en unir en una sola sílaba métrica la vocal final de una palabra y la vocal inicial de la siguiente.',
    answerHy:
      'Սինալեֆան մի բառի վերջին ձայնավորի և հաջորդ բառի սկզբնական ձայնավորի միավորումն է մեկ չափածո վանկի մեջ։',
    examples: [
      {
        es: 'Mi amigo juega. → Mi_a / mi / go / jue / ga = 5 sílabas métricas.',
        hy: 'Mi amigo juega. → Mi_a / mi / go / jue / ga = 5 չափածո վանկ։',
      },
    ],
  },
];

export const PREP6_ROMANCE_VERSES: { num: number; es: string; hy: string; metric: string }[] = [
  { num: 1, es: 'Por el camino del pueblo', hy: 'Գյուղի ճանապարհով', metric: '8 –' },
  { num: 2, es: 'va Lucía muy callada,', hy: 'քայլում է Լուսիան շատ լուռ,', metric: '8 a' },
  { num: 3, es: 'lleva flores de colores', hy: 'գունավոր ծաղիկներ է տանում', metric: '8 –' },
  { num: 4, es: 'para su querida hermana.', hy: 'իր սիրելի քրոջ համար։', metric: '8 a' },
  { num: 5, es: 'Junto al puente ve dos niños', hy: 'Կամրջի մոտ երկու երեխայի է տեսնում,', metric: '8 –' },
  { num: 6, es: 'que le piden una rama,', hy: 'որոնք մի ճյուղ են խնդրում նրանից,', metric: '8 a' },
  { num: 7, es: 'les regala tres claveles', hy: 'նա նրանց երեք մեխակ է նվիրում', metric: '8 –' },
  { num: 8, es: 'y después vuelve a su casa.', hy: 'և ապա վերադառնում է իր տուն։', metric: '8 a' },
];

export const PREP6_ROMANCE_ANALYSIS: SimpleQA[] = [
  { questionEs: '¿Cuántos versos tiene?', questionHy: 'Քանի՞ տող ունի։', answerEs: 'Ocho versos.', answerHy: 'Ութ տող։' },
  { questionEs: '¿Cuántas sílabas métricas tiene cada verso?', questionHy: 'Քանի՞ չափածո վանկ ունի ամեն տողը։', answerEs: 'Ocho.', answerHy: 'Ութ։' },
  { questionEs: '¿Cómo se llaman estos versos?', questionHy: 'Ինչպե՞ս են կոչվում այս տողերը։', answerEs: 'Octosílabos.', answerHy: 'Ութվանկանի տողեր։' },
  { questionEs: '¿Qué versos riman?', questionHy: 'Ո՞ր տողերն են հանգավորվում։', answerEs: 'Los pares: 2, 4, 6 y 8.', answerHy: 'Զույգ տողերը՝ 2, 4, 6 և 8։' },
  { questionEs: '¿Qué palabras riman?', questionHy: 'Ո՞ր բառերն են հանգավորվում։', answerEs: 'Callada, hermana, rama y casa.', answerHy: 'Callada, hermana, rama և casa։' },
  { questionEs: '¿Qué tipo de rima tienen?', questionHy: 'Ի՞նչ տեսակի հանգ ունեն։', answerEs: 'Asonante: a-a.', answerHy: 'Առձայնույթային՝ a-a։' },
  { questionEs: '¿Cuál es su esquema métrico?', questionHy: 'Ո՞րն է նրա տաղաչափական սխեման։', answerEs: '8– 8a 8– 8a 8– 8a 8– 8a.', answerHy: '8– 8a 8– 8a 8– 8a 8– 8a։' },
  {
    questionEs: '¿Por qué tiene estructura de romance?',
    questionHy: 'Ինչո՞ւ ունի ռոմանսի կառուցվածք։',
    answerEs: 'Porque presenta versos octosílabos con rima asonante en los pares y sin rima obligatoria en los impares.',
    answerHy: 'Քանի որ ունի ութվանկանի տողեր՝ զույգ տողերում առձայնույթային հանգով, իսկ կենտերում՝ առանց պարտադիր հանգի։',
  },
  {
    questionEs: '¿Hay sinalefa?',
    questionHy: 'Կա՞ սինալեֆա։',
    answerEs: 'Sí, por ejemplo, en «Junto_al» y «querida_hermana».',
    answerHy: 'Այո՛, օրինակ՝ «Junto_al» և «querida_hermana» արտահայտություններում։',
  },
];

export const PREP6_LEYENDA = {
  defEs:
    'La leyenda es un relato tradicional que suele estar relacionado con lugares, personajes o acontecimientos históricos o reales, pero incorpora elementos fantásticos o sobrenaturales.',
  defHy:
    'Ավանդազրույցը ավանդական պատմություն է, որը հաճախ կապված է իրական վայրերի, կերպարների կամ պատմական իրադարձությունների հետ, բայց ներառում է երևակայական կամ գերբնական տարրեր։',
  titleEs: 'El árbol de los deseos',
  titleHy: 'Ցանկությունների ծառը',
  paragraphs: [
    {
      es: 'Cuentan los habitantes de un pequeño pueblo que, hace muchos años, una niña plantó un árbol junto a la fuente de la plaza. Cada tarde se acercaba para regarlo y pedir que todas las familias del pueblo fueran felices.',
      hy: 'Մի փոքրիկ գյուղի բնակիչները պատմում են, որ շատ տարիներ առաջ մի աղջիկ հրապարակի աղբյուրի մոտ ծառ տնկեց։ Ամեն երեկո նա մոտենում էր ջրելու այն և խնդրելու, որ գյուղի բոլոր ընտանիքները երջանիկ լինեն։',
    },
    {
      es: 'Con el paso del tiempo, el árbol creció hasta convertirse en el más grande de la región. Según la historia, cada primavera aparecía una flor dorada entre sus ramas.',
      hy: 'Ժամանակի ընթացքում ծառն աճեց՝ դառնալով տարածաշրջանի ամենամեծ ծառը։ Պատմության համաձայն՝ ամեն գարուն նրա ճյուղերի մեջ ոսկե ծաղիկ էր հայտնվում։',
    },
    {
      es: 'Los vecinos creían que aquella flor surgía cuando alguien realizaba una buena acción sin esperar nada a cambio.',
      hy: 'Բնակիչները հավատում էին, որ այդ ծաղիկը ծլում էր այն ժամանակ, երբ ինչ-որ մեկը բարի գործ էր անում՝ ոչինչ չակնկալելով փոխարենը։',
    },
    {
      es: 'Desde entonces, los habitantes del pueblo cuidan el árbol y cuentan su historia a los niños para recordarles la importancia de la generosidad.',
      hy: 'Այդ օրվանից գյուղի բնակիչները խնամում են ծառը և պատմում նրա պատմությունը երեխաներին՝ հիշեցնելու առատաձեռնության կարևորությունը։',
    },
  ] as BilingualLine[],
  qa: [
    { questionEs: 'A) ¿Cuál es el tema principal del texto?', questionHy: 'Ո՞րն է տեքստի հիմնական թեման։', answerEs: 'La importancia de la bondad y la generosidad.', answerHy: 'Բարության և առատաձեռնության կարևորությունը։' },
    { questionEs: 'B) ¿Qué elementos podrían ser reales?', questionHy: 'Ո՞ր տարրերը կարող են իրական լինել։', answerEs: 'El pueblo, la plaza, la fuente, la niña y el árbol.', answerHy: 'Գյուղը, հրապարակը, աղբյուրը, աղջիկը և ծառը։' },
    { questionEs: 'C) ¿Qué elemento fantástico aparece?', questionHy: 'Ի՞նչ երևակայական տարր է հանդիպում։', answerEs: 'La aparición de una flor dorada como consecuencia de una buena acción.', answerHy: 'Ոսկե ծաղկի հայտնվելը բարի գործի արդյունքում։' },
    {
      questionEs: 'D) ¿Por qué tiene características de una leyenda?',
      questionHy: 'Ինչո՞ւ ունի ավանդազրույցի հատկանիշներ։',
      answerEs: 'Porque relaciona un lugar y unas personas que podrían existir realmente con un acontecimiento fantástico, presentado como una tradición del pueblo.',
      answerHy: 'Քանի որ կապում է իրականում գոյություն ունենալու հնարավորություն ունեցող վայրն ու մարդկանց երևակայական դեպքի հետ՝ ներկայացնելով որպես գյուղի ավանդույթ։',
    },
    { questionEs: 'E) ¿Qué enseñanza transmite?', questionHy: 'Ի՞նչ դաս է տալիս։', answerEs: 'Que debemos ayudar a los demás sin esperar una recompensa.', answerHy: 'Որ պետք է օգնել ուրիշներին՝ առանց վարձատրություն սպասելու։' },
    { questionEs: 'F) ¿Cómo se transmitiría una leyenda popular tradicional?', questionHy: 'Ինչպե՞ս կփոխանցվեր ավանդական ժողովրդական ավանդազրույցը։', answerEs: 'Oralmente, de generación en generación.', answerHy: 'Բանավոր՝ սերնդից սերունդ։' },
  ] as SimpleQA[],
};

export const PREP6_MITO = {
  defEs:
    'El mito es una narración tradicional de carácter maravilloso, protagonizada frecuentemente por dioses, héroes o seres sobrenaturales. Busca explicar el origen del mundo, de los seres humanos o de determinados fenómenos naturales y culturales.',
  defHy:
    'Առասպելը հրաշապատում բնույթի ավանդական պատմություն է, որի հերոսները հաճախ աստվածներ, հերոսներ կամ գերբնական էակներ են։ Այն փորձում է բացատրել աշխարհի, մարդկանց կամ բնական երևույթների ծագումը։',
  titleEs: 'El nacimiento del arcoíris',
  titleHy: 'Ծիածանի ծնունդը',
  paragraphs: [
    {
      es: 'Hace miles de años, según una historia imaginaria, el mundo solo tenía dos colores: el azul del cielo y el gris de la tierra.',
      hy: 'Հազարավոր տարիներ առաջ, ըստ մի երևակայական պատմության, աշխարհն ուներ ընդամենը երկու գույն՝ երկնքի կապույտը և երկրի մոխրագույնը։',
    },
    {
      es: 'Una joven diosa llamada Alba observaba con tristeza que los niños no podían distinguir los colores de las flores.',
      hy: 'Ալբա անունով մի երիտասարդ աստվածուհի տխրությամբ նկատում էր, որ երեխաները չեն կարողանում տարբերել ծաղիկների գույները։',
    },
    {
      es: 'Un día decidió reunir siete piedras mágicas y entregárselas al dios del Sol. Él utilizó su luz para transformar las piedras en siete colores maravillosos.',
      hy: 'Մի օր նա որոշեց հավաքել յոթ կախարդական քար և հանձնել Արևի աստծուն։ Նա իր լույսով քարերը վերածեց յոթ հրաշալի գույների։',
    },
    {
      es: 'Cuando terminó de llover, los colores aparecieron juntos en el cielo, formando un puente luminoso.',
      hy: 'Երբ անձրևը դադարեց, գույները միասին հայտնվեցին երկնքում՝ կազմելով լուսավոր կամուրջ։',
    },
    {
      es: 'Desde aquel día, según este relato, el arcoíris aparece después de algunas lluvias para recordar la unión entre la tierra y el cielo.',
      hy: 'Այդ օրվանից, ըստ այս պատմության, ծիածանը հայտնվում է որոշ անձրևներից հետո՝ հիշեցնելու երկրի և երկնքի միությունը։',
    },
  ] as BilingualLine[],
  qa: [
    { questionEs: 'A) ¿Quiénes son los protagonistas?', questionHy: 'Ովքե՞ր են գլխավոր հերոսները։', answerEs: 'La diosa Alba y el dios del Sol.', answerHy: 'Ալբա աստվածուհին և Արևի աստվածը։' },
    { questionEs: 'B) ¿Qué fenómeno natural intenta explicar?', questionHy: 'Ո՞ր բնական երևույթն է փորձում բացատրել։', answerEs: 'El origen del arcoíris.', answerHy: 'Ծիածանի ծագումը։' },
    { questionEs: 'C) ¿Qué elementos sobrenaturales aparecen?', questionHy: 'Ի՞նչ գերբնական տարրեր են հանդիպում։', answerEs: 'Los dioses, las piedras mágicas y la creación sobrenatural de los colores.', answerHy: 'Աստվածները, կախարդական քարերը և գույների գերբնական ստեղծումը։' },
    {
      questionEs: 'D) ¿Por qué tiene características de un mito?',
      questionHy: 'Ինչո՞ւ ունի առասպելի հատկանիշներ։',
      answerEs: 'Porque presenta seres sobrenaturales e intenta explicar el origen de un fenómeno natural mediante una narración fantástica.',
      answerHy: 'Քանի որ ներկայացնում է գերբնական էակներ և երևակայական պատմության միջոցով բացատրում է բնական երևույթի ծագումը։',
    },
    { questionEs: 'E) ¿Está escrito en prosa o en verso?', questionHy: 'Գրված է արձա՞կ, թե՞ չափածո։', answerEs: 'Está escrito en prosa.', answerHy: 'Գրված է արձակ ձևով։' },
    {
      questionEs: 'F) ¿A qué género literario pertenece?',
      questionHy: 'Ո՞ր գրական ժանրին է պատկանում։',
      answerEs: 'Al género narrativo, porque un narrador cuenta una historia con personajes y acontecimientos.',
      answerHy: 'Պատմողական ժանրին, քանի որ պատմողը ներկայացնում է հերոսներով և իրադարձություններով պատմություն։',
    },
  ] as SimpleQA[],
};

export const PREP6_CUENTO = {
  defEs:
    'El cuento es una narración breve, generalmente ficticia y escrita en prosa, que presenta un número reducido de personajes y un argumento relativamente sencillo.',
  defHy:
    'Հեքիաթը կամ պատմվածքը կարճ, սովորաբար հորինված և արձակ ձևով գրված պատմություն է, որն ունի սահմանափակ թվով հերոսներ և համեմատաբար պարզ սյուժե։',
  titleEs: 'El regalo perfecto',
  titleHy: 'Կատարյալ նվերը',
  paragraphs: [
    {
      es: 'Adrián quería comprar un regalo para su madre, pero no tenía suficiente dinero. Durante varios días pensó en lo que podía hacer para sorprenderla.',
      hy: 'Ադրիանը ցանկանում էր նվեր գնել իր մոր համար, բայց բավարար գումար չուներ։ Մի քանի օր նա մտածում էր՝ ինչ կարող է անել նրան անակնկալ մատուցելու համար։',
    },
    {
      es: 'Finalmente, decidió preparar una caja con pequeños mensajes. En cada papel escribió un recuerdo especial que había compartido con ella.',
      hy: 'Վերջապես նա որոշեց պատրաստել փոքրիկ նամակներով տուփ։ Յուրաքանչյուր թղթի վրա գրեց մի հատուկ հիշողություն, որը կիսել էր նրա հետ։',
    },
    {
      es: 'Cuando su madre abrió la caja, sus ojos se llenaron de lágrimas de alegría. Adrián comprendió que el valor de un regalo no depende de su precio, sino del cariño con el que se entrega.',
      hy: 'Երբ մայրը բացեց տուփը, նրա աչքերը լցվեցին ուրախության արցունքներով։ Ադրիանը հասկացավ, որ նվերի արժեքը կախված չէ նրա գնից, այլ այն սիրուց, որով այն տրվում է։',
    },
  ] as BilingualLine[],
  qa: [
    { questionEs: 'A) ¿Quién es el protagonista?', questionHy: 'Ո՞վ է գլխավոր հերոսը։', answerEs: 'Adrián.', answerHy: 'Ադրիանը։' },
    { questionEs: 'B) ¿Cuál es el problema inicial?', questionHy: 'Ո՞րն է սկզբնական խնդիրը։', answerEs: 'Quiere comprar un regalo para su madre, pero no tiene suficiente dinero.', answerHy: 'Ուզում է նվեր գնել մոր համար, բայց բավարար գումար չունի։' },
    { questionEs: 'C) ¿Cómo se resuelve el problema?', questionHy: 'Ինչպե՞ս է լուծվում խնդիրը։', answerEs: 'Prepara una caja con mensajes y recuerdos personales.', answerHy: 'Պատրաստում է նամակներով և անձնական հիշողություններով տուփ։' },
    { questionEs: 'D) ¿Cuál es la enseñanza del cuento?', questionHy: 'Ո՞րն է պատմվածքի դասը։', answerEs: 'Que el cariño es más importante que el valor económico de un regalo.', answerHy: 'Որ սերն ու ջերմությունն ավելի կարևոր են, քան նվերի դրամական արժեքը։' },
    {
      questionEs: 'E) ¿Por qué es un cuento?',
      questionHy: 'Ինչո՞ւ է սա պատմվածք։',
      answerEs: 'Porque es una narración breve, ficticia, escrita en prosa, con pocos personajes y un argumento sencillo.',
      answerHy: 'Քանի որ կարճ, հորինված, արձակ պատմություն է՝ քիչ կերպարներով և պարզ սյուժեով։',
    },
  ] as SimpleQA[],
};

export const PREP6_DIFFERENCES: { typeEs: string; typeHy: string; charEs: string; charHy: string }[] = [
  {
    typeEs: 'Romance',
    typeHy: 'Ռոմանս',
    charEs: 'Versos octosílabos y rima asonante en los pares.',
    charHy: 'Ութվանկանի տողեր և առձայնույթային հանգ զույգ տողերում։',
  },
  {
    typeEs: 'Leyenda',
    typeHy: 'Ավանդազրույց',
    charEs: 'Combina una base posiblemente real con elementos fantásticos.',
    charHy: 'Համադրում է հավանական իրական հիմքը երևակայական տարրերի հետ։',
  },
  {
    typeEs: 'Mito',
    typeHy: 'Առասպել',
    charEs: 'Explica orígenes o fenómenos mediante seres sobrenaturales.',
    charHy: 'Բացատրում է ծագումը կամ երևույթները գերբնական էակների միջոցով։',
  },
  {
    typeEs: 'Cuento',
    typeHy: 'Հեքիաթ / պատմվածք',
    charEs: 'Narración breve con pocos personajes y argumento sencillo.',
    charHy: 'Կարճ պատմություն՝ քիչ կերպարներով և պարզ սյուժեով։',
  },
];

// ================= PREP EXAM 7: El lenguaje literario =================
export const PREP7_LITERARY_LANG_QA: TheoryQA[] = [
  {
    number: '1.',
    questionEs: '¿Qué es el lenguaje literario o poético?',
    questionHy: 'Ի՞նչ է գեղարվեստական կամ բանաստեղծական լեզուն։',
    answerEs:
      'El lenguaje literario es una forma de expresión estética y emocional que utiliza las palabras de manera artística para captar la atención del lector, transmitir sentimientos y despertar su imaginación.',
    answerHy:
      'Գեղարվեստական լեզուն գեղագիտական և զգացմունքային արտահայտման ձև է, որն օգտագործում է բառերը գեղարվեստորեն՝ ընթերցողի ուշադրությունը գրավելու, զգացմունքներ փոխանցելու և երևակայությունն արթնացնելու համար։',
  },
  {
    number: '2.',
    questionEs: '¿Cómo se denominan las creaciones artísticas producidas mediante el lenguaje literario?',
    questionHy: 'Ինչպե՞ս են անվանում գեղարվեստական լեզվով ստեղծված ստեղծագործությունները։',
    answerEs: 'Se denominan obras literarias.',
    answerHy: 'Դրանք կոչվում են գրական ստեղծագործություններ։',
  },
  {
    number: '3.',
    questionEs: '¿Qué diferencia hay entre el lenguaje literario y el lenguaje cotidiano?',
    questionHy: 'Ի՞նչ տարբերություն կա գեղարվեստական և առօրյա լեզուների միջև։',
    answerEs:
      'El lenguaje cotidiano se utiliza principalmente para comunicar información de manera habitual y directa. El lenguaje literario busca una expresión más artística y original mediante recursos como la metáfora, la rima, la musicalidad y las figuras literarias.',
    answerHy:
      'Առօրյա լեզուն օգտագործվում է սովորական և ուղիղ կերպով տեղեկություն փոխանցելու համար։ Գեղարվեստական լեզուն ձգտում է ավելի գեղեցիկ ու յուրօրինակ արտահայտման՝ փոխաբերության, հանգի, երաժշտականության և գեղարվեստական միջոցների շնորհիվ։',
  },
  {
    number: '4.',
    questionEs: '¿Qué recursos utiliza el lenguaje literario?',
    questionHy: 'Ի՞նչ միջոցներ է օգտագործում գեղարվեստական լեզուն։',
    answerEs:
      'Utiliza figuras literarias, metáforas, comparaciones, repeticiones, rima, ritmo, musicalidad y, en ocasiones, un orden de palabras diferente del habitual.',
    answerHy:
      'Օգտագործում է գեղարվեստական պատկերավորման միջոցներ, փոխաբերություններ, համեմատություններ, կրկնություններ, հանգ, ռիթմ, երաժշտականություն և երբեմն՝ բառերի սովորականից տարբեր դասավորություն։',
  },
  {
    number: '5.',
    questionEs: '¿Qué función del lenguaje predomina en los textos literarios?',
    questionHy: 'Լեզվի ո՞ր գործառույթն է գերակշռում գրական տեքստերում։',
    answerEs:
      'Predomina generalmente la función poética, porque se presta especial atención a la forma del mensaje, a la belleza de las palabras y a su capacidad expresiva.',
    answerHy:
      'Սովորաբար գերակշռում է գեղագիտական գործառույթը, քանի որ հատուկ ուշադրություն է դարձվում հաղորդագրության ձևին, բառերի գեղեցկությանը և արտահայտչականությանը։',
  },
  {
    number: '6.',
    questionEs: '¿De qué dos formas pueden escribirse los textos literarios?',
    questionHy: 'Ի՞նչ երկու ձևերով կարող են գրվել գրական տեքստերը։',
    answerEs: 'Los textos literarios pueden escribirse en prosa o en verso.',
    answerHy: 'Գրական տեքստերը կարող են գրվել արձակ կամ չափածո ձևով։',
  },
  {
    number: '7.',
    questionEs: '¿Qué es la prosa?',
    questionHy: 'Ի՞նչ է արձակը։',
    answerEs:
      'La prosa es una forma de expresión escrita que se organiza normalmente en oraciones y párrafos y no está sujeta necesariamente a una medida métrica o a una rima.',
    answerHy:
      'Արձակը գրավոր արտահայտման ձև է, որը կազմվում է նախադասություններով և պարբերություններով ու պարտադիր չէ, որ ունենա չափ կամ հանգ։',
    examples: [{ es: 'Ejemplos: Las novelas, los cuentos y muchas obras teatrales.', hy: 'Օրինակներ՝ վեպերը, պատմվածքները և շատ թատերական գործեր։' }],
  },
  {
    number: '8.',
    questionEs: '¿Qué es el verso?',
    questionHy: 'Ի՞նչ է չափածո տողը։',
    answerEs:
      'El verso es cada una de las líneas que forman una composición poética. Puede presentar una medida, un ritmo y una rima determinados.',
    answerHy:
      'Չափածո տողը բանաստեղծական ստեղծագործությունը կազմող տողերից յուրաքանչյուրն է։ Կարող է ունենալ որոշակի չափ, ռիթմ և հանգ։',
  },
  {
    number: '9.',
    questionEs: '¿Qué es una estrofa?',
    questionHy: 'Ի՞նչ է բանաստեղծական տունը։',
    answerEs: 'Es un conjunto de versos que forman una unidad dentro de un poema.',
    answerHy: 'Տողերի խումբ է, որը միավոր է կազմում բանաստեղծության մեջ։',
  },
  {
    number: '10.',
    questionEs: '¿Qué diferencia hay entre el sentido literal y el sentido figurado?',
    questionHy: 'Ի՞նչ տարբերություն կա բառացի և փոխաբերական իմաստների միջև։',
    answerEs:
      'El sentido literal utiliza las palabras con su significado directo y habitual. El sentido figurado las utiliza con un significado diferente, expresivo o simbólico.',
    answerHy:
      'Ուղղակի իմաստը բառերն օգտագործում է իրենց ուղիղ, սովորական նշանակությամբ։ Փոխաբերական իմաստը՝ արտահայտիչ կամ խորհրդանշական նշանակությամբ։',
    examples: [
      { es: 'Sentido literal: El niño tiene frío.', hy: 'Ուղղակի իմաստ՝ Երեխան մրսում է։' },
      { es: 'Sentido figurado: El niño está congelado de frío.', hy: 'Փոխաբերական իմաստ՝ Երեխան ցրտից սառել-քարացել է։' },
    ],
  },
];

export const PREP7_COTIDIANO_EXERCISE: SentenceExerciseRow[] = [
  { sentenceEs: 'Mañana tengo un examen.', sentenceHy: 'Վաղը քննություն ունեմ։', answerEs: 'Cotidiano: transmite información directamente.', answerHy: 'Առօրյա՝ ուղղակիորեն փոխանցում է տեղեկություն։' },
  { sentenceEs: 'La esperanza floreció en su corazón.', sentenceHy: 'Հույսը ծաղկեց նրա սրտում։', answerEs: 'Literario: utiliza una metáfora.', answerHy: 'Գեղարվեստական՝ օգտագործում է փոխաբերություն։' },
  { sentenceEs: 'El gato está debajo de la mesa.', sentenceHy: 'Կատուն սեղանի տակ է։', answerEs: 'Cotidiano: describe una situación real.', answerHy: 'Առօրյա՝ նկարագրում է իրական իրավիճակ։' },
  { sentenceEs: 'Las montañas abrazaban el pueblo.', sentenceHy: 'Լեռները գրկում էին գյուղը։', answerEs: 'Literario: utiliza una personificación.', answerHy: 'Գեղարվեստական՝ օգտագործում է անձնավորում։' },
  { sentenceEs: 'El supermercado cierra a las nueve.', sentenceHy: 'Սուպերմարկետը փակվում է ժամը իննին։', answerEs: 'Cotidiano: informa de un horario.', answerHy: 'Առօրյա՝ տեղեկացնում է աշխատանքային ժամի մասին։' },
  { sentenceEs: 'El cielo derramaba lágrimas sobre la ciudad.', sentenceHy: 'Երկինքը արցունքներ էր թափում քաղաքի վրա։', answerEs: 'Literario: expresa la lluvia mediante una imagen figurada.', answerHy: 'Գեղարվեստական՝ անձրևը ներկայացնում է պատկերավոր կերպով։' },
  { sentenceEs: 'Mi amigo vive cerca del colegio.', sentenceHy: 'Իմ ընկերն ապրում է դպրոցի մոտ։', answerEs: 'Cotidiano: proporciona información directa.', answerHy: 'Առօրյա՝ տալիս է ուղիղ տեղեկություն։' },
  { sentenceEs: 'Sus palabras eran un regalo para el alma.', sentenceHy: 'Նրա խոսքերը նվեր էին հոգու համար։', answerEs: 'Literario: utiliza una metáfora.', answerHy: 'Գեղարվեստական՝ օգտագործում է փոխաբերություն։' },
];

// ================= PREP EXAM 8: Las figuras literarias (3 niveles, 17 figuras) =================
export const PREP8_FIGURES_DETAILS: FigureDetail[] = [
  // I. Nivel fónico
  {
    number: 1,
    level: 'fonico',
    nameEs: 'Aliteración',
    nameHy: 'Հնչյունների կրկնություն',
    definitionEs: 'Es la repetición intencionada de uno o varios sonidos iguales o similares en una frase o en uno o varios versos.',
    definitionHy: 'Նույն կամ նման հնչյունների դիտավորյալ կրկնությունն է նախադասության կամ բանաստեղծական տողերի մեջ։',
    examples: [{ es: 'Susi susurra secretos suaves.', hy: 'Սուսին շշնջում է մեղմ գաղտնիքներ։' }],
    justificationEs: 'Se repite varias veces el sonido de la «s» para producir un efecto sonoro.',
    justificationHy: 'Մի քանի անգամ կրկնվում է «s» հնչյունը՝ ձայնային ազդեցություն ստեղծելու համար։',
  },
  {
    number: 2,
    level: 'fonico',
    nameEs: 'Onomatopeya',
    nameHy: 'Ձայնանմանություն',
    definitionEs: 'Es la utilización de palabras o expresiones que imitan sonidos reales.',
    definitionHy: 'Իրական ձայներ նմանակող բառերի կամ արտահայտությունների օգտագործումն է։',
    examples: [
      { es: 'El reloj hacía tic-tac.', hy: 'Ժամացույցը տիկ-տակ էր անում։' },
      { es: 'El perro ladraba: ¡guau, guau!', hy: 'Շունը հաչում էր՝ հաֆ-հաֆ։' },
    ],
    justificationEs: 'Se imita el sonido del reloj o del perro.',
    justificationHy: 'Նմանակվում է ժամացույցի կամ շան ձայնը։',
  },
  {
    number: 3,
    level: 'fonico',
    nameEs: 'Paronomasia',
    nameHy: 'Հնչյունապես նման բառերի գործածություն',
    definitionEs: 'Es el uso de palabras próximas que tienen sonidos parecidos, pero significados diferentes.',
    definitionHy: 'Իրար մոտ գտնվող, հնչյունապես նման, բայց տարբեր իմաստներ ունեցող բառերի օգտագործումն է։',
    examples: [
      { es: 'Con poco coco compro poco.', hy: 'Քիչ կոկոսով քիչ եմ գնում։' },
      { es: 'El que parte y reparte se queda con la mejor parte.', hy: 'Ով բաժանում է, իրեն է պահում ամենալավ բաժինը։' },
    ],
    justificationEs: 'Se utilizan palabras de sonido parecido, como «poco» y «coco», para crear un juego de palabras.',
    justificationHy: 'Օգտագործվում են նման հնչողությամբ բառեր («poco» և «coco»)՝ բառախաղ ստեղծելու համար։',
  },
  {
    number: 4,
    level: 'fonico',
    nameEs: 'Epanadiplosis',
    nameHy: 'Տողի սկզբում և վերջում նույն բառի կրկնություն',
    definitionEs: 'Es la repetición de una misma palabra al principio y al final de una frase o de un verso.',
    definitionHy: 'Նույն բառի կրկնությունն է նախադասության կամ բանաստեղծական տողի սկզբում և վերջում։',
    examples: [
      { es: 'Verde que te quiero verde.', hy: 'Կանաչ, որքան եմ քեզ սիրում, կանաչ։' },
      { es: 'Sueña, pequeño amigo, sueña.', hy: 'Երազի՛ր, փոքրիկ ընկեր, երազի՛ր։' },
      { es: 'Libre quiero vivir, libre.', hy: 'Ազատ եմ ուզում ապրել, ազատ։' },
      { es: 'Amor, solo necesito amor.', hy: 'Սեր, ինձ միայն սեր է պետք։' },
    ],
    justificationEs: 'La palabra «verde» aparece al principio y al final del mismo verso.',
    justificationHy: '«Verde» բառը հանդիպում է նույն տողի սկզբում և վերջում։',
    note: 'En el cuaderno aparece en el nivel fónico. En otros manuales también se clasifica dentro del nivel morfosintáctico como figura de repetición; en el examen conviene seguir la clasificación de clase.',
  },

  // II. Nivel morfosintáctico
  {
    number: 5,
    level: 'morfosintactico',
    nameEs: 'Hipérbaton',
    nameHy: 'Շարադասության շրջում',
    definitionEs: 'Es la alteración o inversión del orden gramatical habitual de las palabras en una oración.',
    definitionHy: 'Նախադասության մեջ բառերի սովորական քերականական դասավորության փոփոխությունն է։',
    examples: [
      {
        es: 'Orden alterado: Del jardín las flores recogió María. (Habitual: María recogió las flores del jardín.)',
        hy: 'Շրջված՝ Այգուց ծաղիկները հավաքեց Մարիան։ (Սովորական՝ Մարիան հավաքեց այգու ծաղիկները։)',
      },
    ],
    justificationEs: 'Se modifica el orden habitual de los elementos de la oración.',
    justificationHy: 'Փոխվում է նախադասության անդամների սովորական դասավորությունը։',
  },
  {
    number: 6,
    level: 'morfosintactico',
    nameEs: 'Anáfora',
    nameHy: 'Սկզբնաբառի կրկնություն',
    definitionEs: 'Es la repetición de una palabra o grupo de palabras al comienzo de varios versos u oraciones consecutivos.',
    definitionHy: 'Նույն բառի կամ բառերի խմբի կրկնությունն է հաջորդական տողերի կամ նախադասությունների սկզբում։',
    examples: [
      {
        es: 'Quiero aprender.\nQuiero viajar.\nQuiero descubrir el mundo.',
        hy: 'Ուզում եմ սովորել։\nՈւզում եմ ճանապարհորդել։\nՈւզում եմ բացահայտել աշխարհը։',
      },
    ],
    justificationEs: 'Se repite la palabra «quiero» al principio de cada oración.',
    justificationHy: '«Quiero» բառը կրկնվում է յուրաքանչյուր նախադասության սկզբում։',
  },
  {
    number: 7,
    level: 'morfosintactico',
    nameEs: 'Asíndeton',
    nameHy: 'Անշաղկապություն',
    definitionEs: 'Es la eliminación intencionada de conjunciones entre palabras u oraciones para dar rapidez, intensidad o dinamismo al mensaje.',
    definitionHy: 'Շաղկապների դիտավորյալ բացթողումն է՝ խոսքին արագություն, ուժ կամ դինամիկություն հաղորդելու համար։',
    examples: [{ es: 'Corrí, salté, reí, celebré.', hy: 'Վազեցի, ցատկեցի, ծիծաղեցի, տոնեցի։' }],
    justificationEs: 'Se enumeran diferentes acciones sin utilizar conjunciones.',
    justificationHy: 'Թվարկվում են տարբեր գործողություններ՝ առանց շաղկապների։',
  },
  {
    number: 8,
    level: 'morfosintactico',
    nameEs: 'Polisíndeton',
    nameHy: 'Բազմաշաղկապություն',
    definitionEs: 'Es la repetición intencionada de conjunciones para dar énfasis, intensidad o lentitud al mensaje.',
    definitionHy: 'Շաղկապների դիտավորյալ կրկնությունն է՝ խոսքին շեշտադրում, ուժ կամ դանդաղություն հաղորդելու համար։',
    examples: [{ es: 'Y canta, y ríe, y baila, y sueña.', hy: 'Եվ երգում է, և ծիծաղում է, և պարում է, և երազում է։' }],
    justificationEs: 'Se repite innecesariamente la conjunción «y» para producir un efecto expresivo.',
    justificationHy: 'Արտահայտիչ ազդեցության համար կրկնվում է «y» շաղկապը։',
  },
  {
    number: 9,
    level: 'morfosintactico',
    nameEs: 'Pleonasmo',
    nameHy: 'Բառային ավելորդություն',
    definitionEs: 'Consiste en utilizar palabras redundantes para reforzar o enfatizar una idea.',
    definitionHy: 'Ավելորդ բառերի օգտագործումն է՝ միտքն ուժեղացնելու կամ ընդգծելու համար։',
    examples: [{ es: 'Lo vi con mis propios ojos.', hy: 'Տեսա իմ սեփական աչքերով։' }],
    justificationEs: 'La expresión «con mis propios ojos» refuerza el significado del verbo «ver».',
    justificationHy: '«Իմ սեփական աչքերով» արտահայտությունն ուժեղացնում է «տեսնել» բայի իմաստը։',
  },

  // III. Nivel semántico
  {
    number: 10,
    level: 'semantico',
    nameEs: 'Metáfora',
    nameHy: 'Փոխաբերություն',
    definitionEs: 'Consiste en identificar una realidad con otra con la que guarda alguna semejanza.',
    definitionHy: 'Մեկ իրողությունը նույնացնում է մյուսի հետ, որի հետ այն ունի որոշակի նմանություն։',
    examples: [{ es: 'Tus dientes son perlas.', hy: 'Քո ատամները մարգարիտներ են։' }],
    justificationEs: 'Se identifican los dientes con las perlas por su blancura.',
    justificationHy: 'Ատամները նույնացվում են մարգարիտների հետ՝ իրենց սպիտակության պատճառով։',
  },
  {
    number: 11,
    level: 'semantico',
    nameEs: 'Símil',
    nameHy: 'Համեմատություն',
    definitionEs: 'Consiste en comparar dos elementos mediante palabras como «como», «parece» o expresiones equivalentes.',
    definitionHy: 'Երկու տարր համեմատվում են «como», «parece» կամ նման բառերի միջոցով։',
    examples: [{ es: 'Tus dientes son blancos como las perlas.', hy: 'Քո ատամները մարգարիտների պես սպիտակ են։' }],
    justificationEs: 'Se establece una comparación explícita mediante «como».',
    justificationHy: 'Կատարվում է բացահայտ համեմատություն «como» բառի միջոցով։',
  },
  {
    number: 12,
    level: 'semantico',
    nameEs: 'Personificación',
    nameHy: 'Անձնավորում',
    definitionEs: 'Consiste en atribuir cualidades o acciones humanas a animales, objetos o elementos de la naturaleza.',
    definitionHy: 'Մարդկային հատկանիշներ կամ գործողություններ են վերագրվում կենդանիներին, առարկաներին կամ բնության երևույթներին։',
    examples: [{ es: 'Las flores bailaban con el viento.', hy: 'Ծաղիկները պարում էին քամու հետ։' }],
    justificationEs: 'Se atribuye a las flores una acción humana: bailar.',
    justificationHy: 'Ծաղիկներին վերագրվում է մարդկային գործողություն՝ պարել։',
  },
  {
    number: 13,
    level: 'semantico',
    nameEs: 'Hipérbole',
    nameHy: 'Չափազանցություն',
    definitionEs: 'Consiste en exagerar una realidad de manera intencionada.',
    definitionHy: 'Իրականության դիտավորյալ չափազանցումն է։',
    examples: [{ es: 'Tengo una montaña de deberes.', hy: 'Մի լեռ տնային առաջադրանք ունեմ։' }],
    justificationEs: 'Se exagera la cantidad de tareas escolares.',
    justificationHy: 'Չափազանցվում է դպրոցական առաջադրանքների քանակը։',
  },
  {
    number: 14,
    level: 'semantico',
    nameEs: 'Ironía',
    nameHy: 'Հեգնանք',
    definitionEs: 'Consiste en expresar algo dando a entender una intención diferente o contraria a su significado aparente.',
    definitionHy: 'Իրականում ասվելիքից տարբեր կամ հակառակ միտք արտահայտելն է։',
    examples: [
      {
        es: '¡Qué ordenada está tu habitación!, cuando está completamente desordenada.',
        hy: 'Ի՜նչ հավաքված է սենյակդ (երբ այն լրիվ թափթփված է)։',
      },
    ],
    justificationEs: 'Se expresa lo contrario de lo que realmente se quiere decir.',
    justificationHy: 'Արտահայտվում է իրական մտքի հակառակը։',
  },
  {
    number: 15,
    level: 'semantico',
    nameEs: 'Antítesis',
    nameHy: 'Հակադրություն',
    definitionEs: 'Consiste en contraponer palabras o ideas de significado opuesto.',
    definitionHy: 'Հակառակ իմաստ ունեցող բառերի կամ մտքերի հակադրումն է։',
    examples: [{ es: 'Unos lloraban de tristeza y otros reían de alegría.', hy: 'Ոմանք լալիս էին տխրությունից, իսկ մյուսները ծիծաղում էին ուրախությունից։' }],
    justificationEs: 'Se contraponen la tristeza y la alegría.',
    justificationHy: 'Հակադրվում են տխրությունը և ուրախությունը։',
  },
  {
    number: 16,
    level: 'semantico',
    nameEs: 'Paradoja',
    nameHy: 'Պարադոքս',
    definitionEs: 'Consiste en unir ideas aparentemente contradictorias que, al analizarlas, pueden transmitir un significado profundo.',
    definitionHy: 'Արտաքուստ հակասական մտքերի միավորումն է, որոնք խորիմաստություն են պարունակում։',
    examples: [{ es: 'A veces, menos es más.', hy: 'Երբեմն քիչն ավելի շատ է։' }],
  },
  {
    number: 17,
    level: 'semantico',
    nameEs: 'Sinestesia',
    nameHy: 'Զգայությունների միաձուլում',
    definitionEs: 'Consiste en mezclar sensaciones que pertenecen a diferentes sentidos.',
    definitionHy: 'Տարբեր զգայարանների զգացողությունների միավորումն է։',
    examples: [{ es: 'Escuché su dulce voz.', hy: 'Լսեցի նրա քաղցր ձայնը։' }],
    justificationEs: 'Se relaciona una sensación del gusto, «dulce», con una sensación del oído, «voz».',
    justificationHy: 'Համի զգացողությունը («քաղցր») կապվում է լսողության հետ («ձայն»)։',
  },
];

// ================= PREP EXAM 9: Diferencias entre figuras + 25 frases =================
export const PREP9_FIGURES_DIFF: { pairEs: string; pairHy: string; diffEs: string; diffHy: string }[] = [
  {
    pairEs: 'Anáfora y epanadiplosis',
    pairHy: 'Սկզբնաբառի կրկնություն և էպանադիպլոսիս',
    diffEs: 'La anáfora repite palabras al principio de varios versos. La epanadiplosis repite una palabra al principio y al final del mismo verso.',
    diffHy: 'Անաֆորան կրկնում է բառեր մի քանի տողերի սկզբում։ Էպանադիպլոսիսը կրկնում է նույն բառը մեկ տողի սկզբում և վերջում։',
  },
  {
    pairEs: 'Aliteración y onomatopeya',
    pairHy: 'Հնչյունների կրկնություն և ձայնանմանություն',
    diffEs: 'La aliteración repite sonidos. La onomatopeya imita sonidos reales.',
    diffHy: 'Ալիտերացիան կրկնում է հնչյուններ։ Ձայնանմանությունը նմանակում է իրական ձայներ։',
  },
  {
    pairEs: 'Aliteración y paronomasia',
    pairHy: 'Հնչյունների կրկնություն և պարոնոմազիա',
    diffEs: 'La aliteración repite fonemas. La paronomasia aproxima palabras de sonido semejante y significado diferente.',
    diffHy: 'Ալիտերացիան կրկնում է հնչույթներ։ Պարոնոմազիան կողք կողքի է դնում նման հնչողությամբ և տարբեր իմաստով բառեր։',
  },
  {
    pairEs: 'Asíndeton y polisíndeton',
    pairHy: 'Անշաղկապություն և բազմաշաղկապություն',
    diffEs: 'El asíndeton elimina conjunciones. El polisíndeton las repite.',
    diffHy: 'Անշաղկապությունը բաց է թողնում շաղկապները։ Բազմաշաղկապությունը կրկնում է դրանք։',
  },
  {
    pairEs: 'Metáfora y símil',
    pairHy: 'Փոխաբերություն և համեմատություն',
    diffEs: 'La metáfora identifica dos realidades. El símil las compara explícitamente.',
    diffHy: 'Փոխաբերությունը նույնացնում է երկու իրողություն։ Համեմատությունը բացահայտ համեմատում է դրանք։',
  },
  {
    pairEs: 'Hipérbole e hipérbaton',
    pairHy: 'Չափազանցություն և շարադասության շրջում',
    diffEs: 'La hipérbole exagera. El hipérbaton cambia el orden de las palabras.',
    diffHy: 'Չափազանցությունը չափազանցնում է։ Շարադասության շրջումը փոխում է բառերի դասավորությունը։',
  },
  {
    pairEs: 'Antítesis y paradoja',
    pairHy: 'Հակադրություն և պարադոքս',
    diffEs: 'La antítesis contrapone ideas opuestas. La paradoja presenta una contradicción aparente con sentido.',
    diffHy: 'Հակադրությունը հակադրում է հակառակ մտքեր։ Պարադոքսը ներկայացնում է իմաստ պարունակող արտաքին հակասություն։',
  },
];

export const PREP9_EXERCISE_25: FigurePracticeItem[] = [
  { id: 1, sentenceEs: 'El reloj hacía tic-tac toda la noche.', sentenceHy: 'Ժամացույցն ամբողջ գիշեր տիկ-տակ էր անում։', figureEs: 'Onomatopeya', figureHy: 'Ձայնանմանություն', justificationEs: 'Imita el sonido real del reloj («tic-tac»).', justificationHy: 'Նմանակում է ժամացույցի իրական ձայնը։' },
  { id: 2, sentenceEs: 'Sueña, pequeño amigo, sueña.', sentenceHy: 'Երազի՛ր, փոքրիկ ընկեր, երազի՛ր։', figureEs: 'Epanadiplosis', figureHy: 'Տողի սկզբում և վերջում կրկնություն', justificationEs: 'Repite la palabra «sueña» al principio y al final de la frase.', justificationHy: '«Sueña» բառը կրկնվում է նախադասության սկզբում և վերջում։' },
  { id: 3, sentenceEs: 'El suave susurro de las hojas sonaba en el silencio.', sentenceHy: 'Տերևների մեղմ շշուկը հնչում էր լռության մեջ։', figureEs: 'Aliteración', figureHy: 'Հնչյունների կրկնություն', justificationEs: 'Repite intencionadamente el sonido de la «s».', justificationHy: 'Դիտավորյալ կրկնվում է «s» հնչյունը։' },
  { id: 4, sentenceEs: 'Con poco coco compro poco.', sentenceHy: 'Քիչ կոկոսով քիչ եմ գնում։', figureEs: 'Paronomasia', figureHy: 'Հնչյունապես նման բառերի գործածություն', justificationEs: 'Utiliza palabras de sonido muy parecido y distinto significado («poco», «coco»).', justificationHy: 'Օգտագործվում են նման հնչողությամբ և տարբեր իմաստով բառեր։' },
  { id: 5, sentenceEs: 'De la montaña bajaba el pastor.', sentenceHy: 'Լեռից իջնում էր հովիվը։', figureEs: 'Hipérbaton', figureHy: 'Շարադասության շրջում', justificationEs: 'Altera el orden habitual («El pastor bajaba de la montaña»).', justificationHy: 'Փոխվում է բառերի սովորական դասավորությունը։' },
  { id: 6, sentenceEs: 'Aquí vivimos, aquí aprendemos, aquí crecemos.', sentenceHy: 'Այստեղ ապրում ենք, այստեղ սովորում ենք, այստեղ աճում ենք։', figureEs: 'Anáfora', figureHy: 'Սկզբնաբառի կրկնություն', justificationEs: 'Repite la palabra «aquí» al principio de cada oración.', justificationHy: '«Aquí» բառը կրկնվում է յուրաքանչյուր մասի սկզբում։' },
  { id: 7, sentenceEs: 'Corre, salta, juega, disfruta.', sentenceHy: 'Վազի՛ր, ցատկի՛ր, խաղա՛, վայելի՛ր։', figureEs: 'Asíndeton', figureHy: 'Անշաղկապություն', justificationEs: 'Elimina las conjunciones para aportar rapidez y dinamismo.', justificationHy: 'Բաց են թողնված շաղկապները՝ արագություն հաղորդելու համար։' },
  { id: 8, sentenceEs: 'Y el cielo, y el mar, y las montañas.', sentenceHy: 'Եվ երկինքը, և ծովը, և լեռները։', figureEs: 'Polisíndeton', figureHy: 'Բազմաշաղկապություն', justificationEs: 'Repite de forma intencionada la conjunción «y».', justificationHy: 'Դիտավորյալ կրկնվում է «y» շաղկապը։' },
  { id: 9, sentenceEs: 'Bajó abajo para buscar sus zapatos.', sentenceHy: 'Իջավ ներքև՝ իր կոշիկները փնտրելու։', figureEs: 'Pleonasmo', figureHy: 'Բառային ավելորդություն', justificationEs: 'La palabra «abajo» es redundante con «bajó».', justificationHy: '«Ներքև» բառն ավելորդ է «իջնել» բայի հետ։' },
  { id: 10, sentenceEs: 'Mi hermano es un león.', sentenceHy: 'Իմ եղբայրը առյուծ է։', figureEs: 'Metáfora', figureHy: 'Փոխաբերություն', justificationEs: 'Identifica directamente al hermano con un león por su valentía.', justificationHy: 'Եղբորն ուղղակիորեն նույնացնում է առյուծի հետ՝ քաջության պատճառով։' },
  { id: 11, sentenceEs: 'Es valiente como un león.', sentenceHy: 'Քաջ է առյուծի պես։', figureEs: 'Símil o comparación', figureHy: 'Համեմատություն', justificationEs: 'Compara explícitamente mediante la palabra «como».', justificationHy: 'Բացահայտ համեմատություն է «como» բառով։' },
  { id: 12, sentenceEs: 'La luna me acompañaba durante el paseo.', sentenceHy: 'Լուսինն ուղեկցում էր ինձ զբոսանքի ժամանակ։', figureEs: 'Personificación', figureHy: 'Անձնավորում', justificationEs: 'Atribuye a la luna una acción humana: acompañar.', justificationHy: 'Լուսնին վերագրվում է մարդկային գործողություն՝ ուղեկցել։' },
  { id: 13, sentenceEs: 'Te he llamado un millón de veces.', sentenceHy: 'Քեզ միլիոն անգամ զանգել եմ։', figureEs: 'Hipérbole', figureHy: 'Չափազանցություն', justificationEs: 'Exagera la cantidad de veces que llamó.', justificationHy: 'Չափազանցվում է զանգերի քանակը։' },
  { id: 14, sentenceEs: '¡Qué rápido eres! Has tardado tres horas en vestirte.', sentenceHy: 'Ի՜նչ արագ ես։ Երեք ժամում հագնվեցիր։', figureEs: 'Ironía', figureHy: 'Հեգնանք', justificationEs: 'Dice lo contrario de lo que realmente piensa.', justificationHy: 'Ասում է իրական մտքի հակառակը։' },
  { id: 15, sentenceEs: 'Entre la luz y la oscuridad encontré mi camino.', sentenceHy: 'Լույսի և խավարի միջև գտա իմ ճանապարհը։', figureEs: 'Antítesis', figureHy: 'Հակադրություն', justificationEs: 'Contrapone dos términos de significado opuesto: «luz» y «oscuridad».', justificationHy: 'Հակադրում է հակառակ իմաստով բառեր՝ «լույս» և «խավար»։' },
  { id: 16, sentenceEs: 'Vivir sin vivir.', sentenceHy: 'Ապրել՝ չապրելով։', figureEs: 'Paradoja', figureHy: 'Պարադոքս', justificationEs: 'Une dos ideas aparentemente contradictorias con sentido profundo.', justificationHy: 'Միավորում է արտաքուստ հակասական մտքեր՝ խորը իմաստով։' },
  { id: 17, sentenceEs: 'Su cálida voz me tranquilizó.', sentenceHy: 'Նրա ջերմ ձայնը հանգստացրեց ինձ։', figureEs: 'Sinestesia', figureHy: 'Զգայությունների միաձուլում', justificationEs: 'Mezcla una sensación táctil («cálida») con una auditiva («voz»).', justificationHy: 'Միավորում է շոշափելիքի («ջերմ») և լսողության («ձայն») զգայությունները։' },
  { id: 18, sentenceEs: '¡Pum! El globo explotó.', sentenceHy: 'Բո՛ւմ։ Փուչիկը պայթեց։', figureEs: 'Onomatopeya', figureHy: 'Ձայնանմանություն', justificationEs: 'Imita el sonido real de la explosión («¡Pum!»).', justificationHy: 'Նմանակում է պայթյունի իրական ձայնը։' },
  { id: 19, sentenceEs: 'Amigo, siempre serás mi amigo.', sentenceHy: 'Ընկե՛ր, միշտ կմնաս իմ ընկերը։', figureEs: 'Epanadiplosis', figureHy: 'Տողի սկզբում և վերջում կրկնություն', justificationEs: 'Repite «amigo» al principio y al final de la misma oración.', justificationHy: '«Amigo» բառը կրկնվում է նախադասության սկզբում և վերջում։' },
  { id: 20, sentenceEs: 'Tres tristes tigres tragaban trigo.', sentenceHy: 'Երեք տխուր վագրեր ցորեն էին ուտում։', figureEs: 'Aliteración', figureHy: 'Հնչյունների կրկնություն', justificationEs: 'Repite reiteradamente los sonidos «t» y «r».', justificationHy: 'Կրկնվում են «t» և «r» հնչյունները։' },
  { id: 21, sentenceEs: 'Ni hambre, ni sueño, ni frío, ni cansancio.', sentenceHy: 'Ոչ քաղց, ոչ քուն, ոչ ցուրտ, ոչ հոգնածություն։', figureEs: 'Polisíndeton', figureHy: 'Բազմաշաղկապություն', justificationEs: 'Repite intencionadamente la conjunción «ni».', justificationHy: 'Դիտավորյալ կրկնվում է «ni» շաղկապը։' },
  { id: 22, sentenceEs: 'Las ventanas observaban la calle.', sentenceHy: 'Պատուհանները հետևում էին փողոցին։', figureEs: 'Personificación', figureHy: 'Անձնավորում', justificationEs: 'Atribuye a las ventanas una acción humana: observar.', justificationHy: 'Պատուհաններին վերագրվում է մարդկային գործողություն՝ հետևել։' },
  { id: 23, sentenceEs: 'Tus palabras son música para mis oídos.', sentenceHy: 'Քո խոսքերը երաժշտություն են իմ ականջների համար։', figureEs: 'Metáfora', figureHy: 'Փոխաբերություն', justificationEs: 'Identifica las palabras con la música por el agrado que producen.', justificationHy: 'Խոսքերը նույնացվում են երաժշտության հետ։' },
  { id: 24, sentenceEs: 'Del cielo caían lentamente los copos.', sentenceHy: 'Երկնքից դանդաղ թափվում էին փաթիլները։', figureEs: 'Hipérbaton', figureHy: 'Շարադասության շրջում', justificationEs: 'Invierte el orden habitual («Los copos caían lentamente del cielo»).', justificationHy: 'Փոխվում է բառերի սովորական դասավորությունը։' },
  { id: 25, sentenceEs: 'El perro, el gato, el caballo, el conejo.', sentenceHy: 'Շունը, կատուն, ձին, նապաստակը։', figureEs: 'Asíndeton / Enumeración', figureHy: 'Անշաղկապություն / Թվարկում', justificationEs: 'Presenta varios elementos seguidos eliminando las conjunciones.', justificationHy: 'Հաջորդաբար թվարկում է տարրեր՝ առանց շաղկապների։' },
];

// ================= EXAMEN FINAL: La tarde que nunca olvidamos =================
export const FINAL_EXAM_PARAGRAPHS: BilingualLine[] = [
  {
    es: 'Aquella tarde de primavera, el colegio parecía diferente. Los alumnos habían terminado los exámenes y el patio estaba lleno de conversaciones, risas y proyectos para las vacaciones. Desde las ventanas del aula podíamos observar cómo los árboles bailaban al ritmo del viento.',
    hy: 'Գարնան այդ երեկո դպրոցը տարբեր էր թվում։ Աշակերտներն ավարտել էին քննությունները, և բակը լի էր զրույցներով, ծիծաղով ու արձակուրդների ծրագրերով։ Դասարանի պատուհաններից կարող էինք տեսնել, թե ինչպես էին ծառերը պարում քամու ռիթմի տակ։',
    highlight: 'los árboles bailaban al ritmo del viento',
  },
  {
    es: 'Mi amigo Nicolás llevaba varios días preparando una actividad especial. Había descubierto que en una pequeña residencia cercana al colegio vivían personas mayores que apenas recibían visitas. Por eso, decidió organizar una tarde de juegos, música y lectura.',
    hy: 'Իմ ընկեր Նիկոլասը մի քանի օր էր, ինչ հատուկ միջոցառում էր պատրաստում։ Նա իմացել էր, որ դպրոցի մոտ գտնվող փոքրիկ տուն-ինտերնատում ապրում են տարեցներ, որոնց գրեթե ոչ ոք չի այցելում։ Այդ պատճառով որոշեց կազմակերպել խաղերի, երաժշտության և ընթերցանության երեկո։',
  },
  {
    es: 'Al principio, algunos compañeros dudaron de que pudiéramos preparar todo a tiempo. Sin embargo, Nicolás nos animó a participar y nos explicó que no necesitábamos grandes recursos, sino voluntad y entusiasmo.',
    hy: 'Սկզբում որոշ դասընկերներ կասկածում էին, թե կհասցնենք ամեն ինչ ժամանակին պատրաստել։ Սակայն Նիկոլասը մեզ ոգևորեց մասնակցել և բացատրեց, որ մեծ միջոցներ պետք չեն, այլ կամք և խանդավառություն։',
  },
  {
    es: 'Durante una semana recogimos libros, preparamos canciones y escribimos pequeñas cartas. Nuestra profesora nos ayudó a organizar las actividades y nos acompañó hasta la residencia.',
    hy: 'Մեկ շաբաթվա ընթացքում գրքեր հավաքեցինք, երգեր պատրաստեցինք և փոքրիկ նամակներ գրեցինք։ Մեր ուսուցչուհին օգնեց կազմակերպել միջոցառումները և ուղեկցեց մեզ մինչև տուն-ինտերնատ։',
  },
  {
    es: 'Cuando llegamos, una señora llamada Carmen nos recibió con una enorme sonrisa. Nos contó historias de su infancia, nos enseñó fotografías antiguas y nos explicó cómo era la ciudad cuando ella tenía nuestra edad.',
    hy: 'Երբ հասանք, Կարմեն անունով մի տիկին մեզ դիմավորեց հսկայական ժպիտով։ Նա պատմեց իր մանկության պատմությունները, ցույց տվեց հին լուսանկարներ և պատմեց, թե ինչպիսին էր քաղաքը, երբ նա մեր տարիքին էր։',
  },
  {
    es: 'A medida que avanzaba la tarde, comprendimos que aquella visita no era únicamente un regalo para los residentes. También nosotros estábamos aprendiendo muchas cosas. Cada conversación era una oportunidad para descubrir una época diferente y conocer experiencias que no aparecían en nuestros libros escolares.',
    hy: 'Երբ երեկոն առաջ էր ընթանում, հասկացանք, որ այդ այցը նվեր էր ոչ միայն բնակիչների համար։ Մենք էլ շատ բաներ էինք սովորում։ Ամեն զրույց հնարավորություն էր բացահայտելու մի այլ դարաշրջան և ծանոթանալու փորձառությունների, որոնք մեր դասագրքերում չկային։',
  },
  {
    es: 'Antes de marcharnos, Carmen nos dijo que esperaba volver a vernos pronto. En aquel instante sentí que sus palabras eran un tesoro que conservaría durante mucho tiempo.',
    hy: 'Մեկնելուց առաջ Կարմենն ասաց, որ հույս ունի շուտով մեզ նորից տեսնել։ Այդ պահին զգացի, որ նրա խոսքերը գանձ էին, որը երկար ժամանակ կպահպանեմ։',
    highlight: 'sus palabras eran un tesoro',
  },
  {
    es: 'Regresamos a casa cansados, pero profundamente satisfechos. Habíamos descubierto que compartir nuestro tiempo con otras personas podía convertirse en una de las experiencias más valiosas de nuestra juventud.',
    hy: 'Տուն վերադարձանք հոգնած, բայց խորապես բավարարված։ Հայտնաբերել էինք, որ մեր ժամանակը ուրիշների հետ կիսելը կարող է դառնալ մեր պատանեկության ամենաարժեքավոր փորձառություններից մեկը։',
  },
];

export const FINAL_EXAM_PART_A: ExamQA[] = [
  {
    id: 'fa-a',
    label: 'A)',
    points: '1 punto',
    questionEs: 'Resume el texto con tus propias palabras.',
    questionHy: 'Ամփոփի՛ր տեքստը սեփական բառերով։',
    answerEs:
      'El narrador, su amigo Nicolás y otros compañeros organizan una visita a una residencia de personas mayores con libros, canciones y cartas. Durante la tarde comparten historias con Carmen y descubren que dedicar tiempo a los demás es una experiencia muy valiosa.',
    answerHy:
      'Պատմողը, նրա ընկեր Նիկոլասը և դասընկերները գրքերով, երգերով և նամակներով այցելություն են կազմակերպում տարեցների տուն-ինտերնատ։ Երեկոյի ընթացքում նրանք զրուցում են Կարմենի հետ և հասկանում, որ ուրիշներին ժամանակ նվիրելը շատ արժեքավոր փորձ է։',
  },
  {
    id: 'fa-b',
    label: 'B)',
    points: '1 punto',
    questionEs: 'Justifica si este texto pertenece a la literatura culta o popular y explica por qué.',
    questionHy: 'Հիմնավորի՛ր՝ տեքստը պատկանում է հեղինակայի՞ն, թե՞ ժողովրդական գրականությանը։',
    answerEs:
      'Pertenece a la literatura culta porque es una obra de creación individual, escrita con un lenguaje elaborado, planificado y con intención artística; no procede de la tradición oral anónima.',
    answerHy:
      'Պատկանում է հեղինակային գրականությանը, քանի որ անհատական ստեղծագործություն է՝ մշակված, նախապես մտածված լեզվով և գեղարվեստական նպատակով։ Այն չի ծագում անանուն բանավոր ավանդույթից։',
  },
  {
    id: 'fa-c',
    label: 'C)',
    points: '1 punto',
    questionEs: 'Explica con tus palabras las dos expresiones destacadas.',
    questionHy: 'Բացատրի՛ր ընդգծված երկու արտահայտությունները սեփական բառերով։',
    answerEs: '',
    answerHy: '',
    subItems: [
      {
        termEs: '1. Los árboles bailaban al ritmo del viento.',
        termHy: '1. Ծառերը պարում էին քամու ռիթմի տակ։',
        explanationEs: 'Significa que las ramas y hojas de los árboles se movían suavemente impulsadas por el viento.',
        explanationHy: 'Նշանակում է, որ ծառերի ճյուղերն ու տերևները մեղմորեն շարժվում էին քամուց։',
      },
      {
        termEs: '2. Sus palabras eran un tesoro.',
        termHy: '2. Նրա խոսքերը գանձ էին։',
        explanationEs: 'Significa que las palabras de Carmen tenían un gran valor emocional y afectivo para el narrador.',
        explanationHy: 'Նշանակում է, որ Կարմենի խոսքերը մեծ հուզական ու ջերմ արժեք ունեին պատմողի համար։',
      },
    ],
  },
  {
    id: 'fa-d',
    label: 'D)',
    points: '1 punto',
    questionEs: '¿Dirías que las expresiones anteriores son figuras literarias? ¿Cuáles? Justifica tu respuesta.',
    questionHy: 'Արդյո՞ք նախորդ արտահայտությունները գեղարվեստական պատկերավորման միջոցներ են։ Որո՞նք։ Հիմնավորի՛ր։',
    answerEs:
      '• «Los árboles bailaban al ritmo del viento» es una personificación, porque se atribuye a los árboles una acción humana: bailar.\n• «Sus palabras eran un tesoro» es una metáfora, porque identifica directamente las palabras con un tesoro por su enorme valor.',
    answerHy:
      'Առաջինը անձնավորում է, քանի որ ծառերին վերագրվում է մարդկային գործողություն՝ պարել։ Երկրորդը փոխաբերություն է, քանի որ խոսքերը նույնացվում են գանձի հետ՝ իրենց մեծ արժեքի պատճառով։',
  },
  {
    id: 'fa-e',
    label: 'E)',
    points: '1 punto',
    questionEs: '¿A qué género literario pertenece el texto? Justifica tu respuesta con ejemplos del texto.',
    questionHy: 'Ո՞ր գրական ժանրին է պատկանում տեքստը։ Հիմնավորի՛ր օրինակներով։',
    answerEs:
      'Pertenece al género narrativo porque un narrador en primera persona cuenta una historia con personajes (Nicolás, Carmen, la profesora), acontecimientos, un lugar (el colegio y la residencia) y un tiempo («Aquella tarde de primavera»). Por ejemplo: «Mi amigo Nicolás llevaba varios días preparando una actividad especial».',
    answerHy:
      'Պատկանում է պատմողական ժանրին, քանի որ առաջին դեմքով պատմողը ներկայացնում է հերոսներով, իրադարձություններով, վայրով և ժամանակով պատմություն։',
  },
  {
    id: 'fa-f',
    label: 'F)',
    points: '1 punto',
    questionEs: '¿Dirías que este texto tiene lenguaje literario? Justifica tu respuesta.',
    questionHy: 'Կասե՞ս, որ այս տեքստն ունի գեղարվեստական լեզու։ Հիմնավորի՛ր։',
    answerEs:
      'Sí, porque utiliza un lenguaje cuidado y expresivo, descripciones y figuras literarias (personificación y metáfora) para transmitir emociones y crear imágenes en el lector.',
    answerHy:
      'Այո՛, քանի որ օգտագործում է խնամված և արտահայտիչ լեզու, նկարագրություններ և գեղարվեստական միջոցներ (անձնավորում, փոխաբերություն)՝ զգացմունքներ փոխանցելու համար։',
  },
];

export const FINAL_EXAM_PART_B: FigurePracticeItem[] = [
  { id: 1, sentenceEs: '¡Guau, guau! Ladraba el perro.', sentenceHy: 'Հաֆ-հաֆ, հաչում էր շունը։', figureEs: 'Onomatopeya', figureHy: 'Ձայնանմանություն', justificationEs: 'Imita el sonido real del ladrido del perro.', justificationHy: 'Նմանակում է շան հաչոցի իրական ձայնը։' },
  { id: 2, sentenceEs: 'Libre quiero vivir, libre.', sentenceHy: 'Ազատ եմ ուզում ապրել, ազատ։', figureEs: 'Epanadiplosis', figureHy: 'Տողի սկզբում և վերջում կրկնություն', justificationEs: 'Repite la palabra «libre» al comienzo y al final de la frase.', justificationHy: '«Libre» բառը կրկնվում է սկզբում և վերջում։' },
  { id: 3, sentenceEs: 'Con poco coco compro poco.', sentenceHy: 'Քիչ կոկոսով քիչ եմ գնում։', figureEs: 'Paronomasia', figureHy: 'Հնչյունապես նման բառերի գործածություն', justificationEs: 'Aproxima palabras de sonido semejante y distinto significado («poco», «coco»).', justificationHy: 'Նման հնչողությամբ և տարբեր իմաստով բառերի գործածություն։' },
  { id: 4, sentenceEs: 'Del colegio salió rápidamente Pablo.', sentenceHy: 'Դպրոցից արագ դուրս եկավ Պաբլոն։', figureEs: 'Hipérbaton', figureHy: 'Շարադասության շրջում', justificationEs: 'Altera el orden habitual («Pablo salió rápidamente del colegio»).', justificationHy: 'Փոխվում է բառերի սովորական դասավորությունը։' },
  { id: 5, sentenceEs: 'Aquí estudio, aquí juego, aquí aprendo.', sentenceHy: 'Այստեղ սովորում եմ, այստեղ խաղում եմ, այստեղ սովորում եմ։', figureEs: 'Anáfora', figureHy: 'Սկզբնաբառի կրկնություն', justificationEs: 'Repite «aquí» al comienzo de cada frase.', justificationHy: '«Aquí» բառը կրկնվում է ամեն մասի սկզբում։' },
  { id: 6, sentenceEs: 'Corrimos, saltamos, reímos, celebramos.', sentenceHy: 'Վազեցինք, ցատկեցինք, ծիծաղեցինք, տոնեցինք։', figureEs: 'Asíndeton', figureHy: 'Անշաղկապություն', justificationEs: 'Elimina las conjunciones para dar rapidez.', justificationHy: 'Բաց են թողնված շաղկապները՝ արագություն հաղորդելու համար։' },
  { id: 7, sentenceEs: 'Ni miedo, ni tristeza, ni preocupación.', sentenceHy: 'Ոչ վախ, ոչ տխրություն, ոչ անհանգստություն։', figureEs: 'Polisíndeton', figureHy: 'Բազմաշաղկապություն', justificationEs: 'Repite intencionadamente la conjunción «ni».', justificationHy: 'Դիտավորյալ կրկնվում է «ni» շաղկապը։' },
  { id: 8, sentenceEs: 'Te he esperado una eternidad.', sentenceHy: 'Քեզ մի հավերժություն եմ սպասել։', figureEs: 'Hipérbole', figureHy: 'Չափազանցություն', justificationEs: 'Exagera el tiempo de espera.', justificationHy: 'Չափազանցվում է սպասելու ժամանակը։' },
];

export const FINAL_EXAM_PART_C1: { sentenceEs: string; sentenceHy: string; solutionEs: string; solutionHy: string }[] = [
  {
    sentenceEs: '«Ojalá podamos visitaros otra vez».',
    sentenceHy: '«Երանի՜ նորից կարողանանք այցելել ձեզ»։',
    solutionEs: 'Modalidad oracional: desiderativa (expresa un deseo). Función del lenguaje: expresiva (manifiesta un sentimiento o deseo del hablante).',
    solutionHy: 'Նախադասության տեսակը՝ ցանկություն արտահայտող։ Լեզվի գործառույթը՝ զգացմունքային։',
  },
  {
    sentenceEs: '«Por favor, traed los libros mañana».',
    sentenceHy: '«Խնդրում եմ, վաղը բերե՛ք գրքերը»։',
    solutionEs: 'Modalidad oracional: exhortativa o imperativa (expresa una petición). Función del lenguaje: apelativa (busca influir en el receptor para que realice una acción).',
    solutionHy: 'Նախադասության տեսակը՝ հրամայական (խնդրանք)։ Լեզվի գործառույթը՝ ներգործական։',
  },
];

export const FINAL_EXAM_PART_C2: { wordEs: string; wordHy: string; catEs: string; catHy: string }[] = [
  { wordEs: 'Ayer', wordHy: 'Երեկ', catEs: 'Adverbio de tiempo', catHy: 'Ժամանակի մակբայ' },
  { wordEs: 'nuestros', wordHy: 'մեր', catEs: 'Determinante posesivo', catHy: 'Ստացական որոշիչ' },
  { wordEs: 'amigos', wordHy: 'ընկերները', catEs: 'Sustantivo común, masculino, plural', catHy: 'Հասարակ գոյական, արական, հոգնակի' },
  { wordEs: 'prepararon', wordHy: 'պատրաստեցին', catEs: 'Verbo (pretérito perfecto simple, 3.ª persona plural)', catHy: 'Բայ (անցյալ կատարյալ, 3-րդ դեմք հոգնակի)' },
  { wordEs: 'una', wordHy: 'մի / անորոշ հոդ', catEs: 'Artículo indeterminado, femenino, singular', catHy: 'Անորոշ հոդ, իգական, եզակի' },
  { wordEs: 'actividad', wordHy: 'միջոցառում', catEs: 'Sustantivo común, femenino, singular', catHy: 'Հասարակ գոյական, իգական, եզակի' },
  { wordEs: 'interesante', wordHy: 'հետաքրքիր', catEs: 'Adjetivo calificativo, singular', catHy: 'Որակական ածական, եզակի' },
];

// ================= CONTROL DE PREPARACIÓN (18 temas) =================
export const CHECKLIST_TOPICS: ChecklistTopic[] = [
  { id: 't-1', titleEs: 'Las seis funciones del lenguaje', titleHy: 'Լեզվի վեց գործառույթները' },
  { id: 't-2', titleEs: 'Las modalidades oracionales', titleHy: 'Նախադասությունների տեսակներն ըստ նպատակի' },
  { id: 't-3', titleEs: 'Los elementos de la comunicación', titleHy: 'Հաղորդակցության տարրերը' },
  { id: 't-4', titleEs: 'Las categorías gramaticales', titleHy: 'Խոսքի մասերը' },
  { id: 't-5', titleEs: 'Palabras variables e invariables', titleHy: 'Փոփոխվող և անփոփոխ բառեր' },
  { id: 't-6', titleEs: 'Literatura culta y popular', titleHy: 'Հեղինակային և ժողովրդական գրականություն' },
  { id: 't-7', titleEs: 'El romance y los versos octosílabos', titleHy: 'Ռոմանս և ութվանկանի տողեր' },
  { id: 't-8', titleEs: 'La rima asonante y consonante', titleHy: 'Առձայնույթային և լիակատար հանգ' },
  { id: 't-9', titleEs: 'La sinalefa', titleHy: 'Սինալեֆա' },
  { id: 't-10', titleEs: 'La leyenda, el cuento y el mito', titleHy: 'Ավանդազրույց, հեքիաթ և առասպել' },
  { id: 't-11', titleEs: 'El lenguaje literario', titleHy: 'Գեղարվեստական լեզու' },
  { id: 't-12', titleEs: 'La prosa y el verso', titleHy: 'Արձակ և չափածո' },
  { id: 't-13', titleEs: 'Narrativa, lírica y teatro', titleHy: 'Պատմողական, քնարական և դրամատիկական ժանրեր' },
  { id: 't-14', titleEs: 'Figuras literarias del nivel fónico', titleHy: 'Հնչյունական մակարդակի գեղարվեստական միջոցներ' },
  { id: 't-15', titleEs: 'Figuras literarias del nivel morfosintáctico', titleHy: 'Ձևաշարահյուսական մակարդակի գեղարվեստական միջոցներ' },
  { id: 't-16', titleEs: 'Figuras literarias del nivel semántico', titleHy: 'Իմաստային մակարդակի գեղարվեստական միջոցներ' },
  { id: 't-17', titleEs: 'Resumir un texto con palabras propias', titleHy: 'Ամփոփել տեքստը սեփական բառերով' },
  { id: 't-18', titleEs: 'Justificar respuestas con ejemplos del texto', titleHy: 'Հիմնավորել պատասխանները տեքստի օրինակներով' },
];
