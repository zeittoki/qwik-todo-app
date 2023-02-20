import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { PasswordForm } from "./PasswordForm";

export default component$(() => {
  return (
    <div class="flex flex-col gap-2">
      <h1>Sign In</h1>
      <div class="flex flex-col gap-6">
        <PasswordForm />
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Sign In",
};
