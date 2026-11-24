import { BilingualLine, FigurePracticeItem, SimpleQA } from './types';

export interface ResumenFigureCard {
  number: number;
  nameEs: string;
  nameHy: string;
  defEs: string;
  defHy: string;
  examples: { es: string; hy: string }[];
  extraLineEs?: string;
  extraLineHy?: string;
  questionEs: string;
  questionHy: string;
  answerEs: string;
  answerHy: string;
}

export interface PhotoExamFigureRow {
  sentenceEs: string;
  sentenceHy: string;
  figureEs: string;
  figureHy: string;
  justificationEs: string;
  justificationHy: string;
}

export interface ChuletaRow {
  cueEs: string;
  cueHy: string;
  figureEs: string;
  figureHy: string;
}

export interface NarrativeAnalysisQA {
  number: number;
  questionEs: string;
  questionHy: string;
  answerEs: string;
  answerHy: string;
  verbTable?: { imperfecto: string; indefinido: string }[];
  verbNoteEs?: string;
  verbNoteHy?: string;
}

// 1. ¿Cómo hacer un resumen?
export const PASO1_QUESTIONS: { es: string; hy: string }[] = [
  { es: '¿De qué trata el texto?', hy: 'Ինչի՞ մասին է տեքստը։' },
  { es: '¿Quién es el protagonista?', hy: 'Ո՞վ է գլխավոր հերոսը։' },
  { es: '¿Dónde ocurren los hechos?', hy: 'Որտե՞ղ են տեղի ունենում դեպքերը։' },
  { es: '¿Qué sucede al principio?', hy: 'Ի՞նչ է տեղի ունենում սկզբում։' },
  { es: '¿Cuál es el acontecimiento principal?', hy: 'Ո՞րն է գլխավոր իրադարձությունը։' },
  { es: '¿Cómo termina la historia?', hy: 'Ինչպե՞ս է ավարտվում պատմությունը։' },
];

export const PASO3_EXCLUDE: { es: string; hy: string }[] = [
  { es: 'Descripciones innecesarias', hy: 'Անհրաժեշտ չլինող նկարագրություններ։' },
  { es: 'Diálogos completos', hy: 'Ամբողջական երկխոսություններ։' },
  { es: 'Repeticiones', hy: 'Կրկնություններ։' },
  { es: 'Detalles sin importancia', hy: 'Ոչ կարևոր մանրամասներ։' },
  { es: 'Opiniones personales', hy: 'Անձնական կարծիքներ։' },
];

export const PASO5_PARTS: { titleEs: string; titleHy: string; questionEs: string; questionHy: string }[] = [
  {
    titleEs: 'Inicio',
    titleHy: 'Սկիզբ',
    questionEs: '¿Quién aparece y qué sucede al principio?',
    questionHy: 'Ո՞վ է հայտնվում և ի՞նչ է տեղի ունենում սկզբում։',
  },
  {
    titleEs: 'Desarrollo',
    titleHy: 'Զարգացում',
    questionEs: '¿Qué problema o acontecimiento importante ocurre?',
    questionHy: 'Ի՞նչ խնդիր կամ կարևոր իրադարձություն է տեղի ունենում։',
  },
  {
    titleEs: 'Desenlace',
    titleHy: 'Ավարտ',
    questionEs: '¿Cómo se resuelve la situación?',
    questionHy: 'Ինչպե՞ս է լուծվում իրավիճակը։',
  },
];

export const RESUMEN_USEFUL_EXPRESSIONS: { es: string; hy: string }[] = [
  { es: 'El texto trata de…', hy: 'Տեքստը պատմում է…' },
  { es: 'La historia cuenta…', hy: 'Պատմությունը պատմում է…' },
  { es: 'El protagonista descubre que…', hy: 'Գլխավոր հերոսը բացահայտում է, որ…' },
  { es: 'Al principio…', hy: 'Սկզբում…' },
  { es: 'Después…', hy: 'Այնուհետև…' },
  { es: 'Más tarde…', hy: 'Ավելի ուշ…' },
  { es: 'Sin embargo…', hy: 'Սակայն…' },
  { es: 'Por esta razón…', hy: 'Այդ պատճառով…' },
  { es: 'Finalmente…', hy: 'Վերջապես…' },
  { es: 'Al final de la historia…', hy: 'Պատմության վերջում…' },
];

// 2. Texto literario: El verdadero significado de la victoria
export const VICTORIA_TEXT_LINES: BilingualLine[] = [
  {
    es: 'Aquella mañana de noviembre, el sol despertaba lentamente sobre la ciudad. Los árboles se despedían de sus últimas hojas y el viento cantaba entre las ventanas de las casas. Recuerdo perfectamente aquel sábado, porque fue uno de esos días que cambian nuestra manera de entender la vida.',
    hy: 'Նոյեմբերի այդ առավոտյան արևը դանդաղ արթնանում էր քաղաքի վրա։ Ծառերը հրաժեշտ էին տալիս իրենց վերջին տերևներին, իսկ քամին երգում էր տների պատուհանների միջև։ Հիանալի հիշում եմ այդ շաբաթ օրը, քանի որ այն այնպիսի օրերից էր, որոնք փոխում են կյանքը հասկանալու մեր կերպը։',
  },
  {
    es: 'Mi amigo Daniel y yo llevábamos varias semanas preparándonos para un importante torneo de fútbol. Habíamos entrenado durante muchas horas y soñábamos con levantar la copa junto a nuestros compañeros. Para nosotros, aquel partido representaba mucho más que una simple competición.',
    hy: 'Ընկերս՝ Դանիելը, և ես մի քանի շաբաթ պատրաստվում էինք ֆուտբոլի կարևոր մրցաշարի։ Շատ ժամեր էինք մարզվել և երազում էինք թիմակիցների հետ բարձրացնել գավաթը։ Մեզ համար այդ խաղը շատ ավելին էր, քան պարզ մրցում։',
  },
  {
    es: 'Cuando llegamos al estadio, descubrimos que Alejandro, uno de nuestros mejores jugadores, estaba sentado en un banco, con la mirada perdida. Normalmente era alegre y hablador, pero aquella mañana parecía otra persona. Una nube de tristeza cubría su rostro.',
    hy: 'Երբ հասանք մարզադաշտ, տեսանք, որ Ալեխանդրոն՝ մեր լավագույն խաղացողներից մեկը, նստած էր նստարանին՝ մտախոհ հայացքով։ Սովորաբար նա ուրախ ու շփվող էր, բայց այդ առավոտ ասես ուրիշ մարդ լիներ։ Տխրության ամպը ծածկել էր նրա դեմքը։',
    highlight: 'Una nube de tristeza cubría su rostro.',
  },
  {
    es: 'Me acerqué a él y le pregunté qué le ocurría. Después de unos segundos de silencio, me explicó que su abuelo, quien siempre asistía a sus partidos, no había podido acompañarlo porque estaba enfermo.',
    hy: 'Ես մոտեցա նրան և հարցրի, թե ինչ է պատահել։ Մի քանի վայրկյան լռելուց հետո նա բացատրեց, որ իր պապիկը, որը միշտ ներկա էր լինում իր խաղերին, չէր կարողացել գալ, որովհետև հիվանդ էր։',
  },
  {
    es: 'Daniel y yo comprendimos inmediatamente que nuestro compañero necesitaba apoyo. Decidimos reunir al equipo y dedicarle el partido a su abuelo. Alejandro sonrió por primera vez aquella mañana.',
    hy: 'Դանիելն ու ես անմիջապես հասկացանք, որ մեր ընկերը աջակցության կարիք ունի։ Որոշեցինք հավաքել թիմը և խաղը նվիրել նրա պապիկին։ Ալեխանդրոն այդ առավոտ առաջին անգամ ժպտաց։',
  },
  {
    es: 'El encuentro fue complicado. Durante la primera parte, nuestros adversarios consiguieron marcar dos goles. Sin embargo, ninguno de nosotros perdió la esperanza. Corrimos, luchamos y nos ayudamos hasta el último minuto. Finalmente, conseguimos empatar el partido, aunque no logramos ganar el torneo.',
    hy: 'Խաղը բարդ էր։ Առաջին խաղակեսում մեր մրցակիցները կարողացան երկու գոլ խփել։ Սակայն մեզանից ոչ ոք չկորցրեց հույսը։ Վազեցինք, պայքարեցինք և օգնեցինք միմյանց մինչև վերջին րոպեն։ Վերջապես կարողացանք ոչ-ոքի խաղալ, թեև չհաղթեցինք մրցաշարում։',
  },
  {
    es: 'Cuando el árbitro anunció el final, esperaba encontrar a Alejandro decepcionado. Para mi sorpresa, estaba sonriendo. Nos abrazó y nos dio las gracias por haber estado a su lado.',
    hy: 'Երբ մրցավարն ազդարարեց ավարտը, ես սպասում էի Ալեխանդրոյին տեսնել հիասթափված։ Ի զարմանս ինձ՝ նա ժպտում էր։ Նա գրկեց մեզ և շնորհակալություն հայտնեց իր կողքին լինելու համար։',
  },
  {
    es: 'En aquel instante comprendí que la amistad era un puente capaz de unir nuestros corazones, incluso en los momentos más difíciles.',
    hy: 'Այդ պահին ես հասկացա, որ ընկերությունը կամուրջ է, որը կարող է միավորել մեր սրտերը նույնիսկ ամենադժվար պահերին։',
    highlight: 'la amistad era un puente capaz de unir nuestros corazones',
  },
  {
    es: 'Regresé a casa sin una medalla, pero con una enseñanza que jamás olvidaría: algunas victorias no aparecen en los marcadores, sino en los recuerdos que guardamos durante toda la vida.',
    hy: 'Ես տուն վերադարձա առանց մեդալի, բայց մի դասով, որը երբեք չէի մոռանա. որոշ հաղթանակներ չեն երևում հաշվի ցուցատախտակներին, այլ ապրում են այն հիշողություններում, որոնք պահում ենք ամբողջ կյանքում։',
  },
];

