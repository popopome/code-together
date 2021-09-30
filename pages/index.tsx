import type { NextPage } from "next";
import { useEffect } from "react";
import { FirepadUserList } from "../app/firepadUserList";
import { PgaeHead } from "../app/PageHead";
import { ensureExampleRef, initFireBase } from "../app/utils";

const languageConfig = {
  javascript: {
    mode: { name: "javascript", json: true },
    defaultText: "// Javascript code",
  },
  python: { mode: "python", defaultText: "# Python code" },
  cplusplus: { mode: "text/x-c++src", defaultText: "// C++ code" },
  java: { mode: "text/x-java", defaultText: "// Java code" },
  csharp: { mode: "text/x-csharp", defaultText: "/// CSharp code" },
  scala: { mode: "text/x-scala", defaultText: "/// Scala code" },
  kotlin: { mode: "text/x-kotlin", defaultText: "// Kotlin code" },
  go: { mode: "text/x-go", defaultText: "// Go code" },
};

const Home: NextPage = () => {
  useEffect(() => {
    initFireBase();

    const lang =
      new URLSearchParams(window.location.search).get("lang") ?? "javascript";
    // @ts-ignore
    const langCfg = languageConfig[lang];

    //// Get Firebase Database reference.
    var firepadRef = ensureExampleRef();

    //// Create CodeMirror (with line numbers and the JavaScript mode).
    // @ts-ignore
    var codeMirror = CodeMirror(document.getElementById("firepad-container"), {
      lineNumbers: true,
      mode: langCfg.mode,
    });

    // Create a random ID to use as our user ID (we must give this to firepad and FirepadUserList).
    var userId = Math.floor(Math.random() * 9999999999).toString();

    //// Create Firepad.
    // @ts-ignore
    var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
      defaultText: langCfg.defaultText,
      userId,
    });

    //// Create FirepadUserList (with our desired userId).
    var firepadUserList = FirepadUserList.fromDiv(
      firepadRef.child("users"),
      document.getElementById("userlist"),
      userId
    );

    return () => {
      firepad.dispose();
      document.getElementById("firepad-container")?.replaceChildren("");
      document.getElementById("userlist")?.replaceChildren("");
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <PgaeHead />
      <main className="flex flex-1 items-stretch justify-items-stretch">
        <div id="userlist" className="relative flex items-stretch"></div>
        <div id="firepad-container" className="flex-1"></div>
      </main>

      <footer className="p-8 text-center border border-t">Upstage</footer>
    </div>
  );
};

export default Home;
