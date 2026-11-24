import { SentenceExerciseRow, SimpleQA, TheoryQA } from './types';

export const PREP_OVERVIEW_TOPICS: { es: string; hy: string }[] = [
  { es: 'Las funciones del lenguaje', hy: 'Լեզվի գործառույթները' },
  { es: 'Las modalidades oracionales', hy: 'Նախադասությունների տեսակներն ըստ արտահայտման նպատակի' },
  { es: 'Los elementos de la comunicación', hy: 'Հաղորդակցության տարրերը' },
  { es: 'Las categorías gramaticales', hy: 'Խոսքի մասերը' },
  { es: 'La literatura culta y popular', hy: 'Հեղինակային և ժողովրդական գրականություն' },
  { es: 'El romance, la leyenda, el cuento y el mito', hy: 'Ռոմանս, ավանդազրույց, հեքիաթ և առասպել' },
  { es: 'El lenguaje literario', hy: 'Գեղարվեստական լեզու' },
  { es: 'La prosa y el verso', hy: 'Արձակ և չափածո' },
  {
    es: 'Las figuras literarias: nivel fónico, morfosintáctico y semántico',
    hy: 'Գեղարվեստական պատկերավորման միջոցներ',
  },
];

// ================= PREP EXAM 1: Las funciones del lenguaje =================
export const PREP1_FUNCTIONS_QA: TheoryQA[] = [
  {
    number: '1.',
    questionEs: '¿Qué son las funciones del lenguaje?',
    questionHy: 'Ի՞նչ են լեզվի գործառույթները։',
    answerEs:
      'Las funciones del lenguaje son las distintas intenciones que tiene el hablante al comunicarse con otras personas.',
    answerHy:
      'Լեզվի գործառույթներն այն տարբեր նպատակներն են, որոնք ունի խոսողը ուրիշների հետ հաղորդակցվելիս։',
  },
  {
    number: '3.',
    questionEs: '¿Qué es la función referencial?',
    questionHy: 'Ի՞նչ է տեղեկատվական գործառույթը։',
    answerEs: 'Es la función que se utiliza para transmitir información objetiva sobre la realidad.',
    answerHy: 'Դա այն գործառույթն է, որն օգտագործվում է իրականության մասին օբյեկտիվ տեղեկություն փոխանցելու համար։',
    examples: [
      {
        es: 'La biblioteca abre a las nueve de la mañana.',
        hy: 'Գրադարանը բացվում է առավոտյան ժամը իննին։',
      },
    ],
  },
  {
    number: '4.',
    questionEs: '¿Qué es la función expresiva?',
    questionHy: 'Ի՞նչ է զգացմունքային գործառույթը։',
    answerEs:
      'Es la función que permite al hablante expresar sus sentimientos, emociones, opiniones o estados de ánimo.',
    answerHy:
      'Դա այն գործառույթն է, որը թույլ է տալիս խոսողին արտահայտել իր զգացմունքները, հույզերը, կարծիքները կամ տրամադրությունը։',
    examples: [
      {
        es: '¡Estoy orgulloso de mi equipo!',
        hy: 'Ես հպարտ եմ իմ թիմով։',
      },
    ],
  },
  {
    number: '5.',
    questionEs: '¿Qué es la función apelativa?',
    questionHy: 'Ի՞նչ է ներգործական գործառույթը։',
    answerEs:
      'Es la función que pretende influir en el receptor, conseguir una respuesta o hacer que realice una acción.',
    answerHy:
      'Դա այն գործառույթն է, որի նպատակն է ազդել ընդունողի վրա, պատասխան ստանալ կամ մղել որևէ գործողության։',
    examples: [
      {
        es: 'Escucha atentamente las instrucciones.',
        hy: 'Ուշադի՛ր լսիր հրահանգները։',
      },
    ],
  },
  {
    number: '6.',
    questionEs: '¿Qué es la función fática?',
    questionHy: 'Ի՞նչ է հաղորդակցական կապի պահպանման գործառույթը։',
    answerEs: 'Es la función que sirve para iniciar, mantener, comprobar o finalizar la comunicación.',
    answerHy: 'Դա այն գործառույթն է, որը ծառայում է հաղորդակցությունը սկսելու, պահպանելու, ստուգելու կամ ավարտելու համար։',
    examples: [
      {
        es: 'Hola, ¿me oyes bien?',
        hy: 'Բարև, ինձ լա՞վ ես լսում։',
      },
    ],
  },
  {
    number: '7.',
    questionEs: '¿Qué es la función poética?',
    questionHy: 'Ի՞նչ է գեղագիտական գործառույթը։',
    answerEs:
      'Es la función que destaca la forma del mensaje y utiliza el lenguaje de manera artística y expresiva para producir un efecto estético.',
    answerHy:
      'Դա այն գործառույթն է, որն ընդգծում է հաղորդագրության ձևը և օգտագործում է լեզուն գեղարվեստորեն՝ գեղագիտական ազդեցություն ստեղծելու համար։',
    examples: [
      {
        es: 'La luna bordaba de plata el cielo.',
        hy: 'Լուսինը երկինքն արծաթով էր ասեղնագործում։',
      },
    ],
  },
  {
    number: '8.',
    questionEs: '¿Qué es la función metalingüística?',
    questionHy: 'Ի՞նչ է մետալեզվական գործառույթը։',
    answerEs:
      'Es la función que se utiliza cuando hablamos de la propia lengua para explicar el significado, la escritura o el uso de las palabras.',
    answerHy:
      'Դա այն գործառույթն է, որն օգտագործվում է հենց լեզվի մասին խոսելիս՝ բացատրելու բառերի իմաստը, գրությունը կամ գործածությունը։',
    examples: [
      {
        es: 'Los verbos expresan acciones, estados o procesos.',
        hy: 'Բայերն արտահայտում են գործողություններ, վիճակներ կամ գործընթացներ։',
      },
    ],
  },
];

