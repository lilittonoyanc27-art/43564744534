import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronRight, Search, Eye, EyeOff, RotateCcw } from 'lucide-react';
import { BilingualRow, TableCategory } from './types';
import { MASTER_VOCABULARY, TABLE_CATEGORIES } from './dataVocabulary';

interface ClickTranslateProps {
  es: string;
  hy: string;
  revealAll: boolean;
  highlight?: string;
  className?: string;
  esClassName?: string;
  compact?: boolean;
  defaultOpen?: boolean;
}

function renderWithHighlight(text: string, highlight?: string) {
  if (!highlight) return text;
  const idx = text.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx === -1) return text;
  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + highlight.length);
  const after = text.slice(idx + highlight.length);
  return (
    <>
      {before}
      <mark className="bg-amber-200/80 text-stone-950 rounded px-1 py-0.5 font-semibold">{match}</mark>
      {after}
    </>
  );
}

export const ClickTranslate: React.FC<ClickTranslateProps> = ({
  es,
  hy,
  revealAll,
  highlight,
  className = '',
  esClassName = '',
  compact = false,
  defaultOpen = false,
}) => {
  const [localOpen, setLocalOpen] = useState(defaultOpen);
  const isOpen = revealAll || localOpen;

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setLocalOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={`group text-left w-full rounded-md transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8572A] cursor-pointer ${
          compact ? 'py-0.5' : 'py-1 -mx-1.5 px-1.5 hover:bg-[#FBF0E4]'
        }`}
      >
        <span className={`inline text-stone-900 group-hover:text-[#9A421C] transition-colors ${esClassName}`}>
          {renderWithHighlight(es, highlight)}
        </span>
        <span
          aria-hidden="true"
          className="inline-flex items-center align-middle ml-1.5 text-[#C26A3E] group-hover:text-[#9A421C] transition-colors"
        >
          {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
        </span>
      </button>
      {isOpen && hy && (
        <div className="mt-1.5 rounded-lg bg-[#FDF5EC] border border-[#E9CBB0] px-3.5 py-2.5 text-[0.95rem] text-stone-800 leading-relaxed whitespace-pre-line">
          <span className="text-xs font-semibold text-[#9A421C] mr-2">Հայերեն ·</span>
          {hy}
        </div>
      )}
    </div>
  );
};

interface MasterBilingualTableProps {
  globalRevealAll: boolean;
}

type DirectionMode = 'es-to-hy' | 'hy-to-es' | 'both';

