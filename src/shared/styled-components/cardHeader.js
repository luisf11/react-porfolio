import styled from "styled-components";
import { NavLink } from "react-router-dom";

const TabContainer = styled.div`
    margin: 20px 20px;
    font-size: 1.5em;
}
`;

const StyledNavLink = styled(NavLink)`
  transition: transform 0.2s;
  &:link {
    padding: 3px;
    margin: 10px;
  }
  &:hover {
    transition: 0.5s;
    background-color: #ffffff3b;
    border-bottom: 1px solid;
  }
`;

export {TabContainer,StyledNavLink};