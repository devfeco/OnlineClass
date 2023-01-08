import {StatusBar,Dimensions,Text,BackHandler} from 'react-native'
import React,{useEffect} from 'react'
import { StyledContainer , colors , HomeHeader, HomeBody, Seperator, Avatar} from '../components/Shared/styles'
import QuestionCard from '../components/Shared/QuestionCard'
import {FlatList} from 'native-base'
import LessonCard from '../components/Home/LessonCard'
import lessons from '../../assets/data/lessons'

const {height,width} = Dimensions.get("window");

export default function Home(props) {

  const dummyData = [
    {
      id:1,
      name:'Matematik',
      image:'../../assets/images/math.jpg'
    },
    {
      id:2,
      name:'Fizik',
      image:'../../assets/images/fizik.jpg'
    },
    {
      id:3,
      name:'Kimya',
      image:'../../../assets/images/kimya.jpg'
    },
    {
      id:4,
      name:'Biyoloji',
      image:'../../assets/images/biyoloji.jpg'
    },
    {
      id:5,
      name:'Türkçe',
      image:'../../assets/images/turkce.jpg'
    }
  ]

  const {height , width} = Dimensions.get('window');
  const {goBack,canGoBack} = props.navigation;

  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress',backAction);
    return () => BackHandler.removeEventListener('hardwareBackPress',backAction);
  });

  const backAction = () => {
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
        <FlatList initialNumToRender={4} horizontal showsHorizontalScrollIndicator={false} data={lessons} renderItem={item=><LessonCard item={item}/>} style={{height:height*0.2}}/>
        <Seperator>
          <Text style={{fontSize:13,position:'absolute',backgroundColor:colors.white,fontFamily:'KanitL',color:colors.secondary}}>Senin için seçtiğimiz sorular  </Text>
        </Seperator>
        <FlatList showsVerticalScrollIndicator={false} data={dummyData} renderItem={item => <QuestionCard/>} style={{height:height*0.8}}/>
      </HomeBody>
    </StyledContainer>
  )
}