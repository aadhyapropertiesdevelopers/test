import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Vijayawada's ultimate family entertainment – enjoy thrilling games, live music, and delicious food at Kids Funland Fair!"
        />
        <meta property="og:title" content="Kids Funland Fair" />
        <meta
          property="og:description"
          content="Vijayawada's top family fair with fun games, music shows, and mouthwatering food stalls for all ages."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
