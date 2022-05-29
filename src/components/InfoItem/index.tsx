import React from 'react';

import {
  StyledContainerView,
  StyledLabelText,
  StyledValueText,
} from './styled-components';

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem = ({ label, value }: InfoItemProps): JSX.Element => {
  return (
    <StyledContainerView>
      <StyledLabelText>{`${label}: `}</StyledLabelText>
      <StyledValueText>{value}</StyledValueText>
    </StyledContainerView>
  );
};

export default InfoItem;
