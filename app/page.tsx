import Hero from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TextCarousel from "@/components/TextCarousel"
import Footer from "@/components/Footer"

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adnan Hossain Addro',
  url: 'https://adnanhaddro.me',
  image: 'https://adnanhaddro.me/profile.png',
  jobTitle: 'Software Engineer',
  description:
    'Software engineer specializing in Next.js, AI agents, SaaS development, and automation.',
  sameAs: [
    'https://www.linkedin.com/in/adnan-hossain-addro',
    'https://github.com/codebyaddro',
  ],
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    'AI Agents',
    'SaaS Development',
    'Automation',
    'Software Architecture',
    'Adnan Hossain Addro',
    'Adnan Addro',
    'adnan addro',
    'addro',
    'Developer in Bangladesh'
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Navbar/>
        <Hero/>
        <TextCarousel/>
        <Footer/>
      </div>
    </>
  );
}
