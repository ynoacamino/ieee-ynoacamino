export default function PastEvents() {
  return (
    <section className="w-full my-40 flex flex-col items-center gap-4">
      <h1 className="text-primary-title font-bold text-5xl text-center">
        Past Events
      </h1>
      <p className="text-xl text-center w-full max-w-2xl mb-24">
        Join us at one of our upcoming events. From workshops to conferences,
        we&apos;ve got you covered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-6">
        {Array.from({ length: 3 }).map(() => (
          <div
            key={crypto.randomUUID()}
            className="aspect-video md:aspect-square w-full rounded-lg bg-web-gray-100 object-cover"
          />
        ))}
      </div>
    </section>
  );
}