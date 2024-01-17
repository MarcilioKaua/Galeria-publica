import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    background-color: #1d2a35;
    color: #fff;
    min-height: 100vh;
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`

export const Header = styled.h1`
    margin: 0;
    paddin: 0;
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.2rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5em;
`

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LoadingImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    margin-bottom: 0.5em;
    animation: ${rotateAnimation} 1s linear infinite;
  }
`

export const ImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`

export const UploadFile = styled.form`
  width: 15em;
  display: flex;
  flex-direction: column;
  background-color: #3d3f43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;

  p {
    text-align: center;
  }

  input[type=file] {
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: #0CCE6B;
    }
  }

  input[type=submit] {
    margin-left: auto;
    margin-right: auto
    width: 100px;
    background-color: #0CCE6B;
    border: 0;
    color: #fff;
    padding: 8px 16px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
      
    }
  }
`