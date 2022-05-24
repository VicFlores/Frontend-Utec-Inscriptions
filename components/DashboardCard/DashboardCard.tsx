import React from 'react';
import {
  Card,
  CardContainer,
  CardCover,
  CardImgContainer,
  CardInfoContainer,
  CardInfoText,
} from './styles';

const DashboardCard = ({data}:{data:any}) => {
  console.log(data);
  return (
    <CardContainer>
      <Card>
        <CardImgContainer>
          <CardCover src="https://res.cloudinary.com/vicflores11/image/upload/v1653367216/undraw_Add_user_re_5oib_ndhob2.png" />
        </CardImgContainer>

        <CardInfoContainer>
          <CardInfoText>Name: {data.signup.name}</CardInfoText>
          <CardInfoText>Lastname: {data.signup.lastname}</CardInfoText>
          <CardInfoText>Age: {data.signup.age}</CardInfoText>
          <CardInfoText>Country: {data.signup.country}</CardInfoText>
          <CardInfoText>City: {data.signup.city}</CardInfoText>
          <CardInfoText>CellPhone: {data.signup.cellphone}</CardInfoText>
          <CardInfoText>Status: {data.signup.status}</CardInfoText>
        </CardInfoContainer>
      </Card>
    </CardContainer>
  );
};

export default DashboardCard;
