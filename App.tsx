import React, { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { MasterBilingualTable } from './ClickTranslate';
import {
  CompletePrepSection,
  FinalExamAndChecklistSection,
  InteractiveTestsSection,
  LiteratureExamsSection,
} from './ExamSections';
import { ResumenPrepSection } from './ResumenPrepSection';

type AppTab = 'table' | 'literature' | 'complete' | 'resumen' | 'tests' | 'final';

const NAV_ITEMS: { id: AppTab; label: string }[] = [
  { id: 'table', label: 'Tabla' },
  { id: 'literature', label: 'Literatura' },
  { id: 'complete', label: 'Temario' },
  { id: 'resumen', label: 'Resumen' },
  { id: 'tests', label: 'Pruebas' },
  { id: 'final', label: 'Examen final' },
];

const LIT_ANCHORS = [
  { id: 'lit-genres', label: '1. Géneros y palabras' },
  { id: 'lit-exam1', label: 'Examen 1 · Narrativa' },
  { id: 'lit-exam2', label: 'Examen 2 · Lírica' },
  { id: 'lit-exam3', label: 'Examen 3 · Teatro' },
  { id: 'lit-figures', label: '4. Figuras + 20 frases' },
  { id: 'lit-phrases', label: '6. Frases clave' },
];

const PREP_ANCHORS = [
  { id: 'prep-1', label: '1. Funciones del lenguaje' },
  { id: 'prep-2', label: '2. Modalidades oracionales' },
  { id: 'prep-3', label: '3. Comunicación' },
  { id: 'prep-4', label: '4. Categorías gramaticales' },
  { id: 'prep-5', label: '5. Culta y popular' },
  { id: 'prep-6', label: '6. Romance, leyenda, mito' },
  { id: 'prep-7', label: '7. Lenguaje literario' },
  { id: 'prep-8', label: '8. Figuras (3 niveles)' },
  { id: 'prep-9', label: '9. Diferencias de figuras' },
];

const RESUMEN_ANCHORS = [
  { id: 'res-1', label: '1. Cómo hacer un resumen' },
  { id: 'res-2', label: '2. Texto · La victoria' },
  { id: 'res-3', label: '3. Resumir paso a paso' },
  { id: 'res-4', label: '4. Preguntas A–F' },
  { id: 'res-5', label: '5. Figuras literarias (11)' },
  { id: 'res-6', label: '6. Figuras del examen' },
  { id: 'res-7', label: '7. 15 ejercicios' },
  { id: 'res-8', label: '8. Análisis narrativo' },
  { id: 'res-9', label: '9. Biblioteca + taller' },
  { id: 'res-10', label: '10. Chuleta y frases' },
];

const STORAGE_KEY = 'literatura_1eso_checklist_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('table');
  const [globalRevealAll, setGlobalRevealAll] = useState(false);
  const [checkedTopics, setCheckedTopics] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedTopics));
    } catch {
      // Ignore storage quota errors
    }
  }, [checkedTopics]);

  const handleTabChange = (tab: AppTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTopic = (id: string) => {
    setCheckedTopics((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const resetTopics = () => {
    setCheckedTopics({});
  };

  const sidebarAnchors =
    activeTab === 'literature'
      ? LIT_ANCHORS
      : activeTab === 'complete'
        ? PREP_ANCHORS
        : activeTab === 'resumen'
          ? RESUMEN_ANCHORS
          : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#F4DAC0] text-stone-900">
      {/* Strict 3-Zone Top Bar */}
      <header className="sticky top-0 z-30 bg-[#FFFBF7]/95 backdrop-blur-sm border-b border-[#E5C5A7]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Title */}
          <button
            type="button"
            onClick={() => handleTabChange('table')}
            className="font-display text-lg font-semibold tracking-tight text-stone-900 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Literatura 1.º ESO
          </button>

          {/* Zone 2: 5 concise single-line nav links */}
          <nav aria-label="Navegación principal" className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleTabChange(item.id)}
                  className={`py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer border-b-2 ${
                    isActive
                      ? 'text-[#A84D24] border-[#C25D2E]'
                      : 'text-stone-600 border-transparent hover:text-stone-950 hover:border-[#DFB895]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => setGlobalRevealAll((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#C25D2E] hover:bg-[#A84D24] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {globalRevealAll ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {globalRevealAll ? 'Ocultar Հայերեն' : 'Ver Հայերեն'}
            </button>
          </div>
        </div>

        {/* Mobile horizontal nav */}
        <nav
          aria-label="Navegación móvil"
          className="md:hidden border-t border-[#EFE0D0] px-4 py-2 flex items-center gap-1.5 overflow-x-auto bg-[#FFFBF7]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleTabChange(item.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                  isActive ? 'bg-[#C25D2E] text-white' : 'text-stone-700 bg-[#FAF0E6] hover:text-stone-950'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1280px] w-full mx-auto px-4 sm:px-6 py-7 sm:py-9">
        {sidebarAnchors ? (
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-7 items-start">
            <aside className="hidden lg:block sticky top-22 bg-white border border-[#E5C5A7] rounded-2xl p-4 shadow-xs space-y-2">
              <div className="text-xs font-semibold text-[#9A421C] px-2.5 pb-1">Índice de contenidos</div>
              <ul className="space-y-1">
                {sidebarAnchors.map((a) => (
                  <li key={a.id}>
                    <a
                      href={`#${a.id}`}
                      className="block px-2.5 py-1.5 text-xs sm:text-sm font-medium text-stone-700 hover:text-[#9A421C] hover:bg-[#FAF0E6] rounded-lg transition-colors"
                    >
                      {a.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="min-w-0">
              {activeTab === 'literature' && <LiteratureExamsSection revealAll={globalRevealAll} />}
              {activeTab === 'complete' && <CompletePrepSection revealAll={globalRevealAll} />}
              {activeTab === 'resumen' && <ResumenPrepSection revealAll={globalRevealAll} />}
            </div>
          </div>
        ) : (
          <div>
            {activeTab === 'table' && <MasterBilingualTable globalRevealAll={globalRevealAll} />}
            {activeTab === 'tests' && <InteractiveTestsSection revealAll={globalRevealAll} />}
            {activeTab === 'final' && (
              <FinalExamAndChecklistSection
                revealAll={globalRevealAll}
                checkedTopics={checkedTopics}
                onToggleTopic={toggleTopic}
                onResetTopics={resetTopics}
              />
            )}
          </div>
        )}
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-[#E5C5A7] bg-[#FFFBF7] mt-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-600">
          <div>Lengua y Literatura · 1.º ESO · Español / Հայերեն</div>
          <div className="flex flex-wrap items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleTabChange(item.id)}
                className="hover:text-[#A84D24] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
