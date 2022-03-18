import { TechnologyContainer, TechnologyIcon, TechnologyName } from "./style"

const Technology = ({ iconSrc, name }) => {
  return (
    <TechnologyContainer>
      <TechnologyIcon src={iconSrc} />
      <TechnologyName>{name}</TechnologyName>
    </TechnologyContainer>
  )
}
export default Technology