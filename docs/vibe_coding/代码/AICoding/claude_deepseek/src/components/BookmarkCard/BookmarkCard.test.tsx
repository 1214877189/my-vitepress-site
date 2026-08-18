/**
 * BookmarkCard 组件测试
 */

import { render, screen } from '@testing-library/react';
import { BookmarkCard } from './index';

describe('BookmarkCard', () => {
  const defaultProps = {
    title: 'Example Bookmark',
    url: 'https://example.com',
    description: 'An example bookmark for testing',
    tags: ['react', 'typescript'],
  };

  it('should render the title', () => {
    render(<BookmarkCard {...defaultProps} />);
    expect(screen.getByText('Example Bookmark')).toBeInTheDocument();
  });

  it('should render the URL as a link with correct href', () => {
    render(<BookmarkCard {...defaultProps} />);
    const link = screen.getByText('https://example.com');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('should render the description', () => {
    render(<BookmarkCard {...defaultProps} />);
    expect(
      screen.getByText('An example bookmark for testing'),
    ).toBeInTheDocument();
  });

  it('should render all tags', () => {
    render(<BookmarkCard {...defaultProps} />);
    expect(screen.getByText('react')).toBeInTheDocument();
    expect(screen.getByText('typescript')).toBeInTheDocument();
  });

  it('should render without optional props', () => {
    render(<BookmarkCard title="Minimal" url="https://min.com" />);
    expect(screen.getByText('Minimal')).toBeInTheDocument();
    expect(screen.getByText('https://min.com')).toBeInTheDocument();
  });

  it('should not render tags container when tags is empty', () => {
    render(
      <BookmarkCard title="No Tags" url="https://notags.com" tags={[]} />,
    );
    expect(screen.queryByRole('list')).toBeNull();
  });

  it('should not render description when not provided', () => {
    render(<BookmarkCard title="No Desc" url="https://nodesc.com" />);
    expect(screen.getByText('No Desc')).toBeInTheDocument();
    // 没有 <p> 标签说明 description 未渲染
    expect(
      document.querySelector('p'),
    ).toBeNull();
  });
});