export const PREP1_FUNCTIONS_EXERCISE: SentenceExerciseRow[] = [
  {
    sentenceEs: '¡Qué alegría volver a verte!',
    sentenceHy: 'Ի՜նչ ուրախություն է քեզ նորից տեսնելը։',
    answerEs: 'Expresiva, porque expresa una emoción.',
    answerHy: 'Զգացմունքային, քանի որ արտահայտում է հույզ։',
  },
  {
    sentenceEs: 'Madrid es la capital de España.',
    sentenceHy: 'Մադրիդը Իսպանիայի մայրաքաղաքն է։',
    answerEs: 'Referencial, porque transmite información objetiva.',
    answerHy: 'Տեղեկատվական, քանի որ փոխանցում է օբյեկտիվ տեղեկություն։',
  },
  {
    sentenceEs: 'Por favor, pásame el balón.',
    sentenceHy: 'Խնդրում եմ, փոխանցի՛ր ինձ գնդակը։',
    answerEs: 'Apelativa, porque pide al receptor que realice una acción.',
    answerHy: 'Ներգործական, քանի որ խնդրում է ընդունողին կատարել գործողություն։',
  },
  {
    sentenceEs: '¿Sigues ahí? ¿Me escuchas?',
    sentenceHy: 'Դեռ այնտե՞ղ ես։ Ինձ լսո՞ւմ ես։',
    answerEs: 'Fática, porque comprueba la comunicación.',
    answerHy: 'Կապի պահպանման, քանի որ ստուգում է հաղորդակցական կապը։',
  },
  {
    sentenceEs: 'El plural de «luz» es «luces».',
    sentenceHy: '«Luz» բառի հոգնակին «luces» է։',
    answerEs: 'Metalingüística, porque explica una cuestión lingüística.',
    answerHy: 'Մետալեզվական, քանի որ բացատրում է լեզվական կանոն։',
  },
  {
    sentenceEs: 'El mar canta bajo las estrellas.',
    sentenceHy: 'Ծովը երգում է աստղերի ներքո։',
    answerEs: 'Poética, porque utiliza el lenguaje de forma artística.',
    answerHy: 'Գեղագիտական, քանի որ լեզուն օգտագործվում է գեղարվեստորեն։',
  },
  {
    sentenceEs: 'No olvides hacer los deberes.',
    sentenceHy: 'Մի՛ մոռացիր անել տնային առաջադրանքները։',
    answerEs: 'Apelativa, porque intenta influir en el receptor.',
    answerHy: 'Ներգործական, քանի որ փորձում է ազդել ընդունողի վրա։',
  },
  {
    sentenceEs: '¡Estoy nervioso por el examen!',
    sentenceHy: 'Ես լարված եմ քննության պատճառով։',
    answerEs: 'Expresiva, porque manifiesta un estado emocional.',
    answerHy: 'Զգացմունքային, քանի որ արտահայտում է հուզական վիճակ։',
  },
  {
    sentenceEs: 'El partido comienza a las cinco.',
    sentenceHy: 'Խաղը սկսվում է ժամը հինգին։',
    answerEs: 'Referencial, porque informa sobre un acontecimiento.',
    answerHy: 'Տեղեկատվական, քանի որ տեղեկացնում է իրադարձության մասին։',
  },
  {
    sentenceEs: '«Rápidamente» es un adverbio.',
    sentenceHy: '«Rápidamente» բառը մակբայ է։',
    answerEs: 'Metalingüística, porque explica una categoría gramatical.',
    answerHy: 'Մետալեզվական, քանի որ բացատրում է խոսքի մաս։',
  },
  {
    sentenceEs: 'Bueno, hasta mañana.',
    sentenceHy: 'Դե լավ, մինչ վաղը։',
    answerEs: 'Fática, porque finaliza la comunicación.',
    answerHy: 'Կապի պահպանման, քանի որ ավարտում է հաղորդակցությունը։',
  },
  {
    sentenceEs: 'Tu sonrisa es la luz de mi mañana.',
    sentenceHy: 'Քո ժպիտը իմ առավոտվա լույսն է։',
    answerEs: 'Poética, porque utiliza una metáfora con intención estética.',
    answerHy: 'Գեղագիտական, քանի որ օգտագործում է փոխաբերություն՝ գեղագիտական նպատակով։',
  },
];

