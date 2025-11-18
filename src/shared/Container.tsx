import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div
      className={
        "mx-auto w-full max-w-6xl px-4" + (className ? ` ${className}` : "")
      }
    >
      {children}
    </div>
  );
};

export default Container;
