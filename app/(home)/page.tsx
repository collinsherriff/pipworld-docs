import Link from 'next/link';

export default function HomePage() {
  const links = [
    { name: 'Documentation', href: '/docs', description: 'View the full documentation', internal: true },
    { name: 'Main Website', href: 'https://pip.world/', description: 'PiP World homepage', internal: false },
    { name: 'Production App', href: 'https://mm.pip.world/?lang=en', description: 'Market Mavericks (Production)', internal: false },
    { name: 'Development App', href: 'https://mm.pipworld.dev', description: 'Market Mavericks (Dev)', internal: false },
    { name: 'Staging App', href: 'https://mm.stagingpipworld.dev/?lang=en', description: 'Market Mavericks (Staging)', internal: false },
    { name: 'Agent Performance', href: 'https://agent-performance.netlify.app', description: 'Master Agent Analytics Dashboard', internal: false },
    { name: 'Agent Image Generator', href: 'https://pip-agent-gen.netlify.app', description: 'Create agent images', internal: false },
    { name: 'Bug Tracker', href: 'https://bugdrop.app/login', description: 'Report and track bugs', internal: false },
  ];

  return (
    <main className="flex flex-1 flex-col justify-center py-16 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">PiP World</h1>
          <p className="text-xl text-fd-muted-foreground mb-2">Market Mavericks Platform</p>
          <p className="text-fd-muted-foreground">Access all PiP World resources and environments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((link) => (
            link.internal ? (
              <Link
                key={link.href}
                href={link.href}
                className="block p-6 border rounded-lg hover:border-blue-500 hover:shadow-lg transition-all bg-white dark:bg-gray-800"
              >
                <h3 className="text-lg font-bold mb-2 text-fd-foreground">{link.name}</h3>
                <p className="text-sm text-fd-muted-foreground">{link.description}</p>
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border rounded-lg hover:border-blue-500 hover:shadow-lg transition-all bg-white dark:bg-gray-800"
              >
                <h3 className="text-lg font-bold mb-2 text-fd-foreground flex items-center gap-2">
                  {link.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </h3>
                <p className="text-sm text-fd-muted-foreground">{link.description}</p>
              </a>
            )
          ))}
        </div>
      </div>
    </main>
  );
}
