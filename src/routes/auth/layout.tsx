import { component$, Slot } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";
import { getUserFromEvent } from "~/server/loaders";
import { paths } from "~/utils/paths";

export const useAuth = loader$(async (event) => {
  const user = await getUserFromEvent(event);

  if (user) {
    event.redirect(302, paths.index);
  }
});

export default component$(() => {
  return (
    <>
      <section class="p-5">
        <Slot />
      </section>
    </>
  );
});