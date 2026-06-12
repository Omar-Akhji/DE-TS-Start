import { createRootRoute, HeadContent, Link, Scripts } from "@tanstack/react-router";
import globalsCss from "../globals.css?url";
import { Footer } from "../shared/ui/Footer";
import { Navigation } from "../shared/ui/Navigation";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Deutsch Lernen" },
    ],
    links: [
      { rel: "stylesheet", href: globalsCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
});

function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-6xl font-bold text-yellow">404</h1>
      <p className="max-w-md text-lg text-mist-500">
        Seite nicht gefunden. Die angeforderte Seite existiert nicht.
      </p>
      <Link
        to="/"
        className="rounded-full bg-yellow px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow/80"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className="no-js"
      style={{ "--font-poppins": "Poppins, system-ui, sans-serif" } as React.CSSProperties}
    >
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <script id="remove-no-js">{`document.documentElement.classList.remove('no-js');`}</script>
        <div className="container mx-auto max-w-7xl">
          <Navigation />
          <div className="px-2 mobile:px-8">
            {children}
            <Footer />
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
