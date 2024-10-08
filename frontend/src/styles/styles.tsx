import styled, { css, keyframes } from 'styled-components'

export const transitonTime = 0.15
export const padding = '71px'
export const paddingSmall = '21px'

export const Colors = {
    green: '#59C3B3',
    dark: '#59C3B3',
    blue: '#009EFF',
    menu: '#F7F8F9',
    electricBlue: '#2899FF',
    lightBackground: 'rgba(102, 200, 185, 0.04)',
    lightRed: '#ff00541c',
    lightBlue: '#009fff26;',
    paleBlue: '#f8f8f9',
    light: '#F8FDFF',
    purple: '#4E73F4',
    text: '#090e11',
    black: '#1F3038',
    lightBlack: '#1f30381c',
    grey: '#fdfdfd',
    red: '#ff0054',
    blueGrey: '#f6f7fac4',
}

export const ColorsCSS = {
    gradientCSS:
        'background: linear-gradient(135deg, #3498C2 0%, #03CDAE 100%);',
    gradientTransCSS:
        'background: linear-gradient(116.57deg, rgba(52, 152, 194, 0.1) 0%, rgba(3, 205, 174, 0.1) 83.33%);',
}

export const Block = styled.div`
    width: 100%;
    min-height: 100%;
    height: 100vh;
`

export const fonts = {
    // default: 'Brandon Grotesque',
    default: 'Helvetica Neue',
    reading: 'Helvetica Neue',
    text: 'Helvetica Neue',
    weights: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 600,
        heavy: 700,
    },
    size: {
        xs: '12px',
        small: '14px',
        default: '16px',
        medium: '24px',
        large: '32px',
        xl: '44px',
    },
}

export const device = {
    tablet: '(min-width: 800px)',
    tabletLarge: '(min-width: 970px)',
    laptop: '(min-width: 1240px)',
    desktop: '(min-width: 1400px)',
    desktopLarge: '(min-width: 1600px)',
}

export const custonInputStyles = {
    textAlign: 'center',
    padding: '1rem 1.5rem',
    fontSize: '1.5rem',
    border: '1px solid #9c88ff',
    borderRadius: '100px',
    boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)',
    color: '#9c88ff',
    outline: 'none',
    zIndex: 0,
}

export const scaleUpAnimation = keyframes`
    0% { transform: scale(1) }
    100% { transform: scale(0.5) }
`

export const scaleUpAnimationCSS = css`
    animation-name: ${scaleUpAnimation};
    animation-duration: 0.34s;
    animation-timing-function: ease-in;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: both;
    animation-play-state: running;
`

export const scaleRightAnimation = keyframes`
    0% { 
        transform: scaleX(1);
        transform-origin: 100% 100%;
    }
    100% { 
        transform: scaleX(0.3);
        transform-origin: 100% 100%;
    }
`

export const scaleUpRightAnimation = keyframes`
    0% { 
        transform: scaleX(.3);
        transform-origin: 100% 100%;
    }
    100% { 
        transform: scaleX(1);
        transform-origin: 100% 100%;
    }
`

export const transitionCss = css`
    transition: all ${transitonTime}s linear;
    * {
        transition: all ${transitonTime}s linear;
    }
`

export const Transition = styled.div`
    ${transitionCss}
`

export const backgroundFixedCSS = css`
    background-attachment: scroll;
    @media ${device.tabletLarge} {
        background-attachment: fixed;
    }
`

export const Disabled = styled.a`
    opacity: 0.2;
`

export const Title = styled.h1`
    font-weight: 600;
    font-size: 32px;
    /* identical to box height */
    color: #000000;
`

export const SubTitle = styled.p`
    font-size: ${fonts.size.small};
    font-weight: 400;
    color: #0000005e;
    margin-top: 8px;
`

export const sidebarWidth = 280

export const Content = styled.div`
    height: 100vh;
    flex: 3;
    overflow-y: scroll;
    padding-bottom: 20px;
`

export const Footer = styled.footer`
    width: 100%;
    background: #fdfdfd;
    padding: 12px;
`

export const Header = styled.header`
    display: flex;
    border-bottom: solid 1px rgba(58, 86, 100, 0.09);
    padding: 8px 0;
    align-items: center;
`

export const StyledDiv = styled.div`
    padding: 18px 0 18px 0;
`

export const Table = styled.table`
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border: none;
    font: inherit;
    margin-top: 12px;
`

export const Th = styled.th`
    font-weight: 500;
    font-size: 12px;
    padding: 4px;
    color: #868686;
    border-bottom: 1px solid #97979736;
    font: inherit;
    padding-bottom: 12px;
`

export const TD = styled.td`
    font-size: 14px;
    color: #000000;
    font-weight: 500;
    text-align: left;
    padding: 12px 16px;
    padding-left: 6px;
    ${transitionCss}
    :first-child {
        border-radius: 10px 0 0 10px;
    }
    :last-child {
        border-radius: 0 10px 10px 0;
    }
`

export const TR = styled.tr`
    padding: 8px 0;
    border-radius: 4px;
    background: white;
    cursor: pointer;
    ${transitionCss}
    :nth-child(2n) {
        background: #f8f8f9;
    }
    :hover td {
        color: ${Colors.text};
        opacity: 0.68;
    }
`

export const TRLight = styled.tr`
    padding: 8px 0;
    border-radius: 4px;
    background: white;
    ${transitionCss}
    :nth-child(2n) {
        background: #f8f8f9;
    }

`

export const SortByHeader = styled.button<{ green?: boolean }>`
    outline: none;
    border: none;
    font: inherit;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    padding: 4px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-items: center;
    flex: 1 1 auto;
    width: 100%;

    ${({ green }) =>
        green &&
        `
    
    color: ${Colors.electricBlue};
    font-weight: 600;
  `}
`

export const ButtonHolder = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-content: center;
    width: 100%;
    margin: auto;
    max-width: 400px;
`

const Section = styled.div`
    width: 100%;
    flex: 1 1 auto;
    margin-top: 4px;
`

const SectionTitle = styled.h2`
    width: 100%;
    margin: 12px 0px;
    font-weight: 600;
    font-size: 20px;
    color: ${Colors.text};
`

const Flex = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-content: flex-start;
`

const InputWrapper = styled.div`
    flex: 1 1 auto;
    margin: 4px 12px 4px 0px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`

export const Form = {
    Section,
    SectionTitle,
    Flex,
    InputWrapper,
    Grid,
}
