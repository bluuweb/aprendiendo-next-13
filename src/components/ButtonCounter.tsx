interface ButtonCounterProps {
  setCount: (count: number) => void;
  count: number;
}

const ButtonCounter = ({ setCount, count }: ButtonCounterProps) => {
  return <button onClick={() => setCount(count + 1)}>Click me</button>;
};

export default ButtonCounter;
