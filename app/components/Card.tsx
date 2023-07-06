import Link from "next/link";
import { motion } from "framer-motion";
import CustomImage from "./Image";
type CardProps = {
  link: string;
  cover: string;
  title: string;
  town: string;
  rating: number;
};

export function Card(props: CardProps) {
  return (
    <Link className="cursor-alias " href={props.link}>
      <motion.div
        className="group w-full overflow-hidden rounded-lg bg-secondary/5 p-3 transition-colors focus-within:bg-secondary/10 hover:bg-secondary/10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
      >
        <div className="relative isolate w-full">
          <CustomImage image={props.cover} />
          <h3 className="line-clamp-1 font-bold">{props.title}</h3>
          <h3 className="line-clamp-1 font-bold text-secondary">
            {props.town}
          </h3>
          <h3 className="line-clamp-1 font-bold text-accent">
            Rating: {props.rating}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}
