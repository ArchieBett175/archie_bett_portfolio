import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export default function MarkdownRenderer({ content, className = "" }) {
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Heading styles
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mb-4 text-gray-800 mt-8">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mb-3 text-gray-800 mt-6">
              {children}
            </h3>
          ),

          // Paragraph and text
          p: ({ children }) => (
            <p className="mb-4 leading-relaxed text-gray-700 text-lg">
              {children}
            </p>
          ),

          // Lists
          ul: ({ children }) => (
            <ul className="mb-4 space-y-2 list-disc list-inside text-gray-700">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 space-y-2 list-decimal list-inside text-gray-700">
              {children}
            </ol>
          ),

          // Code blocks
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto mb-4">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            ) : (
              <code
                className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            );
          },

          // Links
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),

          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-gray-50 italic text-gray-700">
              {children}
            </blockquote>
          ),

          // Horizontal rule
          hr: () => <hr className="my-8 border-gray-300" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
