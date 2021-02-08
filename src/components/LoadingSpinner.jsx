import BarLoader from 'react-spinners/BarLoader';
import styled from 'styled-components';

const LoadingSpinner = () => {
  if (true)
    return (
      <Container>
        <BarLoader color={'#fff'} size={75} />
      </Container>
    );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: #131313;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LoadingSpinner;
