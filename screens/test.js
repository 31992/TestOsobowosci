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

export default function test({ route, navigation }){

  const pressHandlerHome = () => {
    navigation.navigate('Home');
  }

  const pressHandlerResults = () => {
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
      "question": "Jakie słowo budzi w tobie najbardziej negatywne skojarzenia?",
      "answers": [
        {
          "content": "Samotność",
          "isCorrect": "sangwinik"
        },
        {
          "content": "Zastój",
          "isCorrect": "choleryk"
        },
        {
          "content": "Głód",
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
        "question": "Jakie słowo kojarzy ci się najbardziej pozytywnie?",
        "answers": [
          {
            "content": "Śmiech",
            "isCorrect": "sangwinik"
          },
          {
            "content": "Działanie",
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
        "question": "Nie wyobrażasz sobie życia bez:",
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
            "content": "Swoich ulubionych przedmiotów",
            "isCorrect": "flegmatyk"
          }
        ],
        "duration": 90
      },
      {
        "question": "Czym są dla ciebie marzenia?",
        "answers": [
          {
            "content": "Pomysłami",
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
        "question": "Kiedy nie możesz zasnąć:",
        "answers": [
          {
            "content": "Próbujesz się odprężyć i skupić na oddychaniu",
            "isCorrect": "sangwinik"
          },
          {
            "content": "Wiercisz się niecierpliwie w łóżku",
            "isCorrect": "choleryk"
          },
          {
            "content": "Zwijasz się w kłębek i pogrążasz w marzeniach",
            "isCorrect": "melancholik"
          },
          {
            "content": "Planujesz aktywności na kolejny dzień",
            "isCorrect": "flegmatyk"
          }
        ],
        "duration": 90
      },
      {
        "question": "Każdy ma prawo do:",
        "answers": [
          {
            "content": "Miłości",
            "isCorrect": "sangwinik"
          },
          {
            "content": "Rozwoju",
            "isCorrect": "choleryk"
          },
          {
            "content": "Szczęścia",
            "isCorrect": "melancholik"
          },
          {
            "content": "Bycia sobą",
            "isCorrect": "flegmatyk"
          }
        ],
        "duration": 90
      },
      {
        "question": "Kiedy dopada cię lęk:",
        "answers": [
          {
            "content": "Szukasz wsparcia",
            "isCorrect": "sangwinik"
          },
          {
            "content": "Mierzysz się z nim",
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
        "question": "Wybierz słowo:",
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
            "content": "Może",
            "isCorrect": "flegmatyk"
          }
        ],
        "duration": 90
      },
      {
        "question": "Jesteś przede wszystkim:",
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
            "content": "Wrażliwy",
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
        "question": "Twoją wadą jest z pewnością:",
        "answers": [
          {
            "content": "Roztargnienie",
            "isCorrect": "sangwinik"
          },
          {
            "content": "Skłonność do agresji",
            "isCorrect": "choleryk"
          },
          {
            "content": "Zmienność nastrojów",
            "isCorrect": "melancholik"
          },
          {
            "content": "Powolność",
            "isCorrect": "flegmatyk"
          }
        ],
        "duration": 90
      },
      {
        "question": "Kiedy dochodzi do konfliktów:",
        "answers": [
          {
            "content": "Zbywasz wszystko żartem",
            "isCorrect": "sangwinik"
          },
          {
            "content": "Łatwo się zapalasz, ale też szybko gaśniesz",
            "isCorrect": "choleryk"
          },
          {
            "content": "Zamykasz się w sobie",
            "isCorrect": "melancholik"
          },
          {
            "content": "Dążysz do rozładowania sytuacji",
            "isCorrect": "flegmatyk"
          }
        ],
        "duration": 90
      },
      {
        "question": "Kiedy grasz z innymi w jakąś grę:",
        "answers": [
          {
            "content": "Zagadujesz i dowcipkujesz",
            "isCorrect": "sangwinik"
          },
          {
            "content": "Zdecydowanie dążysz do zwycięstwa",
            "isCorrect": "choleryk"
          },
          {
            "content": "Starasz się dokładnie zrozumieć zasady",
            "isCorrect": "melancholik"
          },
          {
            "content": "Obserwujesz uważnie innych graczy",
            "isCorrect": "flegmatyk"
          }
        ],
        "duration": 90
      },
      {
        "question": "Kiedy opowiadasz jakąś historię:",
        "answers": [
          {
            "content": "Żywo gestykulujesz, wybuchasz śmiechem, poklepujesz innych",
            "isCorrect": "sangwinik"
          },
          {
            "content": "Akcentujesz puenty, wyrzucasz ramiona w górę",
            "isCorrect": "choleryk"
          },
          {
            "content": "Splatasz ręce, poprawiasz włosy, obejmujesz się ramionami",
            "isCorrect": "melancholik"
          },
          {
            "content": "Zastanawiasz się nad każdym zdaniem, ważysz słowa",
            "isCorrect": "flegmatyk"
          }
        ],
        "duration": 90
      },
      {
        "question": "Akumulatory ładujesz najskuteczniej:",
        "answers": [
          {
            "content": "Wychodząc do ludzi",
            "isCorrect": "sangwinik"
          },
          {
            "content": "Uprawiając sport",
            "isCorrect": "choleryk"
          },
          {
            "content": "Zaszywając się w komforcie swojego domu",
            "isCorrect": "melancholik"
          },
          {
            "content": "Na łonie natury",
            "isCorrect": "flegmatyk"
          }
        ],
        "duration": 90
      },
      {
        "question": "Twoją główną siłą w rozwiązywaniu problemów jest:",
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
                    <Text style={styles.container2}>Powrót</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}
                                    onPress={()=> pressHandlerResults() }>
                    <Text style={styles.container2}>Wyniki</Text>
                  </TouchableOpacity>
                </View>
              </>
          ) : (<>
            <View>
              <Text style={styles.numb}>Pytanie {currentQuestion + 1}/{test.length}</Text>
              <Text style={styles.quest}>{test[currentQuestion].question}</Text>
              <View>
                {_.shuffle(test[currentQuestion].answers).map((answers) => <TouchableOpacity
                    style={styles.answers} onPress={() => handleAnswersClick(answers.isCorrect) }><Text style={styles.text}>{answers.content}</Text></TouchableOpacity>)}
              </View>
              <TouchableOpacity style={styles.button}
                                onPress={()=> pressHandlerHome() }>
                <Text style={styles.container2}>Powrót</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}
                                onPress={()=> pressHandlerResults() }>
                <Text style={styles.container2}>Wyniki</Text>
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
    marginTop: '50px',
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
