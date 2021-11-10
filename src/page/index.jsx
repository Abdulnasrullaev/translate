import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { languages } from '../constant/actionType'
import Text from '../language/text'
import { Navbars } from '../navbar/style'
import { changeToEnglish, changeToRussian } from '../redux/modules/language/languageAction'
import { MainPages, Title, About, Country, Cards, } from './style'


function MainPage() {
    const dispatch = useDispatch()


    const changeLanguage = (e) => {
        if (e.target.value ==="russian") {
            dispatch(changeToRussian())
        } else if (e.target.value === "english") {
            dispatch(changeToEnglish())
        }

    }
const language = useSelector(state => state.language)
    return (
        <>
            <MainPages>
                <Navbars>
                    <img class="logo" src="https://moodle.com/wp-content/uploads/2020/08/MoodleLogo_TrademarkTM_PrimaryColour_RGB.svg" alt="Moodle" />
                    <select onChange={changeLanguage}>
                        <option value="russian">Russian</option>
                        <option value="english">English</option>
                    </select>
                    <div className='contactss'>
                        <div className='abd'><a href="#"><Text id='contact' /></a></div>
                        <div className='abd1'><a href="#"><Text id='shop' /></a></div>
                    </div>
                    <ul className='navs'>
                        <li><a href="#"><Text id='solution' /></a></li>
                        <li><a href="#"><Text id='products' /> </a></li>
                        <li><a href="#"><Text id='price' /> </a></li>
                        <li><a href="#"><Text id='service' /> </a></li>
                        <li><a href="#"><Text id='event' /> </a></li>
                        <li><a href="#"><Text id='community' /> </a></li>
                        <li><a href="#"><Text id='news' /> </a></li>
                        <li><a href="#"><Text id='about' /> </a></li>
                        <li>{language}</li>
                    </ul>
                </Navbars>
                <About>
                    <Title>
                      <Text id='title'/>
                    </Title>
                    <div className="hrr"></div>
                    <div className="about">
                        <p className="abouts"><Text id='about1'/>
                            <br /> <br />
                          <Text id='about2'/></p>
                    </div>
                    <img width="390" height="370" src="https://moodle.com/wp-content/uploads/2020/03/Donate-globe-2.jpg" class="global" alt="Moodle globe" loading="lazy" srcset="https://moodle.com/wp-content/uploads/2020/03/Donate-globe-2.jpg 300w, https://moodle.com/wp-content/uploads/2020/03/Donate-globe-2.jpg 158w, https://moodle.com/wp-content/uploads/2020/03/Donate-globe-2.jpg 81w, https://moodle.com/wp-content/uploads/2020/03/Donate-globe-2.jpg 390w" sizes="(max-width: 390px) 100vw, 390px" />
                    <button className='buttons'><Text id ='discover'/></button>
                    <Country>
                        <p className="title"><Text id='organisation'/> </p>
                        <div className='icons'>
                            <div className="cards"><img class="img-icon" alt="Users" src="https://moodle.com/wp-content/uploads/2020/03/Users.png"/> <p className="title">292,000,000+ <span>< Text id='user'/></span></p></div>
                            <div className="cards"><img class="img-icon" alt="courses" src="https://moodle.com/wp-content/uploads/2020/03/courses.png"/> <p className="title">38,000,000+ <br /><span>< Text id='courses'/></span></p></div>
                            <div className="cards"><img class="img-icon" alt="sites" src="https://moodle.com/wp-content/uploads/2020/03/sites.png"/> <p className="title">183,000+  <br /><span>< Text id='site'/></span></p></div>
                            <div className="cards"><img class="img-icon" alt="country" src="https://moodle.com/wp-content/uploads/2020/03/country.png"/> <p className="title">240+<br /><span>< Text id='countries'/></span></p></div>
                            
                        </div>
                    </Country>

                </About>
                <Cards>
    <div className="card">
        <p className="title"><Text id='build'/></p>
        <p className="about">< Text id="want"/> </p> 
        <button className='textt'><Text id='learn'/></button>
        </div>
        <div className="img"><img width="466" height="282" src="https://moodle.com/wp-content/uploads/2020/03/getstarted-3.png" class="vc_single_image-img attachment-large" alt="getstarted 3" loading="lazy" srcset="https://moodle.com/wp-content/uploads/2020/03/getstarted-3.png 300w, https://moodle.com/wp-content/uploads/2020/03/getstarted-3.png 248w, https://moodle.com/wp-content/uploads/2020/03/getstarted-3.png 81w, https://moodle.com/wp-content/uploads/2020/03/getstarted-3.png 466w" sizes="(max-width: 466px) 100vw, 466px"/></div>
</Cards>
            </MainPages>
        </>
    )
}

export default MainPage