export const VICTORIA_VOCABULARY: { es: string; hy: string }[] = [
  { es: 'Despedirse', hy: 'Հրաժեշտ տալ' },
  { es: 'El torneo', hy: 'Մրցաշար' },
  { es: 'Levantar la copa', hy: 'Բարձրացնել գավաթը' },
  { es: 'La competición', hy: 'Մրցում' },
  { es: 'La mirada perdida', hy: 'Մտախոհ հայացք' },
  { es: 'El rostro', hy: 'Դեմք' },
  { es: 'El apoyo', hy: 'Աջակցություն' },
  { es: 'Dedicar', hy: 'Նվիրել' },
  { es: 'El encuentro', hy: 'Հանդիպում, խաղ' },
  { es: 'El adversario', hy: 'Մրցակից' },
  { es: 'Perder la esperanza', hy: 'Կորցնել հույսը' },
  { es: 'Empatar', hy: 'Ոչ-ոքի խաղալ' },
  { es: 'Lograr', hy: 'Հաջողել, կարողանալ' },
  { es: 'El árbitro', hy: 'Մրցավար' },
  { es: 'Decepcionado', hy: 'Հիասթափված' },
  { es: 'La enseñanza', hy: 'Դաս, խրատ' },
  { es: 'El marcador', hy: 'Հաշիվը ցույց տվող ցուցատախտակ' },
];

// 3. Aprendemos a resumir el texto paso a paso
export const STEP_BY_STEP_RESUMEN_QA: SimpleQA[] = [
  {
    questionEs: 'Pregunta 1. ¿De qué trata el texto?',
    questionHy: 'Ինչի՞ մասին է տեքստը։',
    answerEs: 'El texto trata de la amistad, el compañerismo y la importancia de apoyar a los demás.',
    answerHy: 'Տեքստը ընկերության, թիմային համերաշխության և ուրիշներին աջակցելու կարևորության մասին է։',
  },
  {
    questionEs: 'Pregunta 2. ¿Quiénes son los personajes principales?',
    questionHy: 'Ովքե՞ր են գլխավոր հերոսները։',
    answerEs: 'El narrador, Daniel y Alejandro.',
    answerHy: 'Պատմողը, Դանիելը և Ալեխանդրոն։',
  },
  {
    questionEs: 'Pregunta 3. ¿Qué sucede al principio de la historia?',
    questionHy: 'Ի՞նչ է տեղի ունենում պատմության սկզբում։',
    answerEs: 'El narrador y Daniel llegan al estadio para participar en un torneo de fútbol.',
    answerHy: 'Պատմողը և Դանիելը ժամանում են մարզադաշտ՝ ֆուտբոլային մրցաշարին մասնակցելու համար։',
  },
  {
    questionEs: 'Pregunta 4. ¿Cuál es el problema principal?',
    questionHy: 'Ո՞րն է հիմնական խնդիրը։',
    answerEs: 'Alejandro está triste porque su abuelo está enfermo y no puede asistir al partido.',
    answerHy: 'Ալեխանդրոն տխուր է, որովհետև նրա պապիկը հիվանդ է և չի կարող ներկա լինել խաղին։',
  },
  {
    questionEs: 'Pregunta 5. ¿Qué hacen sus compañeros?',
    questionHy: 'Ի՞նչ են անում նրա թիմակիցները։',
    answerEs: 'Deciden apoyarlo y dedicar el partido a su abuelo.',
    answerHy: 'Նրանք որոշում են աջակցել նրան և խաղը նվիրել նրա պապիկին։',
  },
  {
    questionEs: 'Pregunta 6. ¿Cómo termina el partido?',
    questionHy: 'Ինչպե՞ս է ավարտվում խաղը։',
    answerEs: 'El equipo consigue empatar, pero no gana el torneo.',
    answerHy: 'Թիմը կարողանում է ոչ-ոքի խաղալ, սակայն չի հաղթում մրցաշարում։',
  },
  {
    questionEs: 'Pregunta 7. ¿Qué aprende el narrador?',
    questionHy: 'Ի՞նչ է սովորում պատմողը։',
    answerEs: 'Aprende que la amistad y el apoyo son más importantes que ganar una competición.',
    answerHy: 'Նա հասկանում է, որ ընկերությունն ու աջակցությունն ավելի կարևոր են, քան մրցաշարում հաղթելը։',
  },
];

export const RESUMEN_COMPLETO = {
  es: 'El texto cuenta la historia de un grupo de amigos que participa en un torneo de fútbol. Antes del partido, descubren que Alejandro está triste porque su abuelo está enfermo. Sus compañeros deciden apoyarlo y dedicarle el partido a su abuelo. Aunque no consiguen ganar el torneo, el narrador comprende que la amistad y el compañerismo son más importantes que la victoria.',
  hy: 'Տեքստը պատմում է մի խումբ ընկերների մասին, որոնք մասնակցում են ֆուտբոլային մրցաշարի։ Խաղից առաջ նրանք հասկանում են, որ Ալեխանդրոն տխուր է, քանի որ նրա պապիկը հիվանդ է։ Թիմակիցները որոշում են աջակցել նրան և խաղը նվիրել նրա պապիկին։ Չնայած նրանք չեն հաղթում մրցաշարում, պատմողը հասկանում է, որ ընկերությունն ու թիմային համերաշխությունն ավելի կարևոր են, քան հաղթանակը։',
};

