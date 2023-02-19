import { z } from "zod";

export const TodoSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  is_completed: z.boolean().default(false),
  created_at: z.date(),
  updated_at: z.date(),
})

export type ITodo = z.infer<typeof TodoSchema>
export type ICreateTodo = Pick<ITodo, "title">
export type IUpdateTodo = RequireOne<ITodo, "title" | "is_completed">

type RequireOne<T, K extends keyof T = keyof T> =
  K extends keyof T ? PartialRequire<T, K> : never;
type PartialRequire<O, K extends keyof O> = {
  [P in K]-?: O[P]
} & O;