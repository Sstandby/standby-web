import { component$ } from "@builder.io/qwik";
import {
  SiTryHackMe,
  SiHackTheBox,
  SiCodewars,
  SiDiscord,
  SiLichess,
  SiTryhackme,
  SiHackthebox,
  SiGithub,
  SiKofi,
  SiGnometerminal,
} from "@qwikest/icons/simpleicons";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const icons = [
    { icon: <SiCodewars />, link: "https://codewars.com/users/Standby" },
    {
      icon: <SiDiscord />,
      link: "https://discord.com/users/974565231462350888",
    },
    { icon: <SiLichess />, link: "https://lichess.com/@/u-uwu" },
    { icon: <SiTryhackme />, link: "https://tryhackme.com/p/Standby" },
    {
      icon: <SiHackthebox />,
      link: "https://app.hackthebox.com/profile/96692",
    },
    { icon: <SiGithub />, link: "https://github.com/Sstandby" },
    { icon: <SiKofi />, link: "https://ko-fi.com/standbycoffe" },
    {
      icon: <SiGnometerminal />,
      link: "https://hackthissite.org/user/view/St4ndby/",
    },
  ];
  return (
    <div class="relative rounded-full m-auto w-[1024px] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,rgba(16,18,23)_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,rgba(16,18,23)_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div class="animate-infinite-slider flex w-[calc(250px*10)] text-6xl text-zinc-200">
        {icons.map(({ icon, link }, index) => (
          <Link key={index} href={link}>
            <button
              class="slide flex w-[125px] items-center justify-center outline-none transform active:scale-125  transition-transform"
              key={index}
            >
              {icon}
            </button>
          </Link>
        ))}

        {icons.map(({ icon, link }, index) => (
          <Link key={index} href={link}>
            <button
              class="slide flex w-[125px] items-center justify-center outline-none transform active:scale-125  transition-transform"
              key={index}
            >
              {icon}
            </button>
          </Link>
        ))}

        {icons.map(({ icon, link }, index) => (
          <Link key={index} href={link}>
            <button
              class="slide flex w-[125px] items-center justify-center outline-none transform active:scale-125  transition-transform"
              key={index}
            >
              {icon}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
});
