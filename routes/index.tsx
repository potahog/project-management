import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <header>

      </header>
      <main>
        <article></article>
      </main>
    </>
  );
}
