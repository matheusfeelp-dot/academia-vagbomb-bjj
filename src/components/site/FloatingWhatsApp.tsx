export function FloatingWhatsApp() {
  const phone = "5511947712354";
  const msg = encodeURIComponent(
    "Olá! Vim pelo site da Vagbomb BJJ e gostaria de agendar uma aula experimental.",
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 overflow-hidden rounded-full border border-whatsapp/40 bg-card/95 pr-0 shadow-lg shadow-black/50 backdrop-blur transition-all hover:pr-5 hover:border-whatsapp"
    >
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center">
        <span className="absolute inset-1 animate-ping rounded-full bg-whatsapp/30" />
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-whatsapp-foreground"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.821 11.821 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.737-.991zm5.715-5.514c-.149-.074-1.156-.571-1.335-.635-.179-.064-.31-.095-.44.107-.131.201-.507.635-.621.764-.114.131-.229.149-.427.074-.198-.074-.837-.308-1.592-.981-.588-.523-.984-1.169-1.1-1.367-.114-.198-.012-.305.064-.405.07-.088.157-.197.236-.295.075-.094.1-.158.166-.262.064-.107.032-.197-.016-.276-.049-.079-.44-1.062-.604-1.455-.158-.383-.32-.332-.44-.338-.114-.005-.247-.005-.38-.005-.131 0-.347.049-.529.247-.18.198-.69.674-.69 1.642 0 .968.708 1.903.806 2.034.099.131 1.387 2.117 3.357 2.969.469.202.835.323 1.12.415.471.149.899.128 1.238.078.377-.056 1.156-.473 1.319-.928.162-.455.162-.845.113-.928-.049-.082-.18-.131-.377-.205z" />
          </svg>
        </span>
      </span>
      <span className="text-stencil max-w-0 whitespace-nowrap text-sm text-foreground opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:pl-1 group-hover:opacity-100">
        Fale com a gente
      </span>
    </a>
  );
}