// 4. Preguntas del examen A-F
export const CULTA_VS_POPULAR_ROWS: { cultaEs: string; cultaHy: string; popularEs: string; popularHy: string }[] = [
  {
    cultaEs: 'Normalmente tiene un autor conocido.',
    cultaHy: 'Սովորաբար ունի հայտնի հեղինակ։',
    popularEs: 'Muchas veces es anónima.',
    popularHy: 'Հաճախ անանուն է։',
  },
  {
    cultaEs: 'Se transmite principalmente por escrito.',
    cultaHy: 'Փոխանցվում է հիմնականում գրավոր ձևով։',
    popularEs: 'Tradicionalmente se transmite de forma oral.',
    popularHy: 'Ավանդաբար փոխանցվում է բանավոր ձևով։',
  },
  {
    cultaEs: 'Utiliza un lenguaje elaborado.',
    cultaHy: 'Օգտագործում է մշակված լեզու։',
    popularEs: 'Suele utilizar un lenguaje más sencillo.',
    popularHy: 'Սովորաբար օգտագործում է ավելի պարզ լեզու։',
  },
  {
    cultaEs: 'Tiene una creación individual.',
    cultaHy: 'Ունի անհատական ստեղծագործական բնույթ։',
    popularEs: 'Puede tener una creación y transmisión colectivas.',
    popularHy: 'Կարող է ունենալ հավաքական ստեղծում և փոխանցում։',
  },
  {
    cultaEs: 'Novelas, poemas de autor, obras teatrales.',
    cultaHy: 'Վեպեր, հեղինակային բանաստեղծություններ, թատերգություններ։',
    popularEs: 'Leyendas, refranes, cuentos tradicionales.',
    popularHy: 'Ավանդազրույցներ, առածներ, ժողովրդական հեքիաթներ։',
  },
];

export const THREE_GENRES_CARDS = [
  {
    titleEs: 'Género narrativo',
    titleHy: 'Պատմողական ժանր',
    descEs: 'Cuenta una historia mediante un narrador, unos personajes y unos acontecimientos.',
    descHy: 'Պատմում է պատմություն՝ պատմողի, կերպարների և իրադարձությունների միջոցով։',
    exEs: 'Ejemplo: un cuento o una novela.',
    exHy: 'Օրինակ՝ պատմվածք կամ վեպ։',
  },
  {
    titleEs: 'Género lírico',
    titleHy: 'Քնարական ժանր',
    descEs: 'Expresa sentimientos, emociones y pensamientos, normalmente mediante versos.',
    descHy: 'Արտահայտում է զգացմունքներ, հույզեր և մտքեր, սովորաբար բանաստեղծական տողերով։',
    exEs: 'Ejemplo: un poema.',
    exHy: 'Օրինակ՝ բանաստեղծություն։',
  },
  {
    titleEs: 'Género dramático',
    titleHy: 'Դրամատիկական ժանր',
    descEs: 'Presenta una historia mediante los diálogos y las acciones de los personajes. Está destinado principalmente a la representación teatral.',
    descHy: 'Ներկայացնում է պատմություն՝ կերպարների երկխոսությունների և գործողությունների միջոցով։ Հիմնականում նախատեսված է բեմական ներկայացման համար։',
    exEs: 'Ejemplo: una obra de teatro.',
    exHy: 'Օրինակ՝ թատերական պիես։',
  },
];

