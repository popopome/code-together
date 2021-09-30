import type { NextPage } from "next";
import { useEffect } from "react";
import { PgaeHead } from "../PageHead";
import { initFireBase, newExampleRef } from "../utils";
import { useRouter } from "next/router";

const NewPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const app = initFireBase();
    const ref = newExampleRef(app);
    const lang = router.query.lang ?? "javascript";
    window.location.replace(`/?lang=${lang}#${ref.key}`);
  });
  return (
    <div>
      <PgaeHead />
    </div>
  );
};

export default NewPage;
