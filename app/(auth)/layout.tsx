import React from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="auth flex justify-center py-24">
            {children}
        </main>
    );
}
  