import Image from "next/image";
import { Auth } from "./_components/Auth";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/images/chat-with-me-logo.png"
          alt="chat-with-me application logo"
          height={60}
          width={60}
          className="mx-auto w-auto"
        />
        <h2 className="mt-6 text-center font-bold text-3xl tracking-tight text-gray-900">
          {" "}
           Let&apos;s sign you in
        </h2>
          <div>
           <Auth />
          </div>
      </div>
    </div>
  );
}