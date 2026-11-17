import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'BridgeCare | One family. One clear plan.', description: 'Turn important letters into translated, shared family action plans.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
