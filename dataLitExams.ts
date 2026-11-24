import { BilingualLine, ExamQA, FigurePracticeItem, QuizQuestion, SimpleQA } from './types';

// ================= PART I: EXAMEN 1 — Género narrativo =================
export const LIT_EXAM1_PARAGRAPHS: BilingualLine[] = [
  {
    es: 'Recuerdo aquella mañana de noviembre como uno de los días más especiales de mi infancia. El otoño había cubierto las calles de hojas doradas y el viento susurraba entre los árboles del parque. Mi amigo Daniel y yo caminábamos hacia el colegio mientras hablábamos de nuestros planes para el fin de semana.',
    hy: 'Հիշում եմ նոյեմբերի այն առավոտը որպես իմ մանկության ամենայուրահատուկ օրերից մեկը։ Աշունը փողոցները ծածկել էր ոսկեգույն տերևներով, իսկ քամին շշնջում էր այգու ծառերի միջով։ Իմ ընկեր Դանիելը և ես քայլում էինք դեպի դպրոց՝ խոսելով հանգստյան օրերի մեր ծրագրերի մասին։',
    highlight: 'el viento susurraba entre los árboles',
  },
  {
    es: 'Al llegar a la plaza, vimos a un anciano sentado en un banco. A su lado había varias bolsas llenas de libros. Parecía cansado y observaba con preocupación las escaleras que conducían a la biblioteca municipal.',
    hy: 'Հրապարակ հասնելով՝ տեսանք մի տարեց տղամարդու՝ նստարանին նստած։ Նրա կողքին կային գրքերով լի մի քանի պայուսակներ։ Նա հոգնած տեսք ուներ և անհանգստությամբ նայում էր քաղաքային գրադարան տանող աստիճաններին։',
  },
  {
    es: 'Daniel se acercó inmediatamente y le preguntó si necesitaba ayuda. El hombre nos explicó que quería donar aquellos libros, pero que no tenía fuerzas suficientes para transportarlos.',
    hy: 'Դանիելն անմիջապես մոտեցավ և հարցրեց, թե արդյոք նա օգնության կարիք ունի։ Տղամարդը մեզ բացատրեց, որ ցանկանում է նվիրաբերել այդ գրքերը, բայց բավարար ուժ չունի դրանք տեղափոխելու համար։',
  },
  {
    es: 'Sin pensarlo dos veces, decidimos acompañarlo. Aunque las bolsas pesaban bastante, conseguimos llevarlas hasta la entrada de la biblioteca. El anciano nos recibió con una sonrisa tan sincera que su alegría iluminó nuestros corazones.',
    hy: 'Առանց երկար մտածելու՝ որոշեցինք ուղեկցել նրան։ Թեև պայուսակները բավական ծանր էին, մեզ հաջողվեց դրանք հասցնել մինչև գրադարանի մուտքը։ Տարեց տղամարդը մեզ դիմավորեց այնքան անկեղծ ժպիտով, որ նրա ուրախությունը լուսավորեց մեր սրտերը։',
    highlight: 'su alegría iluminó nuestros corazones',
  },
  {
    es: 'Nos contó que aquellos libros habían pertenecido a su esposa, una mujer que había dedicado gran parte de su vida a enseñar a leer a los niños del barrio. Su mayor deseo había sido que otras personas pudieran disfrutar de aquellas historias.',
    hy: 'Նա մեզ պատմեց, որ այդ գրքերը պատկանել էին իր կնոջը՝ մի կնոջ, որն իր կյանքի մեծ մասը նվիրել էր թաղամասի երեխաներին կարդալ սովորեցնելուն։ Նրա ամենամեծ ցանկությունն էր, որ ուրիշներն էլ կարողանան վայելել այդ պատմությունները։',
  },
  {
    es: 'Mientras regresábamos al colegio, comprendí que no siempre hacen falta grandes hazañas para cambiar el día de alguien. A veces, unos minutos de nuestro tiempo pueden convertirse en un recuerdo inolvidable.',
    hy: 'Դպրոց վերադառնալիս հասկացա, որ միշտ չէ, որ մեծ սխրանքներ են պետք ինչ-որ մեկի օրը փոխելու համար։ Երբեմն մեր ժամանակի մի քանի րոպեն կարող է վերածվել անմոռանալի հիշողության։',
  },
  {
    es: 'Desde entonces, cada vez que paso por aquella biblioteca, recuerdo al anciano y pienso que la verdadera generosidad comienza cuando dejamos de mirar únicamente nuestro propio camino.',
    hy: 'Այդ օրվանից սկսած՝ ամեն անգամ այդ գրադարանի կողքով անցնելիս հիշում եմ տարեց տղամարդուն և մտածում, որ իսկական առատաձեռնությունը սկսվում է այն պահից, երբ դադարում ենք նայել միայն մեր սեփական ճանապարհին։',
  },
];

