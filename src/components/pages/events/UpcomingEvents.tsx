import { CalendarDays, Clock } from 'lucide-react';
import Image from 'next/image';

import { UPCOMING_EVENTS } from '@/data/events';

export default function UpcomingEvents() {
  return (
    <section className="w-full my-40 flex flex-col items-center gap-4" id="upcoming-events">
      <h1 className="text-primary-title font-bold text-5xl text-center">
        Eventos próximos
      </h1>
      <p className="text-xl text-center w-full max-w-2xl mb-24">
        Únanse a uno de nuestros próximos eventos. Desde talleres hasta conferencias,
        nosotros te cubrimos.
      </p>
      <div className="flex flex-col gap-x-10 gap-y-16 md:gap-y-10">
        {
          UPCOMING_EVENTS.slice(0, 4).map(({
            date, description, title, poster, time,
          }) => (
            <article key={crypto.randomUUID()} className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8">
              <div className="flex flex-col gap-2 col-span-1 md:col-span-2 max-w-2xl">
                <h2 className="font-bold text-2xl text-start text-primary-title">
                  {title}
                </h2>
                <p className="text-xl text-start mb-6">
                  {description}
                </p>
                <div className="flex flex-col gap-4 text-lg pl-4">
                  {
                    date.map((d) => (
                      <div key={crypto.randomUUID()} className="flex gap-4 items-center">
                        <CalendarDays className="w-8 h-8 " />
                        <h4 className="">{d}</h4>
                      </div>
                    ))
                  }
                  {
                    time && (
                      <div className="flex gap-4 items-center">
                        <Clock className="w-8 h-8" />
                        <h4 className="">{time}</h4>
                      </div>
                    )
                  }
                </div>
              </div>
              <Image
                className="w-full aspect-square bg-web-gray-100 rounded-lg object-cover"
                src={poster.thumbnail}
                alt=""
                width={600}
                height={600}
              />
            </article>
          ))
        }
      </div>
    </section>
  );
}
