import React from 'react'
import { useState, useEffect } from 'react'
import styled from "styled-components"

const Copyrights = () => {
  const [year, setYear] = useState('')
  
  useEffect(() => {
    const currentYear = new Date().getFullYear()
    setYear(currentYear)
  }, [])

  return (
    <Container>
      <Copyright>Copyright © {year} Wonkook Lee</Copyright>
    </Container>
  )
}

export default Copyrights

const Container = styled.div`
  width: 100%;
`

const Copyright = styled.p`
  text-align: center;
`