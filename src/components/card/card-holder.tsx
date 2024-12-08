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
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default CardHolder;
