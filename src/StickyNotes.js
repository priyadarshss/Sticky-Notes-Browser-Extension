import React, { useState, useEffect } from 'react'
import './App.css'
import { RiCloseCircleFill } from 'react-icons/ri'
import styled from 'styled-components'

const Container = styled.div`
  z-index: 2;
  border: 1px solid grey;
  position: absolute;
  background: #f7ece1;
  border-radius: 10px;
  top: ${(props) => props.y + 'px'};
  left: ${(props) => props.x + 'px'};
  border: 2px solid #ba4111;
`

const Header = styled.div`
  height: 23px;
  background-color: #ff8401;
  border-radius: 5px;
  border: 1px solid #ba4111;
`

const Title = styled.div`
  height: 20px;
  background-color: #ff8401;
  color: #242424;
  border-radius: 5px;
  padding-left: 10px;
  font-weight: 900;
  font-family: Comic Sans MS, cursive;
  float: left;
`

const StyledButton = styled.button`
  height: 23px;
  border: none;
  opacity: 0.5;
  float: right;
  border-radius: 10px;
`

const StyledTextArea = styled.textarea`
  color: dark grey;
  height: 200px;
  width: 200px;
  border: none;
  background-color: hsla(0, 0%, 100%, 0.2);
`

const StickyNotes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const clickListener = (e) => {
      if (e.shiftKey) {
        setNotes((prevNotes) => [...prevNotes, { x: e.pageX, y: e.pageY }])
      }
    }
    document.addEventListener('click', clickListener)
    return () => document.removeEventListener('click', clickListener)
  }, [])

  return (
    <div>
      {notes.map((note) => {
        const handleChange = (e) => {
          const editedText = e.target.value
          setNotes((prevNotes) =>
            prevNotes.reduce(
              (acc, cv) =>
                cv.x === note.x && cv.y === note.y
                  ? acc.push({ ...cv, note: editedText }) && acc
                  : acc.push(cv) && acc,
              []
            )
          )
        }

        const handleDelete = () => {
          setNotes((prevNotes) =>
            prevNotes.reduce(
              (acc, cv) =>
                cv.x === note.x && cv.y === note.y ? acc : acc.push(cv) && acc,
              []
            )
          )
        }

        return (
          <Container x={note.x} y={note.y}>
            <Header>
              <Title>Note</Title>
              <StyledButton onClick={handleDelete}>
                <RiCloseCircleFill size={20} />
              </StyledButton>
            </Header>
            <StyledTextArea
              onChange={handleChange}
              note={note.note ? note.note : ''}
            />
          </Container>
        )
      })}
    </div>
  )
}

export default StickyNotes
