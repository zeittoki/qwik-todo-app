import type { User } from "@supabase/supabase-js";
import { getUserByCookie } from "./auth/auth";
import type { ServerEvent } from "./types";

export const getUserFromEvent = (event: ServerEvent): Promise<User | null> => {
  const cachedPromise = event.sharedMap.get("user");
  if (cachedPromise) {
    return cachedPromise;
  }

  const promise = getUserByCookie(event);
  event.sharedMap.set("user", promise);
  return promise;
};
