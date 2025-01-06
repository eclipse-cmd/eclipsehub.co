export const LocationBadge = ({ location }: { location: string }) => {
  return <div className="inline-flex items-center px-2 py-0.5 font-semibold rounded-md text-xs font-mono bg-accent text-accent-foreground">{location}</div>;
};
