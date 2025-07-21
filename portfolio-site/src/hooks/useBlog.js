import { useState, useEffect } from "react";

export function useBlog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const response = await fetch("/content/post-index.json");
      if (!response.ok) throw new Error("Failed to load blog post index");

      const data = await response.json();
      const publishedPosts = data.posts.filter((post) => post.published);

      publishedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

      setPosts(publishedPosts);
    } catch (err) {
      setError(err.message);
      console.error("Error loading posts:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadPostContent = async (slug) => {
    try {
      const response = await fetch(`/content/blog-posts/${slug}.md`);
      if (!response.ok) throw new Error(`Cannot fetch ${slug} post`);

      return await response.text();
    } catch (err) {
      console.error("Error loading post content", err);
      return null;
    }
  };

  const getPostBySlug = (slug) => {
    return posts.find((post) => post.slug === slug);
  };

  return {
    posts,
    loading,
    error,
    loadPostContent,
    getPostBySlug,
  };
}
