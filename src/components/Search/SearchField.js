import React from 'react'
import {colors, InnerContainer} from '../Shared/styles'
import styled from 'styled-components'
import {Ionicons} from '@expo/vector-icons'

export default function SearchField() {
  return (
    <InnerContainer style={{alignItems:'center',paddingTop:20}}>
      <SearchContainer>
        <Ionicons name='md-search-outline' size={28} color={colors.disable}/>
        <SeacrhInput/>
      </SearchContainer>
    </InnerContainer>
  )
}

const SearchContainer = styled.View`
    width:95%;
    height:60px;
    border-width:1px;
    border-color:${colors.disable};
    border-radius:20px;
    flex-direction:row;
    align-items:center;
    padding-left:10px
`

const SeacrhInput = styled.TextInput`
    height:100%
    width:90%;
    font-size:24px;
    font-family:${'KanitL'};
    color:${colors.tertiary};
    padding-left:10px
`