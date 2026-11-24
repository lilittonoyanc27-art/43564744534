import React, { useState } from 'react';
import { Check, Eye, EyeOff, RotateCcw, X } from 'lucide-react';
import { ClickTranslate } from './ClickTranslate';
import {
  BilingualLine,
  ExamQA,
  FigurePracticeItem,
  SentenceExerciseRow,
  SimpleQA,
  TheoryQA,
} from './types';
import { MASTER_VOCABULARY } from './dataVocabulary';
import {
  EXERCISE1_FIGURES_20,
  LIT_EXAM1_PARAGRAPHS,
  LIT_EXAM1_QA,
  LIT_EXAM2_EXTRA,
  LIT_EXAM2_QA,
  LIT_EXAM2_STANZAS,
  LIT_EXAM3_EXTRA,
  LIT_EXAM3_QA,
  LIT_EXAM3_SCRIPT,
  SIMULACRO_QUIZ_15,
} from './dataLitExams';
import {
  PREP1_FUNCTIONS_EXERCISE,
  PREP1_FUNCTIONS_QA,
  PREP2_IMPORTANT_QUESTION,
  PREP2_MODALITIES_EXERCISE,
  PREP2_MODALITIES_QA,
  PREP3_COMM_QA,
  PREP3_SITUATION1,
  PREP3_SITUATION2,
  PREP4_FULL_SENTENCE_ANALYSIS,
  PREP4_GRAMMAR_EXERCISE,
  PREP4_GRAMMAR_QA,
  PREP4_HARD_QUESTIONS,
  PREP5_COMPARISON_TABLE,
  PREP5_CULTA_POPULAR_QA,
  PREP_OVERVIEW_TOPICS,
} from './dataCompletePrep1';
import {
  CHECKLIST_TOPICS,
  FINAL_EXAM_PARAGRAPHS,
  FINAL_EXAM_PART_A,
  FINAL_EXAM_PART_B,
  FINAL_EXAM_PART_C1,
  FINAL_EXAM_PART_C2,
  PREP6_CUENTO,
  PREP6_DIFFERENCES,
  PREP6_LEYENDA,
  PREP6_MITO,
  PREP6_ROMANCE_ANALYSIS,
  PREP6_ROMANCE_QA,
  PREP6_ROMANCE_VERSES,
  PREP7_COTIDIANO_EXERCISE,
  PREP7_LITERARY_LANG_QA,
  PREP8_FIGURES_DETAILS,
  PREP9_EXERCISE_25,
  PREP9_FIGURES_DIFF,
} from './dataCompletePrep2';

// ================= Helper Sub-Components =================

const SectionBanner: React.FC<{
  kicker?: string;
  titleEs: string;
  titleHy: string;
  subtitleEs?: string;
  subtitleHy?: string;
  revealAll: boolean;
}> = ({ kicker, titleEs, titleHy, subtitleEs, subtitleHy, revealAll }) => (
  <div className="bg-[#FCECD9] border border-[#E2BE9B] rounded-2xl px-5 py-4 space-y-1">
    {kicker && <p className="text-xs font-semibold text-[#9A421C]">{kicker}</p>}
    <ClickTranslate
      es={titleEs}
      hy={titleHy}
      revealAll={revealAll}
      compact
      esClassName="text-xl sm:text-2xl font-display font-semibold text-stone-900"
    />
    {subtitleEs && subtitleHy && (
      <ClickTranslate
        es={subtitleEs}
        hy={subtitleHy}
        revealAll={revealAll}
        compact
        esClassName="text-sm text-stone-700"
      />
    )}
  </div>
);

