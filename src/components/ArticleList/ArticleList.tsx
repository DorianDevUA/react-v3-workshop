import type { Article } from '../../types/article';

interface ArticleListProps {
  items: Article[];
}

export default function ArticleList(props: ArticleListProps) {
  const { items } = props;

  return (
    <ul>
      {items.map((article) => {
        const { objectID, title, url } = article;
        return (
          <li key={objectID}>
            <a href={url} target="_blank" rel="noopener noreferer">
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
