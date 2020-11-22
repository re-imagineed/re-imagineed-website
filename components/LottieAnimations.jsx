import Lottie from 'react-lottie'
import successAnimation from '../public/lotties/check-success-anim.json'
import failAnimation from '../public/lotties/fail-mark-anim.json'
import errorAnimation from '../public/lotties/question-mark-anim.json'


const defaultLottieOptions = {
    loop: false,
    autoplay: true,
    animationData: null,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

export function LottieSuccess() {
    return (
        <Lottie
            options={{
                ...defaultLottieOptions,
                animationData: successAnimation
            }}
            height={28}
            width={28}
        />
    )
}

export function LottieFail() {
    return (
        <Lottie
            options={{
                ...defaultLottieOptions,
                animationData: failAnimation
            }}
            height={24}
            width={24}
        />
    )
}

export function LottieError() {
    return (
        <Lottie
            options={{
                ...defaultLottieOptions,
                animationData: errorAnimation
            }}
            height={24}
            width={24}
        />
    )
}