// 5. Figuras literarias (11)
export const RESUMEN_FIGURES_11: ResumenFigureCard[] = [
  {
    number: 1,
    nameEs: 'Metáfora',
    nameHy: 'Փոխաբերություն',
    defEs: 'Consiste en identificar una realidad con otra por la semejanza que existe entre ellas.',
    defHy: 'Մի երևույթը ներկայացվում է մեկ այլ երևույթի միջոցով՝ նրանց միջև եղած նմանության հիման վրա։',
    examples: [
      { es: 'Tus ojos son dos estrellas.', hy: 'Քո աչքերը երկու աստղ են։' },
      { es: 'La vida es un viaje.', hy: 'Կյանքը ճանապարհորդություն է։' },
      { es: 'Su corazón es de oro.', hy: 'Նրա սիրտը ոսկուց է։' },
    ],
    questionEs: '¿Qué figura literaria aparece en «Sus ojos eran dos luceros»?',
    questionHy: 'Ո՞ր գեղարվեստական արտահայտչամիջոցն է հանդիպում «Sus ojos eran dos luceros» նախադասության մեջ։',
    answerEs: 'Metáfora, porque identifica los ojos con unas luces brillantes.',
    answerHy: 'Փոխաբերություն, քանի որ աչքերը նույնացվում են պայծառ լույսերի (աստղերի) հետ։',
  },
  {
    number: 2,
    nameEs: 'Comparación o símil',
    nameHy: 'Համեմատություն',
    defEs: 'Consiste en comparar dos elementos mediante palabras como «como», «parece» o «igual que».',
    defHy: 'Երկու երևույթների համեմատություն՝ «ինչպես», «նման» բառերի միջոցով։',
    examples: [
      { es: 'Corre como el viento.', hy: 'Նա վազում է քամու պես։' },
      { es: 'Sus ojos brillan como las estrellas.', hy: 'Նրա աչքերը փայլում են աստղերի պես։' },
      { es: 'Es fuerte como un león.', hy: 'Նա առյուծի պես ուժեղ է։' },
    ],
    questionEs: '¿Qué figura literaria aparece en «El niño corría como una flecha»?',
    questionHy: 'Ո՞ր գեղարվեստական արտահայտչամիջոցն է հանդիպում «El niño corría como una flecha» նախադասության մեջ։',
    answerEs: 'Comparación, porque compara la velocidad del niño con la de una flecha utilizando «como».',
    answerHy: 'Համեմատություն, քանի որ երեխայի արագությունը համեմատվում է նետի արագության հետ՝ «como» բառով։',
  },
  {
    number: 3,
    nameEs: 'Personificación',
    nameHy: 'Անձնավորում',
    defEs: 'Consiste en atribuir cualidades o acciones humanas a animales, objetos o elementos de la naturaleza.',
    defHy: 'Մարդկային հատկանիշներ կամ գործողություններ վերագրել կենդանիներին, առարկաներին կամ բնության երևույթներին։',
    examples: [
      { es: 'El sol sonreía.', hy: 'Արևը ժպտում էր։' },
      { es: 'El viento cantaba.', hy: 'Քամին երգում էր։' },
      { es: 'Las flores bailaban.', hy: 'Ծաղիկները պարում էին։' },
    ],
    questionEs: '¿Qué figura literaria aparece en «La luna nos saludó»?',
    questionHy: 'Ո՞ր գեղարվեստական արտահայտչամիջոցն է հանդիպում «La luna nos saludó» նախադասության մեջ։',
    answerEs: 'Personificación, porque saludar es una acción humana que se atribuye a la luna.',
    answerHy: 'Անձնավորում, քանի որ ողջունելը մարդկային գործողություն է, որը վերագրվում է լուսնին։',
  },
  {
    number: 4,
    nameEs: 'Hipérbole',
    nameHy: 'Չափազանցություն',
    defEs: 'Consiste en exagerar una realidad para destacar una idea o un sentimiento.',
    defHy: 'Իրականության չափազանցում՝ որևէ գաղափար կամ զգացմունք ընդգծելու համար։',
    examples: [
      { es: 'Te he llamado mil veces.', hy: 'Ես քեզ հազար անգամ զանգահարել եմ։' },
      { es: 'Me muero de hambre.', hy: 'Սովից մեռնում եմ։' },
      { es: 'Tengo un millón de cosas que hacer.', hy: 'Միլիոն գործ ունեմ անելու։' },
    ],
    questionEs: '¿Qué figura literaria aparece en «He esperado una eternidad»?',
    questionHy: 'Ո՞ր գեղարվեստական արտահայտչամիջոցն է հանդիպում «He esperado una eternidad» նախադասության մեջ։',
    answerEs: 'Hipérbole, porque exagera el tiempo de espera.',
    answerHy: 'Չափազանցություն, քանի որ չափազանցվում է սպասելու ժամանակը։',
  },
  {
    number: 5,
    nameEs: 'Anáfora',
    nameHy: 'Կրկնություն',
    defEs: 'Consiste en repetir una o varias palabras al principio de varios versos o enunciados.',
    defHy: 'Բառերի կրկնություն մի քանի տողերի կամ արտահայտությունների սկզբում։',
    examples: [
      {
        es: 'Quiero viajar,\nquiero aprender,\nquiero descubrir el mundo.',
        hy: 'Ուզում եմ ճանապարհորդել, ուզում եմ սովորել, ուզում եմ բացահայտել աշխարհը։',
      },
    ],
    questionEs: '¿Qué palabra se repite y qué figura literaria es?',
    questionHy: 'Ո՞ր բառն է կրկնվում և ո՞ր գեղարվեստական արտահայտչամիջոցն է սա։',
    answerEs: 'Se repite «quiero» al principio de cada verso. Es una anáfora.',
    answerHy: 'Յուրաքանչյուր տողի սկզբում կրկնվում է «quiero» բառը։ Սա անաֆորա (կրկնություն) է։',
  },
  {
    number: 6,
    nameEs: 'Polisíndeton',
    nameHy: 'Բազմաշաղկապություն',
    defEs: 'Consiste en repetir conjunciones más veces de las necesarias.',
    defHy: 'Շաղկապների բազմակի կրկնություն։',
    examples: [{ es: 'Y corre, y salta, y canta, y ríe.', hy: 'Եվ վազում է, և ցատկում է, և երգում է, և ծիծաղում է։' }],
    questionEs: '¿Por qué es un polisíndeton?',
    questionHy: 'Ինչո՞ւ է սա բազմաշաղկապություն (polisíndeton)։',
    answerEs: 'Porque se repite innecesariamente la conjunción «y».',
    answerHy: 'Որովհետև ավելորդ անգամ կրկնվում է «y» շաղկապը։',
  },
  {
    number: 7,
    nameEs: 'Hipérbaton',
    nameHy: 'Շարադասության շրջում',
    defEs: 'Consiste en alterar el orden habitual de las palabras de una oración.',
    defHy: 'Նախադասության բառերի սովորական դասավորության փոփոխություն։',
    examples: [
      { es: 'Orden normal: Las flores crecían en el jardín.', hy: 'Սովորական շարադասություն. Ծաղիկները աճում էին այգում։' },
      { es: 'Hipérbaton: En el jardín crecían las flores.', hy: 'Շրջված շարադասություն. Այգում էին աճում ծաղիկները։' },
    ],
    questionEs: '¿Qué figura aparece en «De verdes hojas se cubrió el árbol»?',
    questionHy: 'Ո՞ր արտահայտչամիջոցն է հանդիպում «De verdes hojas se cubrió el árbol» նախադասության մեջ։',
    answerEs: 'Hipérbaton, porque se ha alterado el orden habitual de las palabras. Orden habitual: «El árbol se cubrió de verdes hojas».',
    answerHy: 'Շարադասության շրջում (hipérbaton), քանի որ փոխվել է բառերի սովորական հերթականությունը։ Սովորական շարադասությունը՝ «El árbol se cubrió de verdes hojas»։',
  },
  {
    number: 8,
    nameEs: 'Ironía',
    nameHy: 'Հեգնանք',
    defEs: 'Consiste en expresar algo dando a entender lo contrario, generalmente con intención humorística o crítica.',
    defHy: 'Ասել մի բան՝ իրականում նկատի ունենալով հակառակը։',
    examples: [
      {
        es: 'Una persona llega una hora tarde y su amigo le dice: «¡Qué puntual eres!»',
        hy: 'Մեկը մեկ ժամ ուշանում է, իսկ ընկերն ասում է. «Ի՜նչ ճշտապահ ես»։',
      },
    ],
    questionEs: '¿Por qué es una ironía?',
    questionHy: 'Ինչո՞ւ է սա հեգնանք (ironía)։',
    answerEs: 'Porque dice que la persona es puntual cuando en realidad ha llegado tarde.',
    answerHy: 'Որովհետև ասում է, որ մարդը ճշտապահ է, մինչդեռ իրականում նա ուշացել է։',
  },
  {
    number: 9,
    nameEs: 'Aliteración',
    nameHy: 'Հնչյունների կրկնություն',
    defEs: 'Consiste en repetir uno o varios sonidos para crear un efecto expresivo.',
    defHy: 'Միևնույն հնչյունների կրկնություն՝ հատուկ հնչողություն ստեղծելու նպատակով։',
    examples: [{ es: 'Tres tristes tigres tragaban trigo.', hy: 'Երեք տխուր վագրեր ցորեն էին կուլ տալիս (կրկնվում են «t» և «r» հնչյունները)։' }],
    questionEs: '¿Qué figura literaria aparece?',
    questionHy: 'Ո՞ր գեղարվեստական արտահայտչամիջոցն է հանդիպում։',
    answerEs: 'Aliteración, porque se repiten los sonidos «t» y «r».',
    answerHy: 'Բաղաձայնույթ (aliteración), քանի որ կրկնվում են «t» և «r» հնչյունները։',
  },
  {
    number: 10,
    nameEs: 'Antítesis',
    nameHy: 'Հակադրություն',
    defEs: 'Consiste en contraponer palabras o ideas de significado contrario.',
    defHy: 'Հակառակ իմաստ ունեցող բառերի կամ գաղափարների հակադրություն։',
    examples: [{ es: 'Unos ríen y otros lloran.', hy: 'Ոմանք ծիծաղում են, մյուսները՝ լաց լինում։' }],
    questionEs: '¿Qué figura literaria aparece en «Ayer lloraba y hoy sonrío»?',
    questionHy: 'Ո՞ր արտահայտչամիջոցն է հանդիպում «Ayer lloraba y hoy sonrío» նախադասության մեջ։',
    answerEs: 'Antítesis, porque se contraponen dos acciones de significado opuesto.',
    answerHy: 'Հակադրություն (antítesis), քանի որ հակադրվում են հակառակ իմաստ ունեցող երկու գործողություններ։',
  },
  {
    number: 11,
    nameEs: 'Paradoja',
    nameHy: 'Պարադոքս',
    defEs: 'Consiste en unir ideas aparentemente contradictorias que pueden expresar un sentido profundo.',
    defHy: 'Առաջին հայացքից իրար հակասող գաղափարների միավորում։',
    examples: [{ es: 'Cuanto más aprendo, menos sé.', hy: 'Որքան շատ եմ սովորում, այնքան ավելի քիչ գիտեմ։' }],
    questionEs: '¿Qué figura literaria aparece?',
    questionHy: 'Ո՞ր գեղարվեստական արտահայտչամիջոցն է հանդիպում։',
    answerEs: 'Paradoja, porque presenta una contradicción aparente que invita a reflexionar.',
    answerHy: 'Պարադոքս, քանի որ ներկայացնում է թվացյալ հակասություն, որը ստիպում է խորհել։',
  },
];

