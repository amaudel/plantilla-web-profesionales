import type { FunnelAnswer, FunnelResult } from '@/data/funnelConfig';
import WhatsAppCTA from './WhatsAppCTA';

type Props = {
  result: FunnelResult;
  answers: FunnelAnswer[];
  onRestart: () => void;
};

export default function ResultCard({ result, answers, onRestart }: Props) {
  return (
    <div className="grid gap-6">
      <div className="rounded-[26px] border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(37,99,235,0.10),rgba(34,211,238,0.12))] p-5 dark:border-cyan-300/15 dark:bg-cyan-300/10 md:p-6">
        <span className="inline-flex w-max rounded-full border border-cyan-300/25 bg-white/70 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-cyan-300/20 dark:bg-slate-950/50 dark:text-cyan-100">
          Resultado desbloqueado
        </span>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-cyan-300">
          Recomendación
        </p>
        <h3 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white md:text-5xl">
          {result.title}
        </h3>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {result.reason}
        </p>
        <div className="mt-5 flex flex-col gap-2 rounded-2xl border border-white/70 bg-white/78 p-4 dark:border-slate-700 dark:bg-slate-950/70 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            Paquete recomendado
          </span>
          <span className="flex flex-col text-xl font-bold text-blue-700 dark:text-cyan-300 sm:flex-row sm:gap-2">
            <span>{result.package}</span>
            <span>{result.price}</span>
          </span>
        </div>
      </div>
      <dl className="grid gap-3 md:grid-cols-2">
        {answers.map((answer) => (
          <div
            key={answer.question}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950"
          >
            <dt className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              {answer.question}
            </dt>
            <dd className="mt-1 font-semibold text-slate-950 dark:text-white">
              {answer.label}
            </dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-col gap-3 sm:flex-row">
        <WhatsAppCTA result={result} answers={answers} />
        <button
          className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
          type="button"
          onClick={onRestart}
        >
          Hacer otra vez
        </button>
      </div>
    </div>
  );
}
