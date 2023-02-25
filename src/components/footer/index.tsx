import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <footer class="mx-auto md:pt-16">
      <div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
        <a class="text-gray-500 no-underline hover:no-underline" href="#">&copy; App 2020</a>
        - Template by
        <a class="text-gray-500 no-underline hover:no-underline" href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a>
      </div>
    </footer>
  );
});
