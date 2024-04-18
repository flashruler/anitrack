import "../styles/globals.css";
import { AuthContextProvider } from "/context/AuthContext";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <AuthContextProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AuthContextProvider>
  );
}
