import T from "./T";
import { formatBadge, type NewsItem } from "@/lib/news";

/*
 * Renders a list of announcements. Used full-length on the news page
 * and trimmed to the latest few on the home page.
 */
export default function NewsList({
  items,
  showCategory = true,
}: {
  items: NewsItem[];
  showCategory?: boolean;
}) {
  return (
    <>
      {items.map((item, i) => {
        const { day, month } = formatBadge(item.date);

        return (
          <article className="news-item" key={`${item.date}-${i}`}>
            <div className="news-date">
              <span className="d">{day}</span>
              <span className="m">{month}</span>
            </div>
            <div className="news-body">
              {showCategory && (
                <span className="tag">
                  <T km={item.categoryKm} en={item.categoryEn} />
                </span>
              )}
              <h3>
                <T km={item.titleKm} en={item.titleEn} />
              </h3>
              <p>
                <T km={item.summaryKm} en={item.summaryEn} />
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
}
