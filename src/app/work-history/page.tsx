import { Base } from '@/components';
import { LocationBadge, ToolBadge, WorkExperienceOverview } from '@/components/app';
import { Link } from '@/components/common';
import WorkHistoryData from '@/data/workHistory';
import { iWorkHistory } from '@/definitions';
import { Iconify } from '@/lib/utils';
import Image from 'next/image';

const WorkHistories: iWorkHistory[] = WorkHistoryData;

export default function Page() {
  return (
    <>
      <Base>
        <section className="space-y-20 pt-10 md:pt-20 md:mt-10">
          <div className="x-container">
            <h4 className="mb-4 text-header-2 lg:max-w-2xl">Work History</h4>
            <p className="text-lead mb-4">
              I'm passionate about building software applications that can bridge the gap between concepts and real-world solutions, enabling organizations to deliver meaningful
              experiences to their end-users.
            </p>
            <p className="text-lead mb-4">
              Lately, I've been focusing more on backend development and system design — as system design plays a pivotal role in large-scale software systems.
            </p>
            <p className="text-lead">
              However, here are some projects I've worked on that I think are worth mentioning and can showcase my range of experience, they include standalone frontend apps,
              full-stack apps, and cloud-native infrastructures:
            </p>
          </div>

          <div className="flex flex-col space-y-14">
            {WorkHistories.map((experience) => (
              <div key={experience.company} className="flex flex-col items-center justify-center space-y-6 lg:space-y-0 md:justify-between md:items-start gap-7 md:flex-row">
                <div className="w-full space-y-2 lg:w-1/2 order-2">
                  <div className="flex flex-col space-y-1.5">
                    <div className="flex items-center justify-start w-full space-x-2 text-base">
                      <div className="flex items-center space-x-2">
                        <Link hideArrow href={experience.companyUrl} className="decoration-1">
                          <span className="text-lead">{experience.company}</span>
                        </Link>
                        <LocationBadge location={experience.location} />
                      </div>
                      <span>|</span>
                      <span className="text-sm inline-block md:max-w-[90%]">{experience.duration}</span>
                    </div>
                    <div className="font-mono text-sm">{experience.role}</div>
                  </div>

                  <div className="flex justify-start items-center pt-4">
                    <a href={experience.companyUrl} className="inline-flex items-center justify-start group w-fit" target="_blank">
                      <Iconify icon="solar:link-minimalistic-2-linear" className="me-2 text-primary text-3xl" />
                      <span className="underline transition group-hover:text-primary font-mono">Link</span>
                    </a>
                  </div>

                  <div className="py-4 md:py-6 md:max-w-[90%]">
                    <p className="text-sm md:text-base">{experience.description}</p>
                    {experience.overview ? <WorkExperienceOverview overview={experience.overview} /> : null}
                  </div>

                  {experience.tools.map((tool) => (
                    <ToolBadge key={tool} tool={tool} />
                  ))}
                </div>
                <div className="relative inline-flex w-full group overflow-hidden lg:w-1/2 bg-lead-gradient rounded-2xl order-1">
                  <Image
                    src={experience.imgUrl}
                    alt={experience.company}
                    fill
                    sizes="auto"
                    className="transition !rounded-2xl grayscale object-cover group-hover:grayscale-0 group-hover:left-0"
                    style={{ left: '2.5rem', top: '2.5rem' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </Base>
    </>
  );
}
