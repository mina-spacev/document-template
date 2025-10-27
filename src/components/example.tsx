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
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: code }}
        />
      </Article>
    </div>
    )
  }

  return (
    <div className="bg-white border rounded-lg p-4 @container mx-auto">
      <div
        className="prose max-w-none mx-auto"
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </div>
  );
};
