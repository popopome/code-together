import Head from "next/head";
import React from "react";

export function PgaeHead() {
  return (
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
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
      <script src="https://firepad.io/releases/v1.5.10/firepad.min.js"></script>
      <link
        rel="stylesheet"
        href="https://firepad.io/releases/v1.5.9/firepad.css"
      />
    </Head>
  );
}
