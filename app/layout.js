'use client'
import "../styles/globals.css";
import { AuthContextProvider } from "/context/AuthContext";
import navbar from "./components/navbar"

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
      <html lang="en">
        <body>
        <AuthContextProvider>
          {children}
          </AuthContextProvider>
          </body>
      </html>

  );
}
