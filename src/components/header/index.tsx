import { component$ } from '@builder.io/qwik';
import { paths } from '~/utils/paths';
import LinkItem from './LinkItem';
import Title from "./Title";

export default component$(() => {
  return (
    <nav class="bg-white py-2 md:py-4">
      <div class="container px-4 mx-auto md:flex md:items-center">

        <Title />

        <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
          <LinkItem path={paths.index} name="Home" />
          <LinkItem path={paths.todolist} name="Todo" />

          <a href={paths.signIn} class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
          <a href={paths.signUp} class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
        </div>
      </div>
    </nav>
  );
});
