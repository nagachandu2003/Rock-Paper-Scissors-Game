import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  Container,
  Container2,
  List,
  Container3,
  ListItem,
  Paragraph,
  Heading,
  Container4,
  List2,
  Image,
  Container5,
  Button2,
  Container6,
  Paragraph2,
  Container7,
  Container8,
  Containerp,
  Heading2,
  Image2,
} from './styledComponents'
import GameItem from '../GameItem'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testerid: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testerid: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testerid: 'paperButton',
  },
]

class Home extends Component {
  state = {score: 0, yourchoice: '', computerchoice: '', status: ''}

  onSelectItem = value => {
    const selectedItem = choicesList.filter(ele => ele.id === value)[0]
    const computerItem = choicesList[Math.floor(Math.random() * 3)]
    const si = selectedItem.id
    const ci = computerItem.id
    let {score, status} = this.state
    if (
      (si === 'ROCK' && ci === 'SCISSORS') ||
      (si === 'PAPER' && ci === 'ROCK') ||
      (si === 'SCISSORS' && ci === 'PAPER')
    ) {
      score += 1
      status = 'YOU WON'
    } else if (selectedItem === computerItem) {
      status = 'IT IS DRAW'
    } else {
      status = 'YOU LOSE'
      score -= 1
    }
    this.setState({
      yourchoice: selectedItem,
      computerchoice: computerItem,
      score,
      status,
    })
  }

  onPlayAgain = () => {
    this.setState({yourchoice: '', computerchoice: ''})
  }

  render() {
    const {score, yourchoice, computerchoice, status} = this.state
    return (
      <Container>
        <Container2>
          <List>
            <ListItem>ROCK</ListItem>
            <ListItem>PAPER</ListItem>
            <ListItem>SCISSORS</ListItem>
          </List>
          <Container3>
            <Paragraph>Score</Paragraph>
            <Heading>{score}</Heading>
          </Container3>
        </Container2>
        {yourchoice.length === 0 && (
          <Container4>
            <List2>
              {choicesList.map(ele => (
                <GameItem
                  data-testid={ele.testerid}
                  key={ele.id}
                  itemDetails={ele}
                  onSelectItem={this.onSelectItem}
                />
              ))}
            </List2>
          </Container4>
        )}
        {yourchoice.length !== 0 && (
          <Container6>
            <Container5>
              <Container7>
                <Paragraph2>YOU</Paragraph2>
                <Image src={yourchoice.imageUrl} alt="your choice" />
              </Container7>
              <Container7>
                <Paragraph2>OPPONENT</Paragraph2>
                <Image src={computerchoice.imageUrl} alt="opponent choice" />
              </Container7>
            </Container5>
            <Heading2>{status}</Heading2>
            <Button2 onClick={this.onPlayAgain}>PLAY AGAIN</Button2>
          </Container6>
        )}
        <Container8>
          <Popup trigger={<Button2 type="button">Rules</Button2>} modal nested>
            {close => (
              <Containerp>
                <Button2 onClick={close}>
                  <RiCloseLine />
                </Button2>
                <br />
                <Image2
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </Containerp>
            )}
          </Popup>
        </Container8>
      </Container>
    )
  }
}

export default Home
