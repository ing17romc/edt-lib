import 'edt-lib/styles.css';
import { ThemeProvider } from 'edt-lib';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="system" ssrFallbackTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
