// import "@/styles/globals.css";
// import Head from "next/head";
// import Layout from "../../components/Layout";

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </>
//   )
// }
import "@/styles/globals.css";
import Head from 'next/head'
import React from 'react'
// import Layout from '../../components/Layout'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </>
  )
}

export default App