import { component$ } from "@builder.io/qwik";
import Avatar from "~/assets/img/avatar.png?jsx";
import { BsCupHotFill } from "@qwikest/icons/bootstrap";

export default component$(() => {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="w-96">
        <p class="flex justify-center text-gray-500 mb-6 text-[13px] font-bold">
          HELLO SYSTEM.
        </p>
        <div class="flex gap-4 items-center">
          <div class="relative">
            <Avatar class="h-32 w-32 rounded-full" />
            <div class="absolute  bottom-0 left-16 transform translate-y-1/4 w-10 h-10 bg-gradient-to-r from-purple-400 via-pink-400 to-pink-400 rounded-full flex items-center text-2xl justify-center">
              <BsCupHotFill class="text-red-900" />
            </div>
          </div>
          <div>
            <p class="font-bold text-2xl">@Standby</p>
            <p class="text-xl">Developer fullstack — PXL</p>
            <p class="text-xl">Hacker Wannabe.</p>
          </div>
        </div>
        <div class="border-l-4 border-purple-400 text-3xl px-4 mt-10 mb-8 font-bold">
          <p>About Me</p>
        </div>
        <div class="text-lg space-y-4 text-slate-400">
          <p>
            This website has undergone several renovations since I was 13 years
            old, up to the present day when I am 19, and my goal will always be
            to share, in my spare time, any idea, creation, transformation, or
            design that I may be capable of with equally curious readers who
            also uphold this concept.
          </p>
          <p>
            Most likely, you will come across a wide range of content here,
            including CTFs I undertake, programming guides, data science, chess,
            or simply how to create designs with Blender or Aseprite for pixel
            art.
          </p>
          <p class="mt-5 bg-gradient-to-r from-pink-500 via-pink-400 to-purple-400 inline-block text-transparent bg-clip-text">
            Contact: hello@sstandby.com
          </p>
        </div>
      </div>
    </div>
  );
});
