import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface TagShineProps {
  text: string;
  link: string;
}

export default component$(({ link, text }: TextGradientProps) => {
  return (
    <Link href={link}>
      <button class="inline-flex h-12 animate-background-shine items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-bold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        {text}
      </button>
    </Link>
  );
});
