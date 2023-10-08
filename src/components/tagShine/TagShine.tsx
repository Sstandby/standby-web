import { component$, Slot } from "@builder.io/qwik";

export interface TagShineProps {
  text: string;
}

export default component$(({ text }: TextGradientProps) => {
  return (
    <span class="inline-flex h-full  animate-background-shine cursor-pointer items-center justify-center rounded-full border border-slate-400 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl custom-text-shadow">
      {text}
    </span>
  );
});
