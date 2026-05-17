import './globals.css';

export const metadata = {
  title: 'Apex University — Shaping Tomorrow\'s Leaders',
  description: 'A new-age tech-driven university offering industry-aligned programmes. UGC Approved, NAAC Accredited.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
