import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-40">
      <div className="flex flex-col gap-3 text-xl justify-center ">
        <h1 className="text-4xl text-primary-title font-bold">About</h1>
        <p>
          We are a chapter club of the Association for Computing Machinery organization.
          Our goal is to expose passionate people.
        </p>
        <p>
          We are a chapter club of the Association for Computing Machinery organization.
          We are a chapter club of the Association for Computing Machinery
          {' '}
          <Link href="/" className="underline">
            organization.
          </Link>
        </p>
      </div>
      <Image
        className="w-full aspect-video rounded-lg bg-web-gray-100 object-cover"
        alt=""
        src="/images/gallery/img_7.webp"
        width={600}
        height={600}
      />
    </section>
  );
}
