import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
import Results from '../screens/results';
import { useState } from 'react';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';

export default function test({ route, navigation }){

    const pressHandlerHome = async() => {
      try{

      let sa = await AsyncStorage.getItem("Sangwinik");
      let ch = await AsyncStorage.getItem("Choleryk");
      let me = await AsyncStorage.getItem("Melancholik");
      let fl = await AsyncStorage.getItem("Flegmatyk");

      if(sa !== null){
          await AsyncStorage.setItem("Sangwinik", (Number(sa)+scoreSangwinik));
      }else{
          await AsyncStorage.setItem("Sangwinik", scoreSangwinik);
      }
      if(ch !== null){
          await AsyncStorage.setItem("Choleryk", (Number(ch) + scoreCholeryk));
      }else{
          await AsyncStorage.setItem("Choleryk", scoreCholeryk);
      }
      if(me !== null){
          await AsyncStorage.setItem("Melancholik", (Number(me) + scoreMelancholik));
      }else{
          await AsyncStorage.setItem("Melancholik", scoreMelancholik);
      }
      if(fl !== null){
          await AsyncStorage.setItem("Flegmatyk", (Number(fl) + scoreFlegmatyk));
      }else{
          await AsyncStorage.setItem("Flegmatyk", scoreFlegmatyk);
      }
    }catch (err) {
         alert(err);
    }
      navigation.navigate('Home');
  }

  const pressHandlerResults = async() => {
    try{

      let sa = await AsyncStorage.getItem("Sangwinik");
      let ch = await AsyncStorage.getItem("Choleryk");
      let me = await AsyncStorage.getItem("Melancholik");
      let fl = await AsyncStorage.getItem("Flegmatyk");

      if(sa !== null){
          await AsyncStorage.setItem("Sangwinik", (Number(sa) + scoreSangwinik));
      }else{
          await AsyncStorage.setItem("Sangwinik", scoreSangwinik);
      }
      if(ch !== null){
          await AsyncStorage.setItem("Choleryk", (Number(ch) + scoreCholeryk));
      }else{
          await AsyncStorage.setItem("Choleryk", scoreCholeryk);
      }
      if(me !== null){
          await AsyncStorage.setItem("Melancholik", (Number(me) + scoreMelancholik));
      }else{
          await AsyncStorage.setItem("Melancholik", scoreMelancholik);
      }
      if(fl !== null){
          await AsyncStorage.setItem("Flegmatyk", (Number(fl) + scoreFlegmatyk));
      }else{
          await AsyncStorage.setItem("Flegmatyk", scoreFlegmatyk);
      }
    }catch (err) {
         alert(err);
    }
    navigation.navigate('Results', {res: scoreCholeryk, total: test.length, type: TYPE});
  }

  let TYPE = null;
  let ID = null;

  if( route.params ){
  TYPE = route.params.type;
  ID = route.params.id;
  }

  const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [showDownload, setShowDownload] = useState(false);

  const [scoreCholeryk, setScoreC] = useState(0);
  const [scoreSangwinik, setScoreS] = useState(0);
  const [scoreFlegmatyk, setScoreF] = useState(0);
  const [scoreMelancholik, setScoreM] = useState(0);

  const handleAnswersClick = (isCorrect) => {

    if(isCorrect == "choleryk"){
        setScoreC(scoreCholeryk + 1);
    }
    if(isCorrect == "sangwinik"){
        setScoreS(scoreSangwinik + 1);
    }
    if(isCorrect == "melancholik"){
        setScoreM(scoreMelancholik + 1);
    }
    if(isCorrect == "flegmatyk"){
        setScoreF(scoreFlegmatyk + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < test.length)
    {
        setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
  }
  const [text, setText] = useState('');

  let NICK = 'NewPlayer';

  const [test, setTest] = useState([]);

  const getDataUsingGet = () => {
      setTest(_.shuffle([{
      "question": "Jakie s??owo budzi w tobie najbardziej negatywne skojarzenia?",
      "answers": [
        {
          "content": "Samotno????",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Zast??j",
          "isCorrect": "choleryk"
        },
        {
          "content": "G????d",
          "isCorrect": "melancholik"
        },
        {
          "content": "Konflikt",
          "isCorrect": "flegmatyk"
        }
      ],
      "duration": 60
    },
    {
      "question": "Jakie s??owo kojarzy ci si?? najbardziej pozytywnie?",
      "answers": [
        {
          "content": "??miech",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Dzia??anie",
          "isCorrect": "choleryk"
        },
        {
          "content": "Cisza",
          "isCorrect": "melancholik"
        },
        {
          "content": "Harmonia",
          "isCorrect": "flegmatyk"
        }
      ],
      "duration": 90
    },
    {
      "question": "Nie wyobra??asz sobie ??ycia bez:",
      "answers": [
        {
          "content": "Innych ludzi",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Sukcesu i kariery",
          "isCorrect": "choleryk"
        },
        {
          "content": "Swojej pasji",
          "isCorrect": "melancholik"
        },
        {
          "content": "Swoich ulubionych przedmiot??w",
          "isCorrect": "flegmatyk"
        }
      ],
      "duration": 90
    },
    {
      "question": "Czym s?? dla ciebie marzenia?",
      "answers": [
        {
          "content": "Pomys??ami",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Celami",
          "isCorrect": "choleryk"
        },
        {
          "content": "Projektami",
          "isCorrect": "flegmatyk"
        },
        {
          "content": "Ideami",
          "isCorrect": "melancholik"
        }
      ],
      "duration": 90
    },
    {
      "question": "Kiedy nie mo??esz zasn????:",
      "answers": [
        {
          "content": "Pr??bujesz si?? odpr????y?? i skupi?? na oddychaniu",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Wiercisz si?? niecierpliwie w ??????ku",
          "isCorrect": "choleryk"
        },
        {
          "content": "Zwijasz si?? w k????bek i pogr????asz w marzeniach",
          "isCorrect": "melancholik"
        },
        {
          "content": "Planujesz aktywno??ci na kolejny dzie??",
          "isCorrect": "flegmatyk"
        }
      ],
      "duration": 90
    },
    {
      "question": "Ka??dy ma prawo do:",
      "answers": [
        {
          "content": "Mi??o??ci",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Rozwoju",
          "isCorrect": "choleryk"
        },
        {
          "content": "Szcz????cia",
          "isCorrect": "melancholik"
        },
        {
          "content": "Bycia sob??",
          "isCorrect": "flegmatyk"
        }
      ],
      "duration": 90
    },
    {
      "question": "Kiedy dopada ci?? l??k:",
      "answers": [
        {
          "content": "Szukasz wsparcia",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Mierzysz si?? z nim",
          "isCorrect": "choleryk"
        },
        {
          "content": "Uciekasz",
          "isCorrect": "melancholik"
        },
        {
          "content": "Szukasz przyczyny",
          "isCorrect": "flegmatyk"
        }
      ],
      "duration": 90
    },
    {
      "question": "Wybierz s??owo:",
      "answers": [
        {
          "content": "Razem",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Natychmiast",
          "isCorrect": "choleryk"
        },
        {
          "content": "Czasami",
          "isCorrect": "melancholik"
        },
        {
          "content": "Mo??e",
          "isCorrect": "flegmatyk"
        }
      ],
      "duration": 90
    },
    {
      "question": "Jeste?? przede wyszystkim:",
      "answers": [
        {
          "content": "Towarzyski",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Dynamiczny",
          "isCorrect": "choleryk"
        },
        {
          "content": "Wra??liwy",
          "isCorrect": "melancholik"
        },
        {
          "content": "Cierpliwy",
          "isCorrect": "flegmatyk"
        }
      ],
      "duration": 90
    },
    {
      "question": "Twoj?? wad?? jest z pewno??ci??:",
      "answers": [
        {
          "content": "Roztargnienie",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Sk??onno???? do agresji",
          "isCorrect": "choleryk"
        },
        {
          "content": "Zmienno???? nastroj??w",
          "isCorrect": "melancholik"
        },
        {
          "content": "Powolno????",
          "isCorrect": "flegmatyk"
        }
      ],
      "duration": 90
    },
    {
      "question": "Kiedy dochodzi do konflikt??w:",
      "answers": [
        {
          "content": "Zbywasz wszystko ??artem",
          "isCorrect": "sangwinik"
        },
        {
          "content": "??atwo si?? zapalasz, ale te?? szybko ga??niesz",
          "isCorrect": "choleryk"
        },
        {
          "content": "Zamykasz si?? w sobie",
          "isCorrect": "melancholik"
        },
        {
          "content": "D????ysz do roz??adowania sytuacji",
          "isCorrect": "flegmatyk"
        }
      ],
      "duration": 90
    },
    {
      "question": "Kiedy grasz z innymi w jak???? gr??:",
      "answers": [
        {
          "content": "Zagadujesz i dowcipkujesz",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Zdecydowanie d????ysz do zwyci??stwa",
          "isCorrect": "choleryk"
        },
        {
          "content": "Starasz si?? dok??adnie zrozumie?? zasady",
          "isCorrect": "melancholik"
        },
        {
          "content": "Obserwujesz uwa??nie innych graczy",
          "isCorrect": "flegmatyk"
        }
      ],
      "duration": 90
    },
    {
      "question": "Kiedy opowiadasz jak???? histori??:",
      "answers": [
        {
          "content": "??ywo gestykulujesz, wybuchasz ??miechem, poklepujesz innych",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Akcentujesz puenty, wyrzucasz ramiona w g??r??",
          "isCorrect": "choleryk"
        },
        {
          "content": "Splatasz r??ce, poprawiasz w??osy, obejmujesz si?? ramionami",
          "isCorrect": "melancholik"
        },
        {
          "content": "Zastanawiasz si?? nad ka??dym zdaniem, wa??ysz s??owa",
          "isCorrect": "flegmatyk"
        }
      ],
      "duration": 90
    },
    {
      "question": "Akumulatory ??adujesz najskuteczniej:",
      "answers": [
        {
          "content": "Wychodz??c do ludzi",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Uprawiaj??c sport",
          "isCorrect": "choleryk"
        },
        {
          "content": "Zaszywaj??c si?? w komforcie swojego domu",
          "isCorrect": "melancholik"
        },
        {
          "content": "Na ??onie natury",
          "isCorrect": "flegmatyk"
        }
      ],
      "duration": 90
    },
    {
      "question": "Twoj?? g????wn?? si???? w rozwi??zywaniu problem??w jest:",
      "answers": [
        {
          "content": "Odwaga",
          "isCorrect": "choleryk"
        },
        {
          "content": "Dystans",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Analiza",
          "isCorrect": "flegmatyk"
        },
        
        {
          "content": "Rozwaga",
          "isCorrect": "melancholik"
        }
      ],
      "duration": 90
    }]));

    setShowDownload(true);
  };

const save = async() => {
  try{
      await AsyncStorage.setItem("Sangwinik", scoreSangwinik);
      await AsyncStorage.setItem("Choleryk", scoreCholeryk);
      await AsyncStorage.setItem("Melancholik", scoreMelancholik);
      await AsyncStorage.setItem("Flegmatyk", scoreFlegmatyk);
  }catch (err) {
      alert(err);
  }
}

const remove = async() => {
  try{
      await AsyncStorage.removeItem("Sangwinik");
      await AsyncStorage.removeItem("Choleryk");
      await AsyncStorage.removeItem("Melancholik");
      await AsyncStorage.removeItem("Flegmatyk");
  }catch (err) {
      alert(err);
  }
}

if(showDownload)
{
return(
    <View>
    {showScore ? (
        <>
        <View>
        <Text style={styles.quest}>Choleryk: {Math.round((scoreCholeryk/(scoreSangwinik+scoreCholeryk+scoreFlegmatyk+
        scoreMelancholik))*100,3)}%</Text>
        <Text style={styles.quest}>Flegmatyk: {Math.round((scoreFlegmatyk/(scoreSangwinik+scoreCholeryk+scoreFlegmatyk+
        scoreMelancholik))*100,3)}%</Text>
        <Text style={styles.quest}>Melancholik: {Math.round((scoreMelancholik/(scoreSangwinik+scoreCholeryk+scoreFlegmatyk+scoreMelancholik))*100,3)}%</Text>
        <Text style={styles.quest}>Sangwinik: {Math.round((scoreSangwinik/(scoreSangwinik+scoreCholeryk+scoreFlegmatyk+
        scoreMelancholik))*100,3)}%</Text>
        <TouchableOpacity style={styles.button}
                            onPress={()=> pressHandlerHome() }>
              <Text style={styles.container2}>Powr??t</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
                            onPress={()=> pressHandlerResults() }>
              <Text style={styles.container2}>Globalne Rezultaty</Text>
          </TouchableOpacity>
          </View>
          </>
    ) : (<> 
      <View>
        <Text style={styles.numb}>Pytanie {currentQuestion + 1}/{test.length}</Text>
        <Text style={styles.quest}>{test[currentQuestion].question}</Text>
            <View>
            {_.shuffle(test[currentQuestion].answers).map((answers) => <TouchableOpacity 
                      style={styles.answers} onPress={() => handleAnswersClick(answers.isCorrect) }><Text style={styles.text}>       {answers.content}</Text></TouchableOpacity>)}
            </View>
            <TouchableOpacity style={styles.button}
                              onPress={()=> save(), ()=> pressHandlerHome() }>
                <Text style={styles.container2}>Powr??t</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                              onPress={()=> save(), ()=> pressHandlerResults() }>
                <Text style={styles.container2}>Globalne Rezultaty</Text>
            </TouchableOpacity>
      </View>
      </>)
     }</View>
    )
}else{
  getDataUsingGet();
  return null;
}
}

const styles = StyleSheet.create({
  quest: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 25,
    color: 'black',
    padding: 15
  },
  container2: {
    padding: 24,
    fontFamily: 'jet-thin',
    textAlignVertical: "center",
    textAlign: "center",
    color: 'black',
  },
  numb: {
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: 'grey',
    fontSize: 16,
    color: 'white',
    padding: 2,
    fontFamily: 'jet-thin'
  },
  answers: {
    borderWidth: 3,
    borderColor: 'black',
    marginTop: '15px',
    marginLeft: '30px',
    marginRight: '30px',
    textAlignVertical: "center",
    textAlign: "center",
    justifyContent: 'center',
    padding: 12
  },
  button: {
    borderWidth: 3,
    borderColor: 'black',
    marginTop: '15px',
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16
  }
});
