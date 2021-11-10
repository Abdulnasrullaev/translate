import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { languages } from '../constant/actionType'
import Text from '../language/text'
import { Navbars } from '../navbar/style'
import { changeToEnglish, changeToRussian } from '../redux/modules/language/languageAction'
import { MainPages, Title, About, Country, } from './style'


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
                        <li><a href="#"><Text id='pricing' /> </a></li>
                        <li><a href="#"><Text id='services' /> </a></li>
                        <li><a href="#"><Text id='events' /> </a></li>
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
                    </Country>
                </About>
            </MainPages>
        </>
    )
}

export default MainPage
