import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Example home page.',
};

export default function HomePage() {
  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <h1>Home</h1>
    </main>
  );
}


