import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    border:none;
    background: none;
    outline: none;
    color: white;
    width: 100%;
    ::placeholder{
        color: white;
        font-weight: bold;
        font-family: sans-serif;
    }
    :active{
        outline: none;

    }
`
export default Input