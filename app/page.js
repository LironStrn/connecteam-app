import { getHomeContent } from '@/app/lib/data';
import MainHeader from '@/app/ui/main-header';
import RepuSection from '@/app/ui/repu-section';
import SitSection from '@/app/ui/sit-section';
import DoloSection from '@/app/ui/dolo-section';
import PraSection from '@/app/ui/pra-section';
import FormSection from '@/app/ui/form-section';
import Hero from '@/app/ui/hero';

export default async function Home() {
  const homeContent = await getHomeContent();

  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <Hero heroContent={homeContent.content.hero}/>
      </header>
      <main className="">
        <MainHeader />
        <RepuSection />
        <SitSection />
        <DoloSection />
        <PraSection />
        <FormSection />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
