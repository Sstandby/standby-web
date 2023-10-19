import { $, component$, useSignal, QwikMouseEvent } from "@builder.io/qwik";

export interface ButtonProps {
  text: string;
}

export default component$(({ text }: ButtonProps) => {
  const stateMenu = useSignal(false);
  const eventMenu = $((event: QwikMouseEvent<HTMLDivElement>) => {
    const id = (event.target as HTMLDivElement).id;
    if (id !== "standby-txt") stateMenu.value = false;
  });
  return (
    <div window:onClick$={eventMenu}>
      <button class="flex gap-2 items-center justify-center outline-none  focus:bg-gradient-to-r focus:from-pink-300 focus:via-pink-400 focus:to-purple-400 focus:bg-clip-text focus:text-transparent duration-200 font-bold">
        <p class="hover:text-zinc" id="standby-txt">
          {text}
        </p>
      </button>
    </div>
  );
});