// ================= PREP EXAM 2: Las modalidades oracionales =================
export const PREP2_MODALITIES_QA: TheoryQA[] = [
  {
    number: '1.',
    questionEs: '¿Qué indican las modalidades oracionales?',
    questionHy: 'Ի՞նչ են ցույց տալիս նախադասությունների տեսակները։',
    answerEs:
      'Las modalidades oracionales indican la actitud o la intención del hablante al emitir un mensaje. Pueden expresar información, preguntas, órdenes, emociones, deseos o dudas.',
    answerHy:
      'Դրանք ցույց են տալիս խոսողի վերաբերմունքը կամ նպատակը հաղորդագրություն արտահայտելիս։ Կարող են արտահայտել տեղեկություն, հարց, հրաման, զգացմունք, ցանկություն կամ կասկած։',
  },
  {
    number: '2.',
    questionEs: '¿Qué son las oraciones enunciativas?',
    questionHy: 'Ի՞նչ են պատմողական նախադասությունները։',
    answerEs: 'Son oraciones que transmiten información, afirmando o negando un hecho.',
    answerHy: 'Նախադասություններ են, որոնք փոխանցում են տեղեկություն՝ հաստատելով կամ ժխտելով որևէ փաստ։',
    examples: [
      { es: 'Mi hermano juega al fútbol. — Afirmativa.', hy: 'Իմ եղբայրը ֆուտբոլ է խաղում։ — Հաստատական։' },
      { es: 'Mi hermano no juega al fútbol. — Negativa.', hy: 'Իմ եղբայրը ֆուտբոլ չի խաղում։ — Ժխտական։' },
    ],
  },
  {
    number: '3.',
    questionEs: '¿Qué son las oraciones interrogativas?',
    questionHy: 'Ի՞նչ են հարցական նախադասությունները։',
    answerEs: 'Son oraciones que se utilizan para formular preguntas y obtener información.',
    answerHy: 'Նախադասություններ են, որոնք օգտագործվում են հարց տալու և տեղեկություն ստանալու համար։',
    examples: [{ es: '¿Dónde has dejado tu mochila?', hy: 'Որտե՞ղ ես թողել պայուսակդ։' }],
  },
  {
    number: '4.',
    questionEs: '¿Qué diferencia hay entre una interrogativa directa y una indirecta?',
    questionHy: 'Ի՞նչ տարբերություն կա ուղղակի և անուղղակի հարցական նախադասությունների միջև։',
    answerEs:
      'La interrogativa directa formula una pregunta directamente y lleva signos de interrogación. La indirecta introduce una pregunta dentro de otra oración.',
    answerHy:
      'Ուղղակի հարցականը հարցն ուղղակի է տալիս և ունի հարցական նշաններ։ Անուղղակին հարցը ներառում է մեկ այլ նախադասության մեջ։',
    examples: [
      { es: 'Directa: ¿Dónde vive Pablo?', hy: 'Ուղղակի՝ Որտե՞ղ է ապրում Պաբլոն։' },
      { es: 'Indirecta: No sé dónde vive Pablo.', hy: 'Անուղղակի՝ Չգիտեմ՝ որտեղ է ապրում Պաբլոն։' },
    ],
  },
  {
    number: '5.',
    questionEs: '¿Qué son las oraciones exclamativas?',
    questionHy: 'Ի՞նչ են բացականչական նախադասությունները։',
    answerEs: 'Son oraciones que expresan emociones intensas, como alegría, sorpresa, admiración o enfado.',
    answerHy: 'Նախադասություններ են, որոնք արտահայտում են ուժեղ զգացմունքներ՝ ուրախություն, զարմանք, հիացմունք կամ զայրույթ։',
    examples: [{ es: '¡Qué bonito es este lugar!', hy: 'Ի՜նչ գեղեցիկ է այս վայրը։' }],
  },
  {
    number: '6.',
    questionEs: '¿Qué son las oraciones exhortativas?',
    questionHy: 'Ի՞նչ են հրամայական նախադասությունները։',
    answerEs: 'Son oraciones que expresan órdenes, peticiones, consejos o prohibiciones.',
    answerHy: 'Նախադասություններ են, որոնք արտահայտում են հրամաններ, խնդրանքներ, խորհուրդներ կամ արգելքներ։',
    examples: [{ es: 'No corras por el pasillo.', hy: 'Մի՛ վազիր միջանցքում։' }],
  },
  {
    number: '7.',
    questionEs: '¿Qué son las oraciones desiderativas?',
    questionHy: 'Ի՞նչ են ցանկություն արտահայտող նախադասությունները։',
    answerEs: 'Son oraciones que expresan un deseo del hablante. Frecuentemente utilizan «ojalá» o «que» con subjuntivo.',
    answerHy: 'Նախադասություններ են, որոնք արտահայտում են խոսողի ցանկությունը։ Հաճախ օգտագործում են «ojalá» կամ «que»։',
    examples: [{ es: 'Ojalá ganemos el próximo partido.', hy: 'Երանի՜ հաղթենք հաջորդ խաղում։' }],
  },
  {
    number: '8.',
    questionEs: '¿Qué son las oraciones dubitativas?',
    questionHy: 'Ի՞նչ են կասկած արտահայտող նախադասությունները։',
    answerEs:
      'Son oraciones que expresan duda, incertidumbre o posibilidad. Pueden utilizar palabras como «quizás», «tal vez» o «probablemente».',
    answerHy:
      'Նախադասություններ են, որոնք արտահայտում են կասկած, անորոշություն կամ հավանականություն («quizás», «tal vez», «probablemente»)։',
    examples: [{ es: 'Tal vez llegue un poco tarde.', hy: 'Հնարավոր է՝ մի փոքր ուշ գամ։' }],
  },
];

export const PREP2_MODALITIES_EXERCISE: SentenceExerciseRow[] = [
  {
    sentenceEs: 'Ojalá podamos viajar este verano.',
    sentenceHy: 'Երանի՜ այս ամառ կարողանանք ճանապարհորդել։',
    answerEs: 'Desiderativa: expresa un deseo.',
    answerHy: 'Ցանկություն արտահայտող՝ արտահայտում է ցանկություն։',
  },
  {
    sentenceEs: 'Quizás mañana llueva.',
    sentenceHy: 'Գուցե վաղը անձրև գա։',
    answerEs: 'Dubitativa: expresa incertidumbre.',
    answerHy: 'Կասկած արտահայտող՝ արտահայտում է անորոշություն։',
  },
  {
    sentenceEs: 'No he terminado los deberes.',
    sentenceHy: 'Ես չեմ ավարտել տնային առաջադրանքները։',
    answerEs: 'Enunciativa negativa: niega un hecho.',
    answerHy: 'Ժխտական պատմողական՝ ժխտում է փաստը։',
  },
  {
    sentenceEs: '¡Qué bien has jugado!',
    sentenceHy: 'Ի՜նչ լավ խաղացիր։',
    answerEs: 'Exclamativa: expresa admiración.',
    answerHy: 'Բացականչական՝ արտահայտում է հիացմունք։',
  },
  {
    sentenceEs: 'Cierra la ventana, por favor.',
    sentenceHy: 'Փակի՛ր պատուհանը, խնդրում եմ։',
    answerEs: 'Exhortativa: expresa una petición.',
    answerHy: 'Հրամայական՝ արտահայտում է խնդրանք։',
  },
  {
    sentenceEs: '¿Cuándo empieza el partido?',
    sentenceHy: 'Ե՞րբ է սկսվում խաղը։',
    answerEs: 'Interrogativa directa: formula una pregunta.',
    answerHy: 'Ուղղակի հարցական՝ ձևակերպում է հարց։',
  },
  {
    sentenceEs: 'Mi familia vive en Madrid.',
    sentenceHy: 'Իմ ընտանիքն ապրում է Մադրիդում։',
    answerEs: 'Enunciativa afirmativa: transmite información.',
    answerHy: 'Հաստատական պատմողական՝ փոխանցում է տեղեկություն։',
  },
  {
    sentenceEs: 'No sé cuándo empieza la clase.',
    sentenceHy: 'Չգիտեմ՝ երբ է սկսվում դասը։',
    answerEs: 'Interrogativa indirecta subordinada dentro de una enunciativa negativa.',
    answerHy: 'Անուղղակի հարցական՝ ժխտական պատմողական նախադասության կազմում։',
  },
  {
    sentenceEs: '¡Cuánto tiempo sin verte!',
    sentenceHy: 'Որքա՜ն ժամանակ է՝ չէի տեսել քեզ։',
    answerEs: 'Exclamativa: expresa emoción.',
    answerHy: 'Բացականչական՝ արտահայտում է հույզ։',
  },
  {
    sentenceEs: 'Que tengas un buen día.',
    sentenceHy: 'Լավ օր ունենաս։',
    answerEs: 'Desiderativa: expresa un deseo.',
    answerHy: 'Ցանկություն արտահայտող՝ արտահայտում է ցանկություն։',
  },
  {
    sentenceEs: 'No utilices el teléfono durante el examen.',
    sentenceHy: 'Քննության ընթացքում մի՛ օգտագործիր հեռախոսը։',
    answerEs: 'Exhortativa: expresa una prohibición.',
    answerHy: 'Հրամայական՝ արտահայտում է արգելք։',
  },
  {
    sentenceEs: 'Probablemente venga mañana.',
    sentenceHy: 'Հավանաբար վաղը կգա։',
    answerEs: 'Dubitativa: expresa posibilidad.',
    answerHy: 'Կասկած արտահայտող՝ արտահայտում է հավանականություն։',
  },
];

