interface Props {
  count: number;
}

export default function ({ count }: Props) {
  return <div>{count}</div>;
}
