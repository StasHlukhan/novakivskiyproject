import React, {  useEffect, useState } from "react";
import './MapRoad.css'
import { AddAnim } from "../../animation/animationOnScroll";
import Mother from '../../img/Mother.png'
import Father from '../../img/Father.png'
import Pumpkins from '../../img/Pumpkins.png'
import Sticks from  '../../img/Sticks.png'
import Yan from '../../img/Yan.png'
import Leon from '../../img/Leon.png'
import Fair from '../../img/Fair.png'
import Maria from '../../img/Maria.png'
import Muse from '../../img/Muse.png'
import Hapiness from '../../img/Hapiness.png'
import Andrey from '../../img/Andrey.png'
import Plywood from '../../img/Plywood.png'
import Panel from '../../img/Panel.png'
import Heart_j from '../../img/heart_j.png'
import Lazarus from '../../img/Lazarus.png'
import Heart_s from '../../img/heart_s.png'
import Yarik from '../../img/Yarik.png'
import Sviatik from '../../img/Sviatik.png'
import Self from '../../img/Self.png'
import Kids from '../../img/Kids.png'
import Wife from '../../img/Wife.png'
import Lecture from '../../img/Lecture.png'
import Man from '../../img/Man.png'
import Oleksa from '../../img/Oleksa.png'
import Dora from '../../img/Dora.png'
import Virgin from  '../../img/Virgin.png'
import Girl from  '../../img/Girl.png'
import Secret from  '../../img/Secret.png'
import Holubovska from  '../../img/Holubovska.png'
import Female from  '../../img/Female.png'
import Metropolit from  '../../img/Metropolit.png'
import Exhibition from '../../img/Exhibition.png'
import Ukraine from '../../img/Ukraine.png'
import Book from '../../img/Book.png'
import Monograph from '../../img/Monograph.png'
import Pictures from '../../img/Pictures.png'
import Statuya from '../../img/Statuya.png'
import Sons from '../../img/Sons.png'
import Society from '../../img/Society.png'
import { useScrollAnim } from "../../hooks/useScrollAnim";
import { useNumber } from "../../hooks/useNumber";
import TimeLine from "../../components/TimeLine/TimeLine";


 

