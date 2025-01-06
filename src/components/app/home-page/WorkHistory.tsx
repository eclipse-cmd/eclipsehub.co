import { Link } from '@/components/common';
import WorkHistoryData from '@/data/workHistory';
import { iWorkHistory } from '@/definitions';
import Image from 'next/image';
import { LocationBadge } from '../work-history/LocationBadge';
import { ToolBadge } from '../work-history/ToolBadge';

const WorkHistories: iWorkHistory[] = WorkHistoryData;

export const WorkHistorySection = () => {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-header">Work History</h3>
        <Link href="/work-history" className="hidden text-sm opacity-0 md:inline-block primary-link group-hover:opacity-100">
          <span className="underline">See More</span>
        </Link>
      </div>

      <div className="flex flex-col mt-3 space-y-14">
        {WorkHistories.slice(0, 3).map((experience) => (
          <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-0 md:justify-between md:items-start md:flex-row" key={experience.company}>
            <div className="w-full space-y-2 lg:w-1/2">
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
              <div className="py-4 text-sm lg:text-lg md:py-6">{experience.description}</div>
              <>
                {experience.tools.map((tool) => (
                  <ToolBadge key={tool} tool={tool} />
                ))}
              </>
            </div>
            <a href={experience.companyUrl} target="_blank" className="relative inline-flex group w-full overflow-hidden lg:w-1/2 bg-lead-gradient rounded-2xl">
              <Image
                src={experience.imgUrl}
                alt={experience.company}
                fill
                sizes="auto"
                className="transition !rounded-2xl grayscale object-cover group-hover:grayscale-0 group-hover:left-0"
                style={{ left: '2.5rem', top: '2.5rem' }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
