// _app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TodosProvider } from "../Store/todo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodosProvider>
      <Component {...pageProps} />
    </TodosProvider>
  );
}

export default MyApp;
