import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { DownloadAllDocs } from '@/app/components/download-all-docs';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions()}
      sidebar={{
        footer: (
          <div className="p-4 border-t">
            <DownloadAllDocs />
          </div>
        )
      }}
    >
      {children}
    </DocsLayout>
  );
}
