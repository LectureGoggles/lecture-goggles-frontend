import styled from 'styled-components';

const GridBody = styled.div`
  @font-face {
    font-family: 'IBMPlexSans-SemiBold';
    src: url(IBMPlexSans-SemiBold.ttf);
  }
  @font-face {
    font-family: 'IBMPlexMono';
    src: url(IBMPlexMono.ttf);
  }
  display: grid;
  grid-template-rows: minmax(70px, auto) auto;
  grid-template-columns: ${() => (window.innerWidth < 500 ? '16px 4fr 16px' : '1fr 4fr 1fr')};
  justify-items: center;
  line-height: 1.4;
  margin-bottom: 56px;
  font-family: 'IBMPlexSans-SemiBold';
`;

export default GridBody;
