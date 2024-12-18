/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import React from "react";

export function PgaeHead() {
  return (
    <Head>
      <title>Upstage Codepad</title>
      <meta name="description" content="Generated by create next app" />
      <link
        rel="icon"
        sizes="192x192"
        href="https://static.wixstatic.com/media/f07b2b_8abb085e5d0e46308b847cca353f53d7%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/f07b2b_8abb085e5d0e46308b847cca353f53d7%7Emv2.png"
      />
      <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-auth.js"></script>
      <script src="https://www.gstatic.com/firebasejs/7.13.2/firebase-database.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/mode/javascript/javascript.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/mode/python/python.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/mode/clike/clike.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/mode/go/go.js"></script>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.17.0/codemirror.css"
      />
      <script src="/firepad.min.js"></script>
      <link
        rel="stylesheet"
        href="/firepad.css"
      />
    </Head>
  );
}
