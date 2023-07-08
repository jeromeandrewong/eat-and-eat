import Image from "next/image";

export default function CustomImage({ image }: { image: string }) {
  return (
    <>
      <Image
        alt="cafe image"
        src={image}
        width={300}
        height={300}
        className="-z-10 mb-2 aspect-[9/8] w-full rounded-2xl object-cover  transition-transform group-hover:scale-[1.02] "
      />
    </>
  );
}
