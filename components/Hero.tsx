import Image from "next/image"
import styles from "../styles/Hero.module.scss"

function Hero() {
    return (
        <div className={styles.container}>
            <Image 
                src="/images/illustration-intro.png"
                alt="curvy bg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
            />
            {/* <Image 
                src="/images/bg-curvy-desktop.svg"
                alt="curvy bg"
                width={375}
                height={141}
                layout="responsive"
            /> */}
        </div>
    )
}

export default Hero
