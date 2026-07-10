import { useMemo, useState } from 'react';
import {
  funnelQuestions,
  funnelResults,
  type FunnelAnswer,
  type ResultKey,
} from '@/data/funnelConfig';
import ResultCard from './ResultCard';

const initialScore: Record<ResultKey, number> = {
  landing: 0,
  profesional: 0,
  premium: 0,
};

export default function DiagnosticQuiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<FunnelAnswer[]>([]);
  const complete = answers.length === funnelQuestions.length;
  const current = funnelQuestions[index];

  const resultKey = useMemo(() => {
    const score = answers.reduce<Record<ResultKey, number>>(
      (acc, answer) => {
        for (const [key, value] of Object.entries(answer.weights)) {
          acc[key as ResultKey] += value ?? 0;
        }
        return acc;
      },
      { ...initialScore },
    );

    return Object.entries(score).sort((a, b) => b[1] - a[1])[0][0] as ResultKey;
  }, [answers]);

  const progress = (answers.length / funnelQuestions.length) * 100;

  function selectOption(optionIndex: number) {
    const option = current.options[optionIndex];
    const nextAnswers = [
      ...answers.slice(0, index),
      {
        question: current.title,
        label: option.label,
        value: option.value,
        weights: option.weights,
      },
    ];
    setAnswers(nextAnswers);

    if (index < funnelQuestions.length - 1) {
      setIndex(index + 1);
    }
  }

  function back() {
    if (index === 0 || complete) return;
    setAnswers(answers.slice(0, -1));
    setIndex(index - 1);
  }

  function restart() {
    setIndex(0);
    setAnswers([]);
  }

  return (
    <div className="rounded-[30px] border border-slate-200 bg-white/88 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 md:p-8">
      <div className="mb-5 flex flex-col gap-3 text-sm font-semibold text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <span>
          {complete
            ? 'Diagnóstico completo'
            : `Pregunta ${Math.min(index + 1, funnelQuestions.length)} de ${funnelQuestions.length}`}
        </span>
        <span>{answers.length} {answers.length === 1 ? 'respuesta' : 'respuestas'}</span>
      </div>

      <div className="mb-8 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800" aria-hidden="true">
        <span
          className="block h-full rounded-full bg-[linear-gradient(90deg,#2563eb,#22d3ee)] transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div aria-live="polite">
        {complete ? (
          <ResultCard
            result={funnelResults[resultKey]}
            answers={answers}
            onRestart={restart}
          />
        ) : (
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
              {current.title}
            </h3>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              {current.subtitle}
            </p>
            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {current.options.map((option, optionIndex) => (
                <button
                  className="min-h-[9rem] rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_18px_42px_rgba(37,99,235,0.10)] focus:outline-none focus:ring-4 focus:ring-cyan-300/25 dark:border-slate-700 dark:bg-slate-950 dark:hover:border-cyan-300"
                  key={option.value}
                  type="button"
                  onClick={() => selectOption(optionIndex)}
                >
                  <span className="block font-bold text-slate-950 dark:text-white">
                    {option.label}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {option.detail}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-45 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-cyan-300"
          type="button"
          onClick={back}
          disabled={index === 0 || complete}
        >
          Volver
        </button>
        <button
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:border-cyan-300"
          type="button"
          onClick={restart}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}
