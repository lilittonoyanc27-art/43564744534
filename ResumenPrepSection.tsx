import React, { useMemo, useState } from 'react';
import { BookOpen, CheckCircle2, Eye, EyeOff, RotateCcw } from 'lucide-react';
import { ClickTranslate } from './ClickTranslate';
import {
  BIBLIOTECA_MODEL_RESUMEN,
  BIBLIOTECA_QA_10,
  BIBLIOTECA_TEXT_LINES,
  CHULETA_FIGURES_11,
  CULTA_VS_POPULAR_ROWS,
  JUSTIFY_PHRASES_10,
  NARRATIVE_ANALYSIS_12,
  PASO1_QUESTIONS,
  PASO3_EXCLUDE,
  PASO5_PARTS,
  PHOTO_EXAM_FIGURES,
  RESUMEN_COMPLETO,
  RESUMEN_FIGURES_11,
  RESUMEN_PRACTICE_15,
  RESUMEN_USEFUL_EXPRESSIONS,
  STEP_BY_STEP_RESUMEN_QA,
  THREE_GENRES_CARDS,
  VICTORIA_TEXT_LINES,
  VICTORIA_VOCABULARY,
} from './dataResumenPrep';

interface ResumenPrepSectionProps {
  revealAll: boolean;
}

interface ResumenFeedback {
  scoreLabelEs: string;
  scoreLabelHy: string;
  items: { ok: boolean; es: string; hy: string }[];
}

function evaluateBibliotecaResumen(text: string): ResumenFeedback {
  const trimmed = text.trim();
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean) : [];
  const lower = trimmed.toLowerCase();
  const items: { ok: boolean; es: string; hy: string }[] = [];

  if (words.length < 15) {
    items.push({
      ok: false,
      es: 'Tu resumen es demasiado breve. Intenta escribir entre 35 y 75 palabras para recoger el inicio, el desarrollo y el desenlace.',
      hy: 'Քո ամփոփումը չափազանց կարճ է։ Փորձի՛ր գրել 35–75 բառ՝ ներառելով սկիզբը, զարգացումը և ավարտը։',
    });
  } else if (words.length > 95) {
    items.push({
      ok: false,
      es: 'Tu resumen es un poco largo. Elimina detalles secundarios e intenta resumirlo en un párrafo más breve (35–80 palabras).',
      hy: 'Քո ամփոփումը մի փոքր երկար է։ Հեռացրո՛ւ երկրորդական մանրամասները և փորձի՛ր ամփոփել ավելի կարճ պարբերությամբ (35–80 բառ)։',
    });
  } else {
    items.push({
      ok: true,
      es: `Buena extensión (${words.length} palabras): conciso y adecuado para un resumen de examen.`,
      hy: `Լավ ծավալ (${words.length} բառ)՝ հակիրճ և հարմար քննական ամփոփման համար։`,
    });
  }

  const hasOpinion =
    lower.includes('en mi opinión') ||
    lower.includes('en mi opinion') ||
    lower.includes('me parece') ||
    lower.includes('yo creo') ||
    lower.includes('pienso que');

  if (hasOpinion) {
    items.push({
      ok: false,
      es: 'Evita expresiones de opinión personal como «En mi opinión» o «Me parece». Un resumen debe ser objetivo.',
      hy: 'Խուսափի՛ր անձնական կարծիք արտահայտող ձևակերպումներից («En mi opinión», «Me parece»)։ Ամփոփումը պետք է լինի օբյեկտիվ։',
    });
  } else {
    items.push({
      ok: true,
      es: 'Tono objetivo correcto: no incluyes opiniones personales.',
      hy: 'Ճիշտ օբյեկտիվ տոն՝ անձնական կարծիքներ չես ներառել։',
    });
  }

  const mentionsPablo = lower.includes('pablo');
  const mentionsBiblioteca = lower.includes('biblioteca');
  const mentionsSenora =
    lower.includes('señora') ||
    lower.includes('senora') ||
    lower.includes('mujer') ||
    lower.includes('anciana') ||
    lower.includes('mayor');
  const mentionsAyuda =
    lower.includes('ayud') ||
    lower.includes('alcanzar') ||
    lower.includes('convers') ||
    lower.includes('habl');
  const mentionsLectura =
    lower.includes('libro') ||
    lower.includes('leer') ||
    lower.includes('lectura') ||
    lower.includes('novela') ||
    lower.includes('mundos');

  if (mentionsPablo && mentionsBiblioteca) {
    items.push({
      ok: true,
      es: 'Incluyes al protagonista (Pablo) y el lugar principal (la biblioteca).',
      hy: 'Նշել ես գլխավոր հերոսին (Պաբլո) և հիմնական վայրը (գրադարանը)։',
    });
  } else {
    items.push({
      ok: false,
      es: 'Recuerda mencionar claramente al protagonista (Pablo) y el lugar donde ocurre la historia (la biblioteca).',
      hy: 'Հիշի՛ր հստակ նշել գլխավոր հերոսին (Պաբլո) և վայրը, որտեղ տեղի է ունենում պատմությունը (գրադարանը)։',
    });
  }

  if (mentionsSenora && mentionsAyuda) {
    items.push({
      ok: true,
      es: 'Recoges el acontecimiento central: el encuentro con la señora mayor, la ayuda y la conversación.',
      hy: 'Ընդգրկել ես գլխավոր իրադարձությունը՝ հանդիպումը տարեց տիկնոջ հետ, օգնությունը և զրույցը։',
    });
  } else {
    items.push({
      ok: false,
      es: 'Añade el encuentro clave: Pablo ayuda a una señora mayor y conversa con ella.',
      hy: 'Ավելացրո՛ւ հիմնական իրադարձությունը՝ Պաբլոն օգնում է տարեց տիկնոջը և զրուցում է նրա հետ։',
    });
  }

  if (mentionsLectura) {
    items.push({
      ok: true,
      es: 'Reflejas la idea final sobre el valor de los libros y el gusto por la lectura.',
      hy: 'Ներկայացրել ես վերջնական գաղափարը՝ գրքերի արժեքի և ընթերցանության հանդեպ սիրո մասին։',
    });
  } else {
    items.push({
      ok: false,
      es: 'Incluye el desenlace: Pablo descubre el valor de los libros y empieza a disfrutar de la lectura.',
      hy: 'Ներառի՛ր ավարտը՝ Պաբլոն բացահայտում է գրքերի արժեքը և սկսում է սիրել ընթերցանությունը։',
    });
  }

  const passed = items.filter((i) => i.ok).length;
  if (passed === items.length) {
    return {
      scoreLabelEs: `Excelente trabajo (${passed}/${items.length} criterios cumplidos)`,
      scoreLabelHy: `Գերազանց աշխատանք (${passed}/${items.length} չափանիշ կատարված է)`,
      items,
    };
  }
  if (passed >= 3) {
    return {
      scoreLabelEs: `Buen intento (${passed}/${items.length} criterios cumplidos)`,
      scoreLabelHy: `Լավ փորձ (${passed}/${items.length} չափանիշ կատարված է)`,
      items,
    };
  }
  return {
    scoreLabelEs: `Necesita mejoras (${passed}/${items.length} criterios cumplidos)`,
    scoreLabelHy: `Բարելավման կարիք ունի (${passed}/${items.length} չափանիշ կատարված է)`,
    items,
  };
}

const SectionHeading: React.FC<{
  badgeEs: string;
  badgeHy: string;
  titleEs: string;
  titleHy: string;
  subtitleEs?: string;
  subtitleHy?: string;
  revealAll: boolean;
}> = ({ badgeEs, badgeHy, titleEs, titleHy, subtitleEs, subtitleHy, revealAll }) => (
  <div className="bg-[#FCECD9] border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 space-y-2 shadow-xs">
    <ClickTranslate
      es={badgeEs}
      hy={badgeHy}
      revealAll={revealAll}
      compact
      esClassName="text-xs font-semibold text-[#A84D24]"
    />
    <ClickTranslate
      es={titleEs}
      hy={titleHy}
      revealAll={revealAll}
      compact
      esClassName="font-display text-xl sm:text-2xl font-semibold text-stone-900"
    />
    {subtitleEs && subtitleHy && (
      <ClickTranslate
        es={subtitleEs}
        hy={subtitleHy}
        revealAll={revealAll}
        compact
        esClassName="text-[0.95rem] sm:text-base text-stone-700 leading-relaxed"
      />
    )}
  </div>
);

