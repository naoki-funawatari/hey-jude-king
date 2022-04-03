interface Props {
  count: number;
}

export default function CountDown({ count }: Props) {
  return <div>{count}</div>;
}
