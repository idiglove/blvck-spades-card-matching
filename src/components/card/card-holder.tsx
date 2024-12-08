import clsx from "classnames";

const CardHolder = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={clsx(
        "flex justify-center items-center absolute w-full h-full",
        className
      )}
      style={{
        backfaceVisibility: "hidden",
        fontSize: "2rem",
        borderRadius: "8px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default CardHolder;
