import { component$ } from "@builder.io/qwik";
import {
  BsHouseHeartFill,
  BsIncognito,
  BsStars,
  BsSendPlus,
  BsGithub,
} from "@qwikest/icons/bootstrap";
import Image from "~/assets/img/cathacker.png?jsx";

export default component$(() => {
  const icons = [
    {
      icon: <BsHouseHeartFill />,
      name: "Home",
    },
    {
      icon: <BsIncognito />,
      name: "Blogs",
    },
    {
      icon: <BsStars />,
      name: "About",
    },
    {
      icon: <BsSendPlus />,
      name: "Contact",
    },
  ];
  return (
    <header class="fixed z-20 flex w-[100vw] items-center p-6  lg:px-8 justify-between">
      <div class="w-14 h-14  p-1  rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">
        <Image class="rounded-full" />
      </div>
      <nav class="flex p-6 px-10  rounded-full border  border-zinc-400 text-zinc-300 gap-4 ">
        {icons.map(({ icon, name }, index) => (
          <button
            key={index}
            class="flex gap-2 items-center justify-center outline-none  focus:bg-gradient-to-r focus:from-pink-300 focus:via-pink-400 focus:to-purple-400 focus:bg-clip-text focus:text-transparent duration-200 font-bold"
          >
            <p
              style={{
                color: "#71717a",
              }}
            >
              {icon}
            </p>
            <p class="hover:text-zinc-400">{name}</p>
          </button>
        ))}
      </nav>
      <div class="text-zinc-500 shadow-md shadow-zinc-400 rounded-full outline-none text-center text-4xl">
        <BsGithub />
      </div>
    </header>
  );
});
