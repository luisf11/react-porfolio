import React from "react";

import { navOptions } from "../config/config";
import {TabContainer, StyledNavLink} from '../shared/styled-components/cardHeader';


const CardHeader = () => {
  return (
    <TabContainer>
      {navOptions.map(option => (
        <StyledNavLink key={option.key} to={option.route}>
          {option.name}
        </StyledNavLink>
      ))}
    </TabContainer>
  );
};

export default CardHeader;
