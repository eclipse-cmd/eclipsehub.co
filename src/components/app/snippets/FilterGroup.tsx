import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

type FilterGroupProps<T> = {
  data: Array<T>;
  onChange(data: string[]): void;
};

export function FilterGroup<T extends string>({ data, onChange }: FilterGroupProps<T>) {
  return (
    <ToggleGroup
      type="multiple"
      className="flex flex-wrap items-center justify-start gap-3"
      onValueChange={(v) => {
        onChange(v);
      }}
    >
      {data.map((category) => (
        <ToggleGroupItem key={category} value={category} className="x-button" aria-label={category}>
          <span className='whitespace-nowrap'>{category}</span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
