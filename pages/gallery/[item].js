import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

function Gallery({ item }) {
  console.log({ item });

  const pVars = {
    initial: { opacity: 0, y: -40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'linear',
        duration: 0.5,
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: { type: 'linear', duration: 0.5, delay: 0.4 },
    },
  };

  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <motion.div layoutId={item} class="w-96 h-96 mx-auto relative">
        <Image src={`/images/${item}.jpg`} layout="fill" objectFit="cover" />
      </motion.div>

      <div className="max-w-md mx-auto">
        <motion.p className="mt-6 text-justify" variants={pVars}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          explicabo, repudiandae odio dolorum maiores blanditiis, velit iusto
          libero nihil vel, ea aliquam eius.
        </motion.p>

        <Link href="/gallery">
          <motion.a
            className="inline-block mt-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25 }}
          >
            ← Back To Gallery
          </motion.a>
        </Link>
      </div>
    </motion.div>
  );
}

export const getStaticProps = async (ctx) => {
  const item = ctx.params.item;

  console.log({ item });
  return {
    props: {
      item,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default Gallery;
