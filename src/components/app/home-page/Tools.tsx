const ToolsData = [
  'Javascript',
  'TypeScript',
  'CSS',
  'Next.js',
  'Vue.js',
  'Figma',
  'Redux/Redux Toolkit',
  'Webpack',
  'Node.js',
  'Nest.js',
  'Spring boot',
  'Prisma',
  'GraphQL',
  'SQL',
  'Laravel/PHP',
];

export function Tools() {
  return (
    <ul className="flex justify-start items-center flex-wrap gap-2 list-none mt-10 -mx-4">
      {ToolsData.map((tool, index) => (
        <li key={index} className="text-primary text-3xl p-4">
          <span className="whitespace-nowrap">{tool}</span>
        </li>
      ))}
    </ul>
  );
}
