export const DropdownMainLink = (props: {
  children: string;
  link: string;
  paddingTop?: boolean;
}) => {
  return (
    <a>
      <p
        className={
          props.paddingTop ? "text-primary mb-4 mt-10" : "text-primary mb-4"
        }
      >
        {props.children}
      </p>
    </a>
  );
};
