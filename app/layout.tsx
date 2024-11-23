// layout.tsx
// layout.tsx
'use client'
import "./globals.css";
import { ThemeProvider } from "./utils/ThemeProvider";
 // Adjust this import path as necessary to match your store location

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}