export const PREP2_IMPORTANT_QUESTION: TheoryQA = {
  number: '★',
  questionEs: '¿Qué diferencia hay entre las funciones del lenguaje y las modalidades oracionales?',
  questionHy: 'Ի՞նչ տարբերություն կա լեզվի գործառույթների և նախադասությունների տեսակների միջև։',
  answerEs:
    'Las funciones del lenguaje indican la finalidad comunicativa del mensaje, mientras que las modalidades oracionales expresan la actitud del hablante y la forma en que presenta el mensaje.',
  answerHy:
    'Լեզվի գործառույթները ցույց են տալիս հաղորդագրության հաղորդակցական նպատակը, մինչդեռ նախադասությունների տեսակները արտահայտում են խոսողի վերաբերմունքը և ձևը, որով նա ներկայացնում է հաղորդագրությունը։',
  examples: [
    {
      es: '«Abre la puerta» → Función del lenguaje: apelativa · Modalidad oracional: exhortativa.',
      hy: '«Բա՛ց արա դուռը» → Լեզվի գործառույթը՝ ներգործական · Նախադասության տեսակը՝ հրամայական։',
    },
  ],
};

// ================= PREP EXAM 3: Los elementos de la comunicación =================
export const PREP3_COMM_QA: TheoryQA[] = [
  {
    number: '1.',
    questionEs: '¿Qué es la comunicación?',
    questionHy: 'Ի՞նչ է հաղորդակցությունը։',
    answerEs:
      'La comunicación es el proceso mediante el cual las personas transmiten e intercambian información, ideas, sentimientos o mensajes.',
    answerHy:
      'Հաղորդակցությունն այն գործընթացն է, որի միջոցով մարդիկ փոխանցում և փոխանակում են տեղեկություններ, գաղափարներ, զգացմունքներ կամ հաղորդագրություններ։',
  },
  {
    number: '3.',
    questionEs: '¿Qué diferencia hay entre el código y el canal?',
    questionHy: 'Ի՞նչ տարբերություն կա կոդի և կապուղու միջև։',
    answerEs:
      'El código es el sistema de signos utilizado para elaborar el mensaje, mientras que el canal es el medio por el que se transmite.',
    answerHy:
      'Կոդը նշանային համակարգն է, որով կազմվում է հաղորդագրությունը, իսկ կապուղին այն միջոցն է, որով այն փոխանցվում է։',
    examples: [
      {
        es: 'En una conversación telefónica en español, el código es la lengua española y el canal es el medio telefónico.',
        hy: 'Իսպաներեն հեռախոսազրույցում կոդը իսպաներեն լեզուն է, իսկ կապուղին՝ հեռախոսային կապը։',
      },
    ],
  },
];

export const PREP3_SITUATION1: SimpleQA[] = [
  { questionEs: '¿Quién es el emisor?', questionHy: 'Ո՞վ է հաղորդողը։', answerEs: 'El entrenador.', answerHy: 'Մարզիչը։' },
  { questionEs: '¿Quién es el receptor?', questionHy: 'Ո՞վ է ընդունողը։', answerEs: 'Los jugadores.', answerHy: 'Խաղացողները։' },
  {
    questionEs: '¿Cuál es el mensaje?',
    questionHy: 'Ո՞րն է հաղորդագրությունը։',
    answerEs: 'Mañana deben llegar al estadio a las nueve.',
    answerHy: 'Վաղը ժամը իննին պետք է հասնեն մարզադաշտ։',
  },
  { questionEs: '¿Cuál es el código?', questionHy: 'Ո՞րն է կոդը։', answerEs: 'La lengua española.', answerHy: 'Իսպաներեն լեզուն։' },
  {
    questionEs: '¿Cuál es el canal?',
    questionHy: 'Ո՞րն է կապուղին։',
    answerEs: 'Oral y auditivo, a través del aire.',
    answerHy: 'Բանավոր և լսողական՝ օդի միջոցով։',
  },
  {
    questionEs: '¿Cuál es el contexto?',
    questionHy: 'Ո՞րն է համատեքստը։',
    answerEs: 'Una conversación durante el entrenamiento.',
    answerHy: 'Զրույց՝ մարզման ընթացքում։',
  },
  {
    questionEs: '¿Qué función predomina?',
    questionHy: 'Ո՞ր գործառույթն է գերակշռում։',
    answerEs: 'Apelativa, porque el entrenador da una instrucción.',
    answerHy: 'Ներգործական, քանի որ մարզիչը հրահանգ է տալիս։',
  },
  {
    questionEs: '¿Cuál es la modalidad oracional?',
    questionHy: 'Ո՞րն է նախադասության տեսակը։',
    answerEs: 'Enunciativa afirmativa, aunque expresa una obligación.',
    answerHy: 'Հաստատական պատմողական, թեև արտահայտում է պարտավորություն։',
  },
];

export const PREP3_SITUATION2: SimpleQA[] = [
  { questionEs: 'Emisor', questionHy: 'Հաղորդող', answerEs: 'Pablo.', answerHy: 'Պաբլոն։' },
  { questionEs: 'Receptor', questionHy: 'Ընդունող', answerEs: 'Marcos.', answerHy: 'Մարկոսը։' },
  {
    questionEs: 'Mensaje',
    questionHy: 'Հաղորդագրություն',
    answerEs: 'Una invitación para ir a su casa.',
    answerHy: 'Հրավեր՝ իր տուն գնալու համար։',
  },
  { questionEs: 'Código', questionHy: 'Կոդ', answerEs: 'La lengua española escrita.', answerHy: 'Գրավոր իսպաներեն լեզուն։' },
  {
    questionEs: 'Canal',
    questionHy: 'Կապուղի',
    answerEs: 'WhatsApp, mediante un medio digital.',
    answerHy: 'WhatsApp՝ թվային միջոցով։',
  },
  {
    questionEs: 'Contexto',
    questionHy: 'Համատեքստ',
    answerEs: 'Una conversación entre amigos.',
    answerHy: 'Զրույց ընկերների միջև։',
  },
  { questionEs: 'Función del saludo «Hola»', questionHy: '«Hola» ողջույնի գործառույթը', answerEs: 'Fática.', answerHy: 'Հաղորդակցական կապի պահպանման։' },
  { questionEs: 'Función de la pregunta', questionHy: 'Հարցի գործառույթը', answerEs: 'Apelativa.', answerHy: 'Ներգործական։' },
  { questionEs: 'Modalidad de la pregunta', questionHy: 'Հարցի տեսակը', answerEs: 'Interrogativa.', answerHy: 'Հարցական։' },
];

