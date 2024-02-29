import Link from 'next/link';

export default function About2() {
  return (
    <section className="w-full grid grid-cols-1 gap-10 my-40">
      <div className="w-full overflow-hidden relative" id="sliderAbout">
        <div id="sliderAbout-track">
          {
            Array.from({ length: 8 }).map(() => (
              <div key={crypto.randomUUID()} className="w-[40rem] pr-4">
                <div className="w-full aspect-video rounded-lg bg-web-gray-100 dark:bg-accent" />
              </div>
            ))
          }
        </div>
        <div className="absolute top-0 left-0 w-10 md:w-20 bg-gradient-to-r from-background to-transparent h-full" />
        <div className="absolute top-0 right-0 w-10 md:w-20 bg-gradient-to-r from-transparent to-background h-full" />
      </div>
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
    </section>
  );
}