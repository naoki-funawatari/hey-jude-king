import { ReactNode, MouseEvent } from "react";

interface Props {
  children: ReactNode;
  value?: string;
  onClick?: (e: MouseEvent) => void;
}

export default function ({ children, value, onClick }: Props) {
  return <button {...{ value, onClick }}>{children}</button>;
}
