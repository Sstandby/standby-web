import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Filing from "~/components/filing/Filing";
import SliderIcons from "~/components/sliderIcons/SliderIcons";
import TextGradient from "~/components/textGradient/TextGradient";
import BorderCard from "~/components/borderCard/BorderCard";
import TagShine from "~/components/tagShine/TagShine";
import ButtonShine from "~/components/buttons/ButtonShine";
import BorderPulse from "~/components/borders/BorderPulse";
import Pxl from "~/assets/img/standbyPXL1.png?jsx";
import Pxl2 from "~/assets/img/standbyPXL2.png?jsx";
import Pxl3 from "~/assets/img/standbyPXL3.png?jsx";
import { BsStars, BsCircleFill, BsAsterisk } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <>
      <Filing />
      <div class="mb-24 space-y-5">
        <TextGradient text="Places where I exist" />
        <BorderPulse />
      </div>
      <SliderIcons />
      <div class="mx-auto flex justify-between w-[1024px] mt-24 mb-24">
        <div class="flex flex-col space-y-6">
          <div class="flex gap-4">
            <TagShine text="Pixel Art" />
            <TagShine text="Design" />
          </div>
          <p class="font-bold text-4xl w-[34rem] custom-text-shadow">
            Pixel art that I have created for some backgrounds
          </p>
        </div>
        <div class="flex items-end">
          <ButtonShine text="Portfolio" link="#" />
        </div>
      </div>
      <div class="flex relative justify-center items-center gap-8">
        <BorderCard>
          <div class="flex flex-col space-y-2">
            <div class="flex justify-between text-sm">
              <div class="flex gap-2">
                <BsCircleFill class="text-red-400" />
                <BsCircleFill class="text-yellow-200" />
                <BsCircleFill class="text-green-300" />
              </div>
              <BsAsterisk class="text-purple-400" />
            </div>
            <Pxl class="rounded-lg h-52 w-full" />
          </div>
        </BorderCard>
        <BorderCard>
          <div class="flex flex-col space-y-2">
            <div class="flex justify-between text-sm">
              <div class="flex gap-2">
                <BsCircleFill class="text-red-400" />
                <BsCircleFill class="text-yellow-200" />
                <BsCircleFill class="text-green-300" />
              </div>
              <BsAsterisk class="text-purple-400" />
            </div>
            <Pxl2 class="rounded-lg h-52" />
          </div>
        </BorderCard>
        <BorderCard>
          <div class="flex flex-col space-y-2">
            <div class="flex justify-between text-sm">
              <div class="flex gap-2">
                <BsCircleFill class="text-red-400" />
                <BsCircleFill class="text-yellow-200" />
                <BsCircleFill class="text-green-300" />
              </div>
              <BsAsterisk class="text-purple-400" />
            </div>
            <Pxl3 class="rounded-lg h-52 w-full" />
          </div>
        </BorderCard>
      </div>
      <div class="flex mt-80 mb-80 w-[1024px] items-center justify-center">
        <div class="space-y-10">
          <div class="flex gap-4">
            <TagShine text="Design" />
            <TagShine text="Data Science" />
            <TagShine text="Cibersecurity" />
          </div>
          <p class="font-bold text-7xl w-[44rem] custom-text-shadow">
            Personal space where I design, explore and transform.
          </p>
          <p class="text-xl w-[34rem]">
            Projects that I have been doing and have been public. Keep an eye on
            this section.
          </p>
        </div>
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
