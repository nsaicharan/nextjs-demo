import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Image from 'next/image';

function GraphQLPage({ pokemons }) {
  return (
    <div className="text-center">
      <small className="text-xs">
        (Data fetched from https://graphql-pokemon2.vercel.app)
      </small>

      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-3 gap-y-10 gap-x-4">
        {pokemons.map((pokemon) => (
          <div>
            <Image
              src={pokemon.image}
              width="180"
              height="180"
              objectFit="contain"
              priority
              loading="eager"
            />
            <h2>{pokemon.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query {
        pokemons(first: 9) {
          name
          image
        }
      }
    `,
  });

  return {
    props: {
      pokemons: data.pokemons,
    },
  };
};

export default GraphQLPage;
