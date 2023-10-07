import { component$, useStore, useSignal, $, Slot } from "@builder.io/qwik";

export default component$(() => {
  const divRef = useSignal<HTMLInputElement>();
  const isFocused = useSignal(false);
  const position = useStore({ x: 0, y: 0 });
  const opacity = useSignal(0);

  const handleMouseMove = $((e: QwikMouseEvent<HTMLInputElement>) => {
    if (!divRef.value || isFocused.value) return;

    const rect = divRef.value.getBoundingClientRect();
    position.x = e.clientX - rect.left;
    position.y = e.clientY - rect.top;
  });

  const handleFocus = $(() => {
    isFocused.value = true;
    opacity.value = 1;
  });

  const handleBlur = $(() => {
    isFocused.value = false;
    opacity.value = 0;
  });

  const handleMouseEnter = $(() => {
    opacity.value = 1;
  });

  const handleMouseLeave = $(() => {
    opacity.value = 0;
  });

  return (
    <div
      ref={divRef}
      onMouseMove$={handleMouseMove}
      onFocus$={handleFocus}
      onBlur$={handleBlur}
      onMouseEnter$={handleMouseEnter}
      onMouseLeave$={handleMouseLeave}
      class="relative flex h-72 w-80 rounded-2xl cursor-default border border-zin-400   p-3.5 text-slate-100 transition-colors duration-500"
    >
      <div
        style={{
          border: "2px solid rgb(216 180 254)",
          opacity: opacity.value,
          WebkitMaskImage: `radial-gradient(240px circle at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
        aria-hidden="true"
        class="border-[rgb(228 115 32)] pointer-events-none absolute left-0 top-0 z-10 h-full w-full cursor-default rounded-2xl border bg-[transparent] p-3.5 opacity-0  transition-opacity duration-500 placeholder:select-none"
      />
      <div class="flex justify-center items-center">
        <Slot />
      </div>
    </div>
  );
});
