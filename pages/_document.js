import Document, { Head, Main, NextScript, Html } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="A site for my programming portfolio"
          />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          *,
          *::before,
          *::after {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
          }

          html {
            box-sizing: border-box;
            font-size: 62.5%; //10px/16px = 62.5% -> 1rem = 10px
            // scroll-behavior: smooth;
          }
          body {
            font-family: "Roboto", sans-serif;
            cursor: url("/static/cursor1.svg"), auto;
          }
          li {
            cursor: url("/static/cursor1.svg"), auto;
          }
        `}</style>
      </Html>
    );
  }
}
