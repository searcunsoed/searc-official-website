import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

export default function HeroImage() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/unsoed-2.webp"
        alt="Latar belakang Pusat Riset Asia Tenggara"
        fill
        className="object-cover animate-zoom-out-ken-burns"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,theme(colors.slate.50)_0%,transparent_75%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"/>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="max-w-4xl px-4">
          <AnimateOnScroll animationClassName="animate-slide-in-from-bottom">
            <h1 className="font-extrabold text-5xl md:text-7xl font-sans text-white drop-shadow-lg">
              Pusat Riset
              <br />
              Kebijakan Strategis
              <br />
              Asia Tenggara
            </h1>
            <p className="mt-6 text-xg md:text-2xl text-white drop-shadow-md">
              Universitas Jenderal Soedirman
            </p>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}