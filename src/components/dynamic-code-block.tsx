"use client";

import { useState } from "react";
import { Article } from "./template";
import { SanitizedContent } from "./sanitized-content";
import { copy } from "@/lib/copy";

type CodeExample = {
  code: string;
  description: string;
};

type DynamicCodeBlockProps = {
  examples: CodeExample[];
  language?: string;
  title?: string;
  padding?: boolean;
  highlight?: string;
  type?: "article" | "event";
};

export const DynamicCodeBlock = ({
  examples,
  language = "html",
  title = "코드 예시",
  padding = false,
  highlight,
  type = "article",
}: DynamicCodeBlockProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentExample = examples[currentIndex];

  const copyToClipboard = async () => {
    const { success } = await copy(currentExample.code);
    
    if (success) {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="my-6">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>

      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex gap-2 mb-4 flex-wrap">
          {examples.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                currentIndex === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {examples[index].description}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="bg-gray-900 rounded p-4 text-white font-mono text-sm overflow-x-auto">
            <pre className="whitespace-break-spaces">
              <code className={`language-${language}`}>
                {currentExample.code}
              </code>
            </pre>
          </div>

          {/* 복사 버튼 */}
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors duration-200"
            title="코드 복사"
          >
            {copied ? (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-4 @container">
        <h5 className="font-semibold mb-2">렌더링 결과:</h5>
        {type === "article" ? (
          <Article padding={padding} highlight={highlight}>
            <SanitizedContent html={currentExample.code} className="prose max-w-none" />
          </Article>
        ) : (
          <SanitizedContent html={currentExample.code} className="prose max-w-none event" />
        )}
      </div>
    </div>
  );
}