// 6. Respuestas de las figuras literarias del examen (6 frases)
export const PHOTO_EXAM_FIGURES: PhotoExamFigureRow[] = [
  {
    sentenceEs: 'La alarma le gritó que se había terminado el descanso.',
    sentenceHy: 'Զարթուցիչը գոռաց նրա վրա, որ հանգիստն ավարտվել է։',
    figureEs: 'Personificación',
    figureHy: 'Անձնավորում',
    justificationEs: 'Se atribuye a la alarma la acción humana de gritar.',
    justificationHy: 'Զարթուցիչին վերագրվում է մարդկային գոռալու գործողությունը։',
  },
  {
    sentenceEs: 'Salió volando por los aires.',
    sentenceHy: 'Նա օդով թռչելով դուրս եկավ։',
    figureEs: 'Hipérbole (si se usa de forma exagerada)',
    figureHy: 'Չափազանցություն (եթե օգտագործվում է չափազանցված իմաստով)',
    justificationEs: 'Exagera la manera o la velocidad con la que salió.',
    justificationHy: 'Չափազանցնում է նրա դուրս գալու կերպը կամ արագությունը։',
  },
  {
    sentenceEs: 'Ese chiste que me contó Laura me hizo morir de la risa.',
    sentenceHy: 'Այդ կատակը, որ Լաուրան պատմեց ինձ, ինձ ծիծաղից մեռցրեց։',
    figureEs: 'Hipérbole',
    figureHy: 'Չափազանցություն',
    justificationEs: 'Exagera la intensidad de la risa.',
    justificationHy: 'Չափազանցնում է ծիծաղի ուժգնությունը։',
  },
  {
    sentenceEs: 'Ni había sol, ni luna, ni noche, ni día.',
    sentenceHy: 'Ո՛չ արև կար, ո՛չ լուսին, ո՛չ գիշեր, ո՛չ ցերեկ։',
    figureEs: 'Polisíndeton',
    figureHy: 'Բազմաշաղկապություն',
    justificationEs: 'Se repite la conjunción «ni».',
    justificationHy: 'Կրկնվում է «ni» շաղկապը։',
  },
  {
    sentenceEs: 'Soy tan inteligente que a veces no entiendo una palabra de lo que digo.',
    sentenceHy: 'Այնքան խելացի եմ, որ երբեմն իմ ասածից ոչ մի բառ չեմ հասկանում։',
    figureEs: 'Paradoja (también tiene un tono irónico)',
    figureHy: 'Պարադոքս (ունի նաև հեգնական երանգ)',
    justificationEs: 'Une ideas aparentemente contradictorias.',
    justificationHy: 'Միավորում է առաջին հայացքից իրար հակասող գաղափարներ։',
  },
  {
    sentenceEs: 'Volverán las oscuras golondrinas en tu balcón sus nidos a colgar.',
    sentenceHy: 'Կվերադառնան մուգ ծիծեռնակները՝ քո պատշգամբում իրենց բները կախելու։',
    figureEs: 'Hipérbaton',
    figureHy: 'Շարադասության շրջում',
    justificationEs: 'Se altera el orden habitual de las palabras.',
    justificationHy: 'Խախտվում է բառերի սովորական շարադասությունը։',
  },
];

// 7. 15 ejercicios de práctica
export const RESUMEN_PRACTICE_15: FigurePracticeItem[] = [
  {
    id: 1,
    sentenceEs: 'Las estrellas nos miraban desde el cielo.',
    sentenceHy: 'Աստղերը երկնքից նայում էին մեզ։',
    figureEs: 'Personificación',
    figureHy: 'Անձնավորում',
    justificationEs: 'Se atribuye a las estrellas la acción humana de mirar.',
    justificationHy: 'Աստղերին վերագրվում է մարդկային նայելու գործողությունը։',
  },
  {
    id: 2,
    sentenceEs: 'Mi hermano corre como un guepardo.',
    sentenceHy: 'Եղբայրս վազում է վագրակատվի պես։',
    figureEs: 'Comparación o símil',
    figureHy: 'Համեմատություն',
    justificationEs: 'Compara la velocidad del hermano con un guepardo usando la palabra «como».',
    justificationHy: 'Եղբոր արագությունը համեմատվում է վագրակատվի հետ՝ «como» բառի միջոցով։',
  },
  {
    id: 3,
    sentenceEs: 'Tengo montañas de deberes.',
    sentenceHy: 'Ես սարերի չափ տնային աշխատանք ունեմ։',
    figureEs: 'Hipérbole (y metáfora)',
    figureHy: 'Չափազանցություն (և փոխաբերություն)',
    justificationEs: 'Exagera la gran cantidad de deberes comparándolos directamente con montañas.',
    justificationHy: 'Չափազանցնում է տնային աշխատանքների քանակը՝ դրանք ներկայացնելով որպես սարեր։',
  },
  {
    id: 4,
    sentenceEs: 'Tus palabras son música para mis oídos.',
    sentenceHy: 'Քո խոսքերը երաժշտություն են իմ ականջների համար։',
    figureEs: 'Metáfora',
    figureHy: 'Փոխաբերություն',
    justificationEs: 'Identifica las palabras agradables con la música sin usar «como».',
    justificationHy: 'Հաճելի խոսքերը նույնացվում են երաժշտության հետ՝ առանց «como» բառի։',
  },
  {
    id: 5,
    sentenceEs: 'Y canta, y baila, y sonríe, y disfruta.',
    sentenceHy: 'Եվ երգում է, և պարում է, և ժպտում է, և վայելում է։',
    figureEs: 'Polisíndeton',
    figureHy: 'Բազմաշաղկապություն',
    justificationEs: 'Se repite la conjunción «y» más veces de las necesarias.',
    justificationHy: '«y» շաղկապը կրկնվում է անհրաժեշտից ավելի անգամ։',
  },
  {
    id: 6,
    sentenceEs: 'Quiero reír, quiero vivir, quiero soñar.',
    sentenceHy: 'Ուզում եմ ծիծաղել, ուզում եմ ապրել, ուզում եմ երազել։',
    figureEs: 'Anáfora',
    figureHy: 'Անաֆորա (կրկնություն)',
    justificationEs: 'Se repite la palabra «quiero» al principio de cada enunciado.',
    justificationHy: 'Յուրաքանչյուր արտահայտության սկզբում կրկնվում է «quiero» բառը։',
  },
  {
    id: 7,
    sentenceEs: 'De alegría se llenó su corazón.',
    sentenceHy: 'Ուրախությամբ լցվեց նրա սիրտը։',
    figureEs: 'Hipérbaton',
    figureHy: 'Շարադասության շրջում',
    justificationEs: 'Altera el orden habitual de la oración («Su corazón se llenó de alegría»).',
    justificationHy: 'Փոխում է նախադասության սովորական շարադասությունը («Su corazón se llenó de alegría»)։',
  },
  {
    id: 8,
    sentenceEs: 'El suave susurro sonaba en el silencio.',
    sentenceHy: 'Մեղմ շշուկը հնչում էր լռության մեջ։',
    figureEs: 'Aliteración',
    figureHy: 'Հնչյունների կրկնություն (բաղաձայնույթ)',
    justificationEs: 'Se repite el sonido «s» para imitar el sonido suave del susurro.',
    justificationHy: 'Կրկնվում է «s» հնչյունը՝ շշուկի մեղմ հնչողությունը ստեղծելու համար։',
  },
  {
    id: 9,
    sentenceEs: '¡Qué limpio está tu cuarto! (El cuarto está completamente desordenado).',
    sentenceHy: 'Ի՜նչ մաքուր է քո սենյակը (սենյակն ամբողջությամբ թափթփված է)։',
    figureEs: 'Ironía',
    figureHy: 'Հեգնանք',
    justificationEs: 'Dice que el cuarto está limpio para dar a entender justo lo contrario.',
    justificationHy: 'Ասում է, որ սենյակը մաքուր է՝ նկատի ունենալով ճիշտ հակառակը։',
  },
  {
    id: 10,
    sentenceEs: 'Me regaló una sonrisa que iluminó mi día.',
    sentenceHy: 'Նա ինձ մի ժպիտ նվիրեց, որը լուսավորեց իմ օրը։',
    figureEs: 'Metáfora',
    figureHy: 'Փոխաբերություն',
    justificationEs: 'Identifica la sonrisa con una luz capaz de alegrar y dar claridad al día.',
    justificationHy: 'Ժպիտը ներկայացվում է որպես լույս, որն ուրախացնում և լուսավորում է օրը։',
  },
  {
    id: 11,
    sentenceEs: 'El reloj corría sin descansar.',
    sentenceHy: 'Ժամացույցը վազում էր առանց հանգստանալու։',
    figureEs: 'Personificación',
    figureHy: 'Անձնավորում',
    justificationEs: 'Atribuye al reloj acciones humanas como correr y descansar.',
    justificationHy: 'Ժամացույցին վերագրվում են մարդկային գործողություններ՝ վազել և հանգստանալ։',
  },
  {
    id: 12,
    sentenceEs: 'He leído ese libro cien mil veces.',
    sentenceHy: 'Այդ գիրքը հարյուր հազար անգամ եմ կարդացել։',
    figureEs: 'Hipérbole',
    figureHy: 'Չափազանցություն',
    justificationEs: 'Exagera de forma evidente el número de veces que ha leído el libro.',
    justificationHy: 'Ակնհայտորեն չափազանցնում է գիրքը կարդալու անգամների քանակը։',
  },
  {
    id: 13,
    sentenceEs: 'Es dulce como la miel.',
    sentenceHy: 'Նա մեղրի պես քաղցր է։',
    figureEs: 'Comparación o símil',
    figureHy: 'Համեմատություն',
    justificationEs: 'Compara la dulzura con la miel mediante la palabra «como».',
    justificationHy: 'Քաղցրությունը համեմատում է մեղրի հետ՝ «como» բառի միջոցով։',
  },
  {
    id: 14,
    sentenceEs: 'Es tan pobre que solo tiene dinero.',
    sentenceHy: 'Նա այնքան աղքատ է, որ միայն փող ունի։',
    figureEs: 'Paradoja',
    figureHy: 'Պարադոքս',
    justificationEs: 'Une dos ideas aparentemente contradictorias (ser pobre y tener dinero) para expresar un sentido profundo.',
    justificationHy: 'Միավորում է թվացյալ հակասական երկու գաղափար (աղքատ լինել և փող ունենալ)՝ խորը իմաստ արտահայտելու համար։',
  },
  {
    id: 15,
    sentenceEs: 'En la oscuridad encontré la luz.',
    sentenceHy: 'Խավարի մեջ գտա լույսը։',
    figureEs: 'Antítesis',
    figureHy: 'Հակադրություն',
    justificationEs: 'Contrapone dos palabras de significado opuesto: «oscuridad» y «luz».',
    justificationHy: 'Հակադրում է հակառակ իմաստ ունեցող երկու բառ՝ «խավար» և «լույս»։',
  },
];

