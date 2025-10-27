import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { pretendard } from "@/styles/font";

import 'nextra-theme-docs/style.css'
import "@/styles/globals.css";
 
export const metadata = {
  title: "템플릿 사용 가이드",
  description: "비개발자들을 위한 템플릿 사용법 안내",
}
 
const navbar = (
  <Navbar
    logo={<b>템플릿 가이드</b>}
  />
)
const footer = <Footer>템플릿 사용 가이드 © {new Date().getFullYear()}</Footer>
 
export default async function RootLayout({ children }: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="ko"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={pretendard.className}>
        <ToastContainer toastClassName="min-w-[335px] w-auto! min-h-[52px]! bg-black/80! font-medium! text-white! typo-label1 p-4!" hideProgressBar closeButton={false} />
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/your-username/document-template"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}