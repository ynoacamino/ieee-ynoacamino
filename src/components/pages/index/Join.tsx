import IEEELogo from '@/components/logos/IEEELogo';
import { Button } from '@/components/ui/button';

export default function Join() {
  return (
    <section className="w-full my-40 flex flex-col items-center gap-4 text-center">
      <IEEELogo className="w-60 aspect-square" />
      <h1 className="text-4xl text-primary font-bold my-4">
        Unete al capitulo estudiantil
      </h1>
      <h2>
        Te enviaremos un correo cuando esten abiertas las postulaciones
      </h2>
      <Button>
        Postula ahora
      </Button>
    </section>
  );
}