// 8. Análisis del texto narrativo (12 preguntas)
export const NARRATIVE_ANALYSIS_12: NarrativeAnalysisQA[] = [
  {
    number: 1,
    questionEs: '¿Qué tipo de narrador aparece en el texto?',
    questionHy: 'Ի՞նչ տեսակի պատմող կա տեքստում։',
    answerEs: 'Un narrador interno que cuenta los acontecimientos en primera persona y participa en la historia.',
    answerHy: 'Ներքին պատմող, որը պատմում է առաջին դեմքով և մասնակցում պատմության իրադարձություններին։',
  },
  {
    number: 2,
    questionEs: '¿Cómo sabemos que el narrador está en primera persona?',
    questionHy: 'Ինչպե՞ս ենք հասկանում, որ պատմողն օգտագործում է առաջին դեմքը։',
    answerEs: 'Porque utiliza expresiones como «recuerdo», «mi amigo», «me acerqué» y «comprendí».',
    answerHy: 'Որովհետև օգտագործում է այնպիսի արտահայտություններ, ինչպիսիք են «recuerdo» (հիշում եմ), «mi amigo» (իմ ընկերը), «me acerqué» (մոտեցա) և «comprendí» (հասկացա)։',
  },
  {
    number: 3,
    questionEs: '¿En qué espacio se desarrolla la historia?',
    questionHy: 'Որտե՞ղ են տեղի ունենում պատմության իրադարձությունները։',
    answerEs: 'Principalmente en un estadio de fútbol.',
    answerHy: 'Հիմնականում ֆուտբոլային մարզադաշտում։',
  },
  {
    number: 4,
    questionEs: '¿En qué tiempo se desarrolla la historia?',
    questionHy: 'Ե՞րբ են տեղի ունենում պատմության իրադարձությունները։',
    answerEs: 'Durante una mañana de sábado del mes de noviembre.',
    answerHy: 'Նոյեմբեր ամսվա շաբաթ օրվա առավոտյան։',
  },
  {
    number: 5,
    questionEs: '¿Cuál es el planteamiento?',
    questionHy: 'Ո՞րն է պատմության սկզբնական հատվածը։',
    answerEs: 'Los amigos se preparan para participar en un torneo de fútbol.',
    answerHy: 'Ընկերները պատրաստվում են մասնակցել ֆուտբոլային մրցաշարի։',
  },
  {
    number: 6,
    questionEs: '¿Cuál es el nudo?',
    questionHy: 'Ո՞րն է պատմության հիմնական զարգացումը։',
    answerEs: 'Descubren que Alejandro está triste y deciden apoyarlo durante el partido.',
    answerHy: 'Նրանք հասկանում են, որ Ալեխանդրոն տխուր է և որոշում են աջակցել նրան խաղի ընթացքում։',
  },
  {
    number: 7,
    questionEs: '¿Cuál es el desenlace?',
    questionHy: 'Ո՞րն է պատմության ավարտը։',
    answerEs: 'El equipo empata el partido y el narrador descubre el verdadero valor de la amistad.',
    answerHy: 'Թիմը ոչ-ոքի է խաղում, իսկ պատմողը հասկանում է ընկերության իրական արժեքը։',
  },
  {
    number: 8,
    questionEs: '¿El texto está escrito en prosa o en verso?',
    questionHy: 'Տեքստը գրվա՞ծ է արձակ, թե՞ չափածո ձևով։',
    answerEs: 'Está escrito en prosa porque se organiza en oraciones y párrafos, no en versos.',
    answerHy: 'Տեքստը գրված է արձակ ձևով, քանի որ կազմված է նախադասություններից և պարբերություններից, այլ ոչ թե բանաստեղծական տողերից։',
  },
  {
    number: 9,
    questionEs: '¿Cuál es el tema principal del texto?',
    questionHy: 'Ո՞րն է տեքստի հիմնական թեման։',
    answerEs: 'La importancia de la amistad y del compañerismo.',
    answerHy: 'Ընկերության և թիմային համերաշխության կարևորությունը։',
  },
  {
    number: 10,
    questionEs: '¿Cuál es la intención del autor?',
    questionHy: 'Ո՞րն է հեղինակի նպատակը։',
    answerEs: 'Transmitir emociones y hacer reflexionar al lector sobre la importancia de ayudar a los demás.',
    answerHy: 'Զգացմունքներ փոխանցել և ընթերցողին ստիպել մտածել ուրիշներին օգնելու կարևորության մասին։',
  },
  {
    number: 11,
    questionEs: '¿Qué tiempos verbales predominan en el texto?',
    questionHy: 'Ո՞ր բայական ժամանակներն են գերակշռում տեքստում։',
    answerEs: 'Predominan el pretérito imperfecto y el pretérito perfecto simple (indefinido).',
    answerHy: 'Գերակշռում են անցյալ անկատարը (pretérito imperfecto) և անցյալ կատարյալ պարզը (pretérito indefinido)։',
    verbTable: [
      { imperfecto: 'despertaba', indefinido: 'llegamos' },
      { imperfecto: 'cantaba', indefinido: 'descubrimos' },
      { imperfecto: 'llevábamos', indefinido: 'decidimos' },
      { imperfecto: 'soñábamos', indefinido: 'comprendí' },
      { imperfecto: 'parecía', indefinido: 'regresé' },
    ],
    verbNoteEs: 'El imperfecto se utiliza para describir situaciones, mientras que el indefinido se utiliza para narrar acontecimientos terminados.',
    verbNoteHy: 'Անցյալ անկատարը (imperfecto) օգտագործվում է իրավիճակներ նկարագրելու համար, իսկ անցյալ կատարյալը (indefinido)՝ ավարտված իրադարձությունները պատմելու համար։',
  },
  {
    number: 12,
    questionEs: '¿Qué enseñanza transmite el texto?',
    questionHy: 'Ի՞նչ դաս է փոխանցում տեքստը։',
    answerEs: 'Enseña que ayudar a los demás y mantener una buena amistad puede ser más importante que conseguir una victoria deportiva.',
    answerHy: 'Տեքստը սովորեցնում է, որ ուրիշներին օգնելը և լավ ընկերություն պահպանելը կարող են ավելի կարևոր լինել, քան մարզական հաղթանակը։',
  },
];