export const LIT_EXAM1_QA: ExamQA[] = [
  {
    id: 'e1-a',
    label: 'A)',
    points: '1 punto',
    questionEs: 'Resume el texto.',
    questionHy: 'Ամփոփի՛ր տեքստը։',
    answerEs:
      'El narrador y su amigo Daniel ayudan a un anciano a llevar unos libros a la biblioteca. Gracias a esta experiencia, comprenden la importancia de la generosidad y de ayudar a los demás.',
    answerHy:
      'Պատմողն ու նրա ընկեր Դանիելը օգնում են տարեց տղամարդուն գրքերը հասցնել գրադարան։ Այս փորձի շնորհիվ նրանք հասկանում են առատաձեռնության և ուրիշներին օգնելու կարևորությունը։',
  },
  {
    id: 'e1-b',
    label: 'B)',
    points: '1 punto',
    questionEs: 'Justifica si este texto pertenece a la literatura culta o popular y por qué.',
    questionHy: 'Հիմնավորի՛ր՝ տեքստը պատկանում է հեղինակայի՞ն, թե՞ ժողովրդական գրականությանը։',
    answerEs:
      'Pertenece a la literatura culta porque es un texto de creación individual, escrito con un lenguaje elaborado y con una intención artística. No procede de la tradición oral popular.',
    answerHy:
      'Այն հեղինակային գրականության օրինակ է, քանի որ անհատական ստեղծագործություն է՝ մշակված լեզվով և գեղարվեստական նպատակով։ Այն չի ծագում ժողովրդական բանավոր ավանդույթից։',
  },
  {
    id: 'e1-c',
    label: 'C)',
    points: '1 punto',
    questionEs: 'Explica con tus palabras las dos expresiones destacadas en el texto.',
    questionHy: 'Բացատրի՛ր ընդգծված երկու արտահայտությունները սեփական բառերով։',
    answerEs: '',
    answerHy: '',
    subItems: [
      {
        termEs: '1. El viento susurraba entre los árboles.',
        termHy: '1. Քամին շշնջում էր ծառերի միջով։',
        explanationEs: 'Significa que el viento producía un sonido suave al pasar entre los árboles.',
        explanationHy: 'Նշանակում է, որ քամին ծառերի միջով անցնելիս մեղմ ձայն էր արձակում։',
      },
      {
        termEs: '2. Su alegría iluminó nuestros corazones.',
        termHy: '2. Նրա ուրախությունը լուսավորեց մեր սրտերը։',
        explanationEs: 'Significa que la felicidad del anciano hizo que los jóvenes también se sintieran felices.',
        explanationHy: 'Նշանակում է, որ տարեց տղամարդու ուրախությունը երջանկացրեց նաև երիտասարդներին։',
      },
    ],
  },
  {
    id: 'e1-d',
    label: 'D)',
    points: '1 punto',
    questionEs: '¿Dirías que las expresiones que acabas de explicar son figuras literarias? ¿Cuáles? Justifica tu respuesta.',
    questionHy: 'Արդյո՞ք այս արտահայտությունները գեղարվեստական պատկերավորման միջոցներ են։ Որո՞նք։ Հիմնավորի՛ր։',
    answerEs:
      '• «El viento susurraba entre los árboles» es una personificación, porque se atribuye al viento una acción humana.\n• «Su alegría iluminó nuestros corazones» es una metáfora, porque expresa la felicidad mediante la imagen de la luz.',
    answerHy:
      'Առաջինը անձնավորում է, քանի որ քամուն վերագրվում է մարդկային գործողություն։ Երկրորդը փոխաբերություն է, քանի որ երջանկությունն արտահայտվում է լույսի միջոցով։',
  },
  {
    id: 'e1-e',
    label: 'E)',
    points: '1 punto',
    questionEs: '¿A qué género literario pertenece el texto? Justifica tu respuesta con ejemplos del texto.',
    questionHy: 'Ո՞ր գրական ժանրին է պատկանում տեքստը։ Հիմնավորի՛ր օրինակներով։',
    answerEs:
      'Pertenece al género narrativo porque un narrador en primera persona cuenta una historia con personajes, acontecimientos, un lugar y un tiempo determinados. Por ejemplo, «Recuerdo aquella mañana» y «Mi amigo Daniel y yo caminábamos hacia el colegio».',
    answerHy:
      'Այն պատկանում է պատմողական ժանրին, քանի որ առաջին դեմքով պատմողը ներկայացնում է հերոսներ, իրադարձություններ, որոշակի վայր և ժամանակ։',
  },
  {
    id: 'e1-f',
    label: 'F)',
    points: '1 punto',
    questionEs: '¿Dirías que este texto tiene lenguaje literario? Justifica tu respuesta.',
    questionHy: 'Կասե՞ս, որ այս տեքստում օգտագործվում է գեղարվեստական լեզու։ Հիմնավորի՛ր։',
    answerEs:
      'Sí, porque utiliza un lenguaje expresivo, descripciones y figuras literarias para transmitir emociones y crear imágenes en la imaginación del lector.',
    answerHy:
      'Այո՛, քանի որ օգտագործվում են արտահայտիչ լեզու, նկարագրություններ և գեղարվեստական պատկերավորման միջոցներ՝ զգացմունքներ փոխանցելու և ընթերցողի երևակայության մեջ պատկերներ ստեղծելու համար։',
  },
];

// ================= PART I: EXAMEN 2 — Género lírico =================
export const LIT_EXAM2_STANZAS: BilingualLine[] = [
  {
    es: 'Cuando la mañana despierta,\ny el sol abraza la ciudad,\nencuentro siempre una puerta\nque me conduce a tu amistad.',
    hy: 'Երբ առավոտն արթնանում է,\nև արևը գրկում է քաղաքը,\nես միշտ գտնում եմ մի դուռ,\nորը տանում է դեպի քո ընկերությունը։',
  },
  {
    es: 'Tu amistad es un refugio,\nun lugar donde descansar,\ndonde las penas se olvidan\ny los sueños pueden volar.',
    hy: 'Քո ընկերությունը ապաստարան է,\nմի տեղ, որտեղ կարելի է հանգստանալ,\nորտեղ վշտերը մոռացվում են,\nև երազանքները կարող են թռչել։',
    highlight: 'Tu amistad es un refugio',
  },
  {
    es: 'Las estrellas nos sonríen\ncuando hablamos sin temor,\ny los pequeños momentos\nse convierten en amor.',
    hy: 'Աստղերը ժպտում են մեզ,\nերբ խոսում ենք առանց վախի,\nև փոքրիկ պահերը\nվերածվում են սիրո։',
    highlight: 'Las estrellas nos sonríen',
  },
  {
    es: 'No necesito mil regalos,\nni riquezas, ni poder,\nsolo un amigo sincero\ncon quien reír y aprender.',
    hy: 'Ինձ պետք չեն հազար նվերներ,\nոչ հարստություն, ոչ իշխանություն,\nմիայն մի անկեղծ ընկեր,\nում հետ կծիծաղեմ և կսովորեմ։',
  },
];

