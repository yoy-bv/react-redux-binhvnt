import styled from 'styled-components'

const Style = styled.div`
  width: 100%;
  .content-list {
    height: 500px;
    overflow: hidden scroll;
    margin-bottom: 20px;
  }
  .media {
    display: flex;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 10px;
    margin-bottom: 10px;
    img {
      margin-right: 20px;
    }
    .title {
      button {
        padding: 0;
      }
    }
  }
`
export default Style
