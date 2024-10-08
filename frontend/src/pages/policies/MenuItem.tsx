import { Colors } from '../../styles/styles'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MenuItem = ({ item, active, onClick }) => {
    const { name, to } = item
    return (
        <NavItem
            active={active?.to === to}
            onClick={() => {
                onClick(item)
            }}
        >
            <StyledLink to={to}>{name}</StyledLink>
        </NavItem>
    )
}

const NavItem = styled.div<{ active: boolean }>`
    padding: 2px 16px;
    background: ${({ active }) => (active ? Colors.lightBlack : 'transparent')};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
`

const StyledLink = styled(Link)`
    font-weight: 500;
    font-size: 14px;
    color: #000000;
    text-decoration: none !important;
    &:hover {
        font-weight: bold;
    }
    &:active {
        text-decoration: none;
    }
`

export default MenuItem