export const LIT_EXAM2_QA: ExamQA[] = [
  {
    id: 'e2-a',
    label: 'A)',
    points: '1 punto',
    questionEs: 'Resume el contenido del poema.',
    questionHy: 'Ամփոփի՛ր բանաստեղծության բովանդակությունը։',
    answerEs:
      'El poema expresa la importancia de la amistad verdadera. La voz poética considera que tener un amigo sincero es más importante que poseer riquezas o regalos.',
    answerHy:
      'Բանաստեղծությունն արտահայտում է իսկական ընկերության կարևորությունը։ Անկեղծ ընկեր ունենալն ավելի կարևոր է, քան հարստություն կամ նվերներ ունենալը։',
  },
  {
    id: 'e2-b',
    label: 'B)',
    points: '1 punto',
    questionEs: '¿Pertenece a la literatura culta o popular? Justifica tu respuesta.',
    questionHy: 'Այն պատկանում է հեղինակայի՞ն, թե՞ ժողովրդական գրականությանը։',
    answerEs:
      'Pertenece a la literatura culta porque es una composición de creación individual que utiliza versos y recursos literarios con una intención artística.',
    answerHy:
      'Այն հեղինակային գրականության օրինակ է, քանի որ անհատական ստեղծագործություն է, որտեղ օգտագործվում են չափածո տողեր և գեղարվեստական միջոցներ։',
  },
  {
    id: 'e2-c',
    label: 'C)',
    points: '1 punto',
    questionEs: 'Explica con tus palabras las dos expresiones destacadas.',
    questionHy: 'Բացատրի՛ր ընդգծված արտահայտությունները։',
    answerEs: '',
    answerHy: '',
    subItems: [
      {
        termEs: '1. Tu amistad es un refugio.',
        termHy: '1. Քո ընկերությունը ապաստարան է։',
        explanationEs: 'Significa que la amistad proporciona seguridad, tranquilidad y protección emocional.',
        explanationHy: 'Նշանակում է, որ ընկերությունը տալիս է ապահովություն, հանգստություն և հոգեբանական պաշտպանություն։',
      },
      {
        termEs: '2. Las estrellas nos sonríen.',
        termHy: '2. Աստղերը ժպտում են մեզ։',
        explanationEs:
          'Significa que la voz poética siente tanta felicidad que percibe el mundo que la rodea de manera alegre y positiva.',
        explanationHy:
          'Նշանակում է, որ քնարական ձայնն այնքան երջանիկ է, որ շրջապատող աշխարհն ընկալում է ուրախ և դրական կերպով։',
      },
    ],
  },
  {
    id: 'e2-d',
    label: 'D)',
    points: '1 punto',
    questionEs: '¿Qué figuras literarias aparecen en las expresiones anteriores? Justifica tu respuesta.',
    questionHy: 'Ի՞նչ գեղարվեստական պատկերավորման միջոցներ են օգտագործվել։',
    answerEs:
      '• «Tu amistad es un refugio» es una metáfora, porque identifica la amistad con un lugar seguro.\n• «Las estrellas nos sonríen» es una personificación, porque las estrellas no pueden sonreír realmente.',
    answerHy: 'Առաջինը փոխաբերություն է, իսկ երկրորդը՝ անձնավորում։',
  },
  {
    id: 'e2-e',
    label: 'E)',
    points: '1 punto',
    questionEs: '¿A qué género literario pertenece este texto? Justifica tu respuesta.',
    questionHy: 'Ո՞ր գրական ժանրին է պատկանում տեքստը։',
    answerEs:
      'Pertenece al género lírico porque expresa sentimientos y emociones relacionados con la amistad. Además, está escrito en verso, dividido en estrofas y utiliza recursos literarios.',
    answerHy:
      'Այն պատկանում է քնարական ժանրին, քանի որ արտահայտում է ընկերության հետ կապված զգացմունքներ և հույզեր։ Այն գրված է չափածո ձևով և բաժանված է բանաստեղծական տների։',
  },
  {
    id: 'e2-f',
    label: 'F)',
    points: '1 punto',
    questionEs: '¿Tiene este poema lenguaje literario? Justifica tu respuesta.',
    questionHy: 'Արդյո՞ք բանաստեղծության մեջ օգտագործվում է գեղարվեստական լեզու։',
    answerEs:
      'Sí, porque utiliza metáforas, personificaciones, ritmo y expresiones figuradas para transmitir sentimientos y producir un efecto estético.',
    answerHy:
      'Այո՛, քանի որ օգտագործվում են փոխաբերություններ, անձնավորումներ, ռիթմ և պատկերավոր արտահայտություններ՝ զգացմունքներ փոխանցելու և գեղագիտական ազդեցություն ստեղծելու համար։',
  },
];

export const LIT_EXAM2_EXTRA: SimpleQA[] = [
  {
    questionEs: '¿Cuántas estrofas tiene el poema?',
    questionHy: 'Քանի՞ բանաստեղծական տուն ունի բանաստեղծությունը։',
    answerEs: 'Cuatro estrofas.',
    answerHy: 'Չորս բանաստեղծական տուն։',
  },
  {
    questionEs: '¿Cuántos versos tiene?',
    questionHy: 'Քանի՞ տող ունի։',
    answerEs: 'Dieciséis versos.',
    answerHy: 'Տասնվեց տող։',
  },
  {
    questionEs: '¿Cuántos versos tiene cada estrofa?',
    questionHy: 'Քանի՞ տող ունի յուրաքանչյուր տունը։',
    answerEs: 'Cuatro versos.',
    answerHy: 'Չորս տող։',
  },
  {
    questionEs: '¿Cuál es el tema principal?',
    questionHy: 'Ո՞րն է հիմնական թեման։',
    answerEs: 'La amistad verdadera.',
    answerHy: 'Իսկական ընկերությունը։',
  },
  {
    questionEs: '¿Qué sentimientos transmite?',
    questionHy: 'Ի՞նչ զգացմունքներ է փոխանցում։',
    answerEs: 'Alegría, cariño, confianza y tranquilidad.',
    answerHy: 'Ուրախություն, ջերմություն, վստահություն և հանգստություն։',
  },
  {
    questionEs: '¿Está escrito en prosa o en verso?',
    questionHy: 'Այն գրված է արձա՞կ, թե՞ չափածո ձևով։',
    answerEs: 'En verso.',
    answerHy: 'Չափածո ձևով։',
  },
  {
    questionEs: '¿Qué palabras riman en la primera estrofa?',
    questionHy: 'Ո՞ր բառերն են հանգավորվում առաջին տան մեջ։',
    answerEs: 'Despierta y puerta; ciudad y amistad.',
    answerHy: 'Despierta և puerta, ciudad և amistad։',
  },
  {
    questionEs: '¿Qué tipo de rima presentan esas parejas?',
    questionHy: 'Ի՞նչ տեսակի հանգ ունեն այդ զույգերը։',
    answerEs: 'Rima consonante.',
    answerHy: 'Լիակատար հանգ։',
  },
  {
    questionEs: '¿Quién expresa los sentimientos?',
    questionHy: 'Ո՞վ է արտահայտում զգացմունքները։',
    answerEs: 'La voz poética o el yo lírico.',
    answerHy: 'Քնարական ձայնը կամ քնարական «ես»-ը։',
  },
];

