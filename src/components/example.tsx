import { SanitizedContent } from "./sanitized-content";
import { Article } from "./template";

type Props = {
  code: string;
  type?: "article" | "event";
};

export const Example = ({ type = "article", code }: Props) => {
  if (type === "article") {
    return (
      <div className="bg-white border rounded-lg p-4 @container">
      <Article>
        <SanitizedContent html={code} className="prose max-w-none" />
      </Article>
    </div>
    )
  }

  return (
    <div className="bg-white border rounded-lg p-4 @container mx-auto">
      <SanitizedContent html={code} className="prose max-w-none mx-auto" />
    </div>
  );
};
