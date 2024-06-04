// import React from 'react';
import ImageContainer from "../ImgContainer";
import Text from "../Text";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStoreIos, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import "./style.scss"

function Five() {
    return (
        <div className="five">
            <div className="fivetext">
                <Text textType='h1' content='Сосредоточьтесь на экономии денег' />
                <Text textType='p' content='Мы помогаем вам отслеживать ваши привычки в расходах, чтобы вы могли легко определить и сократить ненужные расходы. Просто присоединяйтесь сегодня, чтобы начать!' />
                <div className="icon-container">
                    <FontAwesomeIcon icon={faAppStoreIos} className="icon" />
                    <FontAwesomeIcon icon={faGooglePlay} className="icon" />
                </div>
            </div>
            <div className="fiveimg">
                <ImageContainer src='../../src/assets/Slider.png' />
            </div>
        </div>
    )
}

export default Five;
