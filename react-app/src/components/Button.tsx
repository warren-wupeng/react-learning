interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'dark';
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
