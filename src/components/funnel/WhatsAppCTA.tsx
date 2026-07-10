import type { FunnelAnswer, FunnelResult } from '@/data/funnelConfig';
import { whatsappPhone } from '@/data/funnelConfig';

type Props = {
  result: FunnelResult;
  answers: FunnelAnswer[];
};

export default function WhatsAppCTA({ result, answers }: Props) {
  const answerText = answers
    .map((answer, index) => `${index + 1}. ${answer.question}: ${answer.label}`)
    .join('\n');
  const message = `Hola, hice el diagnóstico gratuito de Nixgo Digital.\n\nResultado desbloqueado: ${result.title}\nPaquete recomendado: ${result.package} (${result.price})\n\nMis respuestas:\n${answerText}\n\nQuiero que me recomienden el siguiente paso.`;
  const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      Enviar diagnóstico por WhatsApp
    </a>
  );
}
