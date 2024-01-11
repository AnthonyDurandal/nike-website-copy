export const NavLink = (props: {
  title: string;
  link?: string;
  onDragOver: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <>
      <div
        className="p-3 py-4 hover:border-b-2 border-b-current flex-wrap"
        // className="flex items-center hover:border-b-2 hover:pt-[1px] border-b-current flex-wrap overflow-hidden"
        onMouseEnter={(e) => {
          props.onDragOver(e);
          console.log("hehe");
        }}
      >
        <li className="whitespace-nowrap">{props.title}</li>
      </div>
    </>
  );
};