// ================= PREP EXAM 4: Las categorías gramaticales =================
export const PREP4_GRAMMAR_QA: TheoryQA[] = [
  {
    number: '1.',
    questionEs: '¿Qué son las categorías gramaticales?',
    questionHy: 'Ի՞նչ են խոսքի մասերը։',
    answerEs:
      'Las categorías gramaticales son los diferentes tipos de palabras que existen en una lengua y que se clasifican según sus características y funciones.',
    answerHy:
      'Խոսքի մասերը լեզվում գոյություն ունեցող բառերի տարբեր տեսակներն են, որոնք դասակարգվում են ըստ իրենց հատկանիշների և գործառույթների։',
  },
  {
    number: '2.',
    questionEs: '¿Qué es un sustantivo?',
    questionHy: 'Ի՞նչ է գոյականը։',
    answerEs: 'El sustantivo es una palabra que sirve para nombrar personas, animales, lugares, objetos, sentimientos o ideas.',
    answerHy: 'Գոյականը բառ է, որը ծառայում է անվանելու մարդկանց, կենդանիներին, վայրերը, առարկաները, զգացմունքները կամ գաղափարները։',
    examples: [{ es: 'Ejemplos: niño, gato, Barcelona, mesa, felicidad.', hy: 'Օրինակներ՝ երեխա, կատու, Բարսելոնա, սեղան, երջանկություն։' }],
  },
  {
    number: '3.',
    questionEs: '¿Qué es un adjetivo?',
    questionHy: 'Ի՞նչ է ածականը։',
    answerEs: 'El adjetivo es una palabra que expresa una característica o cualidad del sustantivo.',
    answerHy: 'Ածականը բառ է, որն արտահայտում է գոյականի հատկանիշ կամ որակ։',
    examples: [{ es: 'Ejemplo: Un jugador talentoso.', hy: 'Օրինակ՝ Տաղանդավոր խաղացող։' }],
  },
  {
    number: '4.',
    questionEs: '¿Qué es un determinante?',
    questionHy: 'Ի՞նչ է որոշիչը։',
    answerEs:
      'El determinante acompaña al sustantivo y aporta información sobre su género, número, posesión, cantidad o situación, entre otros aspectos.',
    answerHy:
      'Որոշիչը ուղեկցում է գոյականին և տեղեկություն է տալիս նրա սեռի, թվի, պատկանելության, քանակի կամ դիրքի մասին։',
    examples: [{ es: 'Ejemplos: mi mochila, estos libros, tres amigos.', hy: 'Օրինակներ՝ իմ պայուսակը, այս գրքերը, երեք ընկեր։' }],
  },
  {
    number: '5.',
    questionEs: '¿Qué es un artículo?',
    questionHy: 'Ի՞նչ է հոդը։',
    answerEs:
      'El artículo es un tipo de determinante que acompaña al sustantivo e indica su género y número, así como si el referente se presenta como conocido o no identificado.',
    answerHy:
      'Հոդը որոշիչի տեսակ է, որն ուղեկցում է գոյականին՝ ցույց տալով նրա սեռը, թիվը և որոշյալ կամ անորոշ լինելը։',
    examples: [
      { es: 'Determinados: el, la, los, las.', hy: 'Որոշյալ հոդեր՝ el, la, los, las։' },
      { es: 'Indeterminados: un, una, unos, unas.', hy: 'Անորոշ հոդեր՝ un, una, unos, unas։' },
    ],
  },
  {
    number: '6.',
    questionEs: '¿Qué es un pronombre?',
    questionHy: 'Ի՞նչ է դերանունը։',
    answerEs: 'El pronombre es una palabra que puede ocupar el lugar de un sustantivo o de un grupo nominal.',
    answerHy: 'Դերանունը բառ է, որը կարող է փոխարինել գոյականին կամ գոյականական բառակապակցությանը։',
    examples: [{ es: 'Pablo estudia mucho. → Él estudia mucho.', hy: 'Պաբլոն շատ է սովորում։ → Նա շատ է սովորում։' }],
  },
  {
    number: '7.',
    questionEs: '¿Qué es un verbo?',
    questionHy: 'Ի՞նչ է բայը։',
    answerEs: 'El verbo es una palabra que expresa una acción, un estado o un proceso. Puede indicar persona, número, tiempo y modo.',
    answerHy: 'Բայը բառ է, որն արտահայտում է գործողություն, վիճակ կամ գործընթաց։ Կարող է ցույց տալ դեմք, թիվ, ժամանակ և եղանակ։',
    examples: [{ es: 'Ejemplos: jugar, estar, crecer.', hy: 'Օրինակներ՝ խաղալ, լինել, աճել։' }],
  },
  {
    number: '8.',
    questionEs: '¿Qué es un adverbio?',
    questionHy: 'Ի՞նչ է մակբայը։',
    answerEs: 'El adverbio es una palabra generalmente invariable que modifica a un verbo, a un adjetivo o a otro adverbio.',
    answerHy: 'Մակբայը սովորաբար անփոփոխ բառ է, որը լրացնում է բային, ածականին կամ մեկ այլ մակբայի։',
  },
  {
    number: '9.',
    questionEs: '¿Qué es una preposición?',
    questionHy: 'Ի՞նչ է նախդիրը։',
    answerEs: 'La preposición es una palabra invariable que establece una relación entre diferentes elementos de una oración.',
    answerHy: 'Նախդիրը անփոփոխ բառ է, որը կապ է հաստատում նախադասության տարբեր անդամների միջև։',
    examples: [{ es: 'Ejemplo: Voy a Madrid con mis amigos.', hy: 'Օրինակ՝ Գնում եմ Մադրիդ իմ ընկերների հետ։' }],
  },
  {
    number: '10.',
    questionEs: '¿Qué es una conjunción?',
    questionHy: 'Ի՞նչ է շաղկապը։',
    answerEs: 'La conjunción es una palabra invariable que sirve para unir palabras, grupos de palabras u oraciones.',
    answerHy: 'Շաղկապը անփոփոխ բառ է, որը ծառայում է բառեր, բառակապակցություններ կամ նախադասություններ միացնելու համար։',
    examples: [{ es: 'Ejemplo: Quiero salir, pero tengo que estudiar.', hy: 'Օրինակ՝ Ուզում եմ դուրս գալ, բայց պետք է սովորեմ։' }],
  },
  {
    number: '11.',
    questionEs: '¿Qué es una interjección?',
    questionHy: 'Ի՞նչ է ձայնարկությունը։',
    answerEs: 'La interjección es una palabra o expresión que manifiesta emociones, reacciones espontáneas o llamadas de atención.',
    answerHy: 'Ձայնարկությունը բառ կամ արտահայտություն է, որն արտահայտում է զգացմունքներ, ինքնաբուխ արձագանքներ կամ կոչեր։',
    examples: [{ es: 'Ejemplo: ¡Uf! Estoy muy cansado.', hy: 'Օրինակ՝ Ու՜ֆ, շատ հոգնած եմ։' }],
  },
];

