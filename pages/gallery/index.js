import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Gallery() {
  const items = ['cat', 'dog', 'frog'];

  return (
    <div className="text-center">
      <div className="flex flex-wrap justify-center">
        {items.map((item) => (
          <Link href={`/gallery/${item}`}>
            <motion.a
              layoutId={item}
              class="block w-56 h-56 mx-3 my-3 relative cursor-pointer"
            >
              <Image
                src={`/images/${item}.jpg`}
                layout="fill"
                objectFit="cover"
              />
            </motion.a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