// 9. Segundo texto: Una sorpresa en la biblioteca
export const BIBLIOTECA_TEXT_LINES: BilingualLine[] = [
  {
    es: 'Aquella tarde de invierno, Pablo decidió visitar la biblioteca de su barrio. Tenía que preparar un trabajo para el colegio, pero no sabía qué libro elegir.',
    hy: 'Ձմռան այդ երեկո Պաբլոն որոշեց այցելել իր թաղամասի գրադարան։ Նա պետք է դպրոցի համար աշխատանք պատրաստեր, բայց չգիտեր, թե որ գիրքն ընտրել։',
  },
  {
    es: 'Mientras caminaba entre las estanterías, observó a una señora mayor que intentaba alcanzar un libro situado en la parte más alta. Pablo se acercó y le ofreció su ayuda. La mujer sonrió y le explicó que buscaba un libro de aventuras que había leído durante su infancia.',
    hy: 'Գրադարակների միջով քայլելիս նա նկատեց մի տարեց տիկնոջ, որը փորձում էր հասնել ամենաբարձր դարակում դրված գրքին։ Պաբլոն մոտեցավ և առաջարկեց իր օգնությունը։ Կինը ժպտաց և բացատրեց, որ փնտրում է արկածային մի գիրք, որը կարդացել էր իր մանկության տարիներին։',
  },
  {
    es: 'Comenzaron a conversar. La señora le contó historias sobre sus viajes, sus años como profesora y su amor por la literatura. Sus palabras eran pequeñas ventanas abiertas al pasado.',
    hy: 'Նրանք սկսեցին զրուցել։ Տիկինը նրան պատմեց իր ճանապարհորդությունների, ուսուցչուհի աշխատելու տարիների և գրականության հանդեպ իր սիրո մասին։ Նրա խոսքերը դեպի անցյալ բացված փոքրիկ պատուհաններ էին։',
    highlight: 'Sus palabras eran pequeñas ventanas abiertas al pasado.',
  },
  {
    es: 'Pablo escuchó con atención y comprendió que los libros no eran únicamente una obligación escolar, sino también una oportunidad para descubrir otros mundos.',
    hy: 'Պաբլոն ուշադիր լսեց և հասկացավ, որ գրքերը միայն դպրոցական պարտականություն չեն, այլև այլ աշխարհներ բացահայտելու հնարավորություն։',
  },
  {
    es: 'Antes de despedirse, la mujer le recomendó una novela. Pablo regresó a casa con el libro entre sus manos y una enorme curiosidad por comenzar a leerlo.',
    hy: 'Հրաժեշտ տալուց առաջ կինը նրան խորհուրդ տվեց մի վեպ։ Պաբլոն տուն վերադարձավ գիրքը ձեռքին և այն կարդալու մեծ հետաքրքրությամբ։',
  },
  {
    es: 'Desde aquel día, visitar la biblioteca se convirtió en una de sus actividades favoritas.',
    hy: 'Այդ օրվանից գրադարան այցելելը դարձավ նրա ամենասիրելի զբաղմունքներից մեկը։',
  },
];

