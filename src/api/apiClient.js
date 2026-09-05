const API_URL = "http://localhost:8080";

// function getCookie(name) {
//   return document.cookie
//     .split("; ")
//     .find((cookie) => cookie.startsWith(`${name}=`))
//     ?.split("=")[1];
// }

export async function apiFetch(path, options = {}) {
  const method = options.method || "GET";
  const headers = new Headers(options.headers);
//   const csrfToken = getCookie("XSRF-TOKEN");

//   if (csrfToken && method !== "GET" && method !== "HEAD" && method !== "OPTIONS") {
//     headers.set("X-XSRF-TOKEN", decodeURIComponent(csrfToken));
//   }

  return fetch(`${API_URL}${path}`, {
    ...options,
    headers,
    credentials: "include",
  });
}

export { API_URL };
