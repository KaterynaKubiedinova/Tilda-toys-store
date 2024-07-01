import Banner from '@/components/Banner/Banner';
import Head from 'next/head';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Internet Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-grow">
        <Banner />
				<div className='bg-white bg-opacity-80 h-20 p-7 flex justify-center text-lg text-neutral-700'>
					<div><p>No order minimums | Exclusive pricing| Dedicated support</p></div>
				</div>
				<div className='flex justify-center flex-wrap'>
        
				</div>
      </main>
    </div>
  );
}
