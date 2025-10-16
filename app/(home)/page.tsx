import Link from 'next/link';

interface BentoItem {
  name: string;
  href: string;
  description: string;
  size: 'large' | 'medium' | 'small';
  internal?: boolean;
  pattern: string;
}

export default function HomePage() {
  const items: BentoItem[] = [
    { 
      name: 'Documentation', 
      href: '/docs', 
      description: 'Complete platform guide', 
      size: 'large',
      internal: true,
      pattern: 'dots'
    },
    { 
      name: 'Production', 
      href: 'https://mm.pip.world/?lang=en', 
      description: 'Live application', 
      size: 'medium',
      pattern: 'grid'
    },
    { 
      name: 'Main Website', 
      href: 'https://pip.world/', 
      description: 'PiP World homepage', 
      size: 'medium',
      pattern: 'diagonal'
    },
    { 
      name: 'Development', 
      href: 'https://mm.pipworld.dev', 
      description: 'Dev environment', 
      size: 'small',
      pattern: 'circles'
    },
    { 
      name: 'Staging', 
      href: 'https://mm.stagingpipworld.dev/?lang=en', 
      description: 'Test environment', 
      size: 'small',
      pattern: 'waves'
    },
    { 
      name: 'Analytics', 
      href: 'https://agent-performance.netlify.app', 
      description: 'Performance metrics', 
      size: 'medium',
      pattern: 'squares'
    },
    { 
      name: 'Agent Generator', 
      href: 'https://pip-agent-gen.netlify.app', 
      description: 'Create agent images', 
      size: 'small',
      pattern: 'hexagons'
    },
    { 
      name: 'Bug Tracker', 
      href: 'https://bugdrop.app/login', 
      description: 'Report issues', 
      size: 'small',
      pattern: 'triangles'
    },
  ];

  const getPatternSVG = (pattern: string) => {
    const patterns: Record<string, string> = {
      dots: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.15"/></pattern></defs><rect width="100%" height="100%" fill="url(#dots)"/></svg>`,
      grid: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.15"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)"/></svg>`,
      diagonal: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="diagonal" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="currentColor" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(#diagonal)"/></svg>`,
      circles: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="circles" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse"><circle cx="12.5" cy="12.5" r="8" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(#circles)"/></svg>`,
      waves: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="waves" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse"><path d="M0 10 Q 10 5, 20 10 T 40 10" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.12"/></pattern></defs><rect width="100%" height="100%" fill="url(#waves)"/></svg>`,
      squares: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="5" y="5" width="10" height="10" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(#squares)"/></svg>`,
      hexagons: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="hexagons" x="0" y="0" width="28" height="24" patternUnits="userSpaceOnUse"><path d="M14,2 L24,8 L24,16 L14,22 L4,16 L4,8 Z" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(#hexagons)"/></svg>`,
      triangles: `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="triangles" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse"><polygon points="15,5 25,25 5,25" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(#triangles)"/></svg>`
    };
    return patterns[pattern] || patterns.dots;
  };

  const getSizeClass = (size: string) => {
    switch (size) {
      case 'large': return 'md:col-span-2 md:row-span-2';
      case 'medium': return 'md:col-span-2';
      default: return 'md:col-span-1';
    }
  };

  return (
    <main className="flex flex-1 flex-col justify-center py-12 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">PiP World</h1>
          <p className="text-lg text-fd-muted-foreground">Market Mavericks Platform</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[140px]">
          {items.map((item) => {
            const Component = item.internal ? Link : 'a';
            const linkProps = item.internal ? {} : { target: '_blank', rel: 'noopener noreferrer' };

            return (
              <Component
                key={item.href}
                href={item.href}
                {...linkProps}
                className={`group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl ${getSizeClass(item.size)}`}
              >
                <div 
                  className="absolute inset-0 text-gray-400 dark:text-gray-600"
                  dangerouslySetInnerHTML={{ __html: getPatternSVG(item.pattern) }}
                />
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                      {item.name}
                      {!item.internal && (
                        <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                  {item.size === 'large' && (
                    <div className="mt-4">
                      <div className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:gap-2 transition-all">
                        View docs
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </Component>
            );
          })}
        </div>
      </div>
    </main>
  );
}
