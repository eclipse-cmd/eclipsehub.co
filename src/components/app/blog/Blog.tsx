import { Link } from '../../common';

interface iPost {
  _id: string;
  type: string;
  title: string;
  date: string;
  published: boolean;
  body: string;
  slug: string;
  slugAsParams: string;
}

export const Blog = () => {
  const posts: Array<iPost> = [];

  return (
    <div>
      <h3>Posts</h3>
      <div className="flex flex-col">
        <ul className="not-prose space-y-6">
          {posts.map((post) => (
            <li key={post._id} className="flex flex-row justify-between ">
              <Link className="text-prose decoration-1" href={post.slug}>
                {post.title}
              </Link>

              <div className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
