import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Filing from "~/components/filing/Filing.tsx";
import SliderIcons from "~/components/sliderIcons/SliderIcons.tsx";
import TextGradient from "~/components/textGradient/TextGradient.tsx";
import BorderCard from "~/components/borderCard/BorderCard.tsx";
import Pxl from "~/assets/img/standbyPXL1.png?jsx";
import Pxl2 from "~/assets/img/standbyPXL2.png?jsx";
import Pxl3 from "~/assets/img/standbyPXL3.png?jsx";
import { BsInstagram, BsBatteryCharging, BsAt } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <>
      <Filing />
      <TextGradient text="Places where I exist" />
      <SliderIcons />
      <div class="flex relative justify-center items-center mt-20 gap-8">
        <BorderCard>
          <div class="flex flex-col space-y-7">
            <Pxl class="h-48 w-full w-full" />
            <div class="flex gap-4 justify-between text-4xl">
              <BsBatteryCharging />
              <BsInstagram />
              <BsAt />
            </div>
          </div>
        </BorderCard>
        <BorderCard>
          <div class="flex flex-col space-y-7">
            <Pxl2 class="h-48 w-full w-full" />
            <div class="flex gap-4 justify-between text-4xl">
              <BsBatteryCharging />
              <BsInstagram />
              <BsAt />
            </div>
          </div>
        </BorderCard>
        <BorderCard>
          <div class="flex flex-col space-y-7">
            <Pxl3 class="h-48 w-full w-full" />
            <div class="flex gap-4 justify-between text-4xl">
              <BsBatteryCharging />
              <BsInstagram />
              <BsAt />
            </div>
          </div>
        </BorderCard>
      </div>
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
