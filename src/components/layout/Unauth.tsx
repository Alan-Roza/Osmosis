import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

interface IUnauth {
  children: ReactElement;
  link: { href: string; text?: string; textLinkable: string };
}

export default function Unauth({ children, link }: IUnauth) {
  return (
    <main className="flex min-h-screen items-center justify-between ">
      <div className="w-full lg:w-3/5 min-h-screen px-5 md:px-10 bg-white flex flex-col items-center justify-between">
        <Image
          className="relative drop-shadow-[0_0_0.1rem_#ffffff70] mt-10"
          src="/osmosis_logo.svg"
          alt="Osmosis Logo"
          width={300}
          height={80}
          priority
        />
        <section className="bg-white min-w-full mx-10">{children}</section>

        {link && (
          <>
            <div className="flex">
              {link.text && (
                <p className="mr-1 font-semibold text-gray-500">{link.text}</p>
              )}
              <Link
                href={link.href}
                className="mb-10 no-underline text-amber-500 font-bold hover:text-amber-600 transition-all"
              >
                {link.textLinkable}
              </Link>
            </div>
          </>
        )}
      </div>

      <div className="hidden lg:block lg:w-full px-10 flex items-center justify-center">
        <Image
          className="relative w-full"
          src="/medicine_image.svg"
          alt="Doutores ilustrativos"
          width={500}
          height={300}
          priority
        />
      </div>
    </main>
  );
}
