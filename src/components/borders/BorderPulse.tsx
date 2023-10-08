import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="relative border-t-1 border-white w-[54rem] mx-auto">
      <div class="absolute top-0 flex w-full justify-center">
        <div class="left-0 h-[2px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
      </div>
    </div>
  );
});
