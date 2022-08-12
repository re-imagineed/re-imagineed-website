import Image from 'next/image'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export function LogoBlackL() {
  return (
    <ImageWrapper>
      <Image
        src="/logo/logo-1280px.png"
        alt="Re-Imagine Education"
        width="250vw"
        height="250vw"
      />
    </ImageWrapper>
  )
}

export function LogoWhiteL() {
  return (
    <ImageWrapper>
      <Image
        src="/logo/logo-white-1280px.png"
        alt="Re-Imagine Education"
        width={500}
        height={500}
      />
    </ImageWrapper>
  )
}

export function LogoWhiteS() {
  return (
    <ImageWrapper>
      <Image
        src="/logo/logo-white-1280px.png"
        alt="Re-Imagine Education"
        width={48}
        height={48}
      />
    </ImageWrapper>
  )
}
