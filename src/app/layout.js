import "./globals.css";


export const metadata = {};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="International Textile Agency" />
      <meta name="robots" content="index, follow" />
      <title>Empeetex</title>
      <meta property="og:title" content="Empeetex" />
      <meta property="og:description" content="International Textile Agency" />
      {/* <meta property="og:image" content="/path/to/your/image.jpg" /> */}
      <meta property="og:url" content="https://www.empeetex.com/" />
      <link rel="icon" href="/favicon.ico" />
      <body >{children}</body>
    </html>
  );
}
