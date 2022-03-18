import ReactLoading from 'react-loading';
import { LoadingContainer } from './style';

const Loading = ({ type, height, width }) => {
  return (
    <LoadingContainer>
      <ReactLoading type={type} height={height} width={width} />
    </LoadingContainer>
  )
}
export default Loading