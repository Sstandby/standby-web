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
    <div class="relative m-auto w-[924px] overflow-hidden">
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
