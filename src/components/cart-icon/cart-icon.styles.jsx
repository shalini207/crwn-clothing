import styled from "styled-components";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ItemCountContainer = styled.span`
  position: absolute;
  bottom: 12px;
  font-size: 10px;
  font-weight: bold;
`;

export const ShoppingIcon = styled(ShoppingCart)`
  width: 25px;
  height: 25px;
`;
