import { DropdownColumn, DropdownContainer, DropdownMainLink, DropdownSubLink } from "@features/common-components";

export const NavDropdownNews = () => {
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
        <DropdownMainLink link="#">News & featured</DropdownMainLink>
        <DropdownSubLink link="#">100s of New Arrivals</DropdownSubLink>
        <DropdownSubLink link="">Best Sellers</DropdownSubLink>
        <DropdownSubLink link="">Only at Nike</DropdownSubLink>
        <DropdownSubLink link="">New & upcoming drops</DropdownSubLink>
        <DropdownSubLink link="">SNKRS Launch Calendar</DropdownSubLink>
      </DropdownColumn>

      <DropdownColumn>
        <DropdownMainLink link="#">Shop icons</DropdownMainLink>
        <DropdownSubLink link="#">Air Jordan 1</DropdownSubLink>
        <DropdownSubLink link="">Air Force</DropdownSubLink>
        <DropdownSubLink link="">Dunk</DropdownSubLink>
        <DropdownSubLink link="">Air Max</DropdownSubLink>
        <DropdownSubLink link="">Blazer</DropdownSubLink>
        <DropdownSubLink link="">Pegasus</DropdownSubLink>
        <DropdownSubLink link="">Metcon</DropdownSubLink>
        <DropdownSubLink link="">LeBron</DropdownSubLink>
      </DropdownColumn>

      <DropdownColumn>
        <DropdownMainLink link="#">News For Men</DropdownMainLink>
        <DropdownSubLink link="#">Shoes</DropdownSubLink>
        <DropdownSubLink link="">Clothing</DropdownSubLink>

        <DropdownMainLink link="#" paddingTop>
          News For Women
        </DropdownMainLink>
        <DropdownSubLink link="#">Shoes</DropdownSubLink>
        <DropdownSubLink link="">Clothing</DropdownSubLink>

        <DropdownMainLink link="#" paddingTop>
          News For Kids
        </DropdownMainLink>
        <DropdownSubLink link="#">Shoes</DropdownSubLink>
        <DropdownSubLink link="">Clothing</DropdownSubLink>
      </DropdownColumn>

      <DropdownColumn>
        <DropdownMainLink link="#">Jordan</DropdownMainLink>
        <DropdownSubLink link="#">Shop all</DropdownSubLink>
        <DropdownSubLink link="">Latest in Jordan</DropdownSubLink>
        <DropdownSubLink link="">Complete the Fit with Jordan</DropdownSubLink>
        <DropdownSubLink link="">Men</DropdownSubLink>
        <DropdownSubLink link="">Women</DropdownSubLink>
        <DropdownSubLink link="">Kids</DropdownSubLink>
        <DropdownSubLink link="">Basketball</DropdownSubLink>
      </DropdownColumn>
    </DropdownContainer>
  );
};
