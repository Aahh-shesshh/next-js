import Mainbody from '@/Main/mainbody';
import Projects from '@/Main/projects';
import Skills from '@/Main/skills';
import BaseLayout from '@/layout/base-layout'
import About from '@/Main/about';
import Contact from '@/Main/contact';

export default function Home() {
  return (
      <main>
       <Mainbody />
       <Skills />
       <Projects />
       <About />
       <Contact />
       
      </main>
  )
}

Home.Layout = BaseLayout;

