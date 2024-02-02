import type { LinksFunction, MetaFunction } from "@remix-run/node";

import mainCss from "../main.css?url";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix + Vite + .css?url" },
    { name: "description", content: "Hello from Remix + Vite + .css?url" },
  ];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: mainCss }];
};

export default function Index() {
  return (
    <section className="flex flex-col items-center justify-center h-screen p-12">
      <h1 className="text-5xl font-bold text-center text-blue-700">
        Hello from{" "}
        <a href="https://remix.run" className="underline">
          Remix
        </a>{" "}
        +
        <a href="https://vitejs.dev" className="underline">
          Vite
        </a>{" "}
        +
        <a
          href="https://github.com/vitejs/vite/pull/15259"
          className="underline"
        >
          <code className="relative px-2 py-1 mx-2 bg-blue-100 rounded-xl -z-10 whitespace-nowrap">
            .css?url
          </code>
        </a>
      </h1>
    </section>
  );
}
