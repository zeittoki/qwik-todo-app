import { component$ } from '@builder.io/qwik';
import { action$, Form, loader$, z, zod$, type DocumentHead } from '@builder.io/qwik-city';
import { supabase } from '~/server/supabase/db';

export const useTodoLoader = loader$(async () => {
  return (await supabase.from("todos").select()).data
});

export const useAddToListAction = action$(
  async (formData) => {
    await supabase
      .from("todos")
      .insert(formData)
    return {
      success: true,
    };
  },
  zod$({
    title: z.string().min(1),
  })
);

export default component$(() => {
  const list = useTodoLoader();
  const action = useAddToListAction();

  return (
    <>
      <h1>Form Action TODO list</h1>
      <ul>
        {list.value?.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
      <Form action={action} spaReset class="flex gap-4">
        <input
          class="border border-blue-600 px-4 py-2 rounded-full outline-none"
          type="text"
          name="title"
          required
        />
        <button
          class="bg-blue-100 hover:border-blue-400 hover:bg-blue-200 px-4 py-2 rounded-md"
          type="submit"
        >Add item
        </button>
      </Form>
    </>
  );
});

export const head: DocumentHead = {
  title: 'TodoList',
};
