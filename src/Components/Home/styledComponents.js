import styled from 'styled-components'

export const Container = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
`

export const Container2 = styled.div`
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const List = styled.ul`
  padding-left: 0;
  list-style-type: none;
  font-family: 'Bree Serif';
`

export const List2 = styled(List)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
  }
`

export const ListItem = styled.li`
  font-family: 'Bree Serif';
  color: white;
`

export const Container3 = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  font-family: 'Roboto';
  text-align: center;
  width: 120px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Paragraph = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  margin: 0;
`
export const Heading = styled.h1`
  color: #223a5f;
  font-family: 'Roboto';
  margin: 0;
`

export const Heading2 = styled.h1`
  color: white;
`

export const Container4 = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Container5 = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto';
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
  }
`

export const Image = styled.img`
  height: 150px;
  width: 150px;
  @media (max-width: 767px) {
    height: 80px;
    width: 80px;
  }
`

export const Image2 = styled.img`
  height: 400px;
  width: 500px;
  margin: 10px;
  @media (max-width: 767px) {
    width: 200px;
    height: 200px;
  }
`

export const Button2 = styled.button`
  background-color: white;
  font-family: 'Bree Serif';
  padding: 10px;
  border-width: 0;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`
export const Container6 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const Paragraph2 = styled(Paragraph)`
  color: white;
  font-family: 'Roboto';
  margin: 0;
`

export const Container7 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
export const Container8 = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`
export const Containerp = styled.div`
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  width: 600px;
  height: 500px;
  @media (max-width: 767px) {
    width: 300px;
    height: 300px;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border-width: 0;
  cursor: pointer;
`
