import styled from "styled-components"

export const Container = styled.div`
  background: #fff;
  padding: 25px;
  border-radius: 20px;

  h1 {
    color: #2c2c2c;
    font-weight: 700;
  }

  input {
    background: #2c2c2c;
    padding-left: 10px;
    height: 30px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 400;
    margin-top: 20px;
    outline: none;
  }
`

export const AddButton = styled.button`
  background: #6cf000;
  color: #000;
  width: 50px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
  font-weight: 700;
  color: #2c2c2c;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
`

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  align-items: center;
  background: #2c2c2c;
  color: #fff;
  border-radius: 5px;
  border: none;
  margin-top: 15px;
  padding: 0 10px;

  p {
    text-transform: capitalize;
    font-weight: 500;
  }
`
export const TrashButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`
