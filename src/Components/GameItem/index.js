import {ListItem, Button, Image} from './styledComponents'
// import {List} from '../Home/styledComponents'

const GameItem = props => {
  const {itemDetails, onSelectItem} = props
  const {id, imageUrl} = itemDetails
  const onChoose = () => {
    onSelectItem(id)
  }
  return (
    <ListItem>
      <Button onClick={onChoose}>
        <Image src={imageUrl} alt="choice" />
      </Button>
    </ListItem>
  )
}

export default GameItem
