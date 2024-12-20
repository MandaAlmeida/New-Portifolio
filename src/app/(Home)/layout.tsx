"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GlobalStyle } from "@/styles/globals";
import { defaultTheme } from "@/styles/theme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />
        {children}
        <Footer />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}
