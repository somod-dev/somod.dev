import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: -1
          }}
        >
          <svg
            viewBox="0 0 210 297"
            version="1.1"
            id="svg5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs id="defs2" />
            <g id="layer1">
              <rect
                style={{
                  fill: "#c8e6ff",
                  fillOpacity: "1",
                  strokeWidth: "0.458244"
                }}
                id="rect2255"
                width="265.53049"
                height="261.82541"
                x="-59.400166"
                y="146.66447"
                transform="rotate(-45)"
              />
              <rect
                style={{
                  fill: "#c8e6ff",
                  fillOpacity: "1",
                  strokeWidth: "0.458244"
                }}
                id="rect2255-8"
                width="265.53049"
                height="261.82541"
                x="-342.52383"
                y="-51.244774"
                transform="rotate(-45)"
              />
            </g>
          </svg>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