export const ResumenPrepSection: React.FC<ResumenPrepSectionProps> = ({ revealAll }) => {
  // Toggle states for hidden answers across all sections
  const [openStepAnswers, setOpenStepAnswers] = useState<Record<number, boolean>>({});
  const [showAllSteps, setShowAllSteps] = useState(false);
  const [showCompleteResumen, setShowCompleteResumen] = useState(false);

  const [openExamAF, setOpenExamAF] = useState<Record<string, boolean>>({});
  const [showAllExamAF, setShowAllExamAF] = useState(false);

  const [openFigCardAnswers, setOpenFigCardAnswers] = useState<Record<number, boolean>>({});
  const [showAllFigCardAnswers, setShowAllFigCardAnswers] = useState(false);

  const [openPhotoExam, setOpenPhotoExam] = useState<Record<number, boolean>>({});
  const [showAllPhotoExam, setShowAllPhotoExam] = useState(false);

  const [openPractice15, setOpenPractice15] = useState<Record<number, boolean>>({});
  const [showAllPractice15, setShowAllPractice15] = useState(false);

  const [openAnalysis12, setOpenAnalysis12] = useState<Record<number, boolean>>({});
  const [showAllAnalysis12, setShowAllAnalysis12] = useState(false);

  const [openBibliotecaQA, setOpenBibliotecaQA] = useState<Record<number, boolean>>({});
  const [showAllBibliotecaQA, setShowAllBibliotecaQA] = useState(false);

  const [openChuleta, setOpenChuleta] = useState<Record<number, boolean>>({});
  const [showAllChuleta, setShowAllChuleta] = useState(false);

  // Interactive summary writer state (Section 9)
  const [userResumen, setUserResumen] = useState('');
  const [feedback, setFeedback] = useState<ResumenFeedback | null>(null);
  const [showModelResumen, setShowModelResumen] = useState(false);

  const wordCount = useMemo(() => {
    const trimmed = userResumen.trim();
    return trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
  }, [userResumen]);

  const handleCheckResumen = () => {
    setFeedback(evaluateBibliotecaResumen(userResumen));
  };

  const handleResetResumen = () => {
    setUserResumen('');
    setFeedback(null);
    setShowModelResumen(false);
  };

  const isAFOpen = (key: string) => showAllExamAF || !!openExamAF[key];

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <div className="bg-white border border-[#E5C5A7] rounded-2xl p-6 sm:p-7 shadow-xs space-y-2.5">
        <ClickTranslate
          es="Preparación para el examen de Lengua Castellana — 1.º ESO"
          hy="Իսպաներեն լեզվի և գրականության քննության նախապատրաստում — 1.º ESO"
          revealAll={revealAll}
          compact
          esClassName="text-xs font-semibold text-[#A84D24]"
        />
        <ClickTranslate
          es="Guía completa de resumen, comentario de texto y figuras literarias"
          hy="Տեքստի ամփոփման, վերլուծության և գեղարվեստական արտահայտչամիջոցների ամբողջական ուղեցույց"
          revealAll={revealAll}
          compact
          esClassName="font-display text-2xl sm:text-3xl font-semibold text-stone-900"
        />
        <ClickTranslate
          es="Sigue la estructura real del examen de 1.º ESO con textos nuevos, vocabulario literario y ejercicios resueltos. Haz clic en cualquier expresión en español para ver la traducción al armenio y pulsa «Mostrar respuesta» para comprobar tus respuestas."
          hy="Հետևի՛ր 1.º ESO քննության իրական կառուցվածքին՝ նոր տեքստերով, գրական բառապաշարով և լուծված վարժություններով։ Սեղմի՛ր իսպաներեն ցանկացած արտահայտության վրա՝ հայերեն թարգմանությունը տեսնելու համար, և սեղմի՛ր «Mostrar respuesta»՝ պատասխանները ստուգելու համար։"
          revealAll={revealAll}
          compact
          esClassName="text-[0.95rem] sm:text-base text-stone-600 leading-relaxed"
        />
      </div>

      {/* SECTION 1: ¿Cómo hacer un resumen? */}
      <section id="res-1" className="scroll-mt-24 space-y-5">
        <SectionHeading
          badgeEs="Sección 1 · Técnica de estudio"
          badgeHy="Բաժին 1 · Ուսումնասիրության մեթոդ"
          titleEs="1. ¿Cómo hacer un resumen?"
          titleHy="1. Ինչպե՞ս կազմել ամփոփում"
          subtitleEs="Un resumen es un texto breve que recoge las ideas principales de otro texto utilizando nuestras propias palabras."
          subtitleHy="Ամփոփումը կարճ տեքստ է, որը սեփական բառերով ներկայացնում է մեկ այլ տեքստի հիմնական գաղափարները։"
          revealAll={revealAll}
        />

        {/* Paso 1 */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="bg-[#FAF0E6] border-b border-[#E5C5A7] px-5 py-3.5 space-y-1">
            <ClickTranslate
              es="Paso 1. Leer todo el texto"
              hy="Քայլ 1. Կարդալ ամբողջ տեքստը"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base sm:text-lg"
            />
            <ClickTranslate
              es="Primero es necesario leer el texto completo y responder a las siguientes preguntas:"
              hy="Նախ անհրաժեշտ է կարդալ ամբողջ տեքստը և պատասխանել հետևյալ հարցերին։"
              revealAll={revealAll}
              compact
              esClassName="text-[0.95rem] sm:text-base text-stone-600"
            />
          </div>
          <div className="divide-y divide-[#F2E2D2]">
            {PASO1_QUESTIONS.map((q, idx) => (
              <div key={idx} className="px-5 py-3 flex items-start gap-3">
                <span className="font-mono-tabular text-xs font-semibold text-[#A84D24] pt-1 w-6 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <ClickTranslate
                    es={q.es}
                    hy={q.hy}
                    revealAll={revealAll}
                    compact
                    esClassName="font-medium text-[0.95rem] sm:text-base text-stone-900"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paso 2 */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
          <ClickTranslate
            es="Paso 2. Identificar las ideas principales"
            hy="Քայլ 2. Առանձնացնել հիմնական գաղափարները"
            revealAll={revealAll}
            compact
            esClassName="font-semibold text-stone-900 text-base sm:text-lg"
          />
          <ClickTranslate
            es="No hace falta memorizar cada oración. Lo importante es comprender qué información es realmente necesaria para entender la historia."
            hy="Պետք չէ անգիր անել ամեն նախադասությունը։ Կարևորը հասկանալն է, թե որ տեղեկությունն է իսկապես անհրաժեշտ պատմությունը հասկանալու համար։"
            revealAll={revealAll}
            compact
            esClassName="text-[0.95rem] sm:text-base text-stone-700 leading-relaxed"
          />
          <div className="bg-[#FDF8F3] border border-[#EBD2BA] rounded-xl p-4 space-y-2.5">
            <ClickTranslate
              es="Ejemplo: «Pablo llevaba una camiseta azul, unos pantalones negros y unas zapatillas blancas. Aquella mañana encontró un perro perdido y decidió ayudarlo»."
              hy="Օրինակ. «Պաբլոն հագել էր կապույտ շապիկ, սև տաբատ և սպիտակ մարզակոշիկներ։ Այդ առավոտ նա գտավ կորած շան և որոշեց օգնել նրան»։"
              revealAll={revealAll}
              compact
              esClassName="text-[0.95rem] sm:text-base text-stone-800"
            />
            <div className="bg-[#F4FAF6] border border-emerald-200 rounded-lg px-3.5 py-2.5">
              <ClickTranslate
                es="Idea principal: Pablo encontró un perro perdido y decidió ayudarlo."
                hy="Հիմնական գաղափարը. Պաբլոն գտավ կորած շան և որոշեց օգնել նրան։"
                revealAll={revealAll}
                compact
                esClassName="font-semibold text-[0.95rem] sm:text-base text-emerald-900"
              />
            </div>
            <ClickTranslate
              es="El color de la ropa no influye en la historia principal, por eso esa información no se incluye en el resumen."
              hy="Հագուստի գույնը նշանակություն չունի հիմնական պատմության համար, ուստի այդ տեղեկությունը չենք ներառում ամփոփման մեջ։"
              revealAll={revealAll}
              compact
              esClassName="text-sm text-stone-600"
            />
          </div>
        </div>

        {/* Paso 3 & Paso 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
            <ClickTranslate
              es="Paso 3. Eliminar la información secundaria"
              hy="Քայլ 3. Հեռացնել երկրորդական տեղեկությունները"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base sm:text-lg"
            />
            <ClickTranslate
              es="En un resumen normalmente no debemos incluir:"
              hy="Ամփոփման մեջ սովորաբար պետք չէ ներառել."
              revealAll={revealAll}
              compact
              esClassName="text-[0.95rem] sm:text-base text-stone-600"
            />
            <ul className="space-y-2 pt-1">
              {PASO3_EXCLUDE.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#C25D2E] font-bold mt-0.5">•</span>
                  <div className="flex-1">
                    <ClickTranslate
                      es={item.es}
                      hy={item.hy}
                      revealAll={revealAll}
                      compact
                      esClassName="text-[0.95rem] sm:text-base text-stone-800"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
            <ClickTranslate
              es="Paso 4. Utilizar tus propias palabras"
              hy="Քայլ 4. Օգտագործել սեփական բառերը"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base sm:text-lg"
            />
            <div className="bg-[#FDF8F3] border border-[#EBD2BA] rounded-xl p-4 space-y-1.5">
              <ClickTranslate
                es="Texto original:"
                hy="Բնօրինակ տեքստ."
                revealAll={revealAll}
                compact
                esClassName="text-xs font-semibold text-[#9A421C]"
              />
              <ClickTranslate
                es="Al observar la tristeza de su compañero, Marcos decidió acercarse a él y ofrecerle su ayuda."
                hy="Նկատելով ընկերոջ տխրությունը՝ Մարկոսը որոշեց մոտենալ նրան և առաջարկել իր օգնությունը։"
                revealAll={revealAll}
                compact
                esClassName="text-[0.95rem] sm:text-base text-stone-800"
              />
            </div>
            <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-4 space-y-1.5">
              <ClickTranslate
                es="Resumen:"
                hy="Ամփոփում."
                revealAll={revealAll}
                compact
                esClassName="text-xs font-semibold text-emerald-800"
              />
              <ClickTranslate
                es="Marcos decidió ayudar a su compañero."
                hy="Մարկոսը որոշեց օգնել իր ընկերոջը։"
                revealAll={revealAll}
                compact
                esClassName="font-semibold text-[0.95rem] sm:text-base text-emerald-950"
              />
            </div>
          </div>
        </div>

        {/* Paso 5 */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
          <ClickTranslate
            es="Paso 5. Organizar el resumen"
            hy="Քայլ 5. Կազմակերպել ամփոփումը"
            revealAll={revealAll}
            compact
            esClassName="font-semibold text-stone-900 text-base sm:text-lg"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PASO5_PARTS.map((part, idx) => (
              <div key={idx} className="bg-[#FDF8F3] border border-[#EBD2BA] rounded-xl p-4 space-y-1.5">
                <div className="font-mono-tabular text-xs font-semibold text-[#A84D24]">0{idx + 1}</div>
                <ClickTranslate
                  es={part.titleEs}
                  hy={part.titleHy}
                  revealAll={revealAll}
                  compact
                  esClassName="font-semibold text-base text-stone-900"
                />
                <ClickTranslate
                  es={part.questionEs}
                  hy={part.questionHy}
                  revealAll={revealAll}
                  compact
                  esClassName="text-[0.95rem] sm:text-base text-stone-700"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Expresiones útiles para resumir */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="bg-[#FAF0E6] border-b border-[#E5C5A7] px-5 py-3.5">
            <ClickTranslate
              es="Expresiones útiles para resumir"
              hy="Օգտակար արտահայտություններ ամփոփելու համար"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base sm:text-lg"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:gap-px bg-[#F2E2D2]">
            {RESUMEN_USEFUL_EXPRESSIONS.map((exp, idx) => (
              <div key={idx} className="bg-white px-5 py-3.5">
                <ClickTranslate
                  es={exp.es}
                  hy={exp.hy}
                  revealAll={revealAll}
                  compact
                  esClassName="font-medium text-[0.95rem] sm:text-base text-stone-900"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Nota importante */}
        <div className="bg-[#FCECD9] border border-[#E5C5A7] rounded-2xl p-5">
          <ClickTranslate
            es="Importante: en el examen conviene escribir el resumen en un solo párrafo bien enlazado, con tus propias palabras y respetando el orden de los hechos. No empieces con «En mi opinión», ya que el resumen no expresa una opinión personal."
            hy="Կարևոր է. քննության ժամանակ ցանկալի է ամփոփումը գրել մեկ կապակցված պարբերությամբ, սեփական բառերով և պահպանելով իրադարձությունների հերթականությունը։ Պետք չէ սկսել «En mi opinión» արտահայտությամբ, քանի որ ամփոփումը անձնական կարծիքի արտահայտում չէ։"
            revealAll={revealAll}
            compact
            esClassName="text-[0.95rem] sm:text-base text-stone-900 leading-relaxed"
          />
        </div>
      </section>

      {/* SECTION 2: Texto literario + Vocabulario */}
      <section id="res-2" className="scroll-mt-24 space-y-5">
        <SectionHeading
          badgeEs="Sección 2 · Nivel: 1.º ESO · Género narrativo"
          badgeHy="Բաժին 2 · Մակարդակ՝ 1.º ESO · Պատմողական ժանր"
          titleEs="2. Texto literario — El verdadero significado de la victoria"
          titleHy="2. Գրական տեքստ — Հաղթանակի իրական իմաստը"
          revealAll={revealAll}
        />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#F2E2D2] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#A84D24]">
                <BookOpen className="w-4 h-4 shrink-0" />
                <ClickTranslate
                  es="Nivel: 1.º ESO · Género narrativo"
                  hy="Մակարդակ՝ 1.º ESO · Պատմողական ժանր"
                  revealAll={revealAll}
                  compact
                  esClassName="text-xs font-semibold text-[#A84D24]"
                />
              </div>
              <ClickTranslate
                es="El verdadero significado de la victoria"
                hy="Հաղթանակի իրական իմաստը"
                revealAll={revealAll}
                compact
                esClassName="font-display text-2xl sm:text-3xl font-semibold text-stone-900"
              />
            </div>
            <span className="text-xs text-[#A84D24] bg-[#FAF0E6] border border-[#E5C5A7] px-3 py-1.5 rounded-lg">
              Clic en cada párrafo → Հայերեն
            </span>
          </div>

          <div className="space-y-3.5">
            {VICTORIA_TEXT_LINES.map((line, idx) => (
              <ClickTranslate
                key={idx}
                es={line.es}
                hy={line.hy}
                highlight={line.highlight}
                revealAll={revealAll}
                esClassName="leading-relaxed text-base sm:text-[1.0625rem]"
              />
            ))}
          </div>

          <div className="pt-3 border-t border-[#F2E2D2]">
            <ClickTranslate
              es="Texto original creado para la preparación del examen."
              hy="Քննության նախապատրաստման համար ստեղծված բնօրինակ տեքստ։"
              revealAll={revealAll}
              compact
              esClassName="text-sm italic text-stone-500"
            />
          </div>
        </div>

        {/* Vocabulario (17 palabras) */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="bg-[#FAF0E6] border-b border-[#E5C5A7] px-5 py-3.5">
            <ClickTranslate
              es="Vocabulario del texto (17 expresiones)"
              hy="Տեքստի բառապաշար (17 արտահայտություն)"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base sm:text-lg"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:gap-px bg-[#F2E2D2]">
            {VICTORIA_VOCABULARY.map((item, idx) => (
              <div key={idx} className="bg-white px-4 py-3.5">
                <ClickTranslate
                  es={item.es}
                  hy={item.hy}
                  revealAll={revealAll}
                  compact
                  esClassName="font-medium text-[0.95rem] sm:text-base text-stone-900"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Aprendemos a resumir el texto paso a paso */}
      <section id="res-3" className="scroll-mt-24 space-y-5">
        <SectionHeading
          badgeEs="Sección 3 · Práctica guiada"
          badgeHy="Բաժին 3 · Ուղղորդված վարժանք"
          titleEs="3. Aprendemos a resumir el texto paso a paso"
          titleHy="3. Սովորում ենք քայլ առ քայլ ամփոփել տեքստը"
          revealAll={revealAll}
        />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="bg-[#FAF0E6] border-b border-[#E5C5A7] px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <ClickTranslate
              es="7 preguntas clave para construir el resumen"
              hy="7 հիմնական հարց՝ ամփոփումը կազմելու համար"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base"
            />
            <button
              type="button"
              onClick={() => setShowAllSteps((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {showAllSteps ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showAllSteps ? 'Ocultar todas las respuestas' : 'Mostrar todas las respuestas'}
            </button>
          </div>
          <div className="divide-y divide-[#F2E2D2]">
            {STEP_BY_STEP_RESUMEN_QA.map((item, idx) => {
              const isOpen = showAllSteps || !!openStepAnswers[idx];
              return (
                <div key={idx} className="p-5 space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
                    <div className="flex-1">
                      <ClickTranslate
                        es={item.questionEs}
                        hy={item.questionHy}
                        revealAll={revealAll}
                        compact
                        esClassName="font-semibold text-stone-900 text-base sm:text-[1.0625rem]"
                      />
                    </div>
                    {!showAllSteps && (
                      <button
                        type="button"
                        onClick={() => setOpenStepAnswers((prev) => ({ ...prev, [idx]: !prev[idx] }))}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg transition-colors whitespace-nowrap shrink-0 self-start cursor-pointer"
                      >
                        {isOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        {isOpen ? 'Ocultar respuesta' : 'Mostrar respuesta'}
                      </button>
                    )}
                  </div>
                  {isOpen && (
                    <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-4 space-y-1">
                      <div className="text-xs font-semibold text-emerald-800">Respuesta</div>
                      <ClickTranslate
                        es={item.answerEs}
                        hy={item.answerHy}
                        revealAll={revealAll}
                        compact
                        esClassName="text-[0.95rem] sm:text-base text-stone-800 leading-relaxed"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Resumen completo */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <ClickTranslate
                es="Resumen completo"
                hy="Ամբողջական ամփոփում"
                revealAll={revealAll}
                compact
                esClassName="font-semibold text-stone-900 text-lg"
              />
              <ClickTranslate
                es="Ahora unimos las respuestas más importantes en un solo párrafo bien enlazado."
                hy="Այժմ միավորում ենք ամենակարևոր պատասխանները մեկ կապակցված տեքստի մեջ։"
                revealAll={revealAll}
                compact
                esClassName="text-[0.95rem] sm:text-base text-stone-600"
              />
            </div>
            <button
              type="button"
              onClick={() => setShowCompleteResumen((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-xl transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
            >
              {showCompleteResumen ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showCompleteResumen ? 'Ocultar respuesta' : 'Mostrar respuesta'}
            </button>
          </div>
          {showCompleteResumen && (
            <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-4 sm:p-5 space-y-1.5">
              <div className="text-xs font-semibold text-emerald-800">Respuesta para el examen</div>
              <ClickTranslate
                es={RESUMEN_COMPLETO.es}
                hy={RESUMEN_COMPLETO.hy}
                revealAll={revealAll}
                compact
                esClassName="text-[0.95rem] sm:text-base text-stone-900 leading-relaxed"
              />
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: Preguntas del examen (A–F) */}
      <section id="res-4" className="scroll-mt-24 space-y-5">
        <div className="bg-[#FCECD9] border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <ClickTranslate
              es="Sección 4 · Estructura oficial A–F"
              hy="Բաժին 4 · Քննության պաշտոնական կառուցվածք A–F"
              revealAll={revealAll}
              compact
              esClassName="text-xs font-semibold text-[#A84D24]"
            />
            <ClickTranslate
              es="4. Preguntas del examen (A–F)"
              hy="4. Քննության հարցեր (A–F)"
              revealAll={revealAll}
              compact
              esClassName="font-display text-xl sm:text-2xl font-semibold text-stone-900"
            />
            <ClickTranslate
              es="Las preguntas A–F siguen exactamente la misma estructura que el examen real."
              hy="A–F հարցերը կազմված են ճիշտ նույն կառուցվածքով, ինչ իրական քննության մեջ։"
              revealAll={revealAll}
              compact
              esClassName="text-[0.95rem] sm:text-base text-stone-700"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowAllExamAF((v) => !v)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-xl transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
          >
            {showAllExamAF ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showAllExamAF ? 'Ocultar todas las respuestas' : 'Mostrar todas las respuestas'}
          </button>
        </div>

        {/* A) */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
            <div className="flex-1">
              <ClickTranslate
                es="A) Resume el texto. (1 punto)"
                hy="A) Ամփոփի՛ր տեքստը։ (1 միավոր)"
                revealAll={revealAll}
                compact
                esClassName="font-semibold text-stone-900 text-base sm:text-[1.0625rem]"
              />
            </div>
            {!showAllExamAF && (
              <button
                type="button"
                onClick={() => setOpenExamAF((p) => ({ ...p, A: !p.A }))}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
              >
                {isAFOpen('A') ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {isAFOpen('A') ? 'Ocultar respuesta' : 'Mostrar respuesta'}
              </button>
            )}
          </div>
          {isAFOpen('A') && (
            <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-4 space-y-2.5">
              <div className="text-xs font-semibold text-emerald-800">Respuesta</div>
              <ClickTranslate
                es="El texto narra la historia de unos amigos que participan en un torneo de fútbol y ayudan a un compañero que está pasando por un momento difícil. Aunque no ganan la competición, descubren que la verdadera victoria consiste en la amistad y el apoyo mutuo."
                hy="Տեքստը պատմում է մի խումբ ընկերների մասին, որոնք մասնակցում են ֆուտբոլի մրցաշարի և օգնում են դժվար պահ ապրող իրենց ընկերոջը։ Թեև նրանք չեն հաղթում մրցումում, բացահայտում են, որ իրական հաղթանակը ընկերությունն ու փոխադարձ աջակցությունն է։"
                revealAll={revealAll}
                compact
                esClassName="text-[0.95rem] sm:text-base text-stone-900 leading-relaxed"
              />
              <div className="pt-2 border-t border-emerald-200/70">
                <ClickTranslate
                  es="Justificación: Un buen resumen recoge los acontecimientos principales y la enseñanza final sin incluir detalles innecesarios."
                  hy="Հիմնավորում. Լավ ամփոփումը ներկայացնում է հիմնական իրադարձությունները և վերջնական գաղափարը՝ առանց ավելորդ մանրամասների։"
                  revealAll={revealAll}
                  compact
                  esClassName="text-sm text-emerald-900"
                />
              </div>
            </div>
          )}
        </div>

        {/* B) */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
            <div className="flex-1">
              <ClickTranslate
                es="B) Justifica si este texto pertenece a la literatura culta o popular y por qué. (1 punto)"
                hy="B) Հիմնավորի՛ր՝ այս տեքստը պատկանում է հեղինակային, թե ժողովրդական գրականությանը և ինչո՞ւ։ (1 միավոր)"
                revealAll={revealAll}
                compact
                esClassName="font-semibold text-stone-900 text-base sm:text-[1.0625rem]"
              />
            </div>
            {!showAllExamAF && (
              <button
                type="button"
                onClick={() => setOpenExamAF((p) => ({ ...p, B: !p.B }))}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
              >
                {isAFOpen('B') ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {isAFOpen('B') ? 'Ocultar respuesta' : 'Mostrar respuesta'}
              </button>
            )}
          </div>

          {/* Comparison table Culta vs Popular */}
          <div className="border border-[#E5C5A7] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
                <thead>
                  <tr className="bg-[#FAF0E6] border-b border-[#E5C5A7]">
                    <th className="py-3 px-4 w-1/2">
                      <ClickTranslate
                        es="Literatura culta"
                        hy="Հեղինակային գրականություն"
                        revealAll={revealAll}
                        compact
                        esClassName="font-semibold text-stone-900 text-sm"
                      />
                    </th>
                    <th className="py-3 px-4 w-1/2">
                      <ClickTranslate
                        es="Literatura popular"
                        hy="Ժողովրդական գրականություն"
                        revealAll={revealAll}
                        compact
                        esClassName="font-semibold text-stone-900 text-sm"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F2E2D2]">
                  {CULTA_VS_POPULAR_ROWS.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-3 px-4 align-top">
                        <ClickTranslate es={row.cultaEs} hy={row.cultaHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                      </td>
                      <td className="py-3 px-4 align-top">
                        <ClickTranslate es={row.popularEs} hy={row.popularHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {isAFOpen('B') && (
            <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-4 space-y-1.5">
              <div className="text-xs font-semibold text-emerald-800">Respuesta para el examen</div>
              <ClickTranslate
                es="El texto presenta características de la literatura culta porque es una creación escrita de autor individual, utiliza un lenguaje elaborado y contiene figuras literarias, como metáforas y personificaciones."
                hy="Տեքստն ունի հեղինակային գրականության հատկանիշներ, քանի որ անհատական գրավոր ստեղծագործություն է, օգտագործում է մշակված լեզու և պարունակում է գեղարվեստական արտահայտչամիջոցներ, ինչպիսիք են փոխաբերությունն ու անձնավորումը։"
                revealAll={revealAll}
                compact
                esClassName="text-[0.95rem] sm:text-base text-stone-900 leading-relaxed"
              />
            </div>
          )}
        </div>

        {/* C) */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
            <div className="flex-1">
              <ClickTranslate
                es="C) Explica con tus palabras las dos expresiones destacadas en el texto. (1 punto)"
                hy="C) Սեփական բառերով բացատրի՛ր տեքստում ընդգծված երկու արտահայտությունները։ (1 միավոր)"
                revealAll={revealAll}
                compact
                esClassName="font-semibold text-stone-900 text-base sm:text-[1.0625rem]"
              />
            </div>
            {!showAllExamAF && (
              <button
                type="button"
                onClick={() => setOpenExamAF((p) => ({ ...p, C: !p.C }))}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
              >
                {isAFOpen('C') ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {isAFOpen('C') ? 'Ocultar respuesta' : 'Mostrar respuesta'}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#FDF8F3] border border-[#EBD2BA] rounded-xl p-4 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-semibold text-[#A84D24]">Primera expresión</div>
                {!showAllExamAF && (
                  <button
                    type="button"
                    onClick={() => setOpenExamAF((p) => ({ ...p, C1: !p.C1 }))}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-[#9A421C] bg-white hover:bg-[#FAF0E6] border border-[#E5C5A7] rounded-md whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {isAFOpen('C') || isAFOpen('C1') ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                    {isAFOpen('C') || isAFOpen('C1') ? 'Ocultar' : 'Mostrar respuesta'}
                  </button>
                )}
              </div>
              <ClickTranslate
                es="«Una nube de tristeza cubría su rostro»."
                hy="«Տխրության ամպը ծածկել էր նրա դեմքը»։"
                revealAll={revealAll}
                compact
                esClassName="font-semibold text-base text-stone-900"
              />
              <ClickTranslate
                es="¿Qué significa esta expresión?"
                hy="Ի՞նչ է նշանակում այս արտահայտությունը։"
                revealAll={revealAll}
                compact
                esClassName="text-sm text-stone-600"
              />
              {(isAFOpen('C') || isAFOpen('C1')) && (
                <div className="bg-[#F4FAF6] border border-emerald-200 rounded-lg p-3 mt-2">
                  <ClickTranslate
                    es="Significa que Alejandro estaba muy triste y que sus sentimientos se reflejaban en su cara."
                    hy="Սա նշանակում է, որ Ալեխանդրոն շատ տխուր էր, և նրա զգացմունքներն արտահայտվում էին դեմքի վրա։"
                    revealAll={revealAll}
                    compact
                    esClassName="text-[0.95rem] sm:text-base text-stone-900"
                  />
                </div>
              )}
            </div>

            <div className="bg-[#FDF8F3] border border-[#EBD2BA] rounded-xl p-4 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-semibold text-[#A84D24]">Segunda expresión</div>
                {!showAllExamAF && (
                  <button
                    type="button"
                    onClick={() => setOpenExamAF((p) => ({ ...p, C2: !p.C2 }))}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-[#9A421C] bg-white hover:bg-[#FAF0E6] border border-[#E5C5A7] rounded-md whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {isAFOpen('C') || isAFOpen('C2') ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                    {isAFOpen('C') || isAFOpen('C2') ? 'Ocultar' : 'Mostrar respuesta'}
                  </button>
                )}
              </div>
              <ClickTranslate
                es="«La amistad era un puente capaz de unir nuestros corazones»."
                hy="«Ընկերությունը կամուրջ էր, որը կարող էր միավորել մեր սրտերը»։"
                revealAll={revealAll}
                compact
                esClassName="font-semibold text-base text-stone-900"
              />
              <ClickTranslate
                es="¿Qué significa esta expresión?"
                hy="Ի՞նչ է նշանակում այս արտահայտությունը։"
                revealAll={revealAll}
                compact
                esClassName="text-sm text-stone-600"
              />
              {(isAFOpen('C') || isAFOpen('C2')) && (
                <div className="bg-[#F4FAF6] border border-emerald-200 rounded-lg p-3 mt-2">
                  <ClickTranslate
                    es="Significa que la amistad permite que las personas se sientan unidas y se ayuden en los momentos difíciles."
                    hy="Սա նշանակում է, որ ընկերությունը միավորում է մարդկանց և օգնում նրանց դժվար պահերին աջակցել միմյանց։"
                    revealAll={revealAll}
                    compact
                    esClassName="text-[0.95rem] sm:text-base text-stone-900"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* D) */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
            <div className="flex-1">
              <ClickTranslate
                es="D) ¿Dirías que las expresiones que acabas de explicar son alguna figura literaria? ¿Cuál? Justifica tu respuesta. (1 punto)"
                hy="D) Արդյո՞ք քո բացատրած արտահայտությունները գեղարվեստական արտահայտչամիջոցներ են։ Ո՞րն է։ Հիմնավորի՛ր պատասխանդ։ (1 միավոր)"
                revealAll={revealAll}
                compact
                esClassName="font-semibold text-stone-900 text-base sm:text-[1.0625rem]"
              />
            </div>
            {!showAllExamAF && (
              <button
                type="button"
                onClick={() => setOpenExamAF((p) => ({ ...p, D: !p.D }))}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
              >
                {isAFOpen('D') ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {isAFOpen('D') ? 'Ocultar respuesta' : 'Mostrar respuesta'}
              </button>
            )}
          </div>
          {isAFOpen('D') && (
            <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-4 space-y-2">
              <div className="text-xs font-semibold text-emerald-800">Respuesta</div>
              <ClickTranslate
                es="Sí, ambas expresiones son metáforas porque establecen una relación de semejanza entre dos realidades sin utilizar la palabra «como». En la primera expresión, la tristeza se presenta como una nube. En la segunda, la amistad se identifica con un puente que une a las personas."
                hy="Այո՛, երկու արտահայտություններն էլ փոխաբերություններ են, քանի որ երկու երևույթների միջև նմանություն են ստեղծում՝ առանց «ինչպես» բառի օգտագործման։ Առաջին արտահայտության մեջ տխրությունը ներկայացվում է որպես ամպ, իսկ երկրորդում ընկերությունը՝ որպես մարդկանց միավորող կամուրջ։"
                revealAll={revealAll}
                compact
                esClassName="text-[0.95rem] sm:text-base text-stone-900 leading-relaxed"
              />
            </div>
          )}
        </div>

        {/* E) */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
            <div className="flex-1">
              <ClickTranslate
                es="E) ¿A qué género literario pertenece el texto? Justifica tu respuesta con ejemplos del texto. (1 punto)"
                hy="E) Ո՞ր գրական ժանրին է պատկանում տեքստը։ Հիմնավորի՛ր պատասխանդ՝ տեքստից օրինակներ բերելով։ (1 միավոր)"
                revealAll={revealAll}
                compact
                esClassName="font-semibold text-stone-900 text-base sm:text-[1.0625rem]"
              />
            </div>
            {!showAllExamAF && (
              <button
                type="button"
                onClick={() => setOpenExamAF((p) => ({ ...p, E: !p.E }))}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
              >
                {isAFOpen('E') ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {isAFOpen('E') ? 'Ocultar respuesta' : 'Mostrar respuesta'}
              </button>
            )}
          </div>

          {/* 3 genres reference */}
          <div className="space-y-2.5">
            <ClickTranslate
              es="Los géneros literarios"
              hy="Գրական ժանրերը"
              revealAll={revealAll}
              compact
              esClassName="text-xs font-semibold text-[#A84D24]"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {THREE_GENRES_CARDS.map((g, idx) => (
                <div key={idx} className="bg-[#FDF8F3] border border-[#EBD2BA] rounded-xl p-4 space-y-1.5">
                  <ClickTranslate es={g.titleEs} hy={g.titleHy} revealAll={revealAll} compact esClassName="font-semibold text-base text-stone-900" />
                  <ClickTranslate es={g.descEs} hy={g.descHy} revealAll={revealAll} compact esClassName="text-sm text-stone-700 leading-relaxed" />
                  <ClickTranslate es={g.exEs} hy={g.exHy} revealAll={revealAll} compact esClassName="text-xs font-medium text-[#9A421C]" />
                </div>
              ))}
            </div>
          </div>

          {isAFOpen('E') && (
            <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-4 space-y-1.5">
              <div className="text-xs font-semibold text-emerald-800">Respuesta para el examen</div>
              <ClickTranslate
                es="El texto pertenece al género narrativo porque cuenta una historia mediante un narrador, presenta personajes y relata acontecimientos que ocurren en un espacio y un tiempo determinados. Por ejemplo, el narrador utiliza la primera persona en «Mi amigo Daniel y yo llevábamos varias semanas preparándonos». Los acontecimientos ocurren principalmente en un estadio y los personajes participan en un torneo de fútbol."
                hy="Տեքստը պատկանում է պատմողական ժանրին, քանի որ պատմողը ներկայացնում է պատմություն, որտեղ կան հերոսներ և որոշակի ժամանակում ու վայրում տեղի ունեցող իրադարձություններ։ Օրինակ՝ պատմողն օգտագործում է առաջին դեմքը, իսկ հիմնական իրադարձությունները տեղի են ունենում մարզադաշտում։"
                revealAll={revealAll}
                compact
                esClassName="text-[0.95rem] sm:text-base text-stone-900 leading-relaxed"
              />
            </div>
          )}
        </div>

        {/* F) */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
            <div className="flex-1">
              <ClickTranslate
                es="F) ¿Dirías que este texto tiene lenguaje literario? Justifica tu respuesta. (1 punto)"
                hy="F) Կասե՞ս, որ այս տեքստում օգտագործվում է գեղարվեստական լեզու։ Հիմնավորի՛ր պատասխանդ։ (1 միավոր)"
                revealAll={revealAll}
                compact
                esClassName="font-semibold text-stone-900 text-base sm:text-[1.0625rem]"
              />
            </div>
            {!showAllExamAF && (
              <button
                type="button"
                onClick={() => setOpenExamAF((p) => ({ ...p, F: !p.F }))}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
              >
                {isAFOpen('F') ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {isAFOpen('F') ? 'Ocultar respuesta' : 'Mostrar respuesta'}
              </button>
            )}
          </div>
          {isAFOpen('F') && (
            <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-4 space-y-1.5">
              <div className="text-xs font-semibold text-emerald-800">Respuesta</div>
              <ClickTranslate
                es="Sí, el texto utiliza lenguaje literario porque no solo informa sobre los acontecimientos, sino que también busca transmitir emociones y crear belleza mediante figuras literarias. Por ejemplo, utiliza la personificación en «el viento cantaba entre las ventanas» y la metáfora en «una nube de tristeza cubría su rostro»."
                hy="Այո՛, տեքստում օգտագործվում է գեղարվեստական լեզու, քանի որ այն ոչ միայն տեղեկություններ է փոխանցում իրադարձությունների մասին, այլև փորձում է զգացմունքներ արտահայտել և գեղեցկություն ստեղծել գեղարվեստական միջոցներով։"
                revealAll={revealAll}
                compact
                esClassName="text-[0.95rem] sm:text-base text-stone-900 leading-relaxed"
              />
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5: 11 Figuras literarias */}
      <section id="res-5" className="scroll-mt-24 space-y-5">
        <div className="bg-[#FCECD9] border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <ClickTranslate
              es="Sección 5 · Definiciones, ejemplos y preguntas"
              hy="Բաժին 5 · Սահմանումներ, օրինակներ և հարցեր"
              revealAll={revealAll}
              compact
              esClassName="text-xs font-semibold text-[#A84D24]"
            />
            <ClickTranslate
              es="5. Figuras literarias (11 figuras clave)"
              hy="5. Գեղարվեստական արտահայտչամիջոցներ (11 հիմնական միջոց)"
              revealAll={revealAll}
              compact
              esClassName="font-display text-xl sm:text-2xl font-semibold text-stone-900"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowAllFigCardAnswers((v) => !v)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-xl transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
          >
            {showAllFigCardAnswers ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showAllFigCardAnswers ? 'Ocultar respuestas' : 'Mostrar todas las respuestas'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RESUMEN_FIGURES_11.map((fig) => {
            const isOpen = showAllFigCardAnswers || !!openFigCardAnswers[fig.number];
            return (
              <div key={fig.number} className="bg-white border border-[#E5C5A7] rounded-2xl p-5 shadow-xs space-y-3 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="text-xs font-mono-tabular font-semibold text-[#A84D24]">{fig.number}.</div>
                  <ClickTranslate
                    es={fig.nameEs}
                    hy={fig.nameHy}
                    revealAll={revealAll}
                    compact
                    esClassName="font-semibold text-stone-900 text-lg"
                  />
                  <ClickTranslate
                    es={fig.defEs}
                    hy={fig.defHy}
                    revealAll={revealAll}
                    compact
                    esClassName="text-[0.95rem] sm:text-base text-stone-700 leading-relaxed"
                  />
                  <div className="space-y-1.5 pt-1">
                    {fig.examples.map((ex, i) => (
                      <div key={i} className="bg-[#FDF8F3] border border-[#EBD2BA] rounded-xl px-3.5 py-2">
                        <ClickTranslate
                          es={ex.es}
                          hy={ex.hy}
                          revealAll={revealAll}
                          compact
                          esClassName="text-[0.95rem] sm:text-base text-stone-900 whitespace-pre-line"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F2E2D2] space-y-2.5">
                  <ClickTranslate
                    es={`Pregunta: ${fig.questionEs}`}
                    hy={`Հարց. ${fig.questionHy}`}
                    revealAll={revealAll}
                    compact
                    esClassName="font-semibold text-sm sm:text-[0.95rem] text-stone-900"
                  />
                  {!showAllFigCardAnswers && (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFigCardAnswers((p) => ({ ...p, [fig.number]: !p[fig.number] }))
                      }
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {isOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      {isOpen ? 'Ocultar respuesta' : 'Mostrar respuesta'}
                    </button>
                  )}
                  {isOpen && (
                    <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl px-3.5 py-2.5">
                      <ClickTranslate
                        es={`Respuesta: ${fig.answerEs}`}
                        hy={`Պատասխան. ${fig.answerHy}`}
                        revealAll={revealAll}
                        compact
                        esClassName="text-sm sm:text-[0.95rem] text-emerald-950"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 6: Respuestas de las figuras literarias del examen */}
      <section id="res-6" className="scroll-mt-24 space-y-5">
        <SectionHeading
          badgeEs="Sección 6 · Oraciones reales de examen"
          badgeHy="Բաժին 6 · Քննության իրական նախադասություններ"
          titleEs="6. Figuras literarias del modelo de examen"
          titleHy="6. Քննության օրինակի գեղարվեստական արտահայտչամիջոցները"
          subtitleEs="Analiza estas seis frases reales del examen. Haz clic en «Mostrar respuesta» para comprobar la figura literaria y su justificación."
          subtitleHy="Վերլուծի՛ր քննության այս վեց նախադասությունները։ Սեղմի՛ր «Mostrar respuesta»՝ գեղարվեստական միջոցը և հիմնավորումը ստուգելու համար։"
          revealAll={revealAll}
        />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="bg-[#FAF0E6] border-b border-[#E5C5A7] px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <ClickTranslate
              es="6 oraciones del examen"
              hy="Քննության 6 նախադասություն"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base"
            />
            <button
              type="button"
              onClick={() => setShowAllPhotoExam((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {showAllPhotoExam ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showAllPhotoExam ? 'Ocultar todas' : 'Mostrar todas'}
            </button>
          </div>
          <div className="divide-y divide-[#F2E2D2]">
            {PHOTO_EXAM_FIGURES.map((row, idx) => {
              const isOpen = showAllPhotoExam || !!openPhotoExam[idx];
              return (
                <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5 flex-1">
                    <span className="font-mono-tabular text-xs text-stone-400 pt-1 w-6 shrink-0">{idx + 1}.</span>
                    <div className="flex-1 space-y-2">
                      <ClickTranslate
                        es={row.sentenceEs}
                        hy={row.sentenceHy}
                        revealAll={revealAll}
                        compact
                        esClassName="font-medium text-[0.95rem] sm:text-base text-stone-900"
                      />
                      {isOpen && (
                        <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl px-4 py-3 space-y-1">
                          <ClickTranslate
                            es={row.figureEs}
                            hy={row.figureHy}
                            revealAll={revealAll}
                            compact
                            esClassName="font-semibold text-[0.95rem] sm:text-base text-emerald-900"
                          />
                          <ClickTranslate
                            es={`Justificación: ${row.justificationEs}`}
                            hy={`Հիմնավորում. ${row.justificationHy}`}
                            revealAll={revealAll}
                            compact
                            esClassName="text-sm text-stone-700"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {!showAllPhotoExam && (
                    <button
                      type="button"
                      onClick={() => setOpenPhotoExam((p) => ({ ...p, [idx]: !p[idx] }))}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
                    >
                      {isOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      {isOpen ? 'Ocultar' : 'Mostrar respuesta'}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#FCECD9] border border-[#E5C5A7] rounded-2xl p-5">
          <ClickTranslate
            es="Especialmente importante: no basta con nombrar la figura literaria; es imprescindible saber explicar por qué corresponde a esa figura."
            hy="Հատկապես կարևոր է. բավարար չէ միայն անվանել գեղարվեստական արտահայտչամիջոցը, անհրաժեշտ է նաև կարողանալ բացատրել, թե ինչու է հենց այդ միջոցը։"
            revealAll={revealAll}
            compact
            esClassName="text-[0.95rem] sm:text-base text-stone-900 leading-relaxed"
          />
        </div>
      </section>

      {/* SECTION 7: 15 ejercicios de práctica */}
      <section id="res-7" className="scroll-mt-24 space-y-5">
        <SectionHeading
          badgeEs="Sección 7 · 15 ejercicios de práctica"
          badgeHy="Բաժին 7 · 15 գործնական վարժություն"
          titleEs="7. Ejercicios de examen con respuestas"
          titleHy="7. Քննական վարժություններ պատասխաններով"
          subtitleEs="Identifica la figura literaria y justifica tu respuesta."
          subtitleHy="Որոշի՛ր գեղարվեստական արտահայտչամիջոցը և հիմնավորի՛ր պատասխանդ։"
          revealAll={revealAll}
        />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="bg-[#FAF0E6] border-b border-[#E5C5A7] px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <ClickTranslate
              es="15 ejercicios de práctica"
              hy="15 գործնական վարժություն"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base"
            />
            <button
              type="button"
              onClick={() => setShowAllPractice15((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {showAllPractice15 ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showAllPractice15 ? 'Ocultar todas' : 'Mostrar todas'}
            </button>
          </div>
          <div className="divide-y divide-[#F2E2D2]">
            {RESUMEN_PRACTICE_15.map((item) => {
              const isOpen = showAllPractice15 || !!openPractice15[item.id];
              return (
                <div key={item.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5 flex-1">
                    <span className="font-mono-tabular text-xs text-stone-400 pt-1 w-6 shrink-0">{item.id}.</span>
                    <div className="flex-1 space-y-2">
                      <ClickTranslate
                        es={item.sentenceEs}
                        hy={item.sentenceHy}
                        revealAll={revealAll}
                        compact
                        esClassName="text-[0.95rem] sm:text-base text-stone-900"
                      />
                      {isOpen && (
                        <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl px-4 py-3 space-y-1">
                          <ClickTranslate
                            es={item.figureEs}
                            hy={item.figureHy}
                            revealAll={revealAll}
                            compact
                            esClassName="font-semibold text-[0.95rem] sm:text-base text-emerald-900"
                          />
                          <ClickTranslate
                            es={item.justificationEs}
                            hy={item.justificationHy}
                            revealAll={revealAll}
                            compact
                            esClassName="text-sm text-stone-700"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  {!showAllPractice15 && (
                    <button
                      type="button"
                      onClick={() => setOpenPractice15((p) => ({ ...p, [item.id]: !p[item.id] }))}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
                    >
                      {isOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      {isOpen ? 'Ocultar' : 'Mostrar respuesta'}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: Análisis del texto narrativo (12 preguntas) */}
      <section id="res-8" className="scroll-mt-24 space-y-5">
        <div className="bg-[#FCECD9] border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <ClickTranslate
              es="Sección 8 · Preguntas adicionales de examen"
              hy="Բաժին 8 · Քննության լրացուցիչ հարցեր"
              revealAll={revealAll}
              compact
              esClassName="text-xs font-semibold text-[#A84D24]"
            />
            <ClickTranslate
              es="8. Análisis del texto narrativo (12 preguntas)"
              hy="8. Պատմողական տեքստի վերլուծություն (12 հարց)"
              revealAll={revealAll}
              compact
              esClassName="font-display text-xl sm:text-2xl font-semibold text-stone-900"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowAllAnalysis12((v) => !v)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-xl transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
          >
            {showAllAnalysis12 ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showAllAnalysis12 ? 'Ocultar todas las respuestas' : 'Mostrar todas las respuestas'}
          </button>
        </div>

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs divide-y divide-[#F2E2D2]">
          {NARRATIVE_ANALYSIS_12.map((item) => {
            const isOpen = showAllAnalysis12 || !!openAnalysis12[item.number];
            return (
              <div key={item.number} className="p-5 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
                  <div className="flex items-start gap-2.5 flex-1">
                    <span className="font-mono-tabular text-xs font-semibold text-[#A84D24] pt-1 w-6 shrink-0">
                      {item.number}.
                    </span>
                    <div className="flex-1">
                      <ClickTranslate
                        es={item.questionEs}
                        hy={item.questionHy}
                        revealAll={revealAll}
                        compact
                        esClassName="font-semibold text-stone-900 text-base sm:text-[1.0625rem]"
                      />
                    </div>
                  </div>
                  {!showAllAnalysis12 && (
                    <button
                      type="button"
                      onClick={() => setOpenAnalysis12((p) => ({ ...p, [item.number]: !p[item.number] }))}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
                    >
                      {isOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      {isOpen ? 'Ocultar respuesta' : 'Mostrar respuesta'}
                    </button>
                  )}
                </div>

                {isOpen && (
                  <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-4 space-y-3">
                    <ClickTranslate
                      es={item.answerEs}
                      hy={item.answerHy}
                      revealAll={revealAll}
                      compact
                      esClassName="text-[0.95rem] sm:text-base text-stone-900 leading-relaxed"
                    />
                    {item.verbTable && (
                      <div className="overflow-x-auto border border-emerald-200 rounded-lg bg-white">
                        <table className="w-full text-left border-collapse text-sm sm:text-[0.95rem]">
                          <thead>
                            <tr className="bg-[#FAF0E6] border-b border-[#E5C5A7]">
                              <th className="py-2.5 px-4 font-semibold text-stone-800">Pretérito imperfecto</th>
                              <th className="py-2.5 px-4 font-semibold text-stone-800">Pretérito indefinido</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#F2E2D2]">
                            {item.verbTable.map((v, vi) => (
                              <tr key={vi}>
                                <td className="py-2 px-4 font-medium text-stone-900">{v.imperfecto}</td>
                                <td className="py-2 px-4 font-medium text-stone-900">{v.indefinido}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    {item.verbNoteEs && item.verbNoteHy && (
                      <ClickTranslate
                        es={item.verbNoteEs}
                        hy={item.verbNoteHy}
                        revealAll={revealAll}
                        compact
                        esClassName="text-sm text-emerald-950"
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 9: Segundo texto para practicar el resumen de forma independiente */}
      <section id="res-9" className="scroll-mt-24 space-y-5">
        <SectionHeading
          badgeEs="Sección 9 · Práctica independiente"
          badgeHy="Բաժին 9 · Ինքնուրույն վարժանք"
          titleEs="9. Segundo texto para practicar el resumen — Una sorpresa en la biblioteca"
          titleHy="9. Երկրորդ տեքստը՝ ամփոփումն ինքնուրույն մարզելու համար — Անակնկալ գրադարանում"
          revealAll={revealAll}
        />

        {/* Reading passage */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#F2E2D2] pb-4">
            <ClickTranslate
              es="Una sorpresa en la biblioteca"
              hy="Անակնկալ գրադարանում"
              revealAll={revealAll}
              compact
              esClassName="font-display text-2xl sm:text-3xl font-semibold text-stone-900"
            />
            <span className="text-xs text-[#A84D24] bg-[#FAF0E6] border border-[#E5C5A7] px-3 py-1.5 rounded-lg">
              Clic en cada párrafo → Հայերեն
            </span>
          </div>
          <div className="space-y-3.5">
            {BIBLIOTECA_TEXT_LINES.map((line, idx) => (
              <ClickTranslate
                key={idx}
                es={line.es}
                hy={line.hy}
                highlight={line.highlight}
                revealAll={revealAll}
                esClassName="leading-relaxed text-base sm:text-[1.0625rem]"
              />
            ))}
          </div>
        </div>

        {/* 10 Questions */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="bg-[#FAF0E6] border-b border-[#E5C5A7] px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <ClickTranslate
              es="Preguntas y respuestas (10 preguntas)"
              hy="Հարցեր և պատասխաններ (10 հարց)"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base"
            />
            <button
              type="button"
              onClick={() => setShowAllBibliotecaQA((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {showAllBibliotecaQA ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showAllBibliotecaQA ? 'Ocultar todas' : 'Mostrar todas'}
            </button>
          </div>
          <div className="divide-y divide-[#F2E2D2]">
            {BIBLIOTECA_QA_10.map((q, idx) => {
              const isOpen = showAllBibliotecaQA || !!openBibliotecaQA[idx];
              return (
                <div key={idx} className="p-4 sm:p-5 space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
                    <div className="flex-1">
                      <ClickTranslate
                        es={q.questionEs}
                        hy={q.questionHy}
                        revealAll={revealAll}
                        compact
                        esClassName="font-semibold text-stone-900 text-base sm:text-[1.0625rem]"
                      />
                    </div>
                    {!showAllBibliotecaQA && (
                      <button
                        type="button"
                        onClick={() => setOpenBibliotecaQA((p) => ({ ...p, [idx]: !p[idx] }))}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
                      >
                        {isOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        {isOpen ? 'Ocultar respuesta' : 'Mostrar respuesta'}
                      </button>
                    )}
                  </div>
                  {isOpen && (
                    <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-4">
                      <ClickTranslate
                        es={q.answerEs}
                        hy={q.answerHy}
                        revealAll={revealAll}
                        compact
                        esClassName="text-[0.95rem] sm:text-base text-stone-900 leading-relaxed"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Summary Writer */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="space-y-1">
            <ClickTranslate
              es="Escribe tu propio resumen"
              hy="Գրի՛ր քո սեփական ամփոփումը"
              revealAll={revealAll}
              compact
              esClassName="font-display text-xl font-semibold text-stone-900"
            />
            <ClickTranslate
              es="Escribe el resumen de «Una sorpresa en la biblioteca» con tus propias palabras en un solo párrafo."
              hy="Գրի՛ր «Անակնկալ գրադարանում» տեքստի ամփոփումը քո սեփական բառերով՝ մեկ պարբերությամբ։"
              revealAll={revealAll}
              compact
              esClassName="text-[0.95rem] sm:text-base text-stone-600"
            />
          </div>

          <textarea
            value={userResumen}
            onChange={(e) => setUserResumen(e.target.value)}
            rows={5}
            placeholder="El texto cuenta la historia de Pablo, que va a la biblioteca..."
            className="w-full rounded-xl bg-[#FDF8F3] border border-[#E5C5A7] p-4 text-[0.95rem] sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C25D2E] focus:ring-2 focus:ring-[#F3D2B5] leading-relaxed"
          />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-stone-600 font-mono-tabular">
              Palabras: <strong className="text-stone-900">{wordCount}</strong>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleCheckResumen}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                Corregir mi resumen
              </button>
              <button
                type="button"
                onClick={() => setShowModelResumen((v) => !v)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {showModelResumen ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                {showModelResumen ? 'Ocultar resumen modelo' : 'Ver resumen modelo'}
              </button>
              <button
                type="button"
                onClick={handleResetResumen}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-stone-700 bg-white hover:bg-[#FAF0E6] border border-[#E5C5A7] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                Reiniciar
              </button>
            </div>
          </div>

          {feedback && (
            <div className="bg-[#FDF8F3] border border-[#E5C5A7] rounded-xl p-4 space-y-2.5">
              <ClickTranslate
                es={feedback.scoreLabelEs}
                hy={feedback.scoreLabelHy}
                revealAll={revealAll}
                compact
                esClassName="font-semibold text-base text-[#9A421C]"
              />
              <ul className="space-y-2">
                {feedback.items.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className={`font-bold mt-0.5 shrink-0 ${it.ok ? 'text-emerald-700' : 'text-[#C25D2E]'}`}>
                      {it.ok ? '✓' : '•'}
                    </span>
                    <div className="flex-1">
                      <ClickTranslate
                        es={it.es}
                        hy={it.hy}
                        revealAll={revealAll}
                        compact
                        esClassName="text-sm sm:text-[0.95rem] text-stone-800"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {showModelResumen && (
            <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-4 sm:p-5 space-y-1.5">
              <div className="text-xs font-semibold text-emerald-800">Resumen modelo</div>
              <ClickTranslate
                es={BIBLIOTECA_MODEL_RESUMEN.es}
                hy={BIBLIOTECA_MODEL_RESUMEN.hy}
                revealAll={revealAll}
                compact
                esClassName="text-[0.95rem] sm:text-base text-stone-900 leading-relaxed"
              />
            </div>
          )}
        </div>
      </section>

      {/* SECTION 10: Chuleta y frases para justificar */}
      <section id="res-10" className="scroll-mt-24 space-y-5">
        <SectionHeading
          badgeEs="Sección 10 · Repaso rápido final"
          badgeHy="Բաժին 10 · Արագ կրկնություն քննությունից առաջ"
          titleEs="10. Chuleta para recordar antes del examen"
          titleHy="10. Հուշաթերթիկ՝ քննությունից առաջ հիշելու համար"
          revealAll={revealAll}
        />

        {/* Chuleta 11 rows */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="bg-[#FAF0E6] border-b border-[#E5C5A7] px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <ClickTranslate
              es="Autoevaluación rápida de figuras literarias (11 pistas)"
              hy="Գեղարվեստական միջոցների արագ ստուգում (11 հուշում)"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base"
            />
            <button
              type="button"
              onClick={() => {
                if (showAllChuleta) {
                  setShowAllChuleta(false);
                  setOpenChuleta({});
                } else {
                  setShowAllChuleta(true);
                }
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {showAllChuleta ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showAllChuleta ? 'Ocultar todas las respuestas' : 'Mostrar todas las respuestas'}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
              <thead>
                <tr className="bg-[#FDF8F3] border-b border-[#E5C5A7] text-xs font-semibold text-stone-700">
                  <th className="py-3 px-4 w-3/5">Si encuentras… (clic para Հայերեն)</th>
                  <th className="py-3 px-4 w-2/5">Figura literaria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2E2D2]">
                {CHULETA_FIGURES_11.map((row, idx) => {
                  const isVisible = showAllChuleta || !!openChuleta[idx];
                  return (
                    <tr key={idx} className="hover:bg-[#FDF8F3]">
                      <td className="py-3 px-4 align-top">
                        <ClickTranslate es={row.cueEs} hy={row.cueHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                      </td>
                      <td className="py-3 px-4 align-top">
                        {isVisible ? (
                          <div className="space-y-1">
                            <ClickTranslate
                              es={row.figureEs}
                              hy={row.figureHy}
                              revealAll={revealAll}
                              compact
                              esClassName="font-semibold text-emerald-900 text-[0.95rem] sm:text-base"
                            />
                            {!showAllChuleta && (
                              <button
                                type="button"
                                onClick={() => setOpenChuleta((p) => ({ ...p, [idx]: false }))}
                                className="inline-flex items-center gap-1 text-xs font-medium text-stone-500 hover:text-stone-900 cursor-pointer"
                              >
                                <EyeOff className="w-3 h-3" />
                                Ocultar respuesta
                              </button>
                            )}
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setOpenChuleta((p) => ({ ...p, [idx]: true }))}
                            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-md cursor-pointer transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            Mostrar respuesta
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 10 Frases para justificar */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="bg-[#FAF0E6] border-b border-[#E5C5A7] px-5 py-3.5">
            <ClickTranslate
              es="Frases que debes aprender para justificar tus respuestas"
              hy="Արտահայտություններ, որոնք պետք է սովորել՝ պատասխանները հիմնավորելու համար"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base sm:text-lg"
            />
          </div>
          <div className="divide-y divide-[#F2E2D2]">
            {JUSTIFY_PHRASES_10.map((phrase, idx) => (
              <div key={idx} className="px-5 py-3.5 flex items-start gap-3">
                <span className="font-mono-tabular text-xs font-semibold text-[#A84D24] pt-1 w-6 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <ClickTranslate
                    es={phrase.es}
                    hy={phrase.hy}
                    revealAll={revealAll}
                    compact
                    esClassName="font-medium text-[0.95rem] sm:text-base text-stone-900"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Golden rule */}
        <div className="bg-[#FCECD9] border border-[#E5C5A7] rounded-2xl p-5 sm:p-6">
          <ClickTranslate
            es="Regla fundamental del examen: si en una pregunta aparece «Justifica tu respuesta», no basta con escribir solo el nombre del género o de la figura literaria. Es necesario utilizar «porque», explicar el motivo y, cuando se pida, citar un ejemplo directamente del texto."
            hy="Քննության ամենակարևոր կանոնը. եթե հարցում գրված է «Justifica tu respuesta», բավարար չէ գրել միայն ժանրի կամ գեղարվեստական միջոցի անունը։ Անհրաժեշտ է օգտագործել «porque», բացատրել պատճառը և, երբ պահանջվում է, օրինակ բերել անմիջապես տեքստից։"
            revealAll={revealAll}
            compact
            esClassName="text-[0.95rem] sm:text-base text-stone-900 leading-relaxed font-medium"
          />
        </div>
      </section>
    </div>
  );
};
