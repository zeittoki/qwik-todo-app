import { $, component$, useBrowserVisibleTask$ } from "@builder.io/qwik";
import {
  action$, useNavigate,
  z,
  zod$, type DocumentHead
} from "@builder.io/qwik-city";
import { updateAuthCookies } from "~/server/auth/auth";
import { paths } from "~/utils/paths";

export const useSetSession = action$(
  (data, event) => {
    updateAuthCookies(event, data);
  },
  zod$({
    access_token: z.string(),
    expires_in: z.coerce.number(),
    refresh_token: z.string(),
  })
);

export default component$(() => {
  const navigate = useNavigate();

  const action = useSetSession()

  const handleSendSession = $(async () => {
    const hash = window.location.hash.substring(1);

    if (!hash) {
      return;
    }

    const params = new URLSearchParams(hash);
    const access_token = params.get("access_token");
    const expires_in = params.get("expires_in");
    const refresh_token = params.get("refresh_token");

    if (!access_token || !expires_in || !refresh_token) {
      return;
    }

    await action.run({
      access_token,
      expires_in: +expires_in,
      refresh_token,
    });

    if (action.value?.status !== "success") {
      return;
    }

    navigate(paths.index);
  });

  useBrowserVisibleTask$(() => {
    handleSendSession();
  });

  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};
