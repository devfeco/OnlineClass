import {StatusBar,Dimensions,Text,BackHandler} from 'react-native'
import React,{useEffect} from 'react'
import { StyledContainer , colors } from '../components/Shared/styles'
import QuestionCard from '../components/Shared/QuestionCard'
import {FlatList} from 'native-base'
import styled from 'styled-components'
import LessonCard from '../components/Home/LessonCard'
import lessons from '../../assets/data/lessons'
import dummyData from '../../assets/data/dummydata'

const {height,width} = Dimensions.get("window");

export default function Home(props) {
  const {height , width} = Dimensions.get('window');
  const {goBack,canGoBack} = props.navigation;

  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress',backAction);
    return () => BackHandler.removeEventListener('hardwareBackPress',backAction);
  },[]);

  const backAction = () => {
      if(canGoBack())
        goBack();
      else
        BackHandler.exitApp();
      return true
  }

  return (
    <StyledContainer style={{paddingTop:-30}}>
      <StatusBar backgroundColor={colors.primary}/>
      <HomeHeader>
        <Text style={{fontSize:22,fontFamily:'KanitL',color:colors.white}}>{`Merhaba,Feyzullah`}</Text>
        <Avatar source={{uri:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1671727351~exp=1671727951~hmac=61acb4b8286a6916c23e9b434e59cba976060bdd595ff65ee98db54c7a712b8e"}}/>
      </HomeHeader>
      <HomeBody>
        <LessonsContainer>
          <FlatList 
            data={lessons} 
            horizontal 
            initialNumToRender={4}
            showsHorizontalScrollIndicator={false}
            renderItem={item=><LessonCard item={item}/>}
            />
        </LessonsContainer>
        <Seperator>
          <SeperatorText>
            Senin için seçtiğimiz sorular
          </SeperatorText>
        </Seperator>
        <QuestionsContainer>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={dummyData}
            renderItem={item=><QuestionCard/>}
          />
        </QuestionsContainer>
      </HomeBody>
    </StyledContainer>
  )
}
const HomeHeader = styled.View`
    background-color:${colors.primary};
    height:10%
    border-bottom-left-radius:20px;
    border-bottom-right-radius:20px;
    flex-direction:row;
    justify-content:space-between;
    align-items:flex-end;
    padding:15px 20px;
`
const Avatar = styled.Image`
    height:50px;
    width:50px;
    border-radius:500px;
    border-width:1px;
    border-color:${colors.secondary};
`
const HomeBody = styled.View`
    height:82%;
`
const LessonsContainer = styled.View`
  width:100%;
  height:20%;
`
const QuestionsContainer = styled.View`
  width:100%;
  height:77%;
`
const Seperator = styled.View`
    height:2px;
    background-color:${colors.disable};
    width:96%;
    margin-vertical:10px;
    border-radius:500px;
    justify-content:center;
    margin-left:2%;
    justify-content:center;
`
const SeperatorText = styled.Text`
  font-family:${'KanitL'};
  position:absolute;
  font-size:13px;
  color:${colors.tertiary};
  background-color:${colors.white};
  text-align:center;
  margin-horizontal:2px;
  left:-2px
  top:-10px
`