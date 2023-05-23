import Layout from '@/components/Layout'
import LoginModal from '@/components/modal/LoginModal'
import RegisterModal from '@/components/modal/RegisterModal';
// import Modal from '@/components/Modal'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Modal isOpen title='test' actionLabel='Submit'/> */}
      <RegisterModal/>
      <LoginModal/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