function MapRoad() {
  
  

 
 
  const [scrollAnim,scrolledState] = useScrollAnim();
  const [numberGrow,numberState] = useNumber()
  
  useEffect(() => {
    numberGrow()
  }, []);

  

  useEffect(() => {
    scrollAnim()
    
  }, []);


  
  useEffect(()=>{
    AddAnim()
  },[])

  return (
    <div>
      
      
      <TimeLine></TimeLine>
        <div  className="first_period">
          <div className="center">
            <div className={ scrolledState ? "my-class" : "line"}><span className='number' >{numberState}  </span></div>
            {/* <div className="my-class"><span className='number' >1872</span></div> */}
          </div>
          <div className="page">
            <div className="left_side">
              <p >Oleksa Novakivsky is strongly associated with Lviv. He lived in this city for 20 of his 63 years and is buried in Lychakiv Cemetery as a famous Lviv resident. However, he was born in eastern Podillia, in the village of Slobodo-Obodivka, Podillia province (now Vinnytsia region). There his father worked as a burglar for Count Feliks Sobanski. </p>
              <div className="mid_margin_top img">
                <img src={Mother} alt="" />
                <p className="caption">The artist's mother with her granddaughter,1890s</p>  
              </div>
              <p className="low_margin_top">After temporary unemployment (which forced Oleksa to drop out of school and go to work as a clerk), his father got a job as a forester in the village of Popeliukhy with the Brzozowski family. The family moved there. It was in the estates of the nobles that little Oleksa first got acquainted with art. Their houses were decorated with ancient engravings, paintings, and old prints. In these residences, "as if in opposition to the northern Russian school, Western European painting traditions were nurtured, which were coming there more and more vividly and at a faster pace," Volodymyr Sas-Zalozetsky described in his monograph.
              </p>
            </div>
            <div className="right_side">
              <div className="img">
                <img src={Father} alt="" />
                <p className="caption" >Portrait of his father, 1892.</p>
              </div>
              <p className="mid_margin_top">The family of Yevdokiya Dahdii Biletska and Kharlampii Novakivsky had six children: besides Oleksa, there were two brothers, Ivan and Andrii, and three sisters, Raisa, Teklia, and Mariia. From his mother and father, Oleksa learned from childhood to do every job with diligence and thoroughness, and even to keep repeating it for as long as he was satisfied.</p>
              <p className="low_margin_top">Oleksa's father wanted him, like his brothers, to follow Harlampia's profession. He said that in his opinion, the forest had never disappointed anyone. But Oleksa started to be interested in drawings at the age of 5. He used to redraw icons and paintings he came across. And at the age of eight, he started drawing what he saw in nature with pencil and charcoal.</p>
            </div>
          </div>

          <div className="page">
            <div className="left_side">
              <p className="low_margin_top">Oleksa Novakivsky's second school was nature itself. When he was 10 years old, he had a mystical incident on the way to the city. When he fell asleep during one of the stops, he had a dream. Ivan Holubovsky retells this story in his memoir, "A Spread of Mighty Wings". </p>
              <div>
                <p className="mid_margin_top">I bore my eyes into that face. I want to see the eyes of God! Eyes that I must paint, even if I have to die afterward. Dark stripes of eye features slowly begin to emerge from the magical shadows that play with the shimmering colors. As if they were closed in thought. I want to shout, I want to scream, to force them open, to open them. So that I could see them and remember those eyes that own the world and can shoot thunder. The eyes of God! </p>
                <p className="low_margin_top">But I can't find the strength to cry out. Despair, impotent anguish grips my childish heart. I exert all my strength, rush forward, fly headlong into something, and suddenly ... wake up from my dream." Then I realized that I was alone in the forest. But the fright was followed by the thought that I had just received my father's permission to study painting, so this opportunity cannot be lost. So he went through the woods and met his brothers, who laughed that Oleksa had cut a path through the forest.</p>
                <p className="low_margin_top">"When I reflected on this meeting with my brothers in later years, I could not help but make the subconscious observation that I would not have made it out of the jungle of that giant forest if it had not been for my belief that the permission of the painting education I had been fighting for since I was eight years old could not be unfulfilled."</p>
              </div>
            </div>
            <div className="right_side">
              <p className="mid_margin_top">"It was as if I was walking through an old forest among grasses and shady thickets on some important business. And as if an old bandura player approaches me. I had once seen him in an old blackened painting hanging in my teacher's apartment. The old man is blind with a strangely crooked smile and at the same time terrifyingly solemn. Tall as a giant, he bends down to work over me, takes my hand in his big, dry palm, and says in a voice that seems to have no sound." And the bandura player led little Oleksa through the alleys of giant roses to the giant tree. </p>
              <p className="low_margin_top">"Take a good look, just take a good look," the old man whispers. "At first I don't see anything. There is only a haze around. Then I slowly begin to recognize a shocked face. I stare at it and the cold grabs me again. I begin to recognize a seemingly powerful head and in it a face made of wheat grains. Between them, there is hair from different grains. And these grains seem to be whirling, moving like the gentle waves of a flowing river. </p>
              <p className="mid_margin_top">Oleksa Novakivsky relied on the purpose he had found since childhood and honed throughout his life: to manifest the nature of beauty in the everyday. That is why he went to the final work through dozens of working drawings and paintings. And only at the end of his life was he so satisfied with the style he had found that he said, "Now I am finally the master of my brush."</p>
            </div>
          </div>

          <div className="page">
            <div className="left_side">
              <p className="low_margin_top">Here is what Golubovsky writes about Oleksa's first training in A Spread of Mighty Wings. "He was a man of talent, but he had long been prim. He worked according to the patterns he had learned. Nevertheless, Oleksa Novakivsky learned a lot from him from a technical point of view. There he first began to master the technique of painting, and got acquainted with paints, their chemical composition, their proper use, and the peculiarities of drawing. The master already had three other students, older boys who had already worked for several years for the masters and were now painting on their own and taking a small fee for it. Oleksa was allowed by the master only occasionally and only for primitive tasks. Instead, Oleksa had to sweep the rooms, heat the stoves, do the housework, and go to town to buy things. For that, he got modest food. But in the evenings, when the master went to a restaurant, and in the mornings, when work in the workshop had not yet begun, Oleksa worked alone with charcoal and paint."</p>
              <div className="low_margin_top img">
                <img src={Sticks} alt="" />
                <p className="caption">Planing sticks</p>
              </div>
              <p className="low_margin_top">"Novakivsky did not like painting iconostases. He would rather go to the sea and paint landscapes with the colors that Klymenko scraped off his palette," Sas-Zalozetskyi recalled.When Oleksa realized that there was nothing more to learn from Klymenko, he left his studies and did not accept his teacher's offer to study to become a master.</p>
            </div>
            <div className="right_side">
              <div className="low_margin_top img">
                <img src={Pumpkins} alt="" />
                <p className="caption">Pumpkins. 1892 р. Oil on boardPrivate collection</p>
              </div>
              <p className="mid_margin_top">After two years of studying, Oleksa had to return home to Obodivka because the master received a serious order and disbanded the school. After his return, Oleksa created more than 20 paintings that were lost.When Oleksa was sixteen years old, a local forestry engineer, Henrik Pavlias, paid for him to study in Odesa. For four years, Novakivsky studied art in the studio of the artist Pylyp Klymenko and worked with him on an iconostasis in the village of Kubantsi. "He was also a bit formulaic in his compositions and thoughts, but he was much better than the first master in his painting technique. He also painted good portraits and successful landscapes, which earned him good money. He recognized Oleksa's considerable talent and initiative, agreed to pay him a salary and gave him some money to work on his own. Now Oleksa could buy himself various books, which he used to supplement his education on his own," Holubovsky wrote.</p>
            </div>
          </div>
        </div>

        <div className="title">
          <div className="main_title show_up element-animation"><h2>Krakow Academy of Fine Arts.</h2></div>
        </div>









        <div className="second_period">
          <div className="page">
            <div className="left_side1">
              <div className="extra_img">
                <img src={Leon} alt="" />
                <p className="caption">Leon Vychulkovsky</p>
              </div>
              <p className="mid_margin_top">Under Falat, the Krakow School of Drawing became an academy, one of the best art universities in Eastern Europe. Artists who fought against academic conservatism and defended creative positions, such as the aesthetics of Secession, Impressionism, and Symbolism, were invited there. During his studies at the academy and a four-year internship with Leon Vychulkovskyi, Novakivskyi created hundreds of impressionistic landscapes, conveying the impression of instant sensations and experiences through sketchy strokes and the effects of changing light. Novakivsky began to fill the landscapes with deep meaning and allegorical connotations.</p>
              <p className="extra_margin_top">Novakivsky is the most successful graduate of the Krakow Academy of Fine Arts in terms of the number of medals and awards. From the second year of his studies, he was recognized by the Academy, but for unknown reasons, he lost his scholarship from the Brzezowski. His friend Holubowsky in The Spread of Mighty Wings suggests that it was because he signed his paintings in Ukrainian. At that time, he had to sell his paintings and drawings to make a living. He is considered a student of Jan Matejko. Stanisław Wyspianski and Jacek Malczewski, as well as Josef Meghofer, the luminaries of Polish symbolism, had a special influence on the formation of his figurative thinking. </p>
            </div>
              <div className="right_side1">
                <p>An artist from Krakow who taught painting to the children of local nobility was impressed by Oleksa's talent. He persuaded the Brzozowski family to give him the scholarship to continue his studies at the Krakow Academy of Fine Arts.</p>
                <p className="low_margin_top">Upon entering the Academy, it turned out that he did not have a matura (basic education at the time), but his talent impressed the admission committee so much that the rectorate specially organized a separate general education exam to accept Oleksa as a student of the Academy.</p>
                <div className="img mid_margin_top">
                  <img src={Yan} alt="" />
                  <p className="caption">Yan Mateyko</p>
                </div>
                <p className="low_margin_top">He was one of the key figures in the transformation of contemporary art and the transition from realism to modernism. Between Impressionism and Post-Impressionism, Novakivsky developed his own style, which currently has no name. Its peculiarity is the pulsation of lines, which reflects the energy tension of the interwar period. This multilayered living contour is reminiscent of the works of Munch and Van Gogh.</p>
              </div>
          </div>

          <div className="page">
            <div className="left_side">
              <p className="mid_margin_top">In 1900, he completed his studies with a gold medal and a scholarship, and letters of recommendation to continue his studies abroad. But Novakivskyi did not take advantage of that scholarship, because he did not want to change his nationality, which was required for receiving the scholarship.</p>
              <p className="mid_margin_top">A new student center was established in Krakow, inheriting the traditions of the previous community and was called the Ukrainian Community in Krakow. The Krakow community members created a library, and organized numerous cultural and educational events, including lectures on current socio-political and Ukrainian studies topics, joint excursions, Ukrainian parties, and concerts. </p>
              <p className="mid_margin_top">In Krakow, Oleksa Novakivsky became friends with Bohdan Lepkyi, who was teaching Ukrainian language and literature at the Jagiellonian University. Lepkyi's apartment gathered the effective leaders of the Ukrainian community of the time and was the center of the Ukrainian community. Vasyl Stefanyk, Osyp Kurylas, Modest Sosenko, Ivan Trush, and Viacheslav Lypynsky came there. </p>
              <p className="low_margin_top margin_left ">Later, Novakivsky's home in Lviv would become a similar center of the Ukrainian cultural elite.</p>
            </div>
            <div className="right_side">
              <p className="high_margin_top">Members of the Ukrainian community in Krakow cooperated with the Prosvita Society, Ukrainian communities of Naddniprianshchyna, the Russian-Ukrainian Radical Party, and the Revolutionary Ukrainian Party. In 1930, the community numbered about 400 students.</p>
              <div className="img extra_margin_top">
                <img src={Fair} alt="" />
                <p className="caption">A fair in Ukraine. 1903</p>
              </div>
            </div>
          </div>

          <div className="title">
            <div className="main_title show_up element-animation"><h2>Novakivskyi's muse Creative life and new acquaintances</h2></div>
          </div>

          <div className="page">
            <div className="left_side1">
              <div className="img">
                <img src={Maria} alt="" />
                <p className="caption">Anna Maria Novakivska. Photo from 1919.</p>
              </div>
              <p className="mid_margin_top"> "Initially, she stood in that marriage under the overwhelming influence of Oleksa's strongly pronounced individuality. His God became at once his God, his faith became her faith, his aspirations became his passion, his homeland became her homeland... But soon she moves on. This exceptional woman was his wing and friend, his guardian and his true support," Ivan Holubovsky writes in The Span of Mighty Wings.</p>
              <p> Her family was poor Hural (Polish Hutsuls). And in honor of his wife's origins, Oleksa Novakivsky asked her to wear Hural clothes, which added to her authenticity. Authenticity.</p>
              <p className="extra_margin_top margin_left">"My dear and very dear Nusenko! It is a wonderful moonlit night. And I am with You in my thoughts and soul. My dear, how beautiful it is here! And I miss You to the point of complete happiness. How happy I will be if You stay here in Shlyakhtyntsi, for without You I will be very much covered... Come now, when the moonlit nights are so beautiful. I want to look into your blue eyes. Your blue eyes are my eternal joy." (letter from 1924).</p>
            </div>
            <div className="right_side1">
              <p>Oleksa Novakivsky moved to the village of Mohyla in the suburbs of Krakow (like Bryukhovychi near Lviv or Bucha near Kyiv). There he rented a room from Rosalia Palmowska, a widow who lived in the house with her daughter Anna Maria.There he found his first admirer. A doctor from Krakow, Hohulski, visited a patient near that house when Oleksa was seriously ill. In addition to medical care and treatment, Novakivsky also received financial support from the couple Yosyp and Leontyna, who from then on bought his paintings and hosted him in their home. In their home, Oleksa met Bohdan Lepkyi and his future friend Ivan Holubovsky, who was Leontyna's brother.</p>
              <p className="extra_margin_top margin_left">Rosalie Palmovska’s daughter was interested in Oleksa's work and spent hours watching him work. When Mrs. Palmovska died, the artist began to take care of the orphan. Gradually, their communication grew into tender love. "You are my only sunny love," Novakivskyi would say to Anna Maria. </p>
              <div className="img mid_margin_top">
                <img src={Muse} alt="" />
                <p className="caption">My muse. 1910. Oil on canvas</p>
              </div>
            </div>
          </div>

          <div className="page">
            <div className="left_side1">
              <p className="mid_margin_top"> Ivan Holubovskyi invited Novakivsky to visit him. Oleksa spent several months at his family estate in the village of Broshniv in the Boikivshchyna region. There, the young artist met Metropolitan Andrey Sheptytskyi, who was staying nearby at the summer residence of the Galician metropolitans, the Cedar Chamber, in the Pidliute tract.</p>
              <p className="mid_margin_top">Later, their acquaintance grew into an offer to Oleksa to move to Lviv and then grew into friendship and partnership in the implementation of numerous artistic and educational projects, including the Art School (which was to become the Academy in the future) and the Ukrainian Secret University. </p>
              <p className="mid_margin_top">Sheptytsky's exceptional personality prompted the artist to portray the Metropolitan many times: there are 18 paintings and more than 200 sketches and drawings. Novakivsky considered the Metropolitan's portrait not only a great creative challenge but also a matter of historical importance. This logically resonated with the philosophy of historical portraits of one of his teachers, Jan Matejko.</p>
              <p className="extra_margin_top">He not only showed the spiritual greatness of the bishop, but also depicted the brightest and most characteristic features of the Ukrainian cultural, historical, and spiritual environment. "The Metropolitan in Monastic Robes," "Moses," "A Heavy Sleep," "In the Metropolitan's Chair," and "The Prince of the Church." Many works depicting Sheptytsky were destroyed by the Soviet authorities during the so-called "inventory of funds."</p>
            </div>
            <div className="right_side1">
              <p className="mid_margin_top">When they met, Oleksa was already a graduate of the Krakow Academy of Arts with a bunch of honors and gold medals. And Vladyka saw in that personality not only the talent of an artist but also a teacher and a thinker.</p>
              <p>They were partners and maybe even friends in a sense. Sheptytsky gladly bought Novakivsky's paintings, hosted the artist and his School at his Carpathian residence, and paid for his students' continued education in Europe. And when his great-grandfather passed away, he took in his orphaned children Yaroslav and Zhdan. By the way, some of the best photos of Oleksa Novakivsky were taken by Andrey Sheptytsky's personal photographer Yaroslav Koval.</p>
              <div className="img mid_margin_top">
                <img src={Hapiness} alt="" />
                <p className="caption">Mother's happiness. 1910 р.Not returned from the exhibition in Moscow and Kharkiv</p>
              </div>
            </div>
          </div>

          <div className="page">
            <div className="left_side0">
              <p className="mid_margin_top">Oleksa Novakivsky's first solo exhibition took place in Krakow, where the artist presented more than 100 works that brought him recognition and popularity. Metropolitan Andrei Sheptytsky became interested in the paintings and offered the artist to move to Lviv to create the future Academy of Arts, for which he could not find a suitable candidate to lead it.</p>
              <div className="img extra_margin_top">
                <img src={Andrey} alt="" />
                <p className="caption">Metropolitan Andrey Sheptytsky</p>
              </div>
            </div>
            <div className="right_side0">
              <div className="img extra_big_margin_top">
                <img src={Plywood} alt="" />
                <p className="caption">1910 р. Plywood, oil. Private collection</p>
              </div>
            </div>
          </div>

          <div className="page1">
            <div className="left_side2">
              <p>The collections of the newly created National Museum in Lviv included 143 drawings from three "Albums from St. Lazarus Hospital" presented to Andrey Sheptytsky as a token of gratitude for the Metropolitan's support. Founded in 1905 by Greek Catholic Metropolitan Andrey Sheptytsky as a private foundation, in 1913 it was solemnly donated to the Ukrainian people. </p>
              <div className="img low_margin_top">
                <img src={Panel} alt="" />
                <p className="caption">Art. Panel for the musical societynamed after M. Lysenko in Lviv. 1913-1914</p>
              </div>
              <div className="img extra_big_margin_top">
                <img src={Heart_j} alt="" />
                <p className="caption">A sketch of the composition "Heart of Jesus" for a stained-glass window project. 1913 р.Paper and ink. Collection of the Andrey Sheptytsky National Museum of Art</p>
              </div>
            </div>
            <div className="right_side2">
              <div className="img ">
                <img src={Lazarus} alt="" />
                <p className="caption">"At St. Lazarus Hospital (Unrest). 1913"</p>
              </div>
              <div className="img low_margin_top">
                <img src={Heart_s} alt="" />
                <p className="caption">A sketch of the composition "Heart of a Sousa" for a stained-glass window project. 1913 р.Album of drawings from St. Lazarus HospitalPaper, pencil Collection of the Andrey Sheptytsky NML</p>
              </div>
              <p className="extra_big_margin_top">Subsequently, many paintings were transferred to the museum as payment for the apartment next to the studio.</p>
            </div>
          </div>

          <div className="page">
            <div className="left_side ">
              <div className="img extra_hide_margin_top">
                <img src={Yarik} alt="" />
                <p className="caption">"Yaroslav Osmomysl - Warrior"</p>
              </div>
              <p>The impetus for the creation was the proposal of the head of the USS Press Apartment, writer Osyp Nazaruk, to illustrate his novel Prince Yaroslav Osmomysl. Novakivskyi was also approached by the Kyiv publishing company Vernyhora and offered to create portraits for textbooks on the history of Ukraine. </p>
              <div className="img extra_margin_top">
                <img src={Sviatik} alt="" />
                <p className="caption">"Sviatoslav the Conqueror</p>
              </div>
            </div>
            <div className="right_side ">
              <p>Novakivsky's move to Lviv coincided with tumultuous events - the outbreak of national liberation struggles on both sides of the Austrian-Russian border. Oleksa turned to historical themes and began a series of images of the princes of Russia. The images acquired a patriotic sound and awakened the fighting spirit.</p>
              <div className="img extra_big_margin_top">
                <img src={Self} alt="" />
                <p className="caption">Self-portrait. 1913р. Cardboard, oil</p>
              </div>
              <p className="mid_margin_top">Novakivskyi created monumental drawing portraits of princes: "Yaroslav the Wise" (1917), "Sviatoslav the Conqueror" (1918), and "Yaroslav Osmomysl - Warrior" (1919).</p>
            </div>
          </div>

          <div className="page">
            <div className="left_side">
              <div className="img">
                <img src={Kids} alt="" />
              </div>
              <p className="half_mid_margin_top">Anna Maria Palmovska and Oleksa Nowakiwsky got married after moving to Lviv. They were married by Metropolitan Andrei Sheptytsky himself. The Novakivskis had two sons, Yaroslav and Zhdan-Oleksa.</p>
              <p className="half_mid_margin_top"> Oleksa, as a very sensitive and emotional person, had his own story about eros and the mystical power of women. But instead of a dark essence, he saw the birth of wings in a woman in the whirlwind of passion, which she uses to elevate a man. Anna Maria posed for him for the Awakening series of paintings. The artist worked on the idea for many years (in the 1910s and 1920s), and left a number of oil versions and preparatory graphic sketches.</p>
              <p className="half_mid_margin_top">In the composition, the artist depicted a female figure waking up from a dream and stretching, "spreading her wings." Behind her is a certain symbolic background that has been transformed over time. As well as the central figure. In the Awakening series, she gradually changes from a little girl to a teenager and then to a young woman who is gaining both physical and spiritual maturity. This theme symbolizes the national revival of Ukraine.</p>
            </div>
            <div className="right_side">
              <p>"The woman was the ruler of that era," French researchers of the turn-of-the-century symbolism movement in art say. A woman became a virgin in Secessionist works. In the time of existential reversal and the experience of the threat, and then the war itself, artists, in the face of death, sought the possibility of prolonging life in the irrational power of eros and in the life-giving feminine. Women's images not only occupy a dominant place in art at the turn of the century but also become the personification of mystical power and the owners of magic.</p>
              <div className="img mid_margin_top">
                <img src={Wife} alt="" />
                <p className="caption">Portrait of the wife</p>
              </div>
              <p className="half_mid_margin_top">The symbol of the wings represents the yin of energy and the power of the roots as the yang of energy. And the secret of this unexpected narrative lies in his happy love in marriage, which was not so common at the time. Not everyone could afford to marry at the call of the heart.</p>
            </div>
          </div>

        </div>

        <div className="title">
          <div className="main_title show_up element-animation"><h2> <span>Opening of an art school.</span> <span>Secret University.</span>  <span>Exhibitions</span> </h2></div>
        </div>
        <div className="third_period">
          <div className="page1">
            <div className="left_side2">
              <p>In 1923, Oleksa Novakivsky founded an art school in Lviv. But this is not the school that you will find in Lviv today under the name of Novakivsky. Artist never taught children. Except for his own. </p>
              <p className="high_margin_top">Among the students of the School are artists known in Ukraine and abroad, such as Roman Selskyi, Hryhorii Smolskyi, Edward Kozak, Sviatoslav Hordynskyi, Myron Levytskyi, and Mykhailo Moroz. In total, more than 100 students from all over Ukraine-from Galicia, Bukovyna, Hutsul, and even Volyn and Naddniprianshchyna-studied at the Novakivskyi School for free. These were talented adults from Ukrainian families who realized that without education they had no foundation for building a new state. In fact, they were inventing it as typical leaders of change, using what they had themselves.  </p>
              <p className="high_margin_top">"In the folk art of Ukraine, we have the influence of Persia and India," said Oleksa Kharlampiyovych. "It also resonates with Egypt. It is rich in color and form. So, ethnography in art is very necessary, but not excessively so. A poet who is only interested in ethnography would not produce a poem unless he or she had an ethnographic study."</p>
              <p className="mid_margin_top">The students united in groups of artists, giving birth to the Ukrainian page in the European history of postmodernism. There were three such groups in Lviv at the time: Artes (1929-1935), the Lviv Professional Union of Plastic Artists (1932-1939), and the Ukrainian Society of Art Supporters (1930-1939), which often acted as promoters of their members' works. </p>
            </div>
            <div className="right_side2">
              <div className="img">
                <img src={Lecture} alt="" />
                <div className="caption">A drawing lecture at the Oleksa Novakivskyi Art School. From left to right: O. Pleshkan, S. Hordynskyi, Zhdan and Yaroslav (sons of O. Novakivskyi), O. Novakivskyi, M. Moroz, H. Smolskyi. Photo from 1927.</div>
              </div>
              <p className="half_mid_margin_top">The Ukrainian elite of the time studied at his school. After all, according to the original plan of Andrey Sheptytsky, who invited Oleksa Novakivsky to create this educational space, it was to become the Academy of Arts in Western Ukraine in the future, reinforcing the important policy of developing the education of Ukrainians and strengthening the cultural space, the transformation of which was in its active phase, giving rise to numerous new trends and movements. The studio of the artist and teacher itself became a well-known cultural center in Western Ukraine, echoing the Krakow home of Lepky, which he attended as a student. </p>
              <div className="extra_img">
                <img className="mid_margin_top" src={Man} alt="" />
                </div>
        
            </div>
          </div>
          <div className="page1">
            <div className="left_side2">
              <div className="img">
                <img src={Oleksa} alt="" />
                <p className="caption">Oleksa Novakivskyi. Portrait of Ivan Holubovsky</p>
              </div>
              <p className="half_mid_margin_top">The Krakow Academy of Arts, where Oleksa Novakivsky studied, was one of the trendy European schools at the time. So, when Oleksa moved to the culturally more provincial Lviv in 1913, he brought with him some newfangled chips. Among them was going to the plein air. </p>
              <div className="img low_margin_top">
                <img src={Dora} alt="" />
                <p className="caption">Oleksa Novakivskyi in the open air in Dora</p>
              </div>
              <p className="low_margin_top">"We lived in a rented Hutsul hut, slept on benches, and at dawn, we would take off for trips to the mountains, always with cassettes, paints, and cardboard, and we would paint beautiful motifs with zeal. When they returned, they would place their sketches under the wall of the house, and Novakivsky would give us his comments," recalled a student of the school, Sviatoslav Hordynsky.</p>
              <p className="low_margin_top margin_left">"And it is a characteristic thing that among the hundreds of those works about the same subject, there are no two that are similar to each other in a nutshell. Each of those works is accompanied by different music in form, color, light, and expression, so it is understandable why the students lovingly called the artist "the magician of St. George," Ivan Holubovsky recalled.</p>
            </div>
            <div className="right_side2">
              <p>The school united the Ukrainian elite of the region and implemented the principle of co-financing, which was mainly due to charitable donations. The educational process at the O. Novakivsky Art School was modeled after the Krakow Academy. Artists and intellectuals known in Galicia and beyond were involved in teaching. Metropolitan Andrey Sheptytsky personally taught a separate course on the history of world art to the school's students.</p>
              <div className="img half_mid_margin_top">
                <img src={Virgin} alt="" />
                <p className="caption">The Virgin in silver robes. 1923 р.Board, oil. Private collection.</p>
              </div>
              <p className="half_mid_margin_top">His frequent trips to the Carpathians with the School and exhibitions of the works he created there were a common practice that introduced a new fashion. Both for painting landscapes "from life" and for receiving artists by wealthy Ukrainians who had their residences and estates (dachas) in the mountains. Every year, during the summer vacations, the students went to Kosmach for plein airs. The Hutsul region, its mythology, folk characters, rich rituals, and picturesque life of the Carpathian region were firmly embedded in the work of Oleksa Novakivsky and his students.</p>
            </div>
          </div>

          <div className="page">
            <div className="left_side">
              <div className="img">
                <img src={Secret} alt="" />
                <p className="caption">Secret Ukrainian University</p>
              </div>
              <p className="mid_margin_top">Thus, in 1924 alone, the American diaspora donated $2,800. In May 1925, ten paintings by famous artists O. Novakivskyi, P. Kholodnyi, and P. Kovzhun were secretly raffled off in the "Lottery" of the Curatorium of Ukrainian High Schools to raise funds. </p>
              <p className="high_margin_top">One of his most successful solo exhibitions was held at the National Gallery of Art Zachęta in Warsaw. An exhibition of his works was also being prepared in Vienna, which was negotiated by the famous art critic Zalozetsky. </p>
            </div>
            <div className="right_side">
              <p>He became one of the secret professors. He headed the Faculty of Art of the Secret Ukrainian University. In its first year of existence, the university had three departments (faculties): philosophy, law, and medicine, and later a technical department was formed. In its first year alone, more than 1400 people studied there, 60 of them women. The university functioned on donations from students and their families, as well as on funds raised in the region and abroad.</p>
              <div className="img low_margin_top">
                <img src={Girl} alt="" />
                <p className="caption">Girl with a Flower (Revolutionary). 1924 р.Oil on cardboard on canvas. Private collection</p>
              </div>
              <p className="mid_margin_top">By the way, the most important event that was to familiarize the European community with Novakivsky's work was to be a monograph in Ukrainian, German, and English, which was being prepared for publication by the Ukrainian Word publishing house in Berlin.</p>
            </div>
          </div>

          <div className="page">
            <div className="left_side1">
                <div className="img extra_hide_margin_top">
                <img src={Female} alt="" />
                <p className="caption">Portrait of a female artist at the piano / Music.1929 Plywood and oil on canvas.</p>
              </div>
              <div className="img extra_big_margin_top">
                <img src={Holubovska} alt="" />
                <p className="caption">Portrait of H. Holubovska (the so-called Spring).1929 Cardboard, opium.</p>
              </div>
            </div>
            <div className="right_side1 ">
              <div className="img mid_margin_top ">
                <img src={Metropolit} alt="" />
                <p className="caption">Metropolitan in monastic clothes.1930-1931. Plywood, oil.</p>
              </div>
              <p className="high_margin_top">It was organized in early 1920 by Colonel Hnat Zelenevsky, an aide to Hetman Pavlo Skoropadsky who lived in Berlin in exile.It was thanks to a similar multilingual monograph on Oleksandr Arkhypenko that the world began to admire the works of the Ukrainian sculptor and painter.  However, due to the liquidation of the publishing house, this project was never realized.</p>
            </div>
          </div>

          <div className="extra_page">
            <div className="left_side high_margin_top">
              <p>"Visiting the studio of the Ukrainian painter Oleksa Novakivsky is an unforgettable experience. He is like a patriarch, with bright piercing eyes and a friendly angelic smile. He is adored by young people, especially young artists, who experience the hospitality of his home.</p>
              <p className="low_margin_top">To a stranger, he explains his work in eloquent, verbose Ukrainian, combined with expressive hand gestures. It is not that his paintings are not interesting in themselves, without explanatory comments; on the contrary, they would be highly valued in the best contemporary exhibition halls in Paris or Berlin, where they would attract attention with their feverish intensity of color, the strength of line, and a certain Byzantine strangeness.</p>
            </div>
            <div className="right_side">
              <p className="half_mid_margin_top">Novakivsky's work became an object of interest for critics and art lovers during his lifetime, and his name was constantly on the pages of Lviv periodicals: Ukrainian, Polish, and Jewish. International publications also wrote about him, but due to the lack of research, there are few surviving archival references. Here is one of them from the correspondent of the British newspaper Frederick Augustus Foyt. "The work of A Ukrainian artist" (The Manchester Guardian. - 1932. - Jan. 15)</p>
              <div className="img mid_margin_top">
                <img src={Exhibition} alt="" />
                <p className="half_mid_margin_top" >At the exhibition of the Ukrainian Society of Art Supporters at the National Art School Museum in Lviv. From left to right: Hryhoriy Smolsky, Antin Rak, Nadiya Makukh, Zenon Pelensky, Frederick August Foyt, Olha Nytkevych, Lidia Turkevych, Volodymyr Kovalchuk, Oleksa Novakivsky, Antin Malyuta, Stepan Lutsyk</p>
              </div>
            </div>
          </div>

          <div className="page">
            <div className="left_side0">
              <p>The school was represented by the works of its students in the Ukrainian pavilion at the Century of Progress World's Fair, which was held to mark the centennial of one of the largest American cities, Chicago. In Lviv, a helping committee was set up to collect exhibits for a separate Ukrainian pavilion: the National Museum, the Kosiv Hutsulshchyna Cooperative, the National Science and Technology Museum, the Boykivshchyna Museum in Sambir, and others joined the cooperation. </p>
              <div className="img high_margin_top">
                <img src={Ukraine} alt="" />
                <p className="caption">Ukrainians at the 1933-1934 World's Fair in Chicago</p>
              </div>
            </div>
            <div className="right_side0">
              <p className="high_margin_top">О. Novakivsky submitted 19 of his own works to the exhibition, and several of his students decided to participate as well. However, after watching one of the film adaptations of the tragic story of the Titanic liner that sank in the waters of the Atlantic Ocean in April 1912 (perhaps it was the 1929 film The Atlantic by Ewald André Dupont or Frank Lloyd's war drama "Cavalcade" (1933)), the Maestro refused to participate in the Chicago exhibition because of the danger of transporting paintings by ocean (Voloshyn L. Olga Pleshkan. - Lviv, 2010. - P.136 - 137). As for Novakivskyi's pupils, their works were shown to the audience in the United States.</p>
            </div>
          </div>
          
          <div className="extra_page">
            <div className="left_side0">
              <div className="img">
                <img src={Book} alt="" />
              </div>
              <p className="mid_margin_top">In 2021, the Andrey Sheptytsky National Museum in Lviv prepared an expanded and scientifically researched reprint of the monograph for publication, but the book was never published. The book was supplemented with reprints of reviews of the aforementioned work by Volodymyr Zalozetskyi, as well as his articles about the artist's work.</p>
              <p className="low_margin_top">These materials contain notes that inform about the persons, institutions, organizations, and place names mentioned in the text, explain outdated vocabulary, and provide translations of foreign language words. </p>
            </div>
            <div className="right_side0">
              <p className="extra_margin_top">The monograph "Oleksa Novakivsky" by the famous art critic and researcher Zalozetskyi is published. The monographs include 383 oil paintings and 20 graphic compositions.</p>
              <div className="img extra_margin_top">
                <img src={Monograph} alt="" />
                <p className="caption">О. Novakivsky. My Muse. Illustration from the monograph by V. Zalozetskyi.</p>
              </div>
              <p className="low_margin_top">The monograph is illustrated with photographs and reproductions of paintings and graphic works by Oleksa Novakivskyi. The author of the introductory article and the compiler of the publication is Iryna Rizun, the head of the Oleksa Novakivskyi Art and Memorial Museum.</p>
            </div>
          </div>

        </div>

        <div className="title">
          
          <div   className="main_title show_up element-animation extra_tit_hide_margin_top"><h2 > <span> The last work.</span> <span> The last days of life</span> <span>and the afterlife</span> </h2></div>
        </div>

        <div className="fourth_period">
          <div className="page1">
            <div className="left_side2">
              <p className="mid_margin_top">The crown of Novakivsky’s work was to be his last work, the icon "Mother of Mercy" ("Sviatoyurska Madonna"). The master painted it for the central altar wall of St. George's Cathedral. However, he did not finish it. The charcoal composition on canvas measuring 330×197 cm is a graphic sketch for the altar image of the Virgin Mary, which was to decorate the sanctuary of St. George's Cathedral.</p>
              <div className="img mid_margin_top">
                <img src={Pictures} alt="" />
              </div>
              <p className="half_mid_margin_top">This image is a kind of summary of the artist's creative work on the theme of the Virgin. While working on the icon, Novakivsky created about twenty oil sketches and almost a hundred drawings in pen, pencil, and charcoal. The creative idea evolved from the typical Eastern Christian interpretation of the Virgin Mary to the author's own, completely original interpretation based on a combination of ancient Ukrainian and Western European traditions.</p>
              <p className="mid_margin_top">For more than forty years, the image was hidden in the vaults of the museum's collections in the former Armenian Cathedral. For the first time, the "Sviatoyurska Madonna" was exhibited at the posthumous exhibition of Novakivskyi's works held in 1936 at the Museum of the Shevchenko Scientific Society.  For the second time, thanks to the efforts of the artist's grandson Andriy Novakivskyi, Lviv residents and guests were able to see the last work of the outstanding artist in September 1992 at the jubilee exhibition dedicated to the 120th anniversary of Novakivsky's birth.</p>
            </div>
            <div className="right_side2">
              <div className="img">
                <img src={Statuya} alt="" />
              </div>
              <p className="half_mid_margin_top">Negotiations between the community of St. George's Church and O. Novakivsky began in early 1934. The maestro refused the offer to create wall paintings in the church but gladly agreed to take on the image of the Virgin Mary, Mother of Mercy.  In May 1934, a formal agreement was signed between the two parties:  Novakivsky undertook to paint a monumental icon of the Virgin Mary on wood within three years, before creating a preparatory graphic sketch "to be presented to His Eminence, the Metropolitan."  The community of Sviatoyursk, in turn, undertook to pay for the artist's work, the total amount of services amounted to 18 thousand zlotys. </p>
              <div className="img low_margin_top">
                <img src={Sons} alt="" />
                <p className="caption">0. Novakivskyi with his sons, students and supporters of the Art School during the celebration of his name day on Teple Oleksa Street.Photo 1935</p>
              </div>
            </div>
          </div>
          <div className="page3">
            <div className="left_side3">
              <p>Due to exhaustion, in early August 1935, the artist quit his job and went on vacation to the village of Dora (now Ivano-Frankivsk region), where his condition deteriorated sharply in two weeks.  Novakivsky was transported to Lviv and admitted to the hospital, where, after an unsuccessful operation, he died on the night of August 28-29, 1935.</p>
              <div className="img">
                <img src={Society} alt="" />
                <p className="caption">Posthumous personal exhibition of Oleksa Novakivsky at the Museum of the Shevchenko Scientific Society in Lviv</p>
              </div>
              <p className="extra_margin_top">During the inventory, by order of the Minister of Culture of the Ukrainian SSR, more than 2,000 works were removed from the funds of the Ukrainian Museum and destroyed, including 16 oil paintings and 61 graphic works by Oleksa Novakivskyi. In May 1952, lists for withdrawal were drawn up, which included 2,115 museum objects. </p>
              <p className="high_margin_top">On the initiative of Oleksa Novakivskyi's son Yaroslav and grandson Andrii, the artist's memorial museum was opened in the workshop opposite the Yura Cathedral. The museum could never have appeared if it were not for the celebration of the 100th anniversary of the birth of the Maestro by UNESCO, according to which the city had to report on the held solemn events.Currently, it is one of the four memorial museums that are part of the Andrei Sheptytskyi National Museum.</p>
              <p className="extra_margin_top">Mykola Mushinka offered to transfer several paintings to the newly created Oleksa Novakivsky Memorial Museum in exchange for printing an article about the recovered paintings, but was refused. Only when the artist's grandson Andriy Novakivsky headed the Lviv Museum of Ukrainian Art (through his efforts in 1991, the name "National" was returned to the museum), during a visit to Lviv in 1987, cooperation between the museum and the collector began. It logically complemented Andriy Novakivsky's large-scale plan for the international development of the museum and the development of his international contacts with world museums and collectors of Ukrainian art.</p>
              <p className="mid_margin_top">Hieromonk Sevastiyan found from private individuals one of the original sketches on cardboard with the image of the plot "Moses", belonging to the hand of Oleksa Novakivsky. The following year, the presentation of the newfound work "Moses" was organized to celebrate the 130th anniversary of the artist. It is believed that this is one of the versions of the work, because the tradition of Novakivsky was that the final picture could be preceded by dozens of drawings and paintings. It is known that the master worked on the symbolic plot of "Moses" from 1915 to 1919.</p>
              <p className="mid_margin_top">Golubovsky was not just a friend of the artist. In fact, his role can be compared with the role of brother Theo in the life of Vincent Van Gogh. He himself bought Novakivsky's paintings (although this was also a matter due to Oleksa's unwillingness to take money for them), and also helped sell paintings (which was an even greater challenge for the master, who valued his works as his own children and very hard to part with them). While living in Lviv, Novakivskogo's fellow lawyer provided legal assistance to the art school headed by him: he settled financial transactions, represented in the courts. After the artist's death, Ivan Golubovsky, despite all the difficulties that fell to his lot, preserved for his descendants up to fifty works by Oleksa Novakivsky – a considerable component of the creative work of the Ukrainian artist, which has survived to this day.</p>
              <p className="mid_margin_top">Slovak collector and professor Mykola Mushynka presented to the National Museum in Lviv named after Andrey Sheptytsky 50 paintings and graphic works of the artist.</p>
            </div>

            <div className="right_side3">
              <p>In recent days, Ivan Golubovsky sat near Novakivsky. He comforted that there would soon be a second operation, which would definitely be successful. Golubovsky recounted that before his death, Novakivsky had a dream: "I had it at night... wife. That's the end, John! Tonight I recognized my wandering. I won't hold my brush with my hand anymore... I shout to her: I don't want to die. And she's on it: it's not death. No death! Nothing dies...".</p>
              <p className="mid_margin_top">An exhibition of fine arts from the Western regions of Ukraine and Hutsul folk art was held in Moscow and Kharkiv. It is known that 20 paintings by Oleksa Novakivsky did not return to Lviv.</p>
              <p className="extra_margin_top">Among the seized museum objects are canvases of prominent Ukrainian artists O. Novakivsky, M. Sosenko, F. Krasytsky, P. Kholodny, M. Boichuk, S. Gordynsky, O. Kulchytska, M. Hlushchenko, H. Narbut and others. At first they were planned to be taken to Kyiv, but I. Svientsitsky opposed the transfer of these exhibits. By order of the secretary of the Lviv Regional Committee of the Party, K. Lytvyn, cultural values were transported by two trucks in three flights to the Lviv Library of the Academy of Sciences of the Ukrainian SSR "for the destruction of nationalist anti-Soviet exhibits." Earlier, 4,500 historical books and 2 boxes of museum weapons were brought here. Witnesses of those events emphasized that the crematorium for art smoked over the city for several days.</p>
              <p className="high_margin_top">The famous Slovak collector Professor Mykola Mushinka, in search of the author of the previously discovered manuscript about Oleksa Novakivskyi, finds himself in the sealed apartment of the Golubovsky family in Prague. The apartment was sealed after the death of the daughter of the famous Ukrainian public figure and lawyer Ivan Golubovsky. There, Mushinka finds documents, photographs, and written materials, including Ivan Golubovsky's novel essay about his friend Oleksa Novakivskyi. And at the auction of works, he bought all the paintings by Novakivskyi that filled the walls of the Prague apartment. After all, he turned out to be the only buyer and the auctioneers were happy to sell the paintings as a group.</p>
              <p className="mid_margin_top">As a result, in 1990, an exhibition of Novakivsky's works from the Mushinka collection was organized in the Memorial Art Museum, and then at the State Museum of Fine Arts in Kyiv and the Transcarpathian Museum in Uzhgorod. The success of exhibitions in Ukraine aroused interest in the work of Oleksa Novakivsky among the art communities of the world, and the exhibition of Mushinka's paintings had its own honorary tour of the United States and was exhibited several times in the collector's native Slovakia.</p>
              <p className="mid_margin_top">On the occasion of the 130th anniversary of Oleksa Novakivsky and in memory of his grandson Andrei Novakivsky, Ivan Golubovsky's essay "The Span of Mighty Wings" is published. Since there is not a single edition dedicated to the epistolary heritage of Oleksa Novakivsky, at the moment it is the only work with reflections and quotes from the artist.Ivan Golubovsky was a lawyer and public figure, as well as a great friend of Oleksa Novakivsky. Their friendship lasted a long thirty years: from the moment they met in the Krakow apartment of Ivanovo Schwagra, Dr. Joseph (Józef) Hogulski until the last breath of Nowakowski, who actually died in the arms of his friend.</p>
              <p className="extra_margin_top">The Gordinski family presented the National Museum with a monumental graphic work "The Prince of the Church", which is a later version of the previously discovered "Moses".</p>
            </div>
          </div>
        </div>
        <div style={{height:1000}}></div>
    </div>
  )
}

export default MapRoad