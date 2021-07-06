import Head from 'next/head'
import Image from 'next/image'

import Link from '~/components/ui/Link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-7xl text-center">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="text-2xl text-center">
          Get started by editing{' '}
          <code>pages/index.js</code>
        </p>

        <div className="grid grid-cols-2 gap-8">
          <Link title="Documentation">
            <p>Find in-depth information about Next.js features and API.</p>
          </Link>
          <Link title="Learn">
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Link>
          <Link title="Examples">
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Link>
          <Link title="Deploy">
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Link>
        </div>
      </main>

      <footer className="text-center text-xl">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
