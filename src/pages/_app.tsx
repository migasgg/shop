import { globalStyled } from "@/styles/global"
import type { AppProps } from "next/app"

globalStyled()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