export const PREP4_HARD_QUESTIONS: TheoryQA[] = [
  {
    number: '•',
    questionEs: '¿Qué diferencia hay entre un adjetivo y un adverbio?',
    questionHy: 'Ի՞նչ տարբերություն կա ածականի և մակբայի միջև։',
    answerEs:
      'El adjetivo modifica al sustantivo y suele variar en género y número. El adverbio modifica al verbo, al adjetivo o a otro adverbio y generalmente es invariable.',
    answerHy:
      'Ածականը լրացնում է գոյականին և փոփոխվում է սեռով ու թվով։ Մակբայը լրացնում է բային, ածականին կամ մեկ այլ մակբայի և անփոփոխ է։',
    examples: [
      { es: 'Un jugador rápido. — Adjetivo.', hy: 'Արագ խաղացող։ — Ածական։' },
      { es: 'El jugador corre rápidamente. — Adverbio.', hy: 'Խաղացողը վազում է արագորեն։ — Մակբայ։' },
    ],
  },
  {
    number: '•',
    questionEs: '¿Qué diferencia hay entre un determinante y un pronombre?',
    questionHy: 'Ի՞նչ տարբերություն կա որոշիչի և դերանվան միջև։',
    answerEs: 'El determinante acompaña al sustantivo, mientras que el pronombre puede ocupar su lugar.',
    answerHy: 'Որոշիչը ուղեկցում է գոյականին, մինչդեռ դերանունը կարող է փոխարինել նրան։',
    examples: [
      { es: 'Este libro es interesante. — Este: determinante.', hy: 'Այս գիրքը հետաքրքիր է։ — Este՝ որոշիչ։' },
      { es: 'Este es interesante. — Este: pronombre.', hy: 'Սա հետաքրքիր է։ — Este՝ դերանուն։' },
    ],
  },
  {
    number: '•',
    questionEs: '¿Qué son las palabras variables e invariables?',
    questionHy: 'Որո՞նք են փոփոխվող և անփոփոխ բառերը։',
    answerEs:
      'Las palabras variables pueden experimentar cambios gramaticales de género, número, persona, tiempo u otros. Las palabras invariables mantienen su forma.',
    answerHy:
      'Փոփոխվող բառերը կարող են փոփոխվել սեռով, թվով, դեմքով, ժամանակով և այլն։ Անփոփոխ բառերը պահպանում են իրենց ձևը։',
  },
];

export const PREP4_GRAMMAR_EXERCISE: SentenceExerciseRow[] = [
  { sentenceEs: 'Mi hermano juega al fútbol.', sentenceHy: 'Իմ եղբայրը ֆուտբոլ է խաղում։', targetWord: 'Mi', answerEs: 'Determinante posesivo', answerHy: 'Ստացական որոշիչ' },
  { sentenceEs: 'Mi hermano juega al fútbol.', sentenceHy: 'Իմ եղբայրը ֆուտբոլ է խաղում։', targetWord: 'Hermano', answerEs: 'Sustantivo', answerHy: 'Գոյական' },
  { sentenceEs: 'Pablo juega muy bien.', sentenceHy: 'Պաբլոն շատ լավ է խաղում։', targetWord: 'Juega', answerEs: 'Verbo', answerHy: 'Բայ' },
  { sentenceEs: 'Pablo juega muy bien.', sentenceHy: 'Պաբլոն շատ լավ է խաղում։', targetWord: 'Bien', answerEs: 'Adverbio de modo', answerHy: 'Ձևի մակբայ' },
  { sentenceEs: 'Tengo tres hermanos.', sentenceHy: 'Ես երեք եղբայր ունեմ։', targetWord: 'Tres', answerEs: 'Determinante numeral', answerHy: 'Թվական որոշիչ' },
  { sentenceEs: 'Ella estudia español.', sentenceHy: 'Նա իսպաներեն է սովորում։', targetWord: 'Ella', answerEs: 'Pronombre personal', answerHy: 'Անձնական դերանուն' },
  { sentenceEs: 'Es una casa grande.', sentenceHy: 'Դա մեծ տուն է։', targetWord: 'Grande', answerEs: 'Adjetivo', answerHy: 'Ածական' },
  { sentenceEs: 'Voy con mis amigos.', sentenceHy: 'Գնում եմ ընկերներիս հետ։', targetWord: 'Con', answerEs: 'Preposición', answerHy: 'Նախդիր' },
  { sentenceEs: 'Quiero ir, pero estoy cansado.', sentenceHy: 'Ուզում եմ գնալ, բայց հոգնած եմ։', targetWord: 'Pero', answerEs: 'Conjunción', answerHy: 'Շաղկապ' },
  { sentenceEs: '¡Ay! Me duele el pie.', sentenceHy: 'Ա՜յ, ոտքս ցավում է։', targetWord: 'Ay', answerEs: 'Interjección', answerHy: 'Ձայնարկություն' },
  { sentenceEs: 'Llegamos ayer.', sentenceHy: 'Հասանք երեկ։', targetWord: 'Ayer', answerEs: 'Adverbio de tiempo', answerHy: 'Ժամանակի մակբայ' },
  { sentenceEs: 'Algunos alumnos estudian mucho.', sentenceHy: 'Որոշ աշակերտներ շատ են սովորում։', targetWord: 'Algunos', answerEs: 'Determinante indefinido', answerHy: 'Անորոշ որոշիչ' },
  { sentenceEs: 'Este es mi favorito.', sentenceHy: 'Սա իմ սիրելին է։', targetWord: 'Este', answerEs: 'Pronombre demostrativo', answerHy: 'Ցուցական դերանուն' },
  { sentenceEs: 'Quizás venga mañana.', sentenceHy: 'Գուցե վաղը գա։', targetWord: 'Quizás', answerEs: 'Adverbio de duda', answerHy: 'Կասկածի մակբայ' },
  { sentenceEs: 'Los jugadores entrenan.', sentenceHy: 'Խաղացողները մարզվում են։', targetWord: 'Los', answerEs: 'Artículo determinado', answerHy: 'Որոշյալ հոդ' },
];

