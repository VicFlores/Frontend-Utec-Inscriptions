import Link from 'next/link'
import React from 'react'
import { Button } from '../GlobalComponents/GlobalStyles'
import { HomeMainContainer, HomeMainGrid, Img } from './styles'

const Homemain = ({urlImage}: {urlImage: string}) => {
  return (
    <HomeMainGrid>
      <HomeMainContainer>
        <h1>It’s moment to start a new moment in your life. Creating your future in Utec.</h1>
          <Link href="/login">
            <Button>
                Get started
            </Button>
          </Link>
      </HomeMainContainer>
      <HomeMainContainer>
        <Img src={urlImage}>
        </Img>
      </HomeMainContainer>
    </HomeMainGrid>
  )
}

export default Homemain