import { Base, WavingHand } from '@/components';
import { Contact, Introduction, WorkHistorySection } from '@/components/app';
import { DailyDevIcon, GithubStarIcon } from '@/components/icons';

export default function Home() {
  return (
    <Base>
      <section className="space-y-16 prose-slate dark:prose-invert">
        <div className="pt-8 lg:pt-14">
          <span className="text-xl">Hello</span> <WavingHand /> <br />
          <p className="mb-4 text-lead-xl">I'm Emmanuel</p>
          <p className="mb-4 text-4xl font-bold leading-10 md:text-5xl lg:max-w-2xl gradient-text">Web Developer & Tech Enthusiast</p>
          <p className="inline-block mt-8 text-lead lg:max-w-2xl lg:text-2xl">
            An honors graduate of the CS program at
            <a href="https://www.lautech.edu.ng" target="_blank" className="ms-1">
              <strong>LAUTECH</strong>.
            </a>
            <br />
            <span className="flex items-center justify-start"> I&apos;m passionate about system development, ♿️ accessibility, 😍 user experience, and 🔐 data security.</span>
          </p>
          <div className="flex items-center justify-start gap-8 mt-12 md:text-lg">
            <a href="https://github.com/eclipse-cmd" target="_blank" className="flex items-center space-x-2">
              <GithubStarIcon />
              <span>Top Github User</span>
            </a>
            <a href="https://app.daily.dev" target="_blank" className="flex items-center space-x-2">
              <DailyDevIcon />
              <span>Daily Dev Creator</span>
            </a>
          </div>
        </div>
        <Introduction />
        <WorkHistorySection />
        <hr />
        <Contact />
        <hr />
      </section>
    </Base>
  );
}
