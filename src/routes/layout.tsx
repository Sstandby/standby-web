import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import Header from "~/components/header/Header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="absolute top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at50%-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white font-oswald overflow-auto text-white">
      <Header />
      <Slot />
      <p class="flex justify-center mb-14">
        © 2023 Standby. All Rights Reserved.
      </p>
    </div>
  );
});
