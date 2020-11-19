import Image from 'next/image'
import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function Logo() {
  return (
    <ImageContainer>
      <Image
        src="/logo/logo-1280px.png"
        alt="Re-Imagine Education"
        width={500}
        height={500}
      />
    </ImageContainer>
  )
}

export default Logo