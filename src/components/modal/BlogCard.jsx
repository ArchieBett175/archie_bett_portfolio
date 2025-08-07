import React, { useEffect, useState } from "react";
import { useBlog } from "../../hooks/useBlog";
import MarkdownRenderer  from "../MarkdownRenderer";

const BlogCard = ({ slug }) => {
  const { getPostBySlug, loadPostContent } = useBlog();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const post = getPostBySlug(slug);

  useEffect(() => {
    if (slug) {
      loadContent();
    }
  }, [slug]);

  const loadContent = async () => {
    try {
      const markdownContent = await loadPostContent(slug);
      if (markdownContent) {
        setContent(markdownContent);
      } else {
        setError("Post not Found");
      }
    } catch (err) {
      setError("Failed to load post's content");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-8 w-1/3"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

    if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-50 mb-4">Post Not Found</h1>
        <p className="text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <main>
      <MarkdownRenderer content={content} />
    </main>
  );
};

export default BlogCard;
