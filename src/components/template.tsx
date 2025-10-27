import { cn } from "@/lib/style";
import { CSSProperties, PropsWithChildren } from "react";

type Props = {
  padding?: boolean;
  className?: string;
};

export const Container = ({
  children,
  padding = false,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        "nextra-border mt-6 rounded-lg border p-4 flex flex-col gap-3 bg-white",
        !padding && "m-0!",
        className
      )}
    >
      {children}
    </div>
  );
};

type ArticleProps = {
  padding?: boolean;
  highlight?: string;
  className?: string;
};

export const Article = ({
  children,
  padding = false,
  highlight = "#4e90f9",
  className,
}: PropsWithChildren<ArticleProps>) => {
  return (
    <article
      id="article"
      className={cn("article", !padding && "m-0!", className)}
      style={{ "--highlight-color": highlight } as CSSProperties}
    >
      {children}
    </article>
  );
};

export const Box = ({
  children,
  padding = false,
  className,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        "box flex items-center justify-center",
        !padding && "m-0!",
        className
      )}
    >
      {children}
    </div>
  );
};
