import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { useAuth } from "../layout";
import { RegisterForm } from "./RegisterForm";

export default component$(() => {
  useAuth();

  return (
    <div class="flex flex-col gap-2">
      <h1>Sign Up</h1>
      <RegisterForm />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Sign Up",
};
