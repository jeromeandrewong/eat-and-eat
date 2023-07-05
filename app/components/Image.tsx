import Image from "next/image";

export default function CustomImage({
  image,
  classname,
}: {
  image: string;
  classname?: string;
}) {
  return (
    <>
      <Image
        alt="cafe image"
        src={image}
        width={500}
        height={500}
        className="h-full w-full rounded-lg object-cover"
      />
    </>
  );
}