const ReadingPassage: React.FC<{
  titleEs: string;
  titleHy: string;
  subtitleEs: string;
  subtitleHy: string;
  lines: BilingualLine[];
  revealAll: boolean;
  isPoem?: boolean;
  isPlay?: boolean;
}> = ({ titleEs, titleHy, subtitleEs, subtitleHy, lines, revealAll, isPoem, isPlay }) => (
  <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
    <div className="border-b border-[#F2E2D2] pb-3.5 space-y-1">
      <ClickTranslate
        es={`${subtitleEs} · Clic en cada frase para ver en Հայերեն`}
        hy={subtitleHy}
        revealAll={revealAll}
        compact
        esClassName="text-xs sm:text-sm text-[#A84D24]"
      />
      <ClickTranslate
        es={titleEs}
        hy={titleHy}
        revealAll={revealAll}
        compact
        esClassName="font-display text-xl sm:text-2xl font-semibold text-stone-900"
      />
    </div>
    <div className={isPoem ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-3'}>
      {lines.map((line, i) => (
        <div
          key={i}
          className={
            isPoem
              ? 'bg-[#FDF6EE] border border-[#EBD2BA] rounded-xl p-4 whitespace-pre-line'
              : line.isStageDirection
              ? 'text-stone-600 italic'
              : ''
          }
        >
          {line.speaker && (
            <span className="font-semibold text-[#9A421C] text-xs tracking-wide mr-2">{line.speaker}:</span>
          )}
          <ClickTranslate
            es={line.es}
            hy={line.hy}
            highlight={line.highlight}
            revealAll={revealAll}
            esClassName={
              isPlay && line.isStageDirection
                ? 'italic text-stone-600 text-sm'
                : 'leading-relaxed text-base sm:text-[1.0625rem]'
            }
          />
        </div>
      ))}
    </div>
  </div>
);

const ExamQAList: React.FC<{
  headingEs?: string;
  headingHy?: string;
  items: ExamQA[];
  revealAll: boolean;
  forceShowAll?: boolean;
}> = ({ headingEs = 'Preguntas del examen', headingHy = 'Քննության հարցերը', items, revealAll, forceShowAll = false }) => {
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});
  const [localAll, setLocalAll] = useState(false);

  const allShown = forceShowAll || localAll;

  const toggleAll = () => {
    if (localAll) {
      setLocalAll(false);
      setOpenAnswers({});
    } else {
      setLocalAll(true);
    }
  };

  return (
    <div className="space-y-3.5">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#FDF7F0] border border-[#E5C5A7] rounded-xl px-4 py-3">
        <ClickTranslate
          es={headingEs}
          hy={headingHy}
          revealAll={revealAll}
          compact
          esClassName="font-semibold text-stone-900 text-base"
        />
        {!forceShowAll && (
          <button
            type="button"
            onClick={toggleAll}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#9A421C] bg-white border border-[#E2BE9B] rounded-lg hover:bg-[#FAF0E6] whitespace-nowrap shrink-0 cursor-pointer transition-colors"
          >
            {localAll ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            {localAll ? 'Ocultar respuestas' : 'Mostrar todas las respuestas'}
          </button>
        )}
      </div>

      {items.map((qa) => {
        const showAnswer = allShown || !!openAnswers[qa.id];
        return (
          <div key={qa.id} className="bg-white border border-[#E5C5A7] rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1 flex-1">
                <div className="text-xs text-[#A84D24] font-mono-tabular font-semibold">
                  {qa.label} {qa.points ? `· ${qa.points}` : ''}
                </div>
                <ClickTranslate
                  es={qa.questionEs}
                  hy={qa.questionHy}
                  revealAll={revealAll}
                  esClassName="font-semibold text-stone-900 text-base sm:text-[1.0625rem]"
                />
              </div>
              {!forceShowAll && (
                <button
                  type="button"
                  onClick={() => setOpenAnswers((prev) => ({ ...prev, [qa.id]: !showAnswer }))}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer transition-colors"
                >
                  {showAnswer ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  {showAnswer ? 'Ocultar respuesta' : 'Mostrar respuesta'}
                </button>
              )}
            </div>

            {showAnswer && (
              <div className="pt-3 border-t border-[#F2E2D2] space-y-2.5">
                {qa.subItems ? (
                  qa.subItems.map((sub, idx) => (
                    <div key={idx} className="bg-[#FDF6EE] border border-[#EBD2BA] rounded-xl p-3.5 space-y-1.5">
                      <ClickTranslate
                        es={sub.termEs}
                        hy={sub.termHy}
                        revealAll={revealAll}
                        esClassName="font-semibold text-stone-900 text-[0.95rem] sm:text-base"
                        compact
                      />
                      <ClickTranslate
                        es={sub.explanationEs}
                        hy={sub.explanationHy}
                        revealAll={revealAll}
                        esClassName="text-stone-700 text-[0.95rem] sm:text-base"
                        compact
                      />
                    </div>
                  ))
                ) : (
                  <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-3.5">
                    <div className="text-xs font-semibold text-emerald-800 mb-1">Respuesta (clic para Հայերեն)</div>
                    <ClickTranslate
                      es={qa.answerEs}
                      hy={qa.answerHy}
                      revealAll={revealAll}
                      compact
                      esClassName="text-stone-800 text-[0.95rem] sm:text-base whitespace-pre-line leading-relaxed"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const SimpleQATable: React.FC<{
  titleEs: string;
  titleHy: string;
  subtitleEs?: string;
  subtitleHy?: string;
  rows: SimpleQA[];
  revealAll: boolean;
}> = ({ titleEs, titleHy, subtitleEs, subtitleHy, rows, revealAll }) => {
  const [shown, setShown] = useState<Record<number, boolean>>({});
  const [allOpen, setAllOpen] = useState(false);

  return (
    <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
      <div className="px-5 py-4 border-b border-[#E5C5A7] bg-[#FAF0E6] flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-0.5">
          <ClickTranslate es={titleEs} hy={titleHy} revealAll={revealAll} compact esClassName="font-semibold text-stone-900 text-base" />
          {subtitleEs && subtitleHy && (
            <ClickTranslate es={subtitleEs} hy={subtitleHy} revealAll={revealAll} compact esClassName="text-xs sm:text-sm text-stone-600" />
          )}
        </div>
        <button
          type="button"
          onClick={() => {
            if (allOpen) {
              setAllOpen(false);
              setShown({});
            } else {
              setAllOpen(true);
            }
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#9A421C] bg-white border border-[#E2BE9B] rounded-lg hover:bg-[#FDF6EE] whitespace-nowrap shrink-0 cursor-pointer"
        >
          {allOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          {allOpen ? 'Ocultar respuestas' : 'Mostrar todas'}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
          <thead>
            <tr className="border-b border-[#E5C5A7] text-xs font-semibold text-stone-600 bg-[#FDF8F3]">
              <th className="py-3 px-5 w-1/2">Pregunta (clic para Հայերեն)</th>
              <th className="py-3 px-5 w-1/2">Respuesta</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F2E2D2]">
            {rows.map((r, i) => {
              const isVisible = allOpen || !!shown[i];
              return (
                <tr key={i} className="hover:bg-[#FDF8F3]">
                  <td className="py-3 px-5 align-top">
                    <ClickTranslate es={r.questionEs} hy={r.questionHy} revealAll={revealAll} compact esClassName="font-medium text-[0.95rem] sm:text-base" />
                  </td>
                  <td className="py-3 px-5 align-top">
                    {isVisible ? (
                      <div className="space-y-1.5">
                        <ClickTranslate es={r.answerEs} hy={r.answerHy} revealAll={revealAll} compact esClassName="text-emerald-900 font-medium text-[0.95rem] sm:text-base" />
                        {!allOpen && (
                          <button
                            type="button"
                            onClick={() => setShown((prev) => ({ ...prev, [i]: false }))}
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
                        onClick={() => setShown((prev) => ({ ...prev, [i]: true }))}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-md cursor-pointer transition-colors"
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
  );
};

const TheoryQAList: React.FC<{ items: TheoryQA[]; revealAll: boolean }> = ({ items, revealAll }) => {
  const [shown, setShown] = useState<Record<number, boolean>>({});
  const [allOpen, setAllOpen] = useState(false);

  return (
    <div className="space-y-3">
      {items.length > 1 && (
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              if (allOpen) {
                setAllOpen(false);
                setShown({});
              } else {
                setAllOpen(true);
              }
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#9A421C] bg-white border border-[#E2BE9B] rounded-lg hover:bg-[#FAF0E6] whitespace-nowrap shrink-0 cursor-pointer"
          >
            {allOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            {allOpen ? 'Ocultar todas las respuestas' : 'Mostrar todas las respuestas'}
          </button>
        </div>
      )}

      {items.map((item, idx) => {
        const isVisible = allOpen || !!shown[idx];
        return (
          <div key={idx} className="bg-white border border-[#E5C5A7] rounded-2xl p-5 shadow-xs space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex items-baseline gap-2 flex-1">
                <span className="font-mono-tabular text-xs font-semibold text-[#A84D24] shrink-0">{item.number}</span>
                <div className="flex-1">
                  <ClickTranslate
                    es={item.questionEs}
                    hy={item.questionHy || item.answerHy}
                    revealAll={revealAll}
                    esClassName="font-semibold text-stone-900 text-base sm:text-[1.0625rem]"
                    compact
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShown((prev) => ({ ...prev, [idx]: !isVisible }))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer transition-colors"
              >
                {isVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {isVisible ? 'Ocultar respuesta' : 'Mostrar respuesta'}
              </button>
            </div>

            {isVisible && (
              <div className="pl-5 pt-2.5 border-t border-[#F2E2D2] space-y-2.5">
                <ClickTranslate
                  es={item.answerEs}
                  hy={item.answerHy}
                  revealAll={revealAll}
                  esClassName="text-[0.95rem] sm:text-base text-stone-800 leading-relaxed"
                  compact
                />
                {item.bulletsEs && (
                  <ul className="list-disc pl-5 space-y-1.5 pt-1">
                    {item.bulletsEs.map((b, bi) => (
                      <li key={bi} className="text-[0.95rem] sm:text-base text-stone-700">
                        <ClickTranslate
                          es={b}
                          hy={item.bulletsHy?.[bi] || ''}
                          revealAll={revealAll}
                          compact
                          esClassName="text-stone-700 text-[0.95rem] sm:text-base"
                        />
                      </li>
                    ))}
                  </ul>
                )}
                {item.examples && item.examples.length > 0 && (
                  <div className="pt-1.5 space-y-1.5">
                    {item.examples.map((ex, ei) => (
                      <div key={ei} className="bg-[#FDF6EE] border border-[#EBD2BA] rounded-xl px-3.5 py-2">
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
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const InteractiveExerciseTable: React.FC<{
  titleEs: string;
  titleHy: string;
  subtitleEs: string;
  subtitleHy: string;
  rows: SentenceExerciseRow[];
  revealAll: boolean;
  showWordCol?: boolean;
}> = ({ titleEs, titleHy, subtitleEs, subtitleHy, rows, revealAll, showWordCol }) => {
  const [shown, setShown] = useState<Record<number, boolean>>({});
  const [allOpen, setAllOpen] = useState(false);

  return (
    <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
      <div className="px-5 py-4 border-b border-[#E5C5A7] bg-[#FAF0E6] flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-0.5">
          <ClickTranslate es={titleEs} hy={titleHy} revealAll={revealAll} compact esClassName="font-semibold text-stone-900 text-base" />
          <ClickTranslate es={subtitleEs} hy={subtitleHy} revealAll={revealAll} compact esClassName="text-xs sm:text-sm text-stone-600" />
        </div>
        <button
          type="button"
          onClick={() => {
            if (allOpen) {
              setAllOpen(false);
              setShown({});
            } else {
              setAllOpen(true);
            }
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#9A421C] bg-white border border-[#E2BE9B] rounded-lg hover:bg-[#FDF6EE] whitespace-nowrap shrink-0 cursor-pointer"
        >
          {allOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          {allOpen ? 'Ocultar respuestas' : 'Mostrar todas las respuestas'}
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
          <thead>
            <tr className="border-b border-[#E5C5A7] text-xs font-semibold text-stone-600 bg-[#FDF8F3]">
              <th className="py-3 px-4 w-10 font-mono-tabular">#</th>
              <th className="py-3 px-4">Oración (clic para Հայերեն)</th>
              {showWordCol && <th className="py-3 px-4 w-32">Palabra</th>}
              <th className="py-3 px-4 w-2/5">Respuesta</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F2E2D2]">
            {rows.map((row, idx) => {
              const isVisible = allOpen || !!shown[idx];
              return (
                <tr key={idx} className="hover:bg-[#FDF8F3]">
                  <td className="py-3 px-4 align-top font-mono-tabular text-xs text-stone-400">{idx + 1}</td>
                  <td className="py-3 px-4 align-top">
                    <ClickTranslate es={row.sentenceEs} hy={row.sentenceHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                  </td>
                  {showWordCol && (
                    <td className="py-3 px-4 align-top font-semibold text-[#9A421C]">{row.targetWord}</td>
                  )}
                  <td className="py-3 px-4 align-top">
                    {isVisible ? (
                      <div className="space-y-1.5">
                        <ClickTranslate
                          es={row.answerEs}
                          hy={row.answerHy}
                          revealAll={revealAll}
                          compact
                          esClassName="font-semibold text-emerald-800 text-[0.95rem] sm:text-base"
                        />
                        {!allOpen && (
                          <button
                            type="button"
                            onClick={() => setShown((prev) => ({ ...prev, [idx]: false }))}
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
                        onClick={() => setShown((prev) => ({ ...prev, [idx]: true }))}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-md cursor-pointer transition-colors"
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
  );
};

export const FiguresPracticeBlock: React.FC<{
  titleEs: string;
  titleHy: string;
  subtitleEs: string;
  subtitleHy: string;
  items: FigurePracticeItem[];
  revealAll: boolean;
}> = ({ titleEs, titleHy, subtitleEs, subtitleHy, items, revealAll }) => {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({});
  const openedCount = items.filter((it) => openMap[it.id]).length;
  const allShown = openedCount === items.length;

  const toggleAll = () => {
    if (allShown) {
      setOpenMap({});
    } else {
      const next: Record<number, boolean> = {};
      items.forEach((it) => {
        next[it.id] = true;
      });
      setOpenMap(next);
    }
  };

  return (
    <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
      <div className="px-5 py-4 border-b border-[#E5C5A7] bg-[#FAF0E6] flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-0.5">
          <ClickTranslate es={titleEs} hy={titleHy} revealAll={revealAll} compact esClassName="font-semibold text-stone-900 text-base" />
          <ClickTranslate es={subtitleEs} hy={subtitleHy} revealAll={revealAll} compact esClassName="text-xs sm:text-sm text-stone-600" />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono-tabular text-xs sm:text-sm text-stone-700">
            {openedCount} de {items.length} abiertas
          </span>
          <button
            type="button"
            onClick={toggleAll}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg whitespace-nowrap shrink-0 cursor-pointer transition-colors"
          >
            {allShown ? 'Ocultar respuestas' : 'Mostrar todas las respuestas'}
          </button>
        </div>
      </div>

      <div className="divide-y divide-[#F2E2D2]">
        {items.map((item) => {
          const isOpen = !!openMap[item.id];
          return (
            <div key={item.id} className="px-5 py-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex items-start gap-2.5 flex-1">
                <span className="font-mono-tabular text-xs text-stone-400 pt-1 w-6 shrink-0">{item.id}.</span>
                <div className="flex-1 space-y-2">
                  <ClickTranslate es={item.sentenceEs} hy={item.sentenceHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                  {isOpen && (
                    <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl px-3.5 py-2.5 space-y-1">
                      <ClickTranslate
                        es={item.figureEs}
                        hy={item.figureHy}
                        revealAll={revealAll}
                        compact
                        esClassName="text-sm font-semibold text-emerald-900"
                      />
                      <ClickTranslate
                        es={item.justificationEs}
                        hy={item.justificationHy}
                        revealAll={revealAll}
                        compact
                        esClassName="text-xs sm:text-sm text-stone-700"
                      />
                    </div>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpenMap((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer transition-colors"
              >
                {isOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {isOpen ? 'Ocultar' : 'Mostrar respuesta'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ================= SECTION 1: LITERATURE EXAMS (PART I) =================
export const LiteratureExamsSection: React.FC<{ revealAll: boolean }> = ({ revealAll }) => {
  const genres = MASTER_VOCABULARY.filter((v) => v.category === 'genres');
  const words = MASTER_VOCABULARY.filter((v) => v.category === 'words');
  const phrases = MASTER_VOCABULARY.filter((v) => v.category === 'phrases');
  const part1Figures = MASTER_VOCABULARY.filter(
    (v) =>
      v.category === 'figures' &&
      !['Onomatopeya', 'Paronomasia', 'Epanadiplosis'].includes(v.es)
  );

  return (
    <div className="space-y-9">
      {/* Intro */}
      <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-2">
        <p className="text-xs font-semibold text-[#A84D24]">1.º ESO · Español / Հայերեն</p>
        <ClickTranslate
          es="Preparación para el examen de Literatura — 1.º ESO"
          hy="Գրականության քննության նախապատրաստում — 1.º ESO"
          revealAll={revealAll}
          compact
          esClassName="text-2xl sm:text-3xl font-display font-semibold text-stone-900"
        />
        <ClickTranslate
          es="Textos originales de práctica con vocabulario literario de 1.º ESO. Haz clic en cualquier expresión en español para abrir su traducción al armenio y pulsa «Mostrar respuesta» para comprobar las soluciones."
          hy="Գործնական բնօրինակ տեքստեր 1.º ESO մակարդակի գրական բառապաշարով։ Սեղմի՛ր իսպաներեն ցանկացած արտահայտության վրա՝ հայերեն թարգմանությունը տեսնելու համար, և սեղմի՛ր «Mostrar respuesta»՝ պատասխանները ստուգելու համար։"
          revealAll={revealAll}
          compact
          esClassName="text-[0.95rem] sm:text-base text-stone-600 leading-relaxed"
        />
      </div>

      {/* 1. Grandes géneros literarios */}
      <section id="lit-genres" className="space-y-4 scroll-mt-24">
        <SectionBanner
          titleEs="1. Grandes géneros literarios"
          titleHy="1. Գրականության հիմնական ժանրերը"
          revealAll={revealAll}
        />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
              <thead>
                <tr className="bg-[#FAF0E6] border-b border-[#E5C5A7] text-xs font-semibold text-stone-700">
                  <th className="py-3 px-4">Género literario (clic para Հայերեն)</th>
                  <th className="py-3 px-4">Características (clic para Հայերեն)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2E2D2]">
                {genres.map((g) => (
                  <tr key={g.id}>
                    <td className="py-3.5 px-4 align-top font-semibold w-1/3">
                      <ClickTranslate es={g.es} hy={g.hy} revealAll={revealAll} compact esClassName="font-semibold text-[0.95rem] sm:text-base" />
                    </td>
                    <td className="py-3.5 px-4 align-top">
                      <ClickTranslate
                        es={g.extraEs || ''}
                        hy={g.extraHy || ''}
                        revealAll={revealAll}
                        compact
                        esClassName="text-stone-700 text-[0.95rem] sm:text-base"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Palabras importantes */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 bg-[#FAF0E6] border-b border-[#E5C5A7]">
            <ClickTranslate
              es={`Palabras importantes para el examen (${words.length})`}
              hy={`Կարևոր բառեր քննության համար (${words.length})`}
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:gap-px bg-[#F2E2D2]">
            {words.map((w) => (
              <div key={w.id} className="bg-white p-3.5">
                <ClickTranslate es={w.es} hy={w.hy} revealAll={revealAll} compact esClassName="font-medium text-[0.95rem] sm:text-base" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMEN 1 — Narrativa */}
      <section id="lit-exam1" className="space-y-4 scroll-mt-24">
        <SectionBanner
          kicker="EXAMEN 1 · Género narrativo"
          titleEs="Un pequeño gesto"
          titleHy="Մի փոքրիկ ժեստ"
          revealAll={revealAll}
        />
        <ReadingPassage
          titleEs="Un pequeño gesto"
          titleHy="Մի փոքրիկ ժեստ"
          subtitleEs="Texto original de práctica"
          subtitleHy="Գործնական բնօրինակ տեքստ"
          lines={LIT_EXAM1_PARAGRAPHS}
          revealAll={revealAll}
        />
        <ExamQAList items={LIT_EXAM1_QA} revealAll={revealAll} />
      </section>

      {/* EXAMEN 2 — Lírica */}
      <section id="lit-exam2" className="space-y-4 scroll-mt-24">
        <SectionBanner
          kicker="EXAMEN 2 · Género lírico"
          titleEs="La amistad verdadera"
          titleHy="Իսկական ընկերությունը"
          revealAll={revealAll}
        />
        <ReadingPassage
          titleEs="La amistad verdadera"
          titleHy="Իսկական ընկերությունը"
          subtitleEs="Poema original de práctica"
          subtitleHy="Գործնական բնօրինակ բանաստեղծություն"
          lines={LIT_EXAM2_STANZAS}
          revealAll={revealAll}
          isPoem
        />
        <ExamQAList items={LIT_EXAM2_QA} revealAll={revealAll} />
        <SimpleQATable
          titleEs="Preguntas adicionales sobre la lírica"
          titleHy="Լրացուցիչ հարցեր քնարերգության վերաբերյալ"
          subtitleEs="9 preguntas de repaso sobre el poema"
          subtitleHy="9 կրկնության հարց բանաստեղծության վերաբերյալ"
          rows={LIT_EXAM2_EXTRA}
          revealAll={revealAll}
        />
      </section>

      {/* EXAMEN 3 — Teatro */}
      <section id="lit-exam3" className="space-y-4 scroll-mt-24">
        <SectionBanner
          kicker="EXAMEN 3 · Género teatral"
          titleEs="Una sorpresa inolvidable"
          titleHy="Անմոռանալի անակնկալ"
          revealAll={revealAll}
        />
        <ReadingPassage
          titleEs="Una sorpresa inolvidable"
          titleHy="Անմոռանալի անակնկալ"
          subtitleEs="Texto teatral original de práctica"
          subtitleHy="Գործնական բնօրինակ թատերական տեքստ"
          lines={LIT_EXAM3_SCRIPT}
          revealAll={revealAll}
          isPlay
        />
        <ExamQAList items={LIT_EXAM3_QA} revealAll={revealAll} />
        <SimpleQATable
          titleEs="Preguntas adicionales sobre el teatro"
          titleHy="Լրացուցիչ հարցեր թատրոնի վերաբերյալ"
          subtitleEs="9 preguntas de repaso sobre el texto teatral"
          subtitleHy="9 կրկնության հարց թատերական տեքստի վերաբերյալ"
          rows={LIT_EXAM3_EXTRA}
          revealAll={revealAll}
        />
      </section>

      {/* 4. Figuras literarias + Ejercicio 1 (20 frases) */}
      <section id="lit-figures" className="space-y-4 scroll-mt-24">
        <SectionBanner
          titleEs="4. Figuras literarias"
          titleHy="4. Գեղարվեստական պատկերավորման միջոցներ"
          subtitleEs="Es importante recordar el nombre de cada figura y saber explicar por qué se utiliza en la frase."
          subtitleHy="Կարևոր է ոչ միայն հիշել գեղարվեստական միջոցի անունը, այլև կարողանալ բացատրել, թե ինչու է այն օգտագործվել տվյալ նախադասության մեջ։"
          revealAll={revealAll}
        />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
              <thead>
                <tr className="bg-[#FAF0E6] border-b border-[#E5C5A7] text-xs font-semibold text-stone-700">
                  <th className="py-3 px-4 w-1/3">Figura literaria (clic para Հայերեն)</th>
                  <th className="py-3 px-4">Explicación (clic para Հայերեն)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2E2D2]">
                {part1Figures.map((fig) => (
                  <tr key={fig.id}>
                    <td className="py-3 px-4 align-top font-semibold text-stone-900">
                      <ClickTranslate es={fig.es} hy={fig.hy} revealAll={revealAll} compact esClassName="font-semibold text-[0.95rem] sm:text-base" />
                    </td>
                    <td className="py-3 px-4 align-top">
                      <ClickTranslate
                        es={fig.extraEs || ''}
                        hy={fig.extraHy || ''}
                        revealAll={revealAll}
                        compact
                        esClassName="text-stone-700 text-[0.95rem] sm:text-base"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <FiguresPracticeBlock
          titleEs="Ejercicio 1. Busca las figuras literarias de las siguientes frases"
          titleHy="Վարժություն 1. Գտի՛ր նախադասություններում օգտագործված գեղարվեստական միջոցները"
          subtitleEs="20 frases de práctica con respuesta y justificación"
          subtitleHy="20 գործնական նախադասություն՝ պատասխանով և հիմնավորմամբ"
          items={EXERCISE1_FIGURES_20}
          revealAll={revealAll}
        />
      </section>

      {/* 6. Frases que debe memorizar */}
      <section id="lit-phrases" className="space-y-4 scroll-mt-24">
        <SectionBanner
          titleEs="6. Frases que debe memorizar para el examen"
          titleHy="6. Կարևոր արտահայտություններ, որոնք պետք է հիշել քննության համար"
          subtitleEs="Haz clic en cada frase en español para abrir su traducción al armenio."
          subtitleHy="Սեղմի՛ր իսպաներեն յուրաքանչյուր արտահայտության վրա՝ հայերեն թարգմանությունը տեսնելու համար։"
          revealAll={revealAll}
        />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl divide-y divide-[#F2E2D2] shadow-xs">
          {phrases.map((ph, idx) => (
            <div key={ph.id} className="px-5 py-3.5 flex items-start gap-3">
              <span className="font-mono-tabular text-xs text-stone-400 pt-1 w-6 shrink-0">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <ClickTranslate es={ph.es} hy={ph.hy} revealAll={revealAll} compact esClassName="font-medium text-[0.95rem] sm:text-base" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#E2BE9B] rounded-2xl p-5 shadow-xs">
          <ClickTranslate
            es="Importante para el examen: cuando el enunciado pide «Justifica tu respuesta», no basta con escribir una sola palabra como «metáfora», «narrativa» o «lírica». Hay que nombrar el concepto, explicarlo y, si es posible, citar un ejemplo del texto."
            hy="Կարևոր է քննության համար. եթե առաջադրանքում գրված է «Justifica tu respuesta», բավարար չէ գրել միայն մեկ բառ՝ «metáfora», «narrativa» կամ «lírica»։ Պետք է անվանել ճիշտ տարբերակը, բացատրել այն և անհրաժեշտության դեպքում օրինակ բերել տեքստից։"
            revealAll={revealAll}
            compact
            esClassName="text-[0.95rem] sm:text-base text-stone-800 leading-relaxed"
          />
        </div>
      </section>
    </div>
  );
};

// ================= SECTION 2: COMPLETE PREP (EXAMS 1–9) =================
export const CompletePrepSection: React.FC<{ revealAll: boolean }> = ({ revealAll }) => {
  const [showSit3, setShowSit3] = useState(false);
  const [showPrep1Table, setShowPrep1Table] = useState(false);
  const [showPrep3Table, setShowPrep3Table] = useState(false);
  const [showPrep5Table, setShowPrep5Table] = useState(false);
  const [showRomanceMetric, setShowRomanceMetric] = useState(false);
  const [openPrep9Diff, setOpenPrep9Diff] = useState<Record<number, boolean>>({});
  const [showAllPrep9Diff, setShowAllPrep9Diff] = useState(false);

  const functionsRows = MASTER_VOCABULARY.filter((v) => v.category === 'functions');
  const modalitiesRows = MASTER_VOCABULARY.filter((v) => v.category === 'modalities');
  const commRows = MASTER_VOCABULARY.filter((v) => v.category === 'communication');
  const grammarCats = MASTER_VOCABULARY.filter((v) => v.category === 'grammar' && Number(v.id.split('-')[1]) <= 10);
  const adverbTypes = MASTER_VOCABULARY.filter(
    (v) => v.category === 'grammar' && Number(v.id.split('-')[1]) >= 11 && Number(v.id.split('-')[1]) <= 17
  );
  const popularWorks = MASTER_VOCABULARY.filter(
    (v) => v.category === 'literature_types' && v.id !== 'lit-9'
  );
  const stylePairs = MASTER_VOCABULARY.filter((v) => v.category === 'style');

  const fonico = PREP8_FIGURES_DETAILS.filter((f) => f.level === 'fonico');
  const morfo = PREP8_FIGURES_DETAILS.filter((f) => f.level === 'morfosintactico');
  const semantico = PREP8_FIGURES_DETAILS.filter((f) => f.level === 'semantico');

  return (
    <div className="space-y-10">
      {/* Intro */}
      <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
        <div className="space-y-1.5">
          <p className="text-xs font-semibold text-[#A84D24]">1.º ESO · Temario completo</p>
          <ClickTranslate
            es="Preparación completa para el examen — 1.º ESO"
            hy="Քննության ամբողջական նախապատրաստում — 1.º ESO"
            revealAll={revealAll}
            compact
            esClassName="text-2xl sm:text-3xl font-display font-semibold text-stone-900"
          />
          <ClickTranslate
            es="Preguntas redactadas para practicar respuestas escritas completas y justificadas. Pulsa «Mostrar respuesta» para verificar cada pregunta y haz clic en cualquier frase en español para abrir su traducción al armenio."
            hy="Հարցերը կազմված են այնպես, որ սովորողը կարողանա տալ լիարժեք գրավոր պատասխաններ։ Սեղմի՛ր «Mostrar respuesta»՝ պատասխանը տեսնելու համար, և սեղմի՛ր իսպաներեն ցանկացած արտահայտության վրա՝ հայերեն թարգմանության համար։"
            revealAll={revealAll}
            compact
            esClassName="text-[0.95rem] sm:text-base text-stone-600 leading-relaxed"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {PREP_OVERVIEW_TOPICS.map((t, i) => (
            <div key={i} className="bg-[#FDF6EE] border border-[#EBD2BA] rounded-xl px-3.5 py-2.5 text-sm">
              <ClickTranslate es={t.es} hy={t.hy} revealAll={revealAll} compact esClassName="font-medium text-stone-800" />
            </div>
          ))}
        </div>
      </div>

      {/* PREP EXAM 1: Funciones del lenguaje */}
      <section id="prep-1" className="space-y-4 scroll-mt-24">
        <SectionBanner
          kicker="EXAMEN 1"
          titleEs="Las funciones del lenguaje"
          titleHy="Լեզվի գործառույթները"
          revealAll={revealAll}
        />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 bg-[#FAF0E6] border-b border-[#E5C5A7] flex flex-wrap items-center justify-between gap-3">
            <ClickTranslate
              es="2. ¿Cuáles son las seis funciones del lenguaje?"
              hy="2. Որո՞նք են լեզվի վեց գործառույթները։"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base"
            />
            <button
              type="button"
              onClick={() => setShowPrep1Table((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg whitespace-nowrap shrink-0 cursor-pointer transition-colors"
            >
              {showPrep1Table ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {showPrep1Table ? 'Ocultar respuesta' : 'Mostrar respuesta'}
            </button>
          </div>
          {showPrep1Table && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
                <thead>
                  <tr className="border-b border-[#E5C5A7] text-xs text-stone-600 bg-[#FDF8F3]">
                    <th className="py-3 px-4 w-2/5">Función (clic para Հայերեն)</th>
                    <th className="py-3 px-4">Ejemplo (clic para Հայերեն)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F2E2D2]">
                  {functionsRows.map((fn) => (
                    <tr key={fn.id}>
                      <td className="py-3 px-4 font-semibold">
                        <ClickTranslate es={fn.es} hy={fn.hy} revealAll={revealAll} compact esClassName="font-semibold text-[0.95rem] sm:text-base" />
                      </td>
                      <td className="py-3 px-4">
                        <ClickTranslate es={fn.extraEs || ''} hy={fn.extraHy || ''} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <TheoryQAList items={PREP1_FUNCTIONS_QA} revealAll={revealAll} />

        <InteractiveExerciseTable
          titleEs="Ejercicio de examen · Funciones del lenguaje"
          titleHy="Քննական վարժություն · Լեզվի գործառույթները"
          subtitleEs="Identifica la función del lenguaje predominante y justifica tu respuesta."
          subtitleHy="Որոշի՛ր լեզվի գերակշռող գործառույթը և հիմնավորի՛ր պատասխանդ։"
          rows={PREP1_FUNCTIONS_EXERCISE}
          revealAll={revealAll}
        />
      </section>

      {/* PREP EXAM 2: Modalidades oracionales */}
      <section id="prep-2" className="space-y-4 scroll-mt-24">
        <SectionBanner
          kicker="EXAMEN 2"
          titleEs="Las modalidades oracionales"
          titleHy="Նախադասությունների տեսակներն ըստ արտահայտման նպատակի"
          revealAll={revealAll}
        />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
              <thead>
                <tr className="bg-[#FAF0E6] border-b border-[#E5C5A7] text-xs font-semibold text-stone-700">
                  <th className="py-3 px-4 w-2/5">Modalidad (clic para Հայերեն)</th>
                  <th className="py-3 px-4">Ejemplo (clic para Հայերեն)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2E2D2]">
                {modalitiesRows.map((m) => (
                  <tr key={m.id}>
                    <td className="py-3 px-4 font-semibold">
                      <ClickTranslate es={m.es} hy={m.hy} revealAll={revealAll} compact esClassName="font-semibold text-[0.95rem] sm:text-base" />
                    </td>
                    <td className="py-3 px-4">
                      <ClickTranslate es={m.extraEs || ''} hy={m.extraHy || ''} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <TheoryQAList items={PREP2_MODALITIES_QA} revealAll={revealAll} />

        <InteractiveExerciseTable
          titleEs="Ejercicio de examen · Modalidades oracionales"
          titleHy="Քննական վարժություն · Նախադասությունների տեսակները"
          subtitleEs="Identifica la modalidad oracional y explica por qué."
          subtitleHy="Որոշի՛ր նախադասության տեսակը և բացատրի՛ր ինչու։"
          rows={PREP2_MODALITIES_EXERCISE}
          revealAll={revealAll}
        />

        <div className="bg-[#FDF6EE] border border-[#E2BE9B] rounded-2xl p-5 space-y-2.5">
          <ClickTranslate
            es="Pregunta importante de examen"
            hy="Կարևոր քննական հարց"
            revealAll={revealAll}
            compact
            esClassName="text-sm font-semibold text-[#9A421C]"
          />
          <TheoryQAList items={[PREP2_IMPORTANT_QUESTION]} revealAll={revealAll} />
        </div>
      </section>

      {/* PREP EXAM 3: Elementos de la comunicación */}
      <section id="prep-3" className="space-y-4 scroll-mt-24">
        <SectionBanner
          kicker="EXAMEN 3"
          titleEs="Los elementos de la comunicación"
          titleHy="Հաղորդակցության տարրերը"
          revealAll={revealAll}
        />

        <TheoryQAList items={PREP3_COMM_QA} revealAll={revealAll} />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 bg-[#FAF0E6] border-b border-[#E5C5A7] flex flex-wrap items-center justify-between gap-3">
            <ClickTranslate
              es="2. ¿Cuáles son los elementos de la comunicación?"
              hy="2. Որո՞նք են հաղորդակցության տարրերը։"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base"
            />
            <button
              type="button"
              onClick={() => setShowPrep3Table((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg whitespace-nowrap shrink-0 cursor-pointer transition-colors"
            >
              {showPrep3Table ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {showPrep3Table ? 'Ocultar respuesta' : 'Mostrar respuesta'}
            </button>
          </div>
          {showPrep3Table && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
                <thead>
                  <tr className="border-b border-[#E5C5A7] text-xs text-stone-600 bg-[#FDF8F3]">
                    <th className="py-3 px-4 w-1/3">Elemento (clic para Հայերեն)</th>
                    <th className="py-3 px-4">Definición (clic para Հայերեն)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F2E2D2]">
                  {commRows.map((c) => (
                    <tr key={c.id}>
                      <td className="py-3 px-4 font-semibold">
                        <ClickTranslate es={c.es} hy={c.hy} revealAll={revealAll} compact esClassName="font-semibold text-[0.95rem] sm:text-base" />
                      </td>
                      <td className="py-3 px-4">
                        <ClickTranslate es={c.extraEs || ''} hy={c.extraHy || ''} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <SimpleQATable
          titleEs="Situación 1. En el entrenamiento"
          titleHy="Իրավիճակ 1. Մարզման ժամանակ"
          subtitleEs="El entrenador dice a los jugadores: «Mañana tenéis que llegar al estadio a las nueve»."
          subtitleHy="Մարզիչն ասում է խաղացողներին. «Վաղը ժամը իննին պետք է հասնեք մարզադաշտ»։"
          rows={PREP3_SITUATION1}
          revealAll={revealAll}
        />

        <SimpleQATable
          titleEs="Situación 2. Un mensaje de WhatsApp"
          titleHy="Իրավիճակ 2. Հաղորդագրություն WhatsApp-ով"
          subtitleEs="Pablo escribe a su amigo: «Hola, Marcos. ¿Quieres venir a mi casa esta tarde?»."
          subtitleHy="Պաբլոն գրում է իր ընկերոջը. «Բարև, Մարկոս։ Ուզո՞ւմ ես այս երեկո գալ մեր տուն»։"
          rows={PREP3_SITUATION2}
          revealAll={revealAll}
        />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div className="space-y-1 flex-1">
              <ClickTranslate
                es="Situación 3. En el colegio"
                hy="Իրավիճակ 3. Դպրոցում"
                revealAll={revealAll}
                compact
                esClassName="font-semibold text-stone-900 text-base"
              />
              <ClickTranslate
                es="La profesora escribe en la pizarra: «Los sustantivos sirven para nombrar personas, animales, lugares, objetos e ideas»."
                hy="Ուսուցչուհին գրատախտակին գրում է. «Գոյականները ծառայում են անվանելու մարդկանց, կենդանիներին, վայրերը, առարկաները և գաղափարները»։"
                revealAll={revealAll}
                compact
                esClassName="text-[0.95rem] sm:text-base text-stone-600"
              />
            </div>
            <button
              type="button"
              onClick={() => setShowSit3((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
            >
              {showSit3 ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {showSit3 ? 'Ocultar respuesta' : 'Mostrar respuesta'}
            </button>
          </div>
          {showSit3 && (
            <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-4">
              <div className="text-xs font-semibold text-emerald-800 mb-1">Respuesta completa (clic para Հայերեն)</div>
              <ClickTranslate
                es="El emisor es la profesora, los receptores son los alumnos, el código es la lengua española escrita y el canal es visual, a través de la pizarra. El mensaje explica la función de los sustantivos. El contexto es una clase de Lengua. Predomina la función metalingüística y la modalidad es enunciativa afirmativa."
                hy="Հաղորդողը ուսուցչուհին է, ընդունողները՝ աշակերտները, կոդը՝ գրավոր իսպաներենը, իսկ կապուղին՝ տեսողական՝ գրատախտակի միջոցով։ Հաղորդագրությունը բացատրում է գոյականների գործառույթը։ Համատեքստը լեզվի դասն է։ Գերակշռում է մետալեզվական գործառույթը, իսկ նախադասության տեսակը հաստատական պատմողական է։"
                revealAll={revealAll}
                compact
                esClassName="text-[0.95rem] sm:text-base leading-relaxed text-stone-800"
              />
            </div>
          )}
        </div>
      </section>

      {/* PREP EXAM 4: Las categorías gramaticales */}
      <section id="prep-4" className="space-y-4 scroll-mt-24">
        <SectionBanner
          kicker="EXAMEN 4"
          titleEs="Las categorías gramaticales"
          titleHy="Խոսքի մասերը"
          revealAll={revealAll}
        />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
              <thead>
                <tr className="bg-[#FAF0E6] border-b border-[#E5C5A7] text-xs font-semibold text-stone-700">
                  <th className="py-3 px-4 w-1/3">Categoría (clic para Հայերեն)</th>
                  <th className="py-3 px-4">Ejemplos (clic para Հայերեն)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2E2D2]">
                {grammarCats.map((cat) => (
                  <tr key={cat.id}>
                    <td className="py-3 px-4 font-semibold">
                      <ClickTranslate es={cat.es} hy={cat.hy} revealAll={revealAll} compact esClassName="font-semibold text-[0.95rem] sm:text-base" />
                    </td>
                    <td className="py-3 px-4">
                      <ClickTranslate es={cat.extraEs || ''} hy={cat.extraHy || ''} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <TheoryQAList items={PREP4_GRAMMAR_QA} revealAll={revealAll} />

        {/* Tipos de adverbio */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 bg-[#FAF0E6] border-b border-[#E5C5A7]">
            <ClickTranslate es="Tipos de adverbio" hy="Մակբայների տեսակները" revealAll={revealAll} compact esClassName="font-semibold text-stone-900 text-base" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
              <thead>
                <tr className="border-b border-[#E5C5A7] text-xs text-stone-600 bg-[#FDF8F3]">
                  <th className="py-3 px-4 w-1/3">Tipo de adverbio (clic para Հայերեն)</th>
                  <th className="py-3 px-4">Ejemplos (clic para Հայերեն)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2E2D2]">
                {adverbTypes.map((adv) => (
                  <tr key={adv.id}>
                    <td className="py-3 px-4 font-semibold">
                      <ClickTranslate es={adv.es} hy={adv.hy} revealAll={revealAll} compact esClassName="font-semibold text-[0.95rem] sm:text-base" />
                    </td>
                    <td className="py-3 px-4">
                      <ClickTranslate es={adv.extraEs || ''} hy={adv.extraHy || ''} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Preguntas difíciles + Variables vs Invariables */}
        <div className="space-y-3.5">
          <div className="bg-[#FDF6EE] border border-[#E5C5A7] rounded-xl px-5 py-3">
            <ClickTranslate es="Preguntas difíciles de examen" hy="Քննության դժվար հարցեր" revealAll={revealAll} compact esClassName="text-base font-semibold text-stone-900" />
          </div>
          <TheoryQAList items={PREP4_HARD_QUESTIONS} revealAll={revealAll} />

          <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E5C5A7] text-[0.95rem] sm:text-base">
              <div className="p-5 space-y-2">
                <ClickTranslate es="Palabras variables" hy="Փոփոխվող բառեր" revealAll={revealAll} compact esClassName="font-semibold text-stone-900 text-base" />
                <ul className="space-y-1.5 text-stone-700">
                  <li><ClickTranslate es="Sustantivo" hy="Գոյական" revealAll={revealAll} compact /></li>
                  <li><ClickTranslate es="Adjetivo" hy="Ածական" revealAll={revealAll} compact /></li>
                  <li><ClickTranslate es="Determinante y artículo" hy="Որոշիչ և հոդ" revealAll={revealAll} compact /></li>
                  <li><ClickTranslate es="Pronombre" hy="Դերանուն" revealAll={revealAll} compact /></li>
                  <li><ClickTranslate es="Verbo" hy="Բայ" revealAll={revealAll} compact /></li>
                </ul>
              </div>
              <div className="p-5 space-y-2">
                <ClickTranslate es="Palabras invariables" hy="Անփոփոխ բառեր" revealAll={revealAll} compact esClassName="font-semibold text-stone-900 text-base" />
                <ul className="space-y-1.5 text-stone-700">
                  <li><ClickTranslate es="Adverbio" hy="Մակբայ" revealAll={revealAll} compact /></li>
                  <li><ClickTranslate es="Preposición" hy="Նախդիր" revealAll={revealAll} compact /></li>
                  <li><ClickTranslate es="Conjunción" hy="Շաղկապ" revealAll={revealAll} compact /></li>
                  <li><ClickTranslate es="Interjección" hy="Ձայնարկություն" revealAll={revealAll} compact /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <InteractiveExerciseTable
          titleEs="Ejercicio. Análisis de categorías gramaticales"
          titleHy="Վարժություն. Խոսքի մասերի վերլուծություն"
          subtitleEs="Identifica la categoría gramatical de cada palabra destacada (15 frases)."
          subtitleHy="Որոշի՛ր ընդգծված յուրաքանչյուր բառի խոսքի մասը (15 նախադասություն)։"
          rows={PREP4_GRAMMAR_EXERCISE}
          revealAll={revealAll}
          showWordCol
        />

        {/* Análisis completo de una oración */}
        <SimpleQATable
          titleEs="Análisis completo de una oración"
          titleHy="Նախադասության ամբողջական վերլուծություն"
          subtitleEs="Ayer mis dos amigos compraron unos libros interesantes en la biblioteca."
          subtitleHy="Երեկ իմ երկու ընկերները հետաքրքիր գրքեր գնեցին գրադարանում։"
          rows={PREP4_FULL_SENTENCE_ANALYSIS.map((w) => ({
            questionEs: w.wordEs,
            questionHy: w.wordHy,
            answerEs: w.catEs,
            answerHy: w.catHy,
          }))}
          revealAll={revealAll}
        />
      </section>

      {/* PREP EXAM 5: Literatura culta y popular */}
      <section id="prep-5" className="space-y-4 scroll-mt-24">
        <SectionBanner
          kicker="EXAMEN 5"
          titleEs="La literatura culta y la literatura popular"
          titleHy="Հեղինակային և ժողովրդական գրականություն"
          revealAll={revealAll}
        />

        <TheoryQAList items={PREP5_CULTA_POPULAR_QA} revealAll={revealAll} />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 bg-[#FAF0E6] border-b border-[#E5C5A7]">
            <ClickTranslate es="Tipos de obras de literatura popular" hy="Ժողովրդական գրականության տեսակները" revealAll={revealAll} compact esClassName="font-semibold text-stone-900 text-base" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:gap-px bg-[#F2E2D2]">
            {popularWorks.map((w) => (
              <div key={w.id} className="bg-white p-3.5">
                <ClickTranslate es={w.es} hy={w.hy} revealAll={revealAll} compact esClassName="font-semibold text-[0.95rem] sm:text-base" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 bg-[#FAF0E6] border-b border-[#E5C5A7] flex flex-wrap items-center justify-between gap-3">
            <ClickTranslate
              es="10. ¿Qué diferencias existen entre la literatura culta y la literatura popular?"
              hy="10. Ի՞նչ տարբերություններ կան հեղինակային և ժողովրդական գրականության միջև։"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base"
            />
            <button
              type="button"
              onClick={() => setShowPrep5Table((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg whitespace-nowrap shrink-0 cursor-pointer transition-colors"
            >
              {showPrep5Table ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {showPrep5Table ? 'Ocultar respuesta' : 'Mostrar respuesta'}
            </button>
          </div>
          {showPrep5Table && (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
                <thead>
                  <tr className="border-b border-[#E5C5A7] text-xs text-stone-600 bg-[#FDF8F3]">
                    <th className="py-3 px-4">Característica</th>
                    <th className="py-3 px-4">Literatura culta</th>
                    <th className="py-3 px-4">Literatura popular</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F2E2D2]">
                  {PREP5_COMPARISON_TABLE.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-3 px-4 font-semibold">
                        <ClickTranslate es={row.traitEs} hy={row.traitHy} revealAll={revealAll} compact esClassName="font-semibold text-[0.95rem] sm:text-base" />
                      </td>
                      <td className="py-3 px-4">
                        <ClickTranslate es={row.cultaEs} hy={row.cultaHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                      </td>
                      <td className="py-3 px-4">
                        <ClickTranslate es={row.popularEs} hy={row.popularHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* PREP EXAM 6: Romance, leyenda, mito, cuento */}
      <section id="prep-6" className="space-y-5 scroll-mt-24">
        <SectionBanner
          kicker="EXAMEN 6"
          titleEs="El romance, la leyenda, el cuento y el mito"
          titleHy="Ռոմանս, ավանդազրույց, հեքիաթ և առասպել"
          revealAll={revealAll}
        />

        <TheoryQAList items={PREP6_ROMANCE_QA} revealAll={revealAll} />

        {/* Romance Analysis: El camino de Lucía */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="px-5 py-4 bg-[#FAF0E6] border-b border-[#E5C5A7] flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-0.5">
              <ClickTranslate
                es="Ejercicio de análisis de un romance: «El camino de Lucía»"
                hy="Ռոմանսի վերլուծության վարժություն՝ «Լուսիայի ճանապարհը»"
                revealAll={revealAll}
                compact
                esClassName="font-display text-lg sm:text-xl font-semibold text-stone-900"
              />
              <ClickTranslate
                es="Texto original de práctica con estructura de romance · Clic en cada verso para ver en Հայերեն"
                hy="Գործնական բնօրինակ տեքստ՝ ռոմանսի կառուցվածքով"
                revealAll={revealAll}
                compact
                esClassName="text-xs sm:text-sm text-stone-600"
              />
            </div>
            <button
              type="button"
              onClick={() => setShowRomanceMetric((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg whitespace-nowrap shrink-0 cursor-pointer transition-colors"
            >
              {showRomanceMetric ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {showRomanceMetric ? 'Ocultar métrica' : 'Mostrar respuesta'}
            </button>
          </div>
          <div className="divide-y divide-[#F2E2D2]">
            {PREP6_ROMANCE_VERSES.map((v) => (
              <div key={v.num} className="px-5 py-3 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <span className="font-mono-tabular text-xs text-stone-400 pt-1 w-5 shrink-0">{v.num}</span>
                  <div className="flex-1">
                    <ClickTranslate es={v.es} hy={v.hy} revealAll={revealAll} compact esClassName="text-stone-900 text-base sm:text-[1.0625rem]" />
                  </div>
                </div>
                {showRomanceMetric && (
                  <span className="font-mono-tabular text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] px-2.5 py-1 rounded-md shrink-0">
                    {v.metric}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <SimpleQATable
          titleEs="Análisis métrico de «El camino de Lucía»"
          titleHy="«Լուսիայի ճանապարհը» ռոմանսի տաղաչափական վերլուծությունը"
          rows={PREP6_ROMANCE_ANALYSIS}
          revealAll={revealAll}
        />

        {/* La leyenda */}
        <div className="space-y-4 pt-1">
          <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 shadow-xs space-y-2">
            <ClickTranslate es="5. La leyenda" hy="5. Ավանդազրույց" revealAll={revealAll} compact esClassName="text-lg font-semibold text-stone-900" />
            <ClickTranslate es={PREP6_LEYENDA.defEs} hy={PREP6_LEYENDA.defHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base text-stone-700" />
          </div>
          <ReadingPassage
            titleEs={PREP6_LEYENDA.titleEs}
            titleHy={PREP6_LEYENDA.titleHy}
            subtitleEs="Ejemplo original inspirado en la estructura de las leyendas"
            subtitleHy="Ավանդազրույցի կառուցվածքով բնօրինակ օրինակ"
            lines={PREP6_LEYENDA.paragraphs}
            revealAll={revealAll}
          />
          <SimpleQATable
            titleEs="Preguntas y respuestas — La leyenda"
            titleHy="Հարցեր և պատասխաններ — Ավանդազրույց"
            rows={PREP6_LEYENDA.qa}
            revealAll={revealAll}
          />
        </div>

        {/* El mito */}
        <div className="space-y-4 pt-1">
          <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 shadow-xs space-y-2">
            <ClickTranslate es="6. El mito" hy="6. Առասպել" revealAll={revealAll} compact esClassName="text-lg font-semibold text-stone-900" />
            <ClickTranslate es={PREP6_MITO.defEs} hy={PREP6_MITO.defHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base text-stone-700" />
          </div>
          <ReadingPassage
            titleEs={PREP6_MITO.titleEs}
            titleHy={PREP6_MITO.titleHy}
            subtitleEs="Ejemplo original de estructura mítica"
            subtitleHy="Առասպելի կառուցվածքով բնօրինակ օրինակ"
            lines={PREP6_MITO.paragraphs}
            revealAll={revealAll}
          />
          <SimpleQATable
            titleEs="Preguntas y respuestas — El mito"
            titleHy="Հարցեր և պատասխաններ — Առասպել"
            rows={PREP6_MITO.qa}
            revealAll={revealAll}
          />
        </div>

        {/* El cuento */}
        <div className="space-y-4 pt-1">
          <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 shadow-xs space-y-2">
            <ClickTranslate es="7. El cuento" hy="7. Հեքիաթ, պատմվածք" revealAll={revealAll} compact esClassName="text-lg font-semibold text-stone-900" />
            <ClickTranslate es={PREP6_CUENTO.defEs} hy={PREP6_CUENTO.defHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base text-stone-700" />
          </div>
          <ReadingPassage
            titleEs={PREP6_CUENTO.titleEs}
            titleHy={PREP6_CUENTO.titleHy}
            subtitleEs="Ejemplo original de cuento"
            subtitleHy="Պատմվածքի բնօրինակ օրինակ"
            lines={PREP6_CUENTO.paragraphs}
            revealAll={revealAll}
          />
          <SimpleQATable
            titleEs="Preguntas y respuestas — El cuento"
            titleHy="Հարցեր և պատասխաններ — Պատմվածք"
            rows={PREP6_CUENTO.qa}
            revealAll={revealAll}
          />
        </div>

        {/* Diferencias que debe recordar */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 bg-[#FAF0E6] border-b border-[#E5C5A7]">
            <ClickTranslate es="Diferencias que debes recordar" hy="Տարբերություններ, որոնք պետք է հիշել" revealAll={revealAll} compact esClassName="font-semibold text-stone-900 text-base" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
              <thead>
                <tr className="border-b border-[#E5C5A7] text-xs text-stone-600 bg-[#FDF8F3]">
                  <th className="py-3 px-4 w-44">Tipo</th>
                  <th className="py-3 px-4">Característica principal (clic para Հայերեն)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2E2D2]">
                {PREP6_DIFFERENCES.map((d, idx) => (
                  <tr key={idx}>
                    <td className="py-3 px-4 font-semibold">
                      <ClickTranslate es={d.typeEs} hy={d.typeHy} revealAll={revealAll} compact esClassName="font-semibold text-[0.95rem] sm:text-base" />
                    </td>
                    <td className="py-3 px-4">
                      <ClickTranslate es={d.charEs} hy={d.charHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PREP EXAM 7: El lenguaje literario */}
      <section id="prep-7" className="space-y-4 scroll-mt-24">
        <SectionBanner
          kicker="EXAMEN 7"
          titleEs="El lenguaje literario"
          titleHy="Գեղարվեստական լեզու"
          revealAll={revealAll}
        />

        <TheoryQAList items={PREP7_LITERARY_LANG_QA} revealAll={revealAll} />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 bg-[#FAF0E6] border-b border-[#E5C5A7]">
            <ClickTranslate es="Lenguaje cotidiano y lenguaje literario" hy="Առօրյա և գեղարվեստական լեզու" revealAll={revealAll} compact esClassName="font-semibold text-stone-900 text-base" />
          </div>
          <div className="divide-y divide-[#F2E2D2]">
            {stylePairs.map((pair) => (
              <div key={pair.id} className="px-5 py-3">
                <ClickTranslate es={pair.es} hy={pair.hy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
              </div>
            ))}
          </div>
        </div>

        <InteractiveExerciseTable
          titleEs="Ejercicio. ¿Lenguaje literario o cotidiano?"
          titleHy="Վարժություն. Գեղարվեստակա՞ն, թե՞ առօրյա լեզու"
          subtitleEs="Identifica si cada expresión corresponde al lenguaje cotidiano o literario y explica por qué."
          subtitleHy="Որոշի՛ր՝ արտահայտությունը պատկանում է առօրյա՞, թե՞ գեղարվեստական լեզվին և բացատրի՛ր ինչու։"
          rows={PREP7_COTIDIANO_EXERCISE}
          revealAll={revealAll}
        />
      </section>

      {/* PREP EXAM 8: Las figuras literarias (3 niveles) */}
      <section id="prep-8" className="space-y-5 scroll-mt-24">
        <SectionBanner
          kicker="EXAMEN 8"
          titleEs="Las figuras literarias (3 niveles)"
          titleHy="Գեղարվեստական պատկերավորման միջոցները (3 մակարդակ)"
          subtitleEs="Presta especial atención a las figuras del cuaderno: aliteración, onomatopeya, paronomasia, epanadiplosis, hipérbaton, anáfora y asíndeton."
          subtitleHy="Հատուկ ուշադրություն դարձրու տետրում գրված միջոցներին՝ aliteración, onomatopeya, paronomasia, epanadiplosis, hipérbaton, anáfora և asíndeton։"
          revealAll={revealAll}
        />

        {[
          { titleEs: 'I. Nivel fónico', titleHy: 'I. Հնչյունական մակարդակ', list: fonico },
          { titleEs: 'II. Nivel morfosintáctico', titleHy: 'II. Ձևաշարահյուսական մակարդակ', list: morfo },
          { titleEs: 'III. Nivel semántico', titleHy: 'III. Իմաստային մակարդակ', list: semantico },
        ].map((group) => (
          <div key={group.titleEs} className="space-y-3.5">
            <div className="bg-[#FDF6EE] border border-[#E5C5A7] rounded-xl px-5 py-3">
              <ClickTranslate es={group.titleEs} hy={group.titleHy} revealAll={revealAll} compact esClassName="text-lg font-semibold text-stone-900" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {group.list.map((fig) => (
                <div key={fig.number} className="bg-white border border-[#E5C5A7] rounded-2xl p-5 shadow-xs space-y-2.5">
                  <div>
                    <div className="text-xs font-mono-tabular text-[#A84D24] font-semibold">{fig.number}.</div>
                    <ClickTranslate
                      es={fig.nameEs}
                      hy={fig.nameHy}
                      revealAll={revealAll}
                      compact
                      esClassName="text-base sm:text-lg font-semibold text-stone-900"
                    />
                  </div>
                  <ClickTranslate
                    es={fig.definitionEs}
                    hy={fig.definitionHy}
                    revealAll={revealAll}
                    compact
                    esClassName="text-[0.95rem] sm:text-base text-stone-700"
                  />
                  <div className="space-y-1.5 pt-1">
                    {fig.examples.map((ex, i) => (
                      <div key={i} className="bg-[#FDF6EE] border border-[#EBD2BA] rounded-xl px-3.5 py-2">
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
                  {fig.justificationEs && (
                    <div className="text-xs sm:text-sm text-stone-600 pt-1">
                      <span className="font-semibold text-stone-800">Justificación:</span>
                      <ClickTranslate
                        es={fig.justificationEs}
                        hy={fig.justificationHy || ''}
                        revealAll={revealAll}
                        compact
                        esClassName="text-xs sm:text-sm text-stone-700"
                      />
                    </div>
                  )}
                  {fig.note && (
                    <div className="bg-[#FDF5EC] border border-[#E2BE9B] rounded-xl p-3">
                      <ClickTranslate
                        es={fig.note}
                        hy="Աշակերտի տետրում epanadiplosis-ը գրված է հնչյունական մակարդակում։ Այլ դասագրքերում այն կարող է դասվել նաև ձևաշարահյուսական մակարդակին։ Քննության ժամանակ ավելի լավ է հետևել ուսուցչի դասակարգմանը։"
                        revealAll={revealAll}
                        compact
                        esClassName="text-xs sm:text-sm text-stone-700 leading-relaxed"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* PREP EXAM 9: Diferencias entre figuras */}
      <section id="prep-9" className="space-y-4 scroll-mt-24">
        <SectionBanner
          kicker="EXAMEN 9"
          titleEs="Diferencias entre figuras literarias"
          titleHy="Գեղարվեստական միջոցների տարբերությունները"
          subtitleEs="Estas preguntas son especialmente importantes porque las figuras pueden parecerse entre sí."
          subtitleHy="Այս հարցերը հատկապես կարևոր են, քանի որ պատկերավորման միջոցները կարող են նմանվել իրար։"
          revealAll={revealAll}
        />

        <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
          <div className="px-5 py-3.5 bg-[#FAF0E6] border-b border-[#E5C5A7] flex flex-wrap items-center justify-between gap-3">
            <ClickTranslate
              es="¿En qué se diferencian estas figuras?"
              hy="Ինչո՞վ են տարբերվում այս պատկերավորման միջոցները։"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-base"
            />
            <button
              type="button"
              onClick={() => {
                if (showAllPrep9Diff) {
                  setShowAllPrep9Diff(false);
                  setOpenPrep9Diff({});
                } else {
                  setShowAllPrep9Diff(true);
                }
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#9A421C] bg-white border border-[#E2BE9B] rounded-lg hover:bg-[#FDF6EE] whitespace-nowrap shrink-0 cursor-pointer"
            >
              {showAllPrep9Diff ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              {showAllPrep9Diff ? 'Ocultar respuestas' : 'Mostrar todas las respuestas'}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
              <thead>
                <tr className="bg-[#FDF8F3] border-b border-[#E5C5A7] text-xs font-semibold text-stone-700">
                  <th className="py-3 px-4 w-1/3">Figuras (clic para Հայերեն)</th>
                  <th className="py-3 px-4">Respuesta (clic para Հայերեն)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2E2D2]">
                {PREP9_FIGURES_DIFF.map((row, idx) => {
                  const isVisible = showAllPrep9Diff || !!openPrep9Diff[idx];
                  return (
                    <tr key={idx}>
                      <td className="py-3 px-4 align-top font-semibold">
                        <ClickTranslate es={row.pairEs} hy={row.pairHy} revealAll={revealAll} compact esClassName="font-semibold text-[0.95rem] sm:text-base" />
                      </td>
                      <td className="py-3 px-4 align-top">
                        {isVisible ? (
                          <div className="space-y-1.5">
                            <ClickTranslate es={row.diffEs} hy={row.diffHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base text-emerald-950" />
                            {!showAllPrep9Diff && (
                              <button
                                type="button"
                                onClick={() => setOpenPrep9Diff((prev) => ({ ...prev, [idx]: false }))}
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
                            onClick={() => setOpenPrep9Diff((prev) => ({ ...prev, [idx]: true }))}
                            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-md cursor-pointer transition-colors"
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
      </section>
    </div>
  );
};

// ================= SECTION 3: INTERACTIVE TESTS (15 MCQ + 25 FIGURES) =================
export const InteractiveTestsSection: React.FC<{ revealAll: boolean }> = ({ revealAll }) => {
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});
  const [shownAnswers, setShownAnswers] = useState<Record<number, boolean>>({});
  const [showAllQuiz, setShowAllQuiz] = useState(false);
  const [openOptHy, setOpenOptHy] = useState<Record<string, boolean>>({});

  const answeredCount = Object.keys(answers).length;
  const revealedCorrectCount = SIMULACRO_QUIZ_15.filter(
    (q) => (showAllQuiz || shownAnswers[q.id]) && answers[q.id] === q.correctKey
  ).length;

  return (
    <div className="space-y-9">
      {/* Simulacro 15 MCQ */}
      <section className="space-y-5">
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-[#A84D24]">5. Simulacro de examen</p>
              <ClickTranslate
                es="Prueba interactiva (15 preguntas)"
                hy="Փորձնական քննություն (15 հարց)"
                revealAll={revealAll}
                compact
                esClassName="text-2xl sm:text-3xl font-display font-semibold text-stone-900"
              />
              <ClickTranslate
                es="Marca tu opción y pulsa «Mostrar respuesta» cuando quieras comprobar la solución y su explicación."
                hy="Նշի՛ր քո տարբերակը և սեղմի՛ր «Mostrar respuesta», երբ ցանկանաս ստուգել ճիշտ պատասխանն ու բացատրությունը։"
                revealAll={revealAll}
                compact
                esClassName="text-[0.95rem] sm:text-base text-stone-600"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <div className="text-right font-mono-tabular">
                <div className="text-xs text-stone-500">Marcadas: {answeredCount} de 15</div>
                <div className="text-lg font-semibold text-stone-900">
                  Aciertos: <span className="text-emerald-700">{revealedCorrectCount}</span>/15
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (showAllQuiz) {
                    setShowAllQuiz(false);
                    setShownAnswers({});
                  } else {
                    setShowAllQuiz(true);
                  }
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-xl whitespace-nowrap shrink-0 cursor-pointer transition-colors"
              >
                {showAllQuiz ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {showAllQuiz ? 'Ocultar respuestas' : 'Mostrar todas las respuestas'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  setShownAnswers({});
                  setShowAllQuiz(false);
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-stone-800 bg-[#FAF0E6] border border-[#E5C5A7] rounded-xl hover:bg-[#F3DFCA] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Volver a empezar
              </button>
            </div>
          </div>

          <div className="w-full h-2.5 bg-[#F2E2D2] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C25D2E] transition-all duration-200"
              style={{ width: `${(answeredCount / SIMULACRO_QUIZ_15.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="space-y-4">
          {SIMULACRO_QUIZ_15.map((q) => {
            const chosen = answers[q.id];
            const isRevealed = showAllQuiz || !!shownAnswers[q.id];
            const isCorrect = chosen === q.correctKey;

            return (
              <div key={q.id} className="bg-white border border-[#E5C5A7] rounded-2xl p-5 shadow-xs space-y-3.5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1 flex-1">
                    <div className="text-xs font-mono-tabular text-[#A84D24] font-semibold">Pregunta {q.id} / 15</div>
                    <ClickTranslate
                      es={q.questionEs}
                      hy={q.questionHy}
                      revealAll={revealAll}
                      compact
                      esClassName="font-semibold text-stone-900 text-base"
                    />
                  </div>
                  {!showAllQuiz && (
                    <button
                      type="button"
                      onClick={() => setShownAnswers((prev) => ({ ...prev, [q.id]: !prev[q.id] }))}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer transition-colors"
                    >
                      {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      {isRevealed ? 'Ocultar respuesta' : 'Mostrar respuesta'}
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {q.options.map((opt) => {
                    const optId = `${q.id}-${opt.key}`;
                    const isSelected = chosen === opt.key;
                    const isRightOption = opt.key === q.correctKey;
                    const showHy = revealAll || !!openOptHy[optId];

                    let btnStyle = 'bg-white border-[#E5C5A7] text-stone-900 hover:border-[#C25D2E] hover:bg-[#FDF6EE]';
                    if (isRevealed) {
                      if (isRightOption) {
                        btnStyle = 'bg-[#F4FAF6] border-emerald-500 text-emerald-950 font-semibold';
                      } else if (isSelected && !isRightOption) {
                        btnStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                      } else {
                        btnStyle = 'bg-stone-50 border-stone-200 text-stone-500';
                      }
                    } else if (isSelected) {
                      btnStyle = 'bg-[#FAF0E6] border-[#C25D2E] text-stone-950 font-semibold';
                    }

                    return (
                      <div key={opt.key} className={`rounded-xl border transition-colors ${btnStyle}`}>
                        <div className="flex items-start justify-between gap-2 px-3.5 py-2.5">
                          <button
                            type="button"
                            onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.key }))}
                            className="text-left flex-1 text-[0.95rem] sm:text-base cursor-pointer"
                          >
                            <strong className="font-mono-tabular mr-2">{opt.key}.</strong>
                            {opt.textEs}
                          </button>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              type="button"
                              onClick={() => setOpenOptHy((prev) => ({ ...prev, [optId]: !prev[optId] }))}
                              title="Ver en armenio"
                              className="text-xs px-2 py-0.5 rounded bg-[#FAF0E6] text-[#9A421C] hover:bg-[#F3DFCA] cursor-pointer"
                            >
                              Հայ
                            </button>
                            {isRevealed && isRightOption && <Check className="w-4 h-4 text-emerald-600" />}
                            {isRevealed && isSelected && !isRightOption && <X className="w-4 h-4 text-rose-600" />}
                          </div>
                        </div>
                        {showHy && (
                          <div className="px-3.5 pb-2.5 text-xs text-stone-600 border-t border-black/5 pt-1.5">
                            <span className="font-semibold text-[#9A421C] mr-1">Հայերեն ·</span>
                            {opt.textHy}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {isRevealed && (
                  <div
                    className={`rounded-xl border p-3.5 text-[0.95rem] sm:text-base ${
                      !chosen || isCorrect
                        ? 'bg-[#F4FAF6] border-emerald-200 text-emerald-950'
                        : 'bg-rose-50 border-rose-200 text-rose-950'
                    }`}
                  >
                    <div className="font-semibold text-xs mb-1">
                      {!chosen
                        ? `Respuesta correcta: ${q.correctKey}`
                        : isCorrect
                          ? '✓ Correcto'
                          : `✕ Incorrecto · Respuesta correcta: ${q.correctKey}`}
                    </div>
                    <ClickTranslate es={q.explanationEs} hy={q.explanationHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 25 frases exercise from Exam 9 */}
      <section className="space-y-4">
        <FiguresPracticeBlock
          titleEs="Ejercicio de examen: 25 frases (Figuras literarias)"
          titleHy="Քննական վարժություն՝ 25 նախադասություն (Գեղարվեստական միջոցներ)"
          subtitleEs="Busca la figura literaria y justifica tu respuesta. Haz clic en cualquier frase para ver la traducción al armenio."
          subtitleHy="Գտի՛ր գեղարվեստական միջոցը և հիմնավորի՛ր պատասխանդ։"
          items={PREP9_EXERCISE_25}
          revealAll={revealAll}
        />
      </section>
    </div>
  );
};

// ================= SECTION 4: FINAL EXAM + CHECKLIST (18 TOPICS) =================
export const FinalExamAndChecklistSection: React.FC<{
  revealAll: boolean;
  checkedTopics: Record<string, boolean>;
  onToggleTopic: (id: string) => void;
  onResetTopics: () => void;
}> = ({ revealAll, checkedTopics, onToggleTopic, onResetTopics }) => {
  const [studentName, setStudentName] = useState('');
  const [examDate, setExamDate] = useState('');
  const [showAllSolutions, setShowAllSolutions] = useState(false);
  const [openPartB, setOpenPartB] = useState<Record<number, boolean>>({});
  const [openPartC1, setOpenPartC1] = useState<Record<number, boolean>>({});
  const [openPartC2, setOpenPartC2] = useState(false);

  const masteredCount = CHECKLIST_TOPICS.filter((t) => checkedTopics[t.id]).length;
  const masteredPct = Math.round((masteredCount / CHECKLIST_TOPICS.length) * 100);

  return (
    <div className="space-y-9">
      {/* Final Exam Header */}
      <section className="space-y-5">
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-7 shadow-xs flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-[#A84D24]">
              Duración recomendada: 50 minutos · 10 puntos
            </p>
            <ClickTranslate
              es="EXAMEN FINAL. Simulacro completo de 1.º ESO"
              hy="Ամփոփիչ փորձնական քննություն — 1.º ESO"
              revealAll={revealAll}
              compact
              esClassName="text-2xl sm:text-3xl font-display font-semibold text-stone-900"
            />
          </div>
          <button
            type="button"
            onClick={() => setShowAllSolutions((v) => !v)}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-xl whitespace-nowrap shrink-0 cursor-pointer transition-colors"
          >
            {showAllSolutions ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showAllSolutions ? 'Ocultar todas las soluciones' : 'Mostrar todas las soluciones'}
          </button>
        </div>

        {/* Student Info */}
        <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 shadow-xs grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block space-y-1">
            <span className="text-xs font-semibold text-stone-700">Nombre y apellidos</span>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Escribe tu nombre y apellidos..."
              className="w-full px-3.5 py-2 text-sm border border-[#E5C5A7] rounded-xl focus:outline-none focus:border-[#C25D2E]"
            />
          </label>
          <label className="block space-y-1">
            <span className="text-xs font-semibold text-stone-700">Fecha</span>
            <input
              type="text"
              value={examDate}
              onChange={(e) => setExamDate(e.target.value)}
              placeholder="Día / Mes / Año"
              className="w-full px-3.5 py-2 text-sm border border-[#E5C5A7] rounded-xl focus:outline-none focus:border-[#C25D2E]"
            />
          </label>
        </div>

        {/* Reading Text */}
        <ReadingPassage
          titleEs="1. La tarde que nunca olvidamos"
          titleHy="1. Երեկոն, որը մենք երբեք չենք մոռանա"
          subtitleEs="Lee el siguiente texto y contesta a las preguntas · Texto original de práctica"
          subtitleHy="Կարդա՛ տեքստը և պատասխանի՛ր հարցերին"
          lines={FINAL_EXAM_PARAGRAPHS}
          revealAll={revealAll}
        />

        {/* Parte A */}
        <div className="space-y-4">
          <SectionBanner
            titleEs="Parte A. Comprensión y literatura — 6 puntos"
            titleHy="Մաս A. Ըմբռնում և գրականություն — 6 միավոր"
            revealAll={revealAll}
          />
          <ExamQAList
            headingEs="Preguntas de comprensión (A–F)"
            headingHy="Ըմբռնման հարցեր (A–F)"
            items={FINAL_EXAM_PART_A}
            revealAll={revealAll}
            forceShowAll={showAllSolutions}
          />
        </div>

        {/* Parte B */}
        <div className="space-y-4">
          <SectionBanner
            titleEs="Parte B. Figuras literarias — 2 puntos"
            titleHy="Մաս B. Գեղարվեստական միջոցներ — 2 միավոր"
            revealAll={revealAll}
          />
          <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
            <div className="px-5 py-3.5 bg-[#FAF0E6] border-b border-[#E5C5A7]">
              <ClickTranslate
                es="Identifica las figuras literarias de las siguientes expresiones. (0,25 puntos cada una)"
                hy="Որոշի՛ր հետևյալ արտահայտությունների գեղարվեստական պատկերավորման միջոցները (յուրաքանչյուրը՝ 0,25 միավոր)։"
                revealAll={revealAll}
                compact
                esClassName="text-sm text-stone-700 font-medium"
              />
            </div>
            <div className="divide-y divide-[#F2E2D2]">
              {FINAL_EXAM_PART_B.map((item) => {
                const isOpen = showAllSolutions || !!openPartB[item.id];
                return (
                  <div key={item.id} className="px-5 py-3.5 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5 flex-1">
                      <span className="font-mono-tabular text-xs text-stone-400 pt-1 w-5 shrink-0">{item.id}.</span>
                      <div className="flex-1 space-y-2">
                        <ClickTranslate es={item.sentenceEs} hy={item.sentenceHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                        {isOpen && (
                          <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl px-3.5 py-2 space-y-1">
                            <ClickTranslate es={item.figureEs} hy={item.figureHy} revealAll={revealAll} compact esClassName="text-sm font-semibold text-emerald-900" />
                            <ClickTranslate es={item.justificationEs} hy={item.justificationHy} revealAll={revealAll} compact esClassName="text-xs sm:text-sm text-stone-700" />
                          </div>
                        )}
                      </div>
                    </div>
                    {!showAllSolutions && (
                      <button
                        type="button"
                        onClick={() => setOpenPartB((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#9A421C] bg-[#FAF0E6] hover:bg-[#F3DFCA] border border-[#E5C5A7] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
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
        </div>

        {/* Parte C */}
        <div className="space-y-4">
          <SectionBanner
            titleEs="Parte C. Lengua y comunicación — 2 puntos"
            titleHy="Մաս C. Լեզու և հաղորդակցություն — 2 միավոր"
            revealAll={revealAll}
          />

          {/* C.1 */}
          <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 shadow-xs space-y-3.5">
            <ClickTranslate
              es="1. Identifica la modalidad oracional y la función del lenguaje predominante en las siguientes frases. (1 punto)"
              hy="1. Որոշի՛ր հետևյալ նախադասությունների տեսակը և լեզվի գերակշռող գործառույթը (1 միավոր)։"
              revealAll={revealAll}
              compact
              esClassName="font-semibold text-stone-900 text-[0.95rem] sm:text-base"
            />
            <div className="space-y-3">
              {FINAL_EXAM_PART_C1.map((row, i) => {
                const isOpen = showAllSolutions || !!openPartC1[i];
                return (
                  <div key={i} className="bg-[#FDF6EE] border border-[#EBD2BA] rounded-xl p-4 space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <ClickTranslate es={row.sentenceEs} hy={row.sentenceHy} revealAll={revealAll} compact esClassName="font-semibold text-[0.95rem] sm:text-base" />
                      {!showAllSolutions && (
                        <button
                          type="button"
                          onClick={() => setOpenPartC1((prev) => ({ ...prev, [i]: !prev[i] }))}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
                        >
                          {isOpen ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          {isOpen ? 'Ocultar' : 'Mostrar respuesta'}
                        </button>
                      )}
                    </div>
                    {isOpen && (
                      <div className="bg-[#F4FAF6] border border-emerald-200 rounded-xl p-3">
                        <ClickTranslate es={row.solutionEs} hy={row.solutionHy} revealAll={revealAll} compact esClassName="text-emerald-950 text-sm" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* C.2 */}
          <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 shadow-xs space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="space-y-1 flex-1">
                <ClickTranslate
                  es="2. Identifica las categorías gramaticales de todas las palabras de esta oración. (1 punto)"
                  hy="2. Որոշի՛ր այս նախադասության բոլոր բառերի խոսքի մասերը (1 միավոր)։"
                  revealAll={revealAll}
                  compact
                  esClassName="font-semibold text-stone-900 text-[0.95rem] sm:text-base"
                />
                <ClickTranslate
                  es="«Ayer nuestros amigos prepararon una actividad interesante»."
                  hy="«Երեկ մեր ընկերները հետաքրքիր միջոցառում պատրաստեցին»։"
                  revealAll={revealAll}
                  compact
                  esClassName="font-semibold text-[#9A421C] text-base"
                />
              </div>
              {!showAllSolutions && (
                <button
                  type="button"
                  onClick={() => setOpenPartC2((v) => !v)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-lg whitespace-nowrap shrink-0 self-start cursor-pointer"
                >
                  {openPartC2 ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  {openPartC2 ? 'Ocultar respuesta' : 'Mostrar respuesta'}
                </button>
              )}
            </div>
            {(showAllSolutions || openPartC2) && (
              <div className="overflow-x-auto border border-emerald-200 rounded-xl">
                <table className="w-full text-left border-collapse text-[0.95rem] sm:text-base">
                  <thead>
                    <tr className="bg-[#F4FAF6] border-b border-emerald-200 text-xs font-semibold text-emerald-900">
                      <th className="py-2.5 px-4">Palabra</th>
                      <th className="py-2.5 px-4">Categoría gramatical (clic para Հայերեն)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-emerald-100 bg-white">
                    {FINAL_EXAM_PART_C2.map((w, idx) => (
                      <tr key={idx}>
                        <td className="py-2.5 px-4 font-semibold">
                          <ClickTranslate es={w.wordEs} hy={w.wordHy} revealAll={revealAll} compact esClassName="font-semibold text-[0.95rem] sm:text-base" />
                        </td>
                        <td className="py-2.5 px-4">
                          <ClickTranslate es={w.catEs} hy={w.catHy} revealAll={revealAll} compact esClassName="text-[0.95rem] sm:text-base" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Control de preparación (18 temas) */}
      <section className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#F2E2D2] pb-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-[#A84D24]">Autoevaluación · 18 temas</p>
            <ClickTranslate
              es="Control de preparación"
              hy="Քննության պատրաստվածության ստուգում"
              revealAll={revealAll}
              compact
              esClassName="font-display text-2xl font-semibold text-stone-900"
            />
            <ClickTranslate
              es="Marca los temas que ya puedes explicar por tu cuenta sin mirar el cuaderno. Haz clic en cada tema para ver la traducción al armenio."
              hy="Նշի՛ր այն թեմաները, որոնք արդեն կարող ես բացատրել ինքնուրույն՝ առանց տետրին նայելու։"
              revealAll={revealAll}
              compact
              esClassName="text-sm text-stone-600"
            />
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right font-mono-tabular">
              <div className="text-xs text-stone-500">Temas dominados</div>
              <div className="text-xl font-semibold text-[#A84D24]">
                {masteredPct}% <span className="text-sm text-stone-500 font-normal">({masteredCount}/18)</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onResetTopics}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-stone-800 bg-[#FAF0E6] border border-[#E5C5A7] rounded-xl hover:bg-[#F3DFCA] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reiniciar
            </button>
          </div>
        </div>

        <div className="w-full h-2.5 bg-[#F2E2D2] rounded-full overflow-hidden">
          <div
            className="h-full bg-emerald-600 transition-all duration-200"
            style={{ width: `${masteredPct}%` }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {CHECKLIST_TOPICS.map((topic, idx) => {
            const checked = !!checkedTopics[topic.id];
            return (
              <div
                key={topic.id}
                className={`flex items-start gap-3 p-3.5 rounded-xl border transition-colors ${
                  checked ? 'bg-[#F4FAF6] border-emerald-200' : 'bg-white border-[#E5C5A7] hover:bg-[#FDF8F3]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => onToggleTopic(topic.id)}
                  aria-pressed={checked}
                  aria-label={`Marcar tema ${topic.titleEs}`}
                  className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                    checked ? 'bg-emerald-600 border-emerald-600 text-white' : 'bg-white border-[#D9B18D]'
                  }`}
                >
                  {checked && <Check className="w-3.5 h-3.5" />}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono-tabular text-xs text-stone-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <ClickTranslate
                        es={topic.titleEs}
                        hy={topic.titleHy}
                        revealAll={revealAll}
                        compact
                        esClassName={`text-sm font-medium ${checked ? 'text-emerald-950 line-through decoration-emerald-400' : 'text-stone-900'}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#FDF6EE] border border-[#E5C5A7] rounded-xl p-4">
          <ClickTranslate
            es="Consejo clave: practica construir tus propias respuestas usando conectores como «porque…», «se caracteriza por…», «consiste en…», «podemos observar…», «por ejemplo…». Explicar y justificar cada respuesta es esencial para obtener la máxima nota."
            hy="Ամենակարևորը՝ պետք է սովորել ինքնուրույն կառուցել պատասխանները «porque…», «se caracteriza por…», «consiste en…», «podemos observar…», «por ejemplo…» կառույցներով։ Հենց պատասխանը բացատրելու և հիմնավորելու հմտությունն է անհրաժեշտ քննությունը հաջող հանձնելու համար։"
            revealAll={revealAll}
            compact
            esClassName="text-sm text-stone-800 leading-relaxed"
          />
        </div>
      </section>
    </div>
  );
};
