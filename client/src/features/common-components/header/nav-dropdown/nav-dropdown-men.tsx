import { DropdownColumn, DropdownContainer, DropdownMainLink, DropdownSubLink } from "@features/common-components";

export const NavDropdownMen = () => {
  return (
    <DropdownContainer>
      <DropdownColumn>
        <DropdownMainLink link="#">Limited time sale</DropdownMainLink>
        <DropdownSubLink link="#">Shop all: up to 50% Off</DropdownSubLink>
        <DropdownSubLink link="">Limited time sale</DropdownSubLink>

        <DropdownMainLink link="#" paddingTop>
          Gifts
        </DropdownMainLink>
        <DropdownSubLink link="#">The most iconic gifts</DropdownSubLink>
        <DropdownSubLink link="">Gift cards</DropdownSubLink>
        <DropdownSubLink link="">Stocking stuffers</DropdownSubLink>
      </DropdownColumn>
      <DropdownColumn>
        <DropdownMainLink link="#">Limited time sale</DropdownMainLink>
        <DropdownSubLink link="#">Shop all: up to 50% Off</DropdownSubLink>
        <DropdownSubLink link="">Limited time sale</DropdownSubLink>

        <DropdownMainLink link="#" paddingTop>
          Gifts
        </DropdownMainLink>
        <DropdownSubLink link="#">The most iconic gifts</DropdownSubLink>
        <DropdownSubLink link="">Gift cards</DropdownSubLink>
        <DropdownSubLink link="">Stocking stuffers</DropdownSubLink>
      </DropdownColumn>
    </DropdownContainer>
  );
};
