import { useEffect } from "react";
import Header from "../Share/Header";
import Result from "./Result";
import Footer from "./Footer";

export default function ResultPage() {
  useEffect(() => {
    document.title = "This Is Our DevOps Story | 趨勢科技 | Trend Micro";
  }, []);

  return (
    <main className="max-md:px-1 px-8">
      <Header h1="This Is Our DevOps Story!" />
      <Result />
      <Footer />
    </main>
  );
}
