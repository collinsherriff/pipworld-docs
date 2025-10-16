import Link from 'next/link';

export default function HomePage() {
  const links = [
    { name: 'Main Website', href: 'https://pip.world/', description: 'PiP World homepage', internal: false, color: 'purple' },
    { name: 'Production App', href: 'https://mm.pip.world/?lang=en', description: 'Market Mavericks (Production)', internal: false, color: 'green' },
    { name: 'Development App', href: 'https://mm.pipworld.dev', description: 'Market Mavericks (Dev)', internal: false, color: 'blue' },
    { name: 'Staging App', href: 'https://mm.stagingpipworld.dev/?lang=en', description: 'Market Mavericks (Staging)', internal: false, color: 'yellow' },
    { name: 'Agent Performance', href: 'https://agent-performance.netlify.app', description: 'Master Agent Analytics Dashboard', internal: false, color: 'indigo' },
    { name: 'Agent Image Generator', href: 'https://pip-agent-gen.netlify.app', description: 'Create agent images', internal: false, color: 'pink' },
    { name: 'Bug Tracker', href: 'https://bugdrop.app/login', description: 'Report and track bugs', internal: false, color: 'red' },
  ];

  const colorClasses = {
    blue: 'border-blue-500/50 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30',
    green: 'border-green-500/50 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/30',
    purple: 'border-purple-500/50 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/30',
    yellow: 'border-yellow-500/50 hover:border-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-950/30',
    indigo: 'border-indigo-500/50 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/30',
    pink: 'border-pink-500/50 hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950/30',
    red: 'border-red-500/50 hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/30',
  };

  return (
    <main className="flex flex-1 flex-col justify-center py-16 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">PiP World</h1>
          <p className="text-xl text-fd-muted-foreground mb-2">Market Mavericks Platform</p>
          <p className="text-fd-muted-foreground">Access all PiP World resources and environments</p>
        </div>

        {/* Featured Documentation Link */}
        <Link
          href="/docs"
          className="block p-8 mb-8 border-2 border-emerald-500 rounded-xl hover:border-emerald-600 hover:shadow-2xl transition-all bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-emerald-700 dark:text-emerald-400">📖 Documentation</h3>
              <p className="text-fd-muted-foreground">Complete guide to PiP World Market Mavericks</p>
            </div>
            <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        {/* Other Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-6 border-2 rounded-lg shadow-sm hover:shadow-lg transition-all ${colorClasses[link.color as keyof typeof colorClasses]}`}
            >
              <h3 className="text-lg font-bold mb-2 text-fd-foreground flex items-center gap-2">
                {link.name}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </h3>
              <p className="text-sm text-fd-muted-foreground">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