export const MasterBilingualTable: React.FC<MasterBilingualTableProps> = ({ globalRevealAll }) => {
  const [category, setCategory] = useState<TableCategory>('all');
  const [query, setQuery] = useState('');
  const [direction, setDirection] = useState<DirectionMode>('es-to-hy');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});
  const [showAllLocal, setShowAllLocal] = useState(false);

  const effectiveRevealAll = globalRevealAll || showAllLocal || direction === 'both';

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MASTER_VOCABULARY.filter((row) => {
      if (category !== 'all' && row.category !== category) return false;
      if (!q) return true;
      return (
        row.es.toLowerCase().includes(q) ||
        row.hy.toLowerCase().includes(q) ||
        (row.extraEs && row.extraEs.toLowerCase().includes(q)) ||
        (row.extraHy && row.extraHy.toLowerCase().includes(q)) ||
        row.categoryLabel.toLowerCase().includes(q)
      );
    });
  }, [category, query]);

  const toggleRow = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openCount = useMemo(() => {
    if (effectiveRevealAll) return filteredRows.length;
    return filteredRows.filter((r) => openIds[r.id]).length;
  }, [effectiveRevealAll, filteredRows, openIds]);

  return (
    <section aria-labelledby="master-table-heading" className="space-y-5">
      {/* Header Panel */}
      <div className="bg-white border border-[#E5C5A7] rounded-2xl p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <p className="text-xs font-semibold text-[#A84D24]">
              Tabla interactiva · Español ↔ Հայերեն · 1.º ESO
            </p>
            <h1 id="master-table-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
              Vocabulario y reglas de Lengua y Literatura
            </h1>
            <ClickTranslate
              es="Haz clic en cualquier expresión en español para abrir su traducción al armenio. Cambia la dirección de práctica o filtra por temas del examen."
              hy="Սեղմի՛ր իսպաներեն ցանկացած արտահայտության վրա՝ հայերեն թարգմանությունը բացելու համար։ Փոխի՛ր ուղղությունը կամ ընտրի՛ր քննության թեման։"
              revealAll={globalRevealAll}
              compact
              esClassName="text-sm sm:text-base text-stone-600 leading-relaxed"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <div className="inline-flex items-center p-1 bg-[#FAF0E6] rounded-xl border border-[#E7C9AE]">
              <button
                type="button"
                onClick={() => setDirection('es-to-hy')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  direction === 'es-to-hy'
                    ? 'bg-[#C25D2E] text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                Español → Հայերեն
              </button>
              <button
                type="button"
                onClick={() => setDirection('hy-to-es')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  direction === 'hy-to-es'
                    ? 'bg-[#C25D2E] text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                Հայերեն → Español
              </button>
              <button
                type="button"
                onClick={() => setDirection('both')}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  direction === 'both'
                    ? 'bg-[#C25D2E] text-white shadow-xs'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                Ambos
              </button>
            </div>
          </div>
        </div>

        {/* Controls: Search + Reveal Controls */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between pt-3 border-t border-[#F0DCC9]">
          <div className="relative flex-1 max-w-xl">
            <Search className="w-4 h-4 text-[#B8643B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar en español o armenio (ej.: metáfora, փոխաբերություն, romance)..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#FDF8F3] border border-[#E5C5A7] rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#C25D2E] focus:ring-2 focus:ring-[#F3D2B5]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-stone-600">
            <span className="font-mono-tabular">
              Resultados: <strong className="text-stone-900">{filteredRows.length}</strong> · Abiertos:{' '}
              <strong className="text-[#A84D24]">{openCount}</strong>
            </span>
            {direction !== 'both' && (
              <>
                <button
                  type="button"
                  onClick={() => setShowAllLocal((v) => !v)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-stone-800 bg-[#FAF0E6] border border-[#E5C5A7] rounded-xl hover:bg-[#F3DFCA] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {showAllLocal ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showAllLocal ? 'Ocultar todos' : 'Mostrar todos'}
                </button>
                {Object.keys(openIds).length > 0 && !showAllLocal && (
                  <button
                    type="button"
                    onClick={() => setOpenIds({})}
                    className="inline-flex items-center gap-1.5 px-2.5 py-2 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-950 whitespace-nowrap shrink-0 cursor-pointer"
                    title="Cerrar filas abiertas"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Cerrar
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-1.5">
          {TABLE_CATEGORIES.map((cat) => {
            const active = category === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  active
                    ? 'bg-[#C25D2E] text-white border-[#C25D2E]'
                    : 'bg-white text-stone-700 border-[#E5C5A7] hover:border-[#C25D2E] hover:bg-[#FAF0E6]'
                }`}
              >
                {cat.labelEs}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clean Data Table Engine */}
      <div className="bg-white border border-[#E5C5A7] rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FAF0E6] border-b border-[#E5C5A7] text-xs sm:text-sm font-semibold text-stone-700">
                <th className="py-3.5 px-4 w-12 font-mono-tabular">#</th>
                <th className="py-3.5 px-4 w-44">Tema</th>
                <th className="py-3.5 px-4">
                  {direction === 'hy-to-es' ? 'Հայերեն (clic para Español)' : 'Español (clic para Հայերեն)'}
                </th>
                <th className="py-3.5 px-4">
                  {direction === 'hy-to-es' ? 'Español' : 'Հայերեն'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F2E2D2] text-[0.95rem] sm:text-base">
              {filteredRows.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-10 px-4 text-center text-stone-500">
                    No se encontraron resultados para «{query}». Prueba con otra palabra.
                  </td>
                </tr>
              ) : (
                filteredRows.map((row: BilingualRow, index: number) => {
                  const isOpen = effectiveRevealAll || !!openIds[row.id];
                  const primaryMain = direction === 'hy-to-es' ? row.hy : row.es;
                  const primaryExtra = direction === 'hy-to-es' ? row.extraHy : row.extraEs;
                  const secondaryMain = direction === 'hy-to-es' ? row.es : row.hy;
                  const secondaryExtra = direction === 'hy-to-es' ? row.extraEs : row.extraHy;

                  return (
                    <tr
                      key={row.id}
                      onClick={() => direction !== 'both' && toggleRow(row.id)}
                      className={`transition-colors duration-150 ${
                        direction !== 'both' ? 'cursor-pointer hover:bg-[#FDF5EC]' : ''
                      } ${isOpen && direction !== 'both' ? 'bg-[#FDF7F0]' : ''}`}
                    >
                      <td className="py-3.5 px-4 align-top font-mono-tabular text-xs text-stone-400">
                        {String(index + 1).padStart(2, '0')}
                      </td>
                      <td className="py-3.5 px-4 align-top text-xs text-stone-500">
                        {row.categoryLabel}
                      </td>
                      <td className="py-3.5 px-4 align-top">
                        <div className="font-medium text-stone-900 flex items-start gap-2">
                          {direction !== 'both' && (
                            <span className="mt-0.5 text-[#C25D2E] shrink-0" aria-hidden="true">
                              {isOpen ? (
                                <ChevronDown className="w-4 h-4" />
                              ) : (
                                <ChevronRight className="w-4 h-4" />
                              )}
                            </span>
                          )}
                          <div>
                            <div className="text-stone-950 font-semibold">{primaryMain}</div>
                            {primaryExtra && (
                              <div className="text-xs sm:text-sm text-stone-600 mt-0.5 leading-relaxed">
                                {primaryExtra}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 align-top">
                        {isOpen ? (
                          <div className="space-y-0.5">
                            <div className="font-semibold text-[#8C3B19]">{secondaryMain}</div>
                            {secondaryExtra && (
                              <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                                {secondaryExtra}
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-xs text-[#B35D34]/80 select-none">
                            {direction === 'hy-to-es'
                              ? 'Clic para ver en Español'
                              : 'Clic para ver en Հայերեն'}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
