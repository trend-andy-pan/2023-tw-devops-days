import { useEffect } from "react";
import Header from "../Share/Header";
import Title from "./Title";
import ResultTrendMicro from "./ResultTrendMicro";
import Copyright from "./Copyright";

export default function ResultPage() {
  useEffect(() => {
    document.title =
      "This Is Trend Micro DevOps Story | 趨勢科技 | Trend Micro";

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      <div className="bg-TrendMicro w-screen h-screen fixed" />
      <Header h1="This Is Trend Micro DevOps Story!" />
      <section className="max-md:px-1 max-md:pb-1 px-8 pb-8">
        <Title />
        <ResultTrendMicro />
        <Copyright />
      </section>
    </main>
  );
}
