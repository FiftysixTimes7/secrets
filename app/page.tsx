import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <Image src="/van.webp" alt="Van darkholme welcomes you." width={300} height={300} />
      </div>
    </div>
  );
}