export const BIBLIOTECA_QA_10: SimpleQA[] = [
  {
    questionEs: '1. ¿De qué trata el texto?',
    questionHy: 'Ինչի՞ մասին է տեքստը։',
    answerEs: 'El texto trata sobre cómo Pablo descubre el placer de leer gracias a un encuentro con una señora mayor en la biblioteca.',
    answerHy: 'Տեքստը պատմում է այն մասին, թե ինչպես է Պաբլոն գրադարանում մի տարեց տիկնոջ հետ հանդիպման շնորհիվ բացահայտում ընթերցանության հաճույքը։',
  },
  {
    questionEs: '2. ¿Por qué fue Pablo a la biblioteca?',
    questionHy: 'Ինչո՞ւ Պաբլոն գնաց գրադարան։',
    answerEs: 'Fue a la biblioteca porque tenía que preparar un trabajo para el colegio.',
    answerHy: 'Նա գնաց գրադարան, որովհետև պետք է դպրոցական աշխատանք պատրաստեր։',
  },
  {
    questionEs: '3. ¿A quién encontró en la biblioteca?',
    questionHy: 'Ո՞ւմ հանդիպեց նա գրադարանում։',
    answerEs: 'Encontró a una señora mayor que intentaba alcanzar un libro de la estantería más alta.',
    answerHy: 'Նա հանդիպեց մի տարեց տիկնոջ, որը փորձում էր հասնել ամենաբարձր դարակի գրքին։',
  },
  {
    questionEs: '4. ¿Qué hizo Pablo?',
    questionHy: 'Ի՞նչ արեց Պաբլոն։',
    answerEs: 'Se acercó a la señora, le ofreció su ayuda y luego conversó con ella con mucha atención.',
    answerHy: 'Նա մոտեցավ տիկնոջը, առաջարկեց իր օգնությունը և ապա ուշադրությամբ զրուցեց նրա հետ։',
  },
  {
    questionEs: '5. ¿Qué descubrió Pablo?',
    questionHy: 'Ի՞նչ բացահայտեց Պաբլոն։',
    answerEs: 'Descubrió que los libros no son solo una obligación escolar, sino una oportunidad para conocer otros mundos.',
    answerHy: 'Նա բացահայտեց, որ գրքերը միայն դպրոցական պարտականություն չեն, այլ այլ աշխարհներ ճանաչելու հնարավորություն են։',
  },
  {
    questionEs: '6. ¿Cómo termina la historia?',
    questionHy: 'Ինչպե՞ս է ավարտվում պատմությունը։',
    answerEs: 'La señora le recomienda una novela, Pablo se la lleva a casa con ilusión y desde ese día la biblioteca se convierte en uno de sus lugares favoritos.',
    answerHy: 'Տիկինը նրան մի վեպ է խորհուրդ տալիս, Պաբլոն մեծ հետաքրքրությամբ տանում է այն տուն, և այդ օրվանից գրադարանը դառնում է նրա սիրելի վայրերից մեկը։',
  },
  {
    questionEs: '7. ¿Qué significa «Sus palabras eran pequeñas ventanas abiertas al pasado»?',
    questionHy: 'Ի՞նչ է նշանակում «Sus palabras eran pequeñas ventanas abiertas al pasado» արտահայտությունը։',
    answerEs: 'Significa que, al escuchar sus historias, Pablo podía imaginar y conocer las experiencias que la señora había vivido años atrás.',
    answerHy: 'Դա նշանակում է, որ նրա պատմությունները լսելով՝ Պաբլոն կարողանում էր պատկերացնել և ճանաչել տիկնոջ անցյալի փորձառությունները։',
  },
  {
    questionEs: '8. ¿Qué figura literaria aparece en esa expresión?',
    questionHy: 'Ո՞ր գեղարվեստական արտահայտչամիջոցն է հանդիպում այդ արտահայտության մեջ։',
    answerEs: 'Una metáfora, porque identifica las palabras de la señora con ventanas abiertas al pasado sin utilizar «como».',
    answerHy: 'Փոխաբերություն (metáfora), քանի որ տիկնոջ խոսքերը նույնացվում են դեպի անցյալ բացված պատուհանների հետ՝ առանց «como» բառի։',
  },
  {
    questionEs: '9. ¿A qué género literario pertenece?',
    questionHy: 'Ո՞ր գրական ժանրին է պատկանում տեքստը։',
    answerEs: 'Pertenece al género narrativo porque un narrador cuenta una historia con personajes, acciones, espacio y tiempo.',
    answerHy: 'Պատկանում է պատմողական ժանրին, քանի որ պատմողը ներկայացնում է պատմություն՝ կերպարներով, գործողություններով, վայրով և ժամանակով։',
  },
  {
    questionEs: '10. ¿Qué tipo de narrador aparece?',
    questionHy: 'Ի՞նչ տեսակի պատմող է հանդիպում տեքստում։',
    answerEs: 'Un narrador externo en tercera persona, porque cuenta lo que le ocurre a Pablo sin participar en la historia («decidió», «observó», «regresó»).',
    answerHy: 'Արտաքին պատմող՝ երրորդ դեմքով, քանի որ պատմում է Պաբլոյի հետ տեղի ունեցածը՝ չմասնակցելով պատմությանը։',
  },
];

export const BIBLIOTECA_MODEL_RESUMEN = {
  es: 'El texto cuenta la historia de Pablo, un chico que va a la biblioteca del barrio para hacer un trabajo escolar. Allí ayuda a una señora mayor a alcanzar un libro y conversa con ella sobre sus viajes y su amor por la lectura. Gracias a ese encuentro, Pablo descubre que leer es una forma de conocer otros mundos y la biblioteca se convierte en uno de sus lugares favoritos.',
  hy: 'Տեքստը պատմում է Պաբլոյի մասին, որը գնում է թաղամասի գրադարան՝ դպրոցական աշխատանք պատրաստելու համար։ Այնտեղ նա օգնում է մի տարեց տիկնոջ վերցնել գիրքը և զրուցում է նրա հետ իր ճանապարհորդությունների ու ընթերցանության հանդեպ սիրո մասին։ Այդ հանդիպման շնորհիվ Պաբլոն բացահայտում է, որ ընթերցանությունն այլ աշխարհներ ճանաչելու միջոց է, և գրադարանը դառնում է նրա սիրելի վայրերից մեկը։',
};

// 10. Chuleta + Frases para justificar
export const CHULETA_FIGURES_11: ChuletaRow[] = [
  { cueEs: 'Una identificación entre dos realidades', cueHy: 'Երկու երևույթի նույնացում', figureEs: 'Metáfora', figureHy: 'Փոխաբերություն' },
  { cueEs: 'Una comparación con «como»', cueHy: 'Համեմատություն «como» բառով', figureEs: 'Símil', figureHy: 'Համեմատություն' },
  { cueEs: 'Una acción humana atribuida a un objeto', cueHy: 'Առարկային վերագրված մարդկային գործողություն', figureEs: 'Personificación', figureHy: 'Անձնավորում' },
  { cueEs: 'Una exageración', cueHy: 'Չափազանցություն', figureEs: 'Hipérbole', figureHy: 'Չափազանցություն' },
  { cueEs: 'Palabras repetidas al principio', cueHy: 'Սկզբում կրկնվող բառեր', figureEs: 'Anáfora', figureHy: 'Անաֆորա (կրկնություն)' },
  { cueEs: 'Conjunciones repetidas', cueHy: 'Կրկնվող շաղկապներ', figureEs: 'Polisíndeton', figureHy: 'Բազմաշաղկապություն' },
  { cueEs: 'El orden de las palabras alterado', cueHy: 'Բառերի փոփոխված շարադասություն', figureEs: 'Hipérbaton', figureHy: 'Շարադասության շրջում' },
  { cueEs: 'La repetición de sonidos', cueHy: 'Հնչյունների կրկնություն', figureEs: 'Aliteración', figureHy: 'Բաղաձայնույթ (ալիտերացիա)' },
  { cueEs: 'Ideas opuestas', cueHy: 'Հակադիր գաղափարներ', figureEs: 'Antítesis', figureHy: 'Հակադրություն' },
  { cueEs: 'Una contradicción aparente', cueHy: 'Թվացյալ հակասություն', figureEs: 'Paradoja', figureHy: 'Պարադոքս' },
  { cueEs: 'Una expresión que da a entender lo contrario', cueHy: 'Արտահայտություն, որը նկատի ունի հակառակը', figureEs: 'Ironía', figureHy: 'Հեգնանք' },
];

export const JUSTIFY_PHRASES_10: { es: string; hy: string }[] = [
  { es: 'El texto pertenece al género narrativo porque…', hy: 'Տեքստը պատկանում է պատմողական ժանրին, քանի որ…' },
  { es: 'Podemos observar que…', hy: 'Կարող ենք նկատել, որ…' },
  { es: 'Esta expresión significa que…', hy: 'Այս արտահայտությունը նշանակում է, որ…' },
  { es: 'Se trata de una metáfora porque…', hy: 'Սա փոխաբերություն է, քանի որ…' },
  { es: 'El autor utiliza esta figura para…', hy: 'Հեղինակն օգտագործում է այս միջոցը, որպեսզի…' },
  { es: 'Un ejemplo del texto es…', hy: 'Տեքստից օրինակ է…' },
  { es: 'El narrador cuenta los hechos en primera persona.', hy: 'Պատմողը ներկայացնում է դեպքերն առաջին դեմքով։' },
  { es: 'La idea principal del texto es…', hy: 'Տեքստի հիմնական գաղափարն է…' },
  { es: 'El texto utiliza un lenguaje elaborado.', hy: 'Տեքստում օգտագործվում է մշակված լեզու։' },
  { es: 'La intención del autor es transmitir emociones.', hy: 'Հեղինակի նպատակն է զգացմունքներ փոխանցել։' },
];
