import Image from "next/image";
import Balance from "./ui/balance";
import Summary from "./ui/summary";
import { dm_sans } from "./lib/font";
export default function Home() {
  return (
    <main
      className={`${dm_sans.className} text-lg bg-[var(--cream)] w-full p-5 h-screen flex flex-col justify-center items-center`}
    >
      <div className="w-fit">
        <Balance />
        <Summary />
      </div>
    </main>
  );
}