export const PREP4_FULL_SENTENCE_ANALYSIS: { wordEs: string; wordHy: string; catEs: string; catHy: string }[] = [
  { wordEs: 'Ayer', wordHy: 'Երեկ', catEs: 'Adverbio de tiempo', catHy: 'Ժամանակի մակբայ' },
  { wordEs: 'Mis', wordHy: 'Իմ', catEs: 'Determinante posesivo', catHy: 'Ստացական որոշիչ' },
  { wordEs: 'Dos', wordHy: 'Երկու', catEs: 'Determinante numeral cardinal', catHy: 'Քանակական թվական որոշիչ' },
  { wordEs: 'Amigos', wordHy: 'Ընկերները', catEs: 'Sustantivo común, masculino, plural', catHy: 'Հասարակ գոյական, արական, հոգնակի' },
  {
    wordEs: 'Compraron',
    wordHy: 'Գնեցին',
    catEs: 'Verbo, pretérito perfecto simple o indefinido, tercera persona del plural',
    catHy: 'Բայ, անցյալ կատարյալ, երրորդ դեմք, հոգնակի',
  },
  { wordEs: 'Unos', wordHy: 'Մի քանի / անորոշ հոդ', catEs: 'Artículo indeterminado', catHy: 'Անորոշ հոդ' },
  { wordEs: 'Libros', wordHy: 'Գրքեր', catEs: 'Sustantivo común, masculino, plural', catHy: 'Հասարակ գոյական, արական, հոգնակի' },
  { wordEs: 'Interesantes', wordHy: 'Հետաքրքիր', catEs: 'Adjetivo calificativo, plural', catHy: 'Որակական ածական, հոգնակի' },
  { wordEs: 'En', wordHy: 'Մեջ / -ում', catEs: 'Preposición', catHy: 'Նախդիր' },
  { wordEs: 'La', wordHy: 'Որոշյալ հոդ', catEs: 'Artículo determinado', catHy: 'Որոշյալ հոդ' },
  { wordEs: 'Biblioteca', wordHy: 'Գրադարան', catEs: 'Sustantivo común, femenino, singular', catHy: 'Հասարակ գոյական, իգական, եզակի' },
];

