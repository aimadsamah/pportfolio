import { CustomCursor } from '@/components/ui/CustomCursor'
import { AmbientBackground } from '@/components/ui/AmbientBackground'
import { Navbar } from '@/components/layout/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { FooterSection } from '@/components/sections/FooterSection'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <AmbientBackground />
      <div className="noise-overlay" />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <FooterSection />
    </>
  )
}
