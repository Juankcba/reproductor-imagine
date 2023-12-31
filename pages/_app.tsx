import "@/styles/globals.scss";
import type { AppProps } from "next/app";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
