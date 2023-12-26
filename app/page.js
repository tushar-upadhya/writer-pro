import Broadcast from "@/components/Broadcast";
import ParentBox from "@/components/ParentBox";

export default function Home() {
  return (
    <main className="m-2 font-semibold bg-zinc-900 text-fuchsia-400 md:p-2 mon md:overflow-y-hidden">
      <Broadcast />
      <ParentBox />
    </main>
  );
}
