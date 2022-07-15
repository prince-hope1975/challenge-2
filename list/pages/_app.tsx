import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppProvider } from "../context.tsx";
import { AnimatePresence } from "framer-motion";
import Modal from "../Components/modal";
import { useGlobalContext } from "../context.tsx";

function MyApp({ Component, pageProps }: AppProps) {
  const { setShowModal } = useGlobalContext();
  return (
    <AppProvider>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Modal key={"modal"} />
        <Component {...pageProps} />
      </AnimatePresence>
    </AppProvider>
  );
}

export default MyApp;
