import { ComponentPropsWithRef, forwardRef } from "react";
import "../../../index.css";

export type BoxProps = ComponentPropsWithRef<"div">;

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ ...props }, ref) => {
  return <div ref={ref} {...props} />;
});