// ================= PART I: EXAMEN 3 — Género teatral =================
export const LIT_EXAM3_SCRIPT: BilingualLine[] = [
  {
    es: 'Personajes: Pablo, Clara, Marcos y Elena.',
    hy: 'Գործող անձինք՝ Պաբլո, Կլարա, Մարկոս և Էլենա։',
    isStageDirection: true,
  },
  {
    es: '(El escenario representa un aula. Hay una mesa cubierta con una caja de cartón, varios dibujos y una tarjeta. Clara y Marcos preparan una sorpresa mientras Elena observa la puerta.)',
    hy: '(Բեմը ներկայացնում է դասարան։ Կա սեղան՝ վրան ստվարաթղթե տուփ, մի քանի նկար և բացիկ։ Կլարան և Մարկոսը անակնկալ են պատրաստում, մինչ Էլենան հետևում է դռանը։)',
    isStageDirection: true,
  },
  {
    speaker: 'CLARA',
    es: '¡Date prisa, Marcos! Pablo llegará dentro de unos minutos.',
    hy: 'Շտապի՛ր, Մարկո՛ս։ Պաբլոն մի քանի րոպեից կգա։',
  },
  {
    speaker: 'MARCOS',
    es: 'Estoy intentando terminar la tarjeta. Quiero que todo salga perfecto.',
    hy: 'Փորձում եմ ավարտել բացիկը։ Ուզում եմ, որ ամեն ինչ կատարյալ ստացվի։',
  },
  {
    speaker: 'ELENA',
    es: 'No hace falta que sea perfecto. Lo importante es que lo hemos preparado entre todos.',
    hy: 'Պարտադիր չէ, որ կատարյալ լինի։ Կարևորն այն է, որ բոլորս միասին ենք պատրաստել։',
  },
  {
    speaker: 'CLARA',
    es: 'Tienes razón. Pablo siempre nos ayuda cuando tenemos dificultades. Hoy es nuestro turno de demostrarle cuánto lo apreciamos.',
    hy: 'Իրավացի ես։ Պաբլոն միշտ օգնում է մեզ, երբ դժվարություններ ունենք։ Այսօր մեր հերթն է ցույց տալու, թե որքան ենք գնահատում նրան։',
  },
  {
    es: '(Marcos coloca la tarjeta encima de la mesa. Se escuchan unos pasos en el pasillo.)',
    hy: '(Մարկոսը դնում է բացիկը սեղանի վրա։ Միջանցքում քայլերի ձայն է լսվում։)',
    isStageDirection: true,
  },
  {
    speaker: 'MARCOS',
    es: '¡Ya viene! Mi corazón es un tambor.',
    hy: 'Արդեն գալիս է։ Սիրտս թմբուկ է դարձել։',
    highlight: 'Mi corazón es un tambor',
  },
  {
    speaker: 'ELENA',
    es: 'Tranquilo. Es una sorpresa, no un examen.',
    hy: 'Հանգստացի՛ր։ Անակնկալ է, քննություն չէ։',
  },
  {
    es: '(Pablo entra en el aula y observa a sus compañeros con curiosidad.)',
    hy: '(Պաբլոն մտնում է դասարան և հետաքրքրությամբ նայում ընկերներին։)',
    isStageDirection: true,
  },
  {
    speaker: 'PABLO',
    es: '¿Qué está pasando? ¿Por qué estáis todos tan misteriosos?',
    hy: 'Ի՞նչ է կատարվում։ Ինչո՞ւ եք բոլորդ այսքան խորհրդավոր։',
  },
  {
    speaker: 'CLARA',
    es: 'Tenemos algo para ti. Queremos darte las gracias por todo lo que haces por nosotros.',
    hy: 'Քեզ համար մի բան ունենք։ Ուզում ենք շնորհակալություն հայտնել այն ամենի համար, ինչ անում ես մեզ համար։',
  },
  {
    speaker: 'PABLO',
    es: '¿Para mí? Pero si hoy no es mi cumpleaños.',
    hy: 'Ի՞նձ համար։ Բայց այսօր իմ ծննդյան օրը չէ։',
  },
  {
    speaker: 'MARCOS',
    es: 'No necesitamos una fecha especial para celebrar nuestra amistad.',
    hy: 'Մեզ հատուկ օր պետք չէ մեր ընկերությունը նշելու համար։',
  },
  {
    es: '(Pablo abre la caja y encuentra fotografías, dibujos y mensajes de sus compañeros.)',
    hy: '(Պաբլոն բացում է տուփը և գտնում լուսանկարներ, նկարներ ու իր ընկերների նամակները։)',
    isStageDirection: true,
  },
  {
    speaker: 'PABLO',
    es: '¡No sé qué decir! Os he dado las gracias un millón de veces, pero nunca imaginé algo así.',
    hy: 'Չգիտեմ ինչ ասել։ Ձեզ միլիոն անգամ շնորհակալություն եմ հայտնել, բայց երբեք նման բան չէի պատկերացնի։',
    highlight: 'Os he dado las gracias un millón de veces',
  },
  {
    speaker: 'ELENA',
    es: 'Esperamos que conserves esta caja durante muchos años.',
    hy: 'Հուսով ենք, որ այս տուփը կպահես շատ տարիներ։',
  },
  {
    speaker: 'PABLO',
    es: 'Por supuesto. Es el mejor regalo que podía recibir.',
    hy: 'Իհարկե։ Սա ամենալավ նվերն է, որ կարող էի ստանալ։',
  },
  {
    es: '(Los cuatro amigos se abrazan. Pablo vuelve a mirar los mensajes mientras sonríe emocionado.)',
    hy: '(Չորս ընկերները գրկախառնվում են։ Պաբլոն նորից նայում է նամակներին՝ հուզված ժպտալով։)',
    isStageDirection: true,
  },
  {
    es: 'TELÓN.',
    hy: 'ՎԱՐԱԳՈՒՅՐ։',
    isStageDirection: true,
  },
];

export const LIT_EXAM3_QA: ExamQA[] = [
  {
    id: 'e3-a',
    label: 'A)',
    points: '1 punto',
    questionEs: 'Resume el texto.',
    questionHy: 'Ամփոփի՛ր տեքստը։',
    answerEs:
      'Clara, Marcos y Elena preparan una sorpresa para agradecer a Pablo su amistad y su ayuda. Pablo recibe el regalo con mucha emoción y alegría.',
    answerHy:
      'Կլարան, Մարկոսը և Էլենան անակնկալ են պատրաստում Պաբլոյի համար՝ շնորհակալություն հայտնելու նրա ընկերության և օգնության համար։',
  },
  {
    id: 'e3-b',
    label: 'B)',
    points: '1 punto',
    questionEs: '¿Pertenece a la literatura culta o popular? Justifica tu respuesta.',
    questionHy: 'Հիմնավորի՛ր՝ տեքստը հեղինակային, թե ժողովրդական գրականության օրինակ է։',
    answerEs:
      'Pertenece a la literatura culta porque es una obra de creación individual, escrita con una estructura teatral y una intención artística.',
    answerHy:
      'Այն հեղինակային գրականության օրինակ է, քանի որ անհատական ստեղծագործություն է՝ թատերական կառուցվածքով և գեղարվեստական նպատակով։',
  },
  {
    id: 'e3-c',
    label: 'C)',
    points: '1 punto',
    questionEs: 'Explica con tus palabras las dos expresiones destacadas.',
    questionHy: 'Բացատրի՛ր ընդգծված արտահայտությունները։',
    answerEs: '',
    answerHy: '',
    subItems: [
      {
        termEs: '1. Mi corazón es un tambor.',
        termHy: '1. Սիրտս թմբուկ է։',
        explanationEs: 'Significa que el corazón de Marcos late con fuerza porque está nervioso y emocionado.',
        explanationHy: 'Նշանակում է, որ Մարկոսի սիրտն ուժեղ է բաբախում, քանի որ նա հուզված է։',
      },
      {
        termEs: '2. Os he dado las gracias un millón de veces.',
        termHy: '2. Ձեզ միլիոն անգամ շնորհակալություն եմ հայտնել։',
        explanationEs: 'Significa que Pablo les ha dado las gracias muchas veces, no literalmente un millón.',
        explanationHy: 'Նշանակում է, որ Պաբլոն շատ անգամ է շնորհակալություն հայտնել նրանց, բայց ոչ բառացիորեն մեկ միլիոն անգամ։',
      },
    ],
  },
  {
    id: 'e3-d',
    label: 'D)',
    points: '1 punto',
    questionEs: '¿Qué figuras literarias son? Justifica tu respuesta.',
    questionHy: 'Ի՞նչ գեղարվեստական պատկերավորման միջոցներ են դրանք։',
    answerEs:
      '• «Mi corazón es un tambor» es una metáfora, porque identifica los latidos del corazón con el sonido de un tambor.\n• «Os he dado las gracias un millón de veces» es una hipérbole, porque exagera la cantidad de veces.',
    answerHy: 'Առաջինը փոխաբերություն է, իսկ երկրորդը՝ չափազանցություն։',
  },
  {
    id: 'e3-e',
    label: 'E)',
    points: '1 punto',
    questionEs: '¿A qué género literario pertenece el texto? Justifica tu respuesta con ejemplos.',
    questionHy: 'Ո՞ր գրական ժանրին է պատկանում տեքստը։ Հիմնավորի՛ր օրինակներով։',
    answerEs:
      'Pertenece al género teatral o dramático porque la historia se desarrolla mediante los diálogos de los personajes. También contiene acotaciones que indican sus movimientos y acciones, como «Pablo entra en el aula».',
    answerHy:
      'Այն պատկանում է դրամատիկական ժանրին, քանի որ պատմությունը զարգանում է հերոսների երկխոսությունների միջոցով։ Այն նաև պարունակում է բեմական ցուցումներ։',
  },
  {
    id: 'e3-f',
    label: 'F)',
    points: '1 punto',
    questionEs: '¿Tiene lenguaje literario? Justifica tu respuesta.',
    questionHy: 'Արդյո՞ք օգտագործվում է գեղարվեստական լեզու։',
    answerEs:
      'Sí, porque utiliza expresiones figuradas, metáforas e hipérboles para transmitir las emociones de los personajes de manera expresiva.',
    answerHy:
      'Այո՛, քանի որ օգտագործվում են պատկերավոր արտահայտություններ, փոխաբերություններ և չափազանցություններ՝ հերոսների զգացմունքներն արտահայտիչ ձևով ներկայացնելու համար։',
  },
];

