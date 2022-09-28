import './index.scss';
import LogoS from '../../../assets/images/NYC_S.png'
import { useEffect, useRef } from 'react';
import anime from 'animejs';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        const tl = anime.timeline({});

        tl
        .add({
            targets: '.logo-container .svg-container path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInSine',
            duration: 3000,
            delay: function(el, i) { return i * 250 },
            direction: 'normal',
        })
        .add({
            targets: '.logo-container .solid-logo',
            opacity: [0, 98],
            easing: 'easeInSine',
            duration: 6000,
            direction: 'normal',
        })

    }, [])

    return (
        <div className = 'logo-container' ref={bgRef}>
            <img 
                ref={solidLogoRef}
                className= 'solid-logo'
                src = {LogoS}
                alt="S" />
            <svg
                width = "1000px" height="1000px"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                    className="svg-container"
                    fill="none"
                >
                    <path
                        ref={outlineLogoRef}
                        d="M 672.00,575.20
                        C 672.00,540.00 660.00,513.06 636.00,494.40
                          618.40,480.54 591.46,469.34 555.20,460.80
                          555.20,460.80 506.40,449.60 506.40,449.60
                          477.60,443.20 460.80,438.94 456.00,436.80
                          436.26,428.80 426.40,416.80 426.40,400.80
                          426.40,388.00 433.20,377.74 446.80,370.00
                          460.40,362.26 477.86,358.40 499.20,358.40
                          548.26,358.40 583.20,378.14 604.00,417.60
                          604.00,417.60 669.60,368.00 669.60,368.00
                          628.54,313.06 572.00,285.60 500.00,285.60
                          458.94,285.60 423.74,295.74 394.40,316.00
                          360.80,339.46 344.00,371.46 344.00,412.00
                          344.00,445.60 356.26,471.74 380.80,490.40
                          398.40,504.26 426.40,515.74 464.80,524.80
                          464.80,524.80 509.60,535.20 509.60,535.20
                          539.46,542.14 559.46,548.26 569.60,553.60
                          582.94,561.06 589.60,571.74 589.60,585.60
                          589.60,602.14 580.54,614.94 562.40,624.00
                          547.46,630.94 529.06,634.40 507.20,634.40
                          454.94,634.40 414.94,614.14 387.20,573.60
                          387.20,573.60 320.80,621.60 320.80,621.60
                          340.00,649.34 365.34,670.66 396.80,685.60
                          428.26,700.54 461.34,708.00 496.00,708.00
                          543.46,708.00 583.20,698.14 615.20,678.40
                          653.06,654.94 672.00,620.54 672.00,575.20 Z
                        M 900.00,500.00
                        C 900.00,720.91 720.91,900.00 500.00,900.00
                          279.09,900.00 100.00,720.91 100.00,500.00
                          100.00,279.09 279.09,100.00 500.00,100.00
                          720.91,100.00 900.00,279.09 900.00,500.00 Z"
                    />
                </g>
            </svg>
        </div>
    )
}

export default Logo