import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center py-16 px-4">
      <div className="max-w-2xl mx-auto w-full text-center">
        <h1 className="text-6xl font-bold mb-4 text-fd-foreground">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-fd-foreground">Page Not Found</h2>
        <p className="text-fd-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            href="/"
            className="block p-4 border-2 border-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 transition-all"
          >
            <h3 className="text-lg font-bold text-fd-foreground mb-2">← Go Home</h3>
            <p className="text-sm text-fd-muted-foreground">Return to the homepage</p>
          </Link>

          <Link
            href="/docs"
            className="block p-4 border-2 border-green-500 rounded-lg hover:bg-green-50 dark:hover:bg-green-950 transition-all"
          >
            <h3 className="text-lg font-bold text-fd-foreground mb-2">📖 Documentation</h3>
            <p className="text-sm text-fd-muted-foreground">Browse all documentation</p>
          </Link>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-fd-muted-foreground font-semibold">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/docs/getting-started" className="text-blue-500 hover:underline text-sm">
              Getting Started
            </Link>
            <Link href="/docs/game-concepts" className="text-blue-500 hover:underline text-sm">
              Game Concepts
            </Link>
            <Link href="/docs/ai-agents" className="text-blue-500 hover:underline text-sm">
              AI Agents
            </Link>
            <a 
              href="https://pip.world/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm"
            >
              Main Website ↗
            </a>
          </div>
        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-8 px-6 py-2 bg-fd-primary text-fd-primary-foreground rounded-lg hover:bg-fd-primary/90 transition-colors"
        >
          ← Go Back
        </button>
      </div>
    </main>
  );
}
