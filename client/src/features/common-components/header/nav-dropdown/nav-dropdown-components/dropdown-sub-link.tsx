export const DropdownSubLink = (props: {
  link: string;
  children: string
}) => {
  return (
    <a>
      <p className="text-secondary text-sm mb-[6px]"
      >
        {props.children}
      </p>
    </a>
  );
};