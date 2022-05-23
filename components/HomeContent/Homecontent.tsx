import React from 'react'
import { HomeContentGrid, HomeContentContainer, Img } from './styles'

const Homecontent = () => {
  return (
    <HomeContentGrid>
      <HomeContentContainer>
        <Img src="https://res.cloudinary.com/dohkdu219/image/upload/v1653266423/utec-inscriptions/gobrand_klqnbt.svg" />
      </HomeContentContainer>

      <HomeContentContainer>
        <Img src="https://res.cloudinary.com/dohkdu219/image/upload/v1653266493/utec-inscriptions/MongoDB_Logo_sb3hel.svg" />
      </HomeContentContainer>

      <HomeContentContainer>
        <Img src="https://res.cloudinary.com/dohkdu219/image/upload/v1653266604/utec-inscriptions/next-js-seeklogo.com_dnkhbg.svg" />
      </HomeContentContainer>
    </HomeContentGrid>
  )
}

export default Homecontent