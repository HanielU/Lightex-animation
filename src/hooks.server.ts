import type { Handle } from "@sveltejs/kit";

export const handle: Handle = ({ event, resolve }) => {
  if (event.url.pathname == "/") return Response.redirect(event.url.origin + "/catalog");
  return resolve(event);
};
