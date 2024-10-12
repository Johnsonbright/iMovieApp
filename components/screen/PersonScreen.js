import { View, Text, Dimensions, Platform, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MovieList from '../MovieList';
=======


let {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const verticalMargin = ios? " ": "my-3" 

const PersonScreen = () => {
  const navigation = useNavigation();

  const [isFavourite, toggleFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1,2,3,4])
=======
  const [isFavourite, toggleFavourite] = useState(false)

  return (
    <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom:20}}>
       {/* back screen */}
       <SafeAreaView className={`z-20 w-full flex-row justify-between items-center px-4 flex-1`+ verticalMargin }> 
       <TouchableOpacity onPress={() => navigation.goBack()} color={{backgroundColor: "#dbd823"}} className=" p-1.5 " >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}>
           <HeartIcon size="35" color={isFavourite? "red": "white"}/>
    </TouchableOpacity>
    </SafeAreaView> 
      {/* person details */}
      <View>
          <View className="flex-row justify-center"
            style={{
                
              // shadowColor: 'gray',
              // shadowRadius: 40,
              // shadowOffset: {width: 0, height: 5},
              // shadowOpacity: 1,
             
            }}
          >
             <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
                <Image source={require('../assets/images/castImage1.webp')}
                style={{height:height*0.43, width: width*0.74,
                  
                }}
              />
             </View>
          </View>

          <View className="mt-6">
              <Text className="text-3xl text-white font-bold text-center">
                Keanu Reeves
              </Text>
              <Text className="text-base text-neutral-500 text-center">
                London, United Kingdom
              </Text>
          </View>
           <View className="mx-3 px-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full h-[60]">
               <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                 <Text className="text-white font-semibold">
                    Gender
                 </Text>
                 <Text className="text-sm text-neutral-300">
                   Male
                 </Text>
               </View>
               <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                 <Text className="text-white font-semibold">
                    Birthday
                 </Text>
                 <Text className="text-sm text-neutral-300">
                   1964-09-02
                 </Text>
               </View>
               <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                 <Text className="text-white font-semibold">
                    Known for
                 </Text>
                 <Text className="text-sm text-neutral-300">
                   Acting
                 </Text>
               </View>
               <View className=" px-2 items-center">
                 <Text className="text-white font-semibold">
                    Popularity
                 </Text>
                 <Text className="text-sm text-neutral-300">
                   64.23
                 </Text>
               </View>
           </View>
            <View className="my-6 mx-4 space-y-2">
               <Text className="text-white text-lg" >Biography</Text>
               <Text className="text-neutral-400 tracking-wide" >
              Keanu Charles Reeves, whose first name means "cool breeze over the mountains" in Hawaiian, was born September 2, 1964 in Beirut, Lebanon. He is the son of Patric Reeves, a showgirl and costume designer, and Samuel Nowlin Reeves, a geologist. Keanu's father was born in Hawaii, of Native Hawaiian and Chinese ancestry while Keanu's mother is originally from Essex England. After his parents' marriage dissolved, Keanu moved with his mother and younger sister, Kim Reeves, to New York City, then Toronto. Stepfather #1 was Paul Aaron, a stage and film director - he and Patricia divorced within a year, after which she went on to marry (and divorce) rock promoter Robert Miller. Reeves never reconnected with his biological father. In high school, Reeves was lukewarm toward academics but took a keen interest in ice hockey (as team goalie, he earned the nickname "The Wall") and drama. He eventually dropped out of school to pursue an acting career.

              After a few stage gigs and a handful of made-for-TV movies, he scored a supporting role in the Rob Lowe hockey flick Youngblood (1986), which was filmed in Canada. Shortly after the production wrapped, Reeves packed his bags and headed for Hollywood. Reeves popped up on critics' radar with his performance in the dark adolescent drama, River's Edge (1986), and landed a supporting role in the Oscar-nominated Dangerous Liaisons (1988) with director Stephen Frears.

             His first popular success was the role of totally rad dude Ted "Theodore" Logan in Bill & Ted's Excellent Adventure (1989). The wacky time-travel movie became something of a cultural phenomenon, and audiences would forever confuse Reeves's real-life persona with that of his doofy on-screen counterpart. He then joined the casts of Ron Howard's comedy, Parenthood (1989) and Lawrence Kasdan's I Love You to Death (1990).

             Over the next few years, Reeves tried to shake the Ted stigma with a series of highbrow projects. He played a slumming rich boy opposite River Phoenix's narcoleptic male hustler in My Own Private Idaho (1991), an unlucky lawyer who stumbles into the vampire's lair in Bram Stoker's Dracula (1992), and Shakespearean party-pooper Don John in Much Ado About Nothing (1993).

            In 1994, the understated actor became a big-budget action star with the release of Speed (1994). Its success heralded an era of five years in which Reeves would alternate between small films, like Feeling Minnesota (1996) and The Last Time I Committed Suicide (1997), and big films like A Walk in the Clouds (1995) and The Devil's Advocate (1997). (There were a couple misfires, too: Johnny Mnemonic (1995) and Chain Reaction (1996).) After all this, Reeves did the unthinkable and passed on the Speed sequel, but he struck box-office gold again a few years later with the Wachowski siblings' cyberadventure, The Matrix (1999).

            Now a bonafide box-office star, Keanu would appear in a string of smaller films -- among them The Replacements (2000), The Watcher (2000), The Gift (2000), Sweet November (2001), and Hardball (2001) - before The Matrix Reloaded (2003) and The Matrix Revolutions (2003) were both released in 2003.

            Since the end of The Matrix trilogy, Keanu has divided his time between mainstream and indie fare, landing hits with Something's Gotta Give (2003), The Lake House (2006), and Street Kings (2008). He's kept Matrix fans satiated with films such as Constantine (2005), A Scanner Darkly (2006), and The Day the Earth Stood Still (2008). And he's waded back into art-house territory with Ellie Parker (2005), Thumbsucker (2005), The Private Lives of Pippa Lee (2009), and Henry's Crime (2010).

          Most recently, as post-production on the samurai epic 47 Ronin (2013) waged on, Keanu appeared in front of the camera in Side by Side (2012), a documentary on celluloid and digital filmmaking, which he also produced. He also directed another Asian-influenced project, Man of Tai Chi (2013).

          In 2014, Keanu played the title role in the action revenge film John Wick (2014), which became popular with critics and audiences alike. He reprised the role in John Wick: Chapter 2 (2017), taking the now-iconic character to a better opening weekend and even more enthusiastic reviews than the first go-around.
            </Text>
            </View>

             {/* movies */}
            <View>
               <MovieList title={"Movies"} hideSeeAll={true} data={personMovies}/>
            </View>
=======

      </View>
    </ScrollView>
     
  
  )
}

export default PersonScreen