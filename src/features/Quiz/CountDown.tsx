interface Props {
  count: number;
}

export default function Component({ count }: Props) {
  return <div>{count}</div>;
}
