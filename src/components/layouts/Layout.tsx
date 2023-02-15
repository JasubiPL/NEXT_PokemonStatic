import Head from "next/head";

interface Props{
  title?: string;
  pokemonName?:string;
}

export const Layout: FC<Props> = ({children, title, pokemonName}) => {
  return(
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Fernando Herrera"/>
        <meta name="description" content={`Informacion sobre el pokemon ${pokemonName}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      {/*NavBar*/}

      <main>
        {children}
      </main>
    </>
  )
};