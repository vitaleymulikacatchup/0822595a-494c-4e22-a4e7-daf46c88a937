"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import ImageFAQ from '@/components/sections/layouts/faq/ImageFAQ';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterBase from '@/components/footer/FooterBase';
import { CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'funAndTrendy',
      colorTemplate: 1,
      textAnimation: 'slide',
    }}>
      <NavbarLayoutSplitBottom
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={50}
        navItems={[
          { name: "Hero", id: "hero" },
          { name: "About", id: "about" },
          { name: "FAQ", id: "faq" },
          { name: "How to Buy", id: "how-to-buy" },
          { name: "Tokenomics", id: "tokenomics" },
          { name: "Footer", id: "footer" },
        ]}
        defaultSelectorValue="hero"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to MemePulse"
          description="Your centralized meme hub for engagement and sharing."
          primaryButtonText="Join the Fun"
          secondaryButtonText="Explore Memes"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="Join the Meme Revolution!"
          descriptions={["A community where memes thrive and connect.", "Submit, discover, and enjoy memes together!"]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <ImageFAQ
          items={[
            { title: "What is MemePulse?", content: "A platform for meme sharing and engagement." },
            { title: "How can I submit memes?", content: "Easily upload your favorite memes to share." },
            { title: "Is it free to use?", content: "Yes! MemePulse is completely free to use." },
            { title: "Can I earn from submissions?", content: "Absolutely! Engage and get rewards." }
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Understanding Meme Economy"
          description="Explore the unique tokenomics of meme-based ventures."
          kpiItems={[
            { value: "250K", description: "Total Memes Created", icon: CheckCircle },
            { value: "30K", description: "Active Users", icon: CheckCircle },
            { value: "10%", description: "Monthly Growth", icon: CheckCircle },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={150}
          logoHeight={50}
          columns={[
            { title: "Help", items: [{ label: "FAQ", onClick: () => {} }, { label: "Contact Us", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] },
            { title: "Community", items: [{ label: "Join Us", onClick: () => {} }, { label: "Meetups", onClick: () => {} }] },
            { title: "Resources", items: [{ label: "Blog", onClick: () => {} }, { label: "Guides", onClick: () => {} }] }
          ]}
          copyrightText="© 2023 MemePulse"
          onPrivacyClick={() => { /* some function */ }}
        />
      </div>
    </SiteThemeProvider>
  );
}