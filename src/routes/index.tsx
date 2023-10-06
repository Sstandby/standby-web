import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Filing from "~/components/filing/Filing.tsx";
import SliderIcons from "~/components/sliderIcons/SliderIcons.tsx";
import TextGradient from "~/components/textGradient/TextGradient.tsx";

export default component$(() => {
  return (
    <>
      <Filing />
      <TextGradient text="Places where I exist" />
      <SliderIcons />
    </>
  );
});

export const head: DocumentHead = {
  title: "Standby",
  meta: [
    {
      name: "Corazon de acero",
      content: "Qwik site description",
    },
  ],
};
