import "./globals.css";

export const metadata = {
  title: "Bulldozer | Software Engineering",
  description: "Purpose-built digital products, scalable systems, and engineering partnerships. Ironworks Software turns complex challenges into software built to last.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
