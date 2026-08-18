/**
 * BookmarkCard 组件
 * 展示单个书签的卡片，显示标题、URL、描述和标签列表
 */

import { BookmarkCardProps } from './types';

export function BookmarkCard({
  title,
  url,
  description,
  tags = [],
}: BookmarkCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      {/* 标题 */}
      <h3 className="truncate text-lg font-semibold text-gray-900" title={title}>
        {title}
      </h3>

      {/* URL */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 block truncate text-sm text-blue-600 hover:underline"
      >
        {url}
      </a>

      {/* 描述 */}
      {description && (
        <p className="mt-2 line-clamp-2 text-sm text-gray-600">{description}</p>
      )}

      {/* 标签列表 */}
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
