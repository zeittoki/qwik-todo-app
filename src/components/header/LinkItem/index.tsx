import { component$ } from '@builder.io/qwik';

export default component$(({ path, name }: { path: string, name: string }) => {
  return (
    <a href={path} class="p-2 lg:px-4 md:mx-2 hover:text-red-600 transition-colors duration-300">{name}</a>
  );
});
