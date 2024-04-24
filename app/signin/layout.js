"use client";
import "../../styles/globals.css";
import { AuthContextProvider } from "/context/AuthContext";


export default function Layout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body className="bg-gray-200">
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}