import { component$ } from "@builder.io/qwik";
import {
  BsHouseHeartFill,
  BsIncognito,
  BsStars,
} from "@qwikest/icons/bootstrap";
import Image from "~/assets/img/cathacker.png?jsx";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const icons = [
    {
      icon: <BsHouseHeartFill />,
      name: "Home",
      link: "/",
    },
    {
      icon: <BsIncognito />,
      name: "Posts",
      link: "/posts",
    },
    {
      icon: <BsStars />,
      name: "About",
      link: "/about",
    },
    /*
    {
* icon: <BsSendPlus />,
* name: "Contact",
* link: "/contact",
    },
      */
  ];
  return (
    <header class="fixed z-20 flex w-[100vw] items-center pt-5 px-20 justify-between">
      <div class="w-20 h-20  p-1  rounded-full bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">
        <Image class="rounded-full" />
      </div>
      <nav class="flex p-4 px-20 bg-neutral-950 rounded-full border  border-zinc-400 text-zinc-300 gap-4 ">
        {icons.map(({ icon, link, name }, index) => (
          <Link key={index} href={link}>
            <button
              key={index}
              class="flex text-2xl gap-2 items-center justify-center outline-none focus:bg-gradient-to-r focus:from-pink-300 focus:via-pink-400 focus:to-purple-400 focus:bg-clip-text focus:text-transparent duration-200 font-bold"
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
          </Link>
        ))}
      </nav>
      <div />
    </header>
  );
});
