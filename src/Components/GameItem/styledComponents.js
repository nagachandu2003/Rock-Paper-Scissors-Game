import styled from 'styled-components'

export const ListItem = styled.li`
  padding: 10px;
`
export const Button = styled.button`
  background-color: transparent;
  border-width: 0;
  cursor: pointer;
`

export const Image = styled.img`
  margin: 10px;
  height: 150px;
  width: 150px;
  @media (max-width: 767px) {
    height: 80px;
    width: 80px;
  }
`