// ================= PREP EXAM 5: Literatura culta y popular =================
export const PREP5_CULTA_POPULAR_QA: TheoryQA[] = [
  {
    number: '1.',
    questionEs: '¿Qué es la literatura popular?',
    questionHy: 'Ի՞նչ է ժողովրդական գրականությունը։',
    answerEs:
      'La literatura popular es el conjunto de obras literarias que pertenecen a la tradición de un pueblo. Generalmente son anónimas y se transmiten oralmente de generación en generación. Por esta razón, pueden sufrir modificaciones con el paso del tiempo.',
    answerHy:
      'Ժողովրդական գրականությունը ժողովրդի ավանդույթներին պատկանող գրական ստեղծագործությունների ամբողջությունն է։ Դրանք սովորաբար անանուն են և բանավոր փոխանցվում են սերնդից սերունդ։ Այդ պատճառով ժամանակի ընթացքում կարող են փոփոխվել։',
  },
  {
    number: '2.',
    questionEs: '¿Cuáles son las características de la literatura popular?',
    questionHy: 'Որո՞նք են ժողովրդական գրականության առանձնահատկությունները։',
    answerEs: 'Sus principales características son:',
    answerHy: 'Նրա հիմնական առանձնահատկություններն են՝',
    bulletsEs: [
      'Las obras suelen ser anónimas.',
      'Se transmiten oralmente de generación en generación.',
      'Pueden presentar diferentes versiones.',
      'Suelen ser obras breves.',
      'Pueden estar escritas en prosa o en verso.',
      'Frecuentemente utilizan repeticiones, estribillos y expresiones coloquiales.',
      'Pueden estar acompañadas de música.',
    ],
    bulletsHy: [
      'Ստեղծագործությունները սովորաբար անանուն են։',
      'Փոխանցվում են բանավոր՝ սերնդից սերունդ։',
      'Կարող են ունենալ տարբեր տարբերակներ։',
      'Սովորաբար կարճ ստեղծագործություններ են։',
      'Կարող են լինել արձակ կամ չափածո։',
      'Հաճախ օգտագործվում են կրկնություններ, կրկներգեր և խոսակցական արտահայտություններ։',
      'Կարող են ուղեկցվել երաժշտությամբ։',
    ],
  },
  {
    number: '3.',
    questionEs: '¿Qué significa que una obra es anónima?',
    questionHy: 'Ի՞նչ է նշանակում, որ ստեղծագործությունն անանուն է։',
    answerEs: 'Significa que se desconoce quién es su autor o que su nombre no se ha conservado.',
    answerHy: 'Նշանակում է, որ հայտնի չէ՝ ով է ստեղծագործության հեղինակը, կամ նրա անունը չի պահպանվել։',
  },
  {
    number: '4.',
    questionEs: '¿Por qué pueden sufrir modificaciones las obras populares?',
    questionHy: 'Ինչո՞ւ կարող են փոփոխվել ժողովրդական ստեղծագործությունները։',
    answerEs:
      'Porque se transmiten oralmente y cada persona puede introducir pequeños cambios al contarlas, cantarlas o recordarlas.',
    answerHy:
      'Քանի որ դրանք փոխանցվում են բանավոր, և յուրաքանչյուր մարդ պատմելիս, երգելիս կամ հիշելիս կարող է փոքր փոփոխություններ մտցնել։',
  },
  {
    number: '5.',
    questionEs: '¿Qué es un estribillo?',
    questionHy: 'Ի՞նչ է կրկներգը։',
    answerEs: 'Es un verso o conjunto de versos que se repite varias veces a lo largo de una canción o un poema.',
    answerHy: 'Տող կամ տողերի խումբ է, որը մի քանի անգամ կրկնվում է երգի կամ բանաստեղծության ընթացքում։',
    examples: [
      {
        es: 'Canta, canta, corazón,\nque ya llega la mañana.\nCanta, canta, corazón,\njunto al sol de mi ventana.',
        hy: 'Երգի՛ր, երգի՛ր, սիրտ իմ,\nարդեն գալիս է առավոտը։\nԵրգի՛ր, երգի՛ր, սիրտ իմ,\nիմ պատուհանի արևի կողքին։',
      },
    ],
  },
  {
    number: '6.',
    questionEs: '¿Qué tipos de obras pertenecen a la literatura popular?',
    questionHy: 'Ի՞նչ ստեղծագործություններ են պատկանում ժողովրդական գրականությանը։',
    answerEs:
      'Los romances tradicionales, las leyendas, los cuentos populares, los mitos, las nanas, los villancicos, las coplas y las canciones tradicionales.',
    answerHy:
      'Ավանդական ռոմանսները, ավանդազրույցները, ժողովրդական հեքիաթները, առասպելները, օրորոցայինները, ծննդյան երգերը, կոպլաները և ավանդական երգերը։',
  },
  {
    number: '7.',
    questionEs: '¿Por qué se han recogido por escrito muchas obras populares?',
    questionHy: 'Ինչո՞ւ են ժողովրդական բազմաթիվ ստեղծագործություններ գրի առնվել։',
    answerEs: 'Para conservarlas, evitar que desaparezcan y transmitirlas a las generaciones futuras.',
    answerHy: 'Դրանք պահպանելու, անհետացումից պաշտպանելու և ապագա սերունդներին փոխանցելու համար։',
  },
  {
    number: '8.',
    questionEs: '¿Qué es la literatura culta?',
    questionHy: 'Ի՞նչ է հեղինակային գրականությունը։',
    answerEs:
      'La literatura culta es aquella que se elabora generalmente por escrito, tiene un autor conocido y utiliza un lenguaje trabajado y planificado con una intención artística.',
    answerHy:
      'Հեղինակային գրականությունը սովորաբար գրավոր ստեղծվող գրականություն է, որն ունի հայտնի հեղինակ և օգտագործում է մշակված ու նախապես մտածված գեղարվեստական լեզու։',
  },
  {
    number: '9.',
    questionEs: '¿Cómo se difundía antiguamente la literatura culta?',
    questionHy: 'Ինչպե՞ս էր հնում տարածվում հեղինակային գրականությունը։',
    answerEs:
      'En un principio se difundía mediante copias manuscritas y, posteriormente, gracias a la imprenta, mediante copias impresas.',
    answerHy:
      'Սկզբում այն տարածվում էր ձեռագիր օրինակների միջոցով, իսկ հետագայում՝ տպագրության շնորհիվ՝ տպագիր օրինակներով։',
  },
  {
    number: '11.',
    questionEs: '¿Puede una obra de literatura popular estar escrita?',
    questionHy: 'Կարո՞ղ է ժողովրդական ստեղծագործությունը լինել գրավոր։',
    answerEs:
      'Sí. Aunque originalmente se transmita de forma oral, puede recogerse por escrito para conservarla. Su origen sigue siendo popular.',
    answerHy:
      'Այո՛։ Թեև սկզբնապես այն փոխանցվում է բանավոր, պահպանելու համար կարող է գրի առնվել։ Նրա ծագումը մնում է ժողովրդական։',
  },
  {
    number: '12.',
    questionEs: '¿Puede una obra popular utilizar figuras literarias?',
    questionHy: 'Կարո՞ղ են ժողովրդական ստեղծագործություններում օգտագործվել գեղարվեստական պատկերավորման միջոցներ։',
    answerEs:
      'Sí. La literatura popular también utiliza recursos como la repetición, la metáfora, la comparación, la personificación y la rima.',
    answerHy:
      'Այո՛։ Ժողովրդական գրականությունն էլ օգտագործում է կրկնություն, փոխաբերություն, համեմատություն, անձնավորում և հանգ։',
  },
];

export const PREP5_COMPARISON_TABLE: {
  traitEs: string;
  traitHy: string;
  cultaEs: string;
  cultaHy: string;
  popularEs: string;
  popularHy: string;
}[] = [
  {
    traitEs: 'Autoría',
    traitHy: 'Հեղինակություն',
    cultaEs: 'Generalmente conocida',
    cultaHy: 'Սովորաբար հայտնի է',
    popularEs: 'Generalmente anónima',
    popularHy: 'Սովորաբար անանուն է',
  },
  {
    traitEs: 'Transmisión',
    traitHy: 'Փոխանցում',
    cultaEs: 'Principalmente escrita',
    cultaHy: 'Հիմնականում գրավոր',
    popularEs: 'Tradicionalmente oral',
    popularHy: 'Ավանդաբար բանավոր',
  },
  {
    traitEs: 'Texto',
    traitHy: 'Տեքստ',
    cultaEs: 'Suele conservar una versión fijada',
    cultaHy: 'Սովորաբար ունի հաստատուն տարբերակ',
    popularEs: 'Puede tener diferentes versiones',
    popularHy: 'Կարող է ունենալ տարբեր տարբերակներ',
  },
  {
    traitEs: 'Lenguaje',
    traitHy: 'Լեզու',
    cultaEs: 'Elaborado y planificado',
    cultaHy: 'Մշակված և նախապես մտածված',
    popularEs: 'Frecuentemente sencillo y coloquial',
    popularHy: 'Հաճախ պարզ և խոսակցական',
  },
  {
    traitEs: 'Origen',
    traitHy: 'Ծագում',
    cultaEs: 'Creación individual',
    cultaHy: 'Անհատական ստեղծագործություն',
    popularEs: 'Tradición colectiva',
    popularHy: 'Հավաքական ավանդույթ',
  },
  {
    traitEs: 'Ejemplos',
    traitHy: 'Օրինակներ',
    cultaEs: 'Novelas, poemas de autor, obras teatrales',
    cultaHy: 'Վեպեր, հեղինակային բանաստեղծություններ, պիեսներ',
    popularEs: 'Leyendas tradicionales, nanas, romances populares',
    popularHy: 'Ավանդազրույցներ, օրորոցայիններ, ժողովրդական ռոմանսներ',
  },
];
