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
      <span className="w-max rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:text-cyan-100">
        Resultado desbloqueado
      </span>
      <div>
        <h3 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white md:text-5xl">
          {result.title}
        </h3>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {result.reason}
        </p>
        <p className="mt-4 text-xl font-bold text-blue-700 dark:text-cyan-300">
          {result.package}
        </p>
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
