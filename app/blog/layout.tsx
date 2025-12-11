import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { Providers } from '@/app/providers';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Navigation />
      <div className="pt-16">
        {children}
      </div>
      <Footer />
    </Providers>
  );
}
