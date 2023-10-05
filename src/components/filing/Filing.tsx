import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

const chars = "-_~`!@#$%^&*O(log n)+=[]{}|;:,.<>?";

export default component$(() => {
  const gradientText =
    "bg-gradient-to-r from-pink-300 via-pink-400 to-purple-400 bg-clip-text text-transparent";

  const text = "Standby";
  const interval = 50;

  const outputText = useSignal("");
  const isMounted = useSignal(false);

  useVisibleTask$(() => {
    isMounted.value = !isMounted.value;
  }, []);

  useVisibleTask$(() => {
    let timer: NodeJS.Timeout;

    if (outputText !== text) {
      timer = setInterval(() => {
        if (outputText.value.length < text.length) {
          outputText.value += text[outputText.value.length];
        } else {
          clearInterval(timer);
        }
      }, interval);
    }

    return () => clearInterval(timer);
  }, [text, interval, outputText]);

  const remainder =
    outputText.value.length < text.length
      ? text
          .slice(outputText.value.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  if (!isMounted.value) {
    return <span> </span>;
  }

  return (
    <div
      class={`flex flex-col space-y-28 items-center justify-center h-screen  ${gradientText}`}
    >
      <span class="text-6xl text-zinc-500">
        {outputText.value}
        {remainder}
      </span>
      <span class="relative h-[1em] w-[34rem] ml-3 overflow-hidden text-4xl">
        <span
          class={`text-center absolute h-full w-full -translate-y-full animate-slide leading-none  ${gradientText}`}
        >
          Data Science and Big Data
        </span>
        <span
          class={`text-center absolute h-full w-full -translate-y-full animate-slide leading-none [animation-delay:4.2s] ${gradientText}`}
        >
          Pixel Artist
        </span>
        <span
          class={`text-center absolute h-full w-full -translate-y-full animate-slide leading-none [animation-delay:7.6s]  ${gradientText}`}
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