export const LIT_EXAM3_EXTRA: SimpleQA[] = [
  {
    questionEs: '¿Qué es una acotación?',
    questionHy: 'Ի՞նչ է բեմական ցուցումը։',
    answerEs: 'Una indicación sobre las acciones, los gestos, el escenario o los movimientos.',
    answerHy: 'Ցուցում՝ գործողությունների, ժեստերի, բեմի կամ շարժումների մասին։',
  },
  {
    questionEs: '¿Cómo aparecen las acotaciones?',
    questionHy: 'Ինչպե՞ս են գրվում բեմական ցուցումները։',
    answerEs: 'Generalmente entre paréntesis y en cursiva.',
    answerHy: 'Սովորաբար փակագծերի մեջ և շեղատառով։',
  },
  {
    questionEs: '¿Hay un narrador en este texto?',
    questionHy: 'Կա՞ պատմող այս տեքստում։',
    answerEs: 'No.',
    answerHy: 'Ոչ։',
  },
  {
    questionEs: '¿Dónde ocurre la historia?',
    questionHy: 'Որտե՞ղ է տեղի ունենում պատմությունը։',
    answerEs: 'En un aula.',
    answerHy: 'Դասարանում։',
  },
  {
    questionEs: '¿Qué personajes aparecen?',
    questionHy: 'Ո՞ր կերպարներն են հանդես գալիս։',
    answerEs: 'Pablo, Clara, Marcos y Elena.',
    answerHy: 'Պաբլոն, Կլարան, Մարկոսը և Էլենան։',
  },
  {
    questionEs: '¿Qué es el atrezzo?',
    questionHy: 'Ի՞նչ են բեմական պարագաները (atrezzo)։',
    answerEs: 'El conjunto de objetos utilizados en una representación teatral.',
    answerHy: 'Թատերական ներկայացման մեջ օգտագործվող առարկաների ամբողջությունը։',
  },
  {
    questionEs: '¿Qué elementos de atrezzo aparecen?',
    questionHy: 'Բեմական պարագաների ի՞նչ տարրեր են հանդիպում։',
    answerEs: 'La mesa, la caja, la tarjeta, los dibujos y las fotografías.',
    answerHy: 'Սեղանը, տուփը, բացիկը, նկարները և լուսանկարները։',
  },
  {
    questionEs: '¿Qué significa «telón» al final del texto?',
    questionHy: 'Ի՞նչ է նշանակում «telón» բառը տեքստի վերջում։',
    answerEs: 'Indica el final de la escena o de la representación.',
    answerHy: 'Ցույց է տալիս տեսարանի կամ ներկայացման ավարտը։',
  },
  {
    questionEs: '¿Para qué está escrito un texto teatral?',
    questionHy: 'Ինչի՞ համար է գրվում թատերական տեքստը։',
    answerEs: 'Para ser representado ante un público.',
    answerHy: 'Հանդիսատեսի առջև բեմադրվելու համար։',
  },
];

