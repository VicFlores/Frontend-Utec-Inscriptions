import React from 'react';
import {
  Card,
  CardContainer,
  CardCover,
  CardImgContainer,
  CardInfoContainer,
  CardInfoText,
} from './styles';

const DashboardCard = () => {
  return (
    <CardContainer>
      <Card>
        <CardImgContainer>
          <CardCover src="https://res.cloudinary.com/vicflores11/image/upload/v1653367216/undraw_Add_user_re_5oib_ndhob2.png" />
        </CardImgContainer>

        <CardInfoContainer>
          <CardInfoText>Name: Vic Ferman</CardInfoText>
          <CardInfoText>Lastname: Flores Escobar</CardInfoText>
          <CardInfoText>Age: 21</CardInfoText>
          <CardInfoText>Country: El Salvador</CardInfoText>
          <CardInfoText>City: San Salvador</CardInfoText>
          <CardInfoText>CellPhone: 75527785</CardInfoText>
          <CardInfoText>Status: Pending</CardInfoText>
        </CardInfoContainer>
      </Card>
    </CardContainer>
  );
};

export default DashboardCard;
