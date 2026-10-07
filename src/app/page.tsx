import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import LatestPosts from "@/components/LatestPosts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getPosts, getServices } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";

export const metadata = pageMetadata({
  title: "Разработка сайтов, Telegram-ботов и приложений в Бишкеке — Pulse Tech",
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  const services = getServices();
  const posts = getPosts().slice(0, 3);

  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero services={services} />
        <Services services={services} />
        <Process />
        <Benefits />
        <LatestPosts posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