// ================= PART I: Ejercicio 1 (20 frases de figuras literarias) =================
export const EXERCISE1_FIGURES_20: FigurePracticeItem[] = [
  {
    id: 1,
    sentenceEs: 'El sol me saludó esta mañana.',
    sentenceHy: 'Արևն այս առավոտ ողջունեց ինձ։',
    figureEs: 'Personificación',
    figureHy: 'Անձնավորում',
    justificationEs: 'Se atribuye al sol una acción humana: saludar.',
    justificationHy: 'Արևին վերագրվում է մարդկային գործողություն՝ ողջունել։',
  },
  {
    id: 2,
    sentenceEs: 'Tus ojos son dos estrellas.',
    sentenceHy: 'Քո աչքերը երկու աստղեր են։',
    figureEs: 'Metáfora',
    figureHy: 'Փոխաբերություն',
    justificationEs: 'Identifica directamente los ojos con estrellas por su brillo.',
    justificationHy: 'Աչքերն ուղղակիորեն նույնացվում են աստղերի հետ՝ փայլի պատճառով։',
  },
  {
    id: 3,
    sentenceEs: 'Te he esperado durante mil años.',
    sentenceHy: 'Քեզ հազար տարի սպասել եմ։',
    figureEs: 'Hipérbole',
    figureHy: 'Չափազանցություն',
    justificationEs: 'Exagera de manera evidente el tiempo de espera.',
    justificationHy: 'Ակնհայտորեն չափազանցվում է սպասելու ժամանակը։',
  },
  {
    id: 4,
    sentenceEs: 'Subió arriba para buscar sus libros.',
    sentenceHy: 'Բարձրացավ վերև՝ իր գրքերը փնտրելու։',
    figureEs: 'Pleonasmo',
    figureHy: 'Բառային ավելորդություն',
    justificationEs: '«Arriba» es redundante con el significado del verbo «subir».',
    justificationHy: '«Վերև» բառն ավելորդ է «բարձրանալ» բայի իմաստի կողքին։',
  },
  {
    id: 5,
    sentenceEs: 'Ni canta, ni baila, ni habla, ni sonríe.',
    sentenceHy: 'Ոչ երգում է, ոչ պարում է, ոչ խոսում է, ոչ ժպտում է։',
    figureEs: 'Polisíndeton',
    figureHy: 'Բազմաշաղկապություն',
    justificationEs: 'Repite intencionadamente la conjunción «ni».',
    justificationHy: 'Դիտավորյալ կրկնվում է «ni» (ոչ) շաղկապը։',
  },
  {
    id: 6,
    sentenceEs: '¡Qué puntual eres! Has llegado una hora tarde.',
    sentenceHy: 'Ի՜նչ ճշտապահ ես։ Մեկ ժամ ուշացել ես։',
    figureEs: 'Ironía',
    figureHy: 'Հեգնանք',
    justificationEs: 'Expresa lo contrario de lo que realmente piensa.',
    justificationHy: 'Արտահայտում է իրական մտքին հակառակ բան։',
  },
  {
    id: 7,
    sentenceEs: 'Del jardín las flores recogió María.',
    sentenceHy: 'Այգուց ծաղիկները հավաքեց Մարիան։',
    figureEs: 'Hipérbaton',
    figureHy: 'Շարադասության շրջում',
    justificationEs: 'Altera el orden habitual («María recogió las flores del jardín»).',
    justificationHy: 'Փոխվում է բառերի սովորական դասավորությունը։',
  },
  {
    id: 8,
    sentenceEs: 'Sus manos eran suaves como la seda.',
    sentenceHy: 'Նրա ձեռքերը մետաքսի պես նուրբ էին։',
    figureEs: 'Símil o comparación',
    figureHy: 'Համեմատություն',
    justificationEs: 'Compara explícitamente las manos con la seda mediante «como».',
    justificationHy: 'Բացահայտ համեմատություն է «como» (ինչպես) բառով։',
  },
  {
    id: 9,
    sentenceEs: 'Aquí se sueña, aquí se aprende, aquí se vive.',
    sentenceHy: 'Այստեղ երազում են, այստեղ սովորում են, այստեղ ապրում են։',
    figureEs: 'Anáfora',
    figureHy: 'Սկզբնաբառի կրկնություն',
    justificationEs: 'Repite la palabra «aquí» al comienzo de varias frases.',
    justificationHy: '«Aquí» բառը կրկնվում է նախադասությունների սկզբում։',
  },
  {
    id: 10,
    sentenceEs: 'En el silencio solo se escuchaba el suave susurro del sauce.',
    sentenceHy: 'Լռության մեջ լսվում էր միայն ուռենու մեղմ շշուկը։',
    figureEs: 'Aliteración',
    figureHy: 'Հնչյունների կրկնություն',
    justificationEs: 'Repite el sonido de la «s» para imitar un susurro.',
    justificationHy: 'Կրկնվում է «s» հնչյունը՝ շշուկի տպավորություն ստեղծելու համար։',
  },
  {
    id: 11,
    sentenceEs: 'Aquel pequeño gesto despertó una enorme alegría.',
    sentenceHy: 'Այդ փոքրիկ ժեստը մեծ ուրախություն արթնացրեց։',
    figureEs: 'Antítesis',
    figureHy: 'Հակադրություն',
    justificationEs: 'Contrapone ideas de significado opuesto: «pequeño» y «enorme».',
    justificationHy: 'Հակադրում է հակառակ իմաստով բառեր՝ «փոքր» և «հսկայական»։',
  },
  {
    id: 12,
    sentenceEs: 'Su dulce voz llenaba la habitación.',
    sentenceHy: 'Նրա քաղցր ձայնը լցնում էր սենյակը։',
    figureEs: 'Sinestesia',
    figureHy: 'Զգայությունների միաձուլում',
    justificationEs: 'Mezcla una sensación del gusto («dulce») con otra del oído («voz»).',
    justificationHy: 'Միավորում է համի («քաղցր») և լսողության («ձայն») զգայությունները։',
  },
  {
    id: 13,
    sentenceEs: 'Llegué, miré, sonreí, salí.',
    sentenceHy: 'Եկա, նայեցի, ժպտացի, դուրս եկա։',
    figureEs: 'Asíndeton',
    figureHy: 'Անշաղկապություն',
    justificationEs: 'Elimina las conjunciones para dar rapidez y dinamismo.',
    justificationHy: 'Բաց են թողնված շաղկապները՝ խոսքին արագություն հաղորդելու համար։',
  },
  {
    id: 14,
    sentenceEs: 'Cuanto más aprendo, más consciente soy de lo poco que sé.',
    sentenceHy: 'Որքան շատ եմ սովորում, այնքան ավելի եմ գիտակցում, թե որքան քիչ գիտեմ։',
    figureEs: 'Paradoja',
    figureHy: 'Պարադոքս',
    justificationEs: 'Presenta una contradicción aparente que encierra un sentido profundo.',
    justificationHy: 'Արտաքուստ հակասություն է, որը խորիմաստություն է պարունակում։',
  },
  {
    id: 15,
    sentenceEs: 'Compró manzanas, peras, naranjas y plátanos.',
    sentenceHy: 'Նա գնեց խնձորներ, տանձեր, նարինջներ և բանաններ։',
    figureEs: 'Enumeración',
    figureHy: 'Թվարկում',
    justificationEs: 'Presenta sucesivamente una serie de elementos.',
    justificationHy: 'Հաջորդաբար թվարկում է մի շարք առարկաներ։',
  },
  {
    id: 16,
    sentenceEs: 'Eres un libro abierto.',
    sentenceHy: 'Դու բաց գիրք ես։',
    figureEs: 'Metáfora',
    figureHy: 'Փոխաբերություն',
    justificationEs: 'Identifica a la persona con un libro abierto por su sinceridad.',
    justificationHy: 'Մարդուն նույնացնում է բաց գրքի հետ՝ անկեղծության պատճառով։',
  },
  {
    id: 17,
    sentenceEs: 'La luna vigilaba la ciudad.',
    sentenceHy: 'Լուսինը հսկում էր քաղաքը։',
    figureEs: 'Personificación',
    figureHy: 'Անձնավորում',
    justificationEs: 'Atribuye a la luna una acción humana: vigilar.',
    justificationHy: 'Լուսնին վերագրվում է մարդկային գործողություն՝ հսկել։',
  },
  {
    id: 18,
    sentenceEs: 'Tengo tanta hambre que podría comerme una montaña.',
    sentenceHy: 'Այնքան քաղցած եմ, որ կարող էի մի լեռ ուտել։',
    figureEs: 'Hipérbole',
    figureHy: 'Չափազանցություն',
    justificationEs: 'Exagera la sensación de hambre.',
    justificationHy: 'Չափազանցվում է քաղցի զգացողությունը։',
  },
  {
    id: 19,
    sentenceEs: 'Lo vi con mis propios ojos.',
    sentenceHy: 'Տեսա իմ սեփական աչքերով։',
    figureEs: 'Pleonasmo',
    figureHy: 'Բառային ավելորդություն',
    justificationEs: '«Con mis propios ojos» refuerza de forma redundante el verbo «ver».',
    justificationHy: '«Սեփական աչքերով» արտահայտությունը բառային ավելորդություն է «տեսնել» բայի հետ։',
  },
  {
    id: 20,
    sentenceEs: 'Unos reían mientras otros lloraban.',
    sentenceHy: 'Ոմանք ծիծաղում էին, մինչ մյուսները լալիս էին։',
    figureEs: 'Antítesis',
    figureHy: 'Հակադրություն',
    justificationEs: 'Contrapone dos acciones opuestas: reír y llorar.',
    justificationHy: 'Հակադրում է երկու հակառակ գործողություն՝ ծիծաղել և լալ։',
  },
];

