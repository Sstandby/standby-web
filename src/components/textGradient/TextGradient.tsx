import { component$, Slot } from "@builder.io/qwik";

export interface TextGradientProps {
  text: string;
}

export default component$(({ text }: TextGradientProps) => {
  return (
    <span class="flex justify-center items-center animate-text-gradient bg-gradient-to-r from-pink-300 via-pink-400 to-purple-400 bg-[200%_auto] bg-clip-text text-4xl text-transparent ">
      {text}
    </span>
  );
});
