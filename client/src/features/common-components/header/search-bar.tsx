import { useState } from "react";
import { SearchIcon } from "@features/common-components";

export const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  const [openSearchBar, setOpenSearchBar] = useState<boolean>(false);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setOpenSearchBar(true);
  };

  return (
    <div
      className={
        openSearchBar
          ? "w-screen h-fit fixed top-0 left-0 bg-black"
          : "w-fit h-fit relative"
      }
    >
      <input
        className="w-[180px] h-10 px-12 py-2 bg-secondary rounded-[100px] text-base focus:outline-none hover:bg-dark-gray placeholder:hover:text-dark-gray"
        type="text"
        value={value}
        placeholder="Search"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
      <span className="absolute top-0 left-0 h-full px-2 py-[6px]">
        <SearchIcon className="w-6 h-6" />
      </span>
    </div>
  );
};
