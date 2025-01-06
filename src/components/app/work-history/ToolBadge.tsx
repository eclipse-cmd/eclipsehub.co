import { IconMapper } from '@/components/icons';

type ToolBadgeProps = keyof typeof IconMapper;

export function ToolBadge({ tool }: { tool: ToolBadgeProps }) {
  const Icon = IconMapper[tool];
  return (
    <span className="me-2 items-center inline-block whitespace-nowrap px-2 py-0.5 font-semibold rounded-md text-xs space-x-2 font-mono border-accent border text-foreground">
      {Icon ? <Icon /> : null}
      <span className="capitalize">{tool}</span>
    </span>
  );
}
