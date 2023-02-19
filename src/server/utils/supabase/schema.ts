import { ICreateTodo, ITodo, IUpdateTodo } from "~/types/todo"

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      todos: {
        Row: ITodo,
        Insert: ICreateTodo
        Update: IUpdateTodo
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}