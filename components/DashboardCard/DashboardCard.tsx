import React from 'react';
import Link from 'next/link';
import {Button} from '../GlobalComponents/GlobalStyles';
import {
  Card,
  CardContainer,
  CardCover,
  CardImgContainer,
  CardInfoContainer,
  CardInfoText,
} from './styles';
import { HeaderButton } from '../Header/styles';

const DashboardCard = ({data}:{data:any}) => {
  console.log(data);
  return (
    <CardContainer>
      <Card>
        <CardImgContainer>
          <CardCover src="https://res.cloudinary.com/vicflores11/image/upload/v1653367216/undraw_Add_user_re_5oib_ndhob2.png" />
        </CardImgContainer>

        { data?.signup ? (
          <>
           <CardInfoContainer>
            <CardInfoText>Name: {data.signup.name}</CardInfoText>
            <CardInfoText>Lastname: {data.signup.lastname}</CardInfoText>
            <CardInfoText>Age: {data.signup.age}</CardInfoText>
            <CardInfoText>Country: {data.signup.country}</CardInfoText>
            <CardInfoText>City: {data.signup.city}</CardInfoText>
            <CardInfoText>CellPhone: {data.signup.cellphone}</CardInfoText>
            <CardInfoText>Status: {data.signup.status}</CardInfoText>
          </CardInfoContainer>
          </>
        ) :
        (
          <CardInfoContainer>
          <CardInfoText>
          It is necessary to enter an inscription to display the data
          </CardInfoText>
          <CardInfoText>
            <Link href="/student/inscriptions" passHref>
              <Button>Start Inscription</Button>
            </Link>
          </CardInfoText>
          
        </CardInfoContainer>
        )
        }
          
        
      </Card>
    </CardContainer>
  );
};

export default DashboardCard;
