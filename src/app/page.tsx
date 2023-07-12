import Image from 'next/image';

export default function Home() {
  return (
    <section className="hero mt-[32px]">
      <div className="box">
        <p className="font-ubuntu text-2xl font-light text-gray-500 sm:text-4xl">
          Turn your
        </p>
        <p className="font-ubuntu text-2xl font-light text-gray-500 sm:text-4xl">
          Out of the box
        </p>
        <p className="font-ubuntu text-2xl font-light text-gray-500 sm:text-4xl">
          ideas into
        </p>
        <p className="font-ubuntu text-2xl font-light text-gray-500 sm:text-4xl">
          Reality
        </p>
      </div>
      <div className="lines">
        <Image
          src="/images/line-1.svg"
          className="horizontal-line"
          width={2}
          height={724}
          alt="line"
        />
        <Image
          src="/images/line-2.svg"
          className="vertical-line"
          width={910}
          height={1}
          alt="line"
        />
      </div>

      <div className="intro text-center">
        <div className="circle"></div>
        <div className="content">
          <div className="relative">
            <p className="absolute left-[32%] top-[-16%] font-seaweedScript text-3xl">
              I am
            </p>
            <p className="font-lora text-8xl uppercase text-primary">
              Abdul Halim
            </p>
          </div>
          <p className="mt-[-20px] font-ubuntu text-4xl font-light">
            Creative web developer
          </p>
        </div>
      </div>
    </section>
  );
}
