import { globalStyled } from "@/styles/global"
import type { AppProps } from "next/app"
import imgLogo from "../assets/logo.svg"
import Image from "next/image"
import { Container, Header } from "@/styles/pages/app"

globalStyled()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={imgLogo} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
