import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const gradientText =
    "bg-gradient-to-r from-pink-300 via-pink-400 to-purple-400 bg-clip-text text-transparent";
  return (
    <div
      class={`flex flex-col space-y-14 items-center justify-center h-screen  ${gradientText}`}
    >
      <p class="text-6xl text-zinc-500">Standby</p>
      <span class="relative h-[1em] w-[34rem] ml-3 overflow-hidden text-4xl">
        <span
          class={`text-center absolute h-full w-full -translate-y-full animate-slide leading-none  [animation-delay:5.30s] ${gradientText}`}
        >
          Data Science and Big Data
        </span>
        <span
          class={`text-center absolute h-full w-full -translate-y-full animate-slide leading-none [animation-delay:6.40s] ${gradientText}`}
        >
          Pixel Artist
        </span>
        <span
          class={`text-center absolute h-full w-full -translate-y-full animate-slide leading-none [animation-delay:7.40s]  ${gradientText}`}
        >
          Cibersecurity
        </span>
      </span>
      <p class="text-zinc-500 text-xl w-80 text-center">
        Somewhere, something incredible is waiting to be discovered
      </p>
    </div>
  );
});