// ================= PART I: 5. Simulacro de examen (15 MCQ) =================
export const SIMULACRO_QUIZ_15: QuizQuestion[] = [
  {
    id: 1,
    questionEs: '¿Qué género literario expresa principalmente sentimientos y emociones?',
    questionHy: 'Ո՞ր գրական ժանրն է հիմնականում արտահայտում զգացմունքներ։',
    options: [
      { key: 'A', textEs: 'Narrativa', textHy: 'Պատմողական' },
      { key: 'B', textEs: 'Teatro', textHy: 'Թատրոն / Դրամատիկական' },
      { key: 'C', textEs: 'Lírica', textHy: 'Քնարական' },
      { key: 'D', textEs: 'Texto informativo', textHy: 'Տեղեկատվական տեքստ' },
    ],
    correctKey: 'C',
    explanationEs: 'La lírica es el género literario dedicado a expresar sentimientos, emociones y pensamientos del yo poético.',
    explanationHy: 'Քնարական ժանրը նվիրված է քնարական հերոսի զգացմունքների, հույզերի և մտքերի արտահայտմանը։',
  },
  {
    id: 2,
    questionEs: '¿Qué caracteriza principalmente al género narrativo?',
    questionHy: 'Ո՞րն է պատմողական ժանրի հիմնական առանձնահատկությունը։',
    options: [
      { key: 'A', textEs: 'La presencia de un narrador', textHy: 'Պատմողի առկայությունը' },
      { key: 'B', textEs: 'La ausencia de personajes', textHy: 'Կերպարների բացակայությունը' },
      { key: 'C', textEs: 'El uso obligatorio de la rima', textHy: 'Հանգի պարտադիր օգտագործումը' },
      { key: 'D', textEs: 'Las acotaciones teatrales', textHy: 'Բեմական ցուցումները' },
    ],
    correctKey: 'A',
    explanationEs: 'En la narrativa siempre hay un narrador que cuenta los acontecimientos vividos por unos personajes.',
    explanationHy: 'Պատմողական ժանրում միշտ կա պատմող, որը ներկայացնում է կերպարների հետ տեղի ունեցող իրադարձությունները։',
  },
  {
    id: 3,
    questionEs: '¿Qué figura literaria aparece en «El viento cantaba»?',
    questionHy: 'Ի՞նչ գեղարվեստական միջոց է օգտագործված։',
    options: [
      { key: 'A', textEs: 'Hipérbole', textHy: 'Չափազանցություն' },
      { key: 'B', textEs: 'Personificación', textHy: 'Անձնավորում' },
      { key: 'C', textEs: 'Ironía', textHy: 'Հեգնանք' },
      { key: 'D', textEs: 'Hipérbaton', textHy: 'Շարադասության շրջում' },
    ],
    correctKey: 'B',
    explanationEs: 'Es una personificación porque se atribuye al viento una acción humana: cantar.',
    explanationHy: 'Սա անձնավորում է, քանի որ քամուն վերագրվում է մարդկային գործողություն՝ երգել։',
  },
  {
    id: 4,
    questionEs: '¿Qué es una acotación?',
    questionHy: 'Ի՞նչ է բեմական ցուցումը։',
    options: [
      { key: 'A', textEs: 'Una estrofa', textHy: 'Բանաստեղծական տուն' },
      { key: 'B', textEs: 'Un personaje principal', textHy: 'Գլխավոր հերոս' },
      { key: 'C', textEs: 'Una comparación', textHy: 'Համեմատություն' },
      { key: 'D', textEs: 'Una indicación para la representación teatral', textHy: 'Ցուցում թատերական ներկայացման համար' },
    ],
    correctKey: 'D',
    explanationEs: 'Las acotaciones indican movimientos, gestos, vestuario y detalles del escenario en el teatro.',
    explanationHy: 'Բեմական ցուցումները նշում են շարժումները, ժեստերը, հագուստը և բեմի մանրամասները թատրոնում։',
  },
  {
    id: 5,
    questionEs: '¿Qué caracteriza habitualmente a la literatura popular tradicional?',
    questionHy: 'Ի՞նչն է բնորոշ ավանդական ժողովրդական գրականությանը։',
    options: [
      { key: 'A', textEs: 'Siempre tiene un autor conocido', textHy: 'Միշտ ունի հայտնի հեղինակ' },
      { key: 'B', textEs: 'Solo se escribe en prosa', textHy: 'Գրվում է միայն արձակ' },
      { key: 'C', textEs: 'Se transmite oralmente y suele ser anónima', textHy: 'Փոխանցվում է բանավոր և սովորաբար անանուն է' },
      { key: 'D', textEs: 'No contiene figuras literarias', textHy: 'Չի պարունակում գեղարվեստական միջոցներ' },
    ],
    correctKey: 'C',
    explanationEs: 'La literatura popular nace de la tradición colectiva, suele ser anónima y se transmite oralmente.',
    explanationHy: 'Ժողովրդական գրականությունը ծագում է հավաքական ավանդույթից, սովորաբար անանուն է և փոխանցվում է բանավոր։',
  },
  {
    id: 6,
    questionEs: '¿Qué figura aparece en «Tengo millones de cosas que hacer»?',
    questionHy: 'Ի՞նչ գեղարվեստական միջոց է օգտագործված։',
    options: [
      { key: 'A', textEs: 'Hipérbole', textHy: 'Չափազանցություն' },
      { key: 'B', textEs: 'Anáfora', textHy: 'Սկզբնաբառի կրկնություն' },
      { key: 'C', textEs: 'Símil', textHy: 'Համեմատություն' },
      { key: 'D', textEs: 'Aliteración', textHy: 'Հնչյունների կրկնություն' },
    ],
    correctKey: 'A',
    explanationEs: 'Es una hipérbole porque exagera la cantidad de tareas.',
    explanationHy: 'Սա չափազանցություն է, քանի որ չափազանցվում է գործերի քանակը։',
  },
  {
    id: 7,
    questionEs: '¿Qué es una estrofa?',
    questionHy: 'Ի՞նչ է բանաստեղծական տունը։',
    options: [
      { key: 'A', textEs: 'Un diálogo', textHy: 'Երկխոսություն' },
      { key: 'B', textEs: 'Un conjunto de versos', textHy: 'Չափածո տողերի ամբողջություն' },
      { key: 'C', textEs: 'Una novela', textHy: 'Վեպ' },
      { key: 'D', textEs: 'Un personaje', textHy: 'Կերպար' },
    ],
    correctKey: 'B',
    explanationEs: 'Una estrofa es un grupo de versos que forman una unidad dentro de un poema.',
    explanationHy: 'Բանաստեղծական տունը տողերի խումբ է, որը միավոր է կազմում բանաստեղծության մեջ։',
  },
  {
    id: 8,
    questionEs: '¿Qué figura aparece en «Sus palabras eran música»?',
    questionHy: 'Ի՞նչ գեղարվեստական միջոց է օգտագործված։',
    options: [
      { key: 'A', textEs: 'Polisíndeton', textHy: 'Բազմաշաղկապություն' },
      { key: 'B', textEs: 'Pleonasmo', textHy: 'Բառային ավելորդություն' },
      { key: 'C', textEs: 'Ironía', textHy: 'Հեգնանք' },
      { key: 'D', textEs: 'Metáfora', textHy: 'Փոխաբերություն' },
    ],
    correctKey: 'D',
    explanationEs: 'Es una metáfora porque identifica directamente las palabras con la música sin usar «como».',
    explanationHy: 'Սա փոխաբերություն է, քանի որ խոսքերն ուղղակիորեն նույնացվում են երաժշտության հետ։',
  },
  {
    id: 9,
    questionEs: '¿Qué género literario está destinado a ser representado ante un público?',
    questionHy: 'Ո՞ր ժանրն է նախատեսված հանդիսատեսի առջև ներկայացվելու համար։',
    options: [
      { key: 'A', textEs: 'Lírica', textHy: 'Քնարական' },
      { key: 'B', textEs: 'Narrativa', textHy: 'Պատմողական' },
      { key: 'C', textEs: 'Teatro', textHy: 'Թատրոն / Դրամատիկական' },
      { key: 'D', textEs: 'Ensayo', textHy: 'Էսսե' },
    ],
    correctKey: 'C',
    explanationEs: 'El género teatral o dramático se escribe mediante diálogos y acotaciones para su representación en escena.',
    explanationHy: 'Դրամատիկական ժանրը գրվում է երկխոսություններով և բեմական ցուցումներով՝ բեմադրվելու համար։',
  },
  {
    id: 10,
    questionEs: '¿Qué narrador utiliza expresiones como «yo pensé» y «yo recuerdo»?',
    questionHy: 'Ո՞ր դեմքով է պատմում պատմողը։',
    options: [
      { key: 'A', textEs: 'Narrador en primera persona', textHy: 'Առաջին դեմքով պատմող' },
      { key: 'B', textEs: 'Narrador en tercera persona', textHy: 'Երրորդ դեմքով պատմող' },
      { key: 'C', textEs: 'Narrador en segunda persona', textHy: 'Երկրորդ դեմքով պատմող' },
      { key: 'D', textEs: 'No hay narrador', textHy: 'Պատմող չկա' },
    ],
    correctKey: 'A',
    explanationEs: 'El uso de «yo» y verbos en 1.ª persona indica un narrador en primera persona.',
    explanationHy: '«Ես» դերանվան և առաջին դեմքի բայերի օգտագործումը ցույց է տալիս առաջին դեմքով պատմող։',
  },
  {
    id: 11,
    questionEs: '¿Qué figura aparece en «Ni frío, ni calor, ni lluvia, ni viento»?',
    questionHy: 'Ի՞նչ գեղարվեստական միջոց է օգտագործված։',
    options: [
      { key: 'A', textEs: 'Asíndeton', textHy: 'Անշաղկապություն' },
      { key: 'B', textEs: 'Polisíndeton', textHy: 'Բազմաշաղկապություն' },
      { key: 'C', textEs: 'Metáfora', textHy: 'Փոխաբերություն' },
      { key: 'D', textEs: 'Sinestesia', textHy: 'Զգայությունների միաձուլում' },
    ],
    correctKey: 'B',
    explanationEs: 'Es un polisíndeton porque repite intencionadamente la conjunción «ni».',
    explanationHy: 'Սա բազմաշաղկապություն է, քանի որ դիտավորյալ կրկնվում է «ni» շաղկապը։',
  },
  {
    id: 12,
    questionEs: '¿Qué es el lenguaje literario?',
    questionHy: 'Ի՞նչ է գեղարվեստական լեզուն։',
    options: [
      { key: 'A', textEs: 'Un lenguaje exclusivamente científico', textHy: 'Բացառապես գիտական լեզու' },
      { key: 'B', textEs: 'Un lenguaje sin emociones', textHy: 'Առանց զգացմունքների լեզու' },
      { key: 'C', textEs: 'Un lenguaje que solo aparece en los poemas', textHy: 'Լեզու, որը հանդիպում է միայն բանաստեղծություններում' },
      { key: 'D', textEs: 'Un lenguaje expresivo con intención artística', textHy: 'Արտահայտիչ լեզու՝ գեղարվեստական նպատակով' },
    ],
    correctKey: 'D',
    explanationEs: 'El lenguaje literario busca belleza y expresividad mediante recursos estilísticos en prosa, verso o teatro.',
    explanationHy: 'Գեղարվեստական լեզուն ձգտում է գեղեցկության և արտահայտչականության արձակում, չափածոյում և դրամատուրգիայում։',
  },
  {
    id: 13,
    questionEs: '¿Qué figura aparece en «Rápido como el viento»?',
    questionHy: 'Ի՞նչ գեղարվեստական միջոց է օգտագործված։',
    options: [
      { key: 'A', textEs: 'Metáfora', textHy: 'Փոխաբերություն' },
      { key: 'B', textEs: 'Ironía', textHy: 'Հեգնանք' },
      { key: 'C', textEs: 'Símil', textHy: 'Համեմատություն' },
      { key: 'D', textEs: 'Pleonasmo', textHy: 'Բառային ավելորդություն' },
    ],
    correctKey: 'C',
    explanationEs: 'Es un símil o comparación porque relaciona dos elementos explícitamente mediante «como».',
    explanationHy: 'Սա համեմատություն է, քանի որ երկու տարր համեմատվում են «como» (ինչպես) բառով։',
  },
  {
    id: 14,
    questionEs: '¿Qué figura altera el orden habitual de las palabras?',
    questionHy: 'Ո՞ր միջոցն է փոխում բառերի սովորական դասավորությունը։',
    options: [
      { key: 'A', textEs: 'Hipérbaton', textHy: 'Շարադասության շրջում' },
      { key: 'B', textEs: 'Hipérbole', textHy: 'Չափազանցություն' },
      { key: 'C', textEs: 'Anáfora', textHy: 'Սկզբնաբառի կրկնություն' },
      { key: 'D', textEs: 'Antítesis', textHy: 'Հակադրություն' },
    ],
    correctKey: 'A',
    explanationEs: 'El hipérbaton invierte o altera el orden gramatical habitual de los elementos en la oración.',
    explanationHy: 'Շարադասության շրջումը փոխում է բառերի սովորական քերականական դասավորությունը։',
  },
  {
    id: 15,
    questionEs: '¿Qué función del lenguaje predomina habitualmente en un texto literario?',
    questionHy: 'Լեզվի ո՞ր գործառույթն է սովորաբար գերակշռում գրական տեքստում։',
    options: [
      { key: 'A', textEs: 'Fática', textHy: 'Հաղորդակցական կապի պահպանման' },
      { key: 'B', textEs: 'Poética', textHy: 'Գեղագիտական' },
      { key: 'C', textEs: 'Metalingüística', textHy: 'Մետալեզվական' },
      { key: 'D', textEs: 'Apelativa', textHy: 'Ներգործական' },
    ],
    correctKey: 'B',
    explanationEs: 'En los textos literarios predomina la función poética porque la atención se centra en la forma estética del mensaje.',
    explanationHy: 'Գրական տեքստերում գերակշռում է գեղագիտական գործառույթը, քանի որ ուշադրությունը կենտրոնանում է խոսքի ձևի գեղեցկության վրա։',
  },
];
