import ImageContainer from "../ImgContainer";
import Text from "../Text";
import './style.scss'

function Second() {
    return (
        <div className="second">
            <div className="secondText">
                <Text textType='h1' content='Простое приложение для управления бюджетом' />
                <Text textType='p' content='Наше приложение создано, чтобы вы могли в реальном времени управлять своим бюджетом и расходами в режиме онлайн с любого устройства. Оно предоставляет подробные отчеты о доходах и расходах с графиками, чтобы вы сразу могли увидеть расходы и бюджет. Читайте ниже, чтобы узнать больше.' />
                <Text textType='a' content='Узнать подробнее' />
            </div>
            <div className="secondImg">
                <ImageContainer src ='../../src/assets/Video Section.png' />
            </div>
        </div>
    )
}
export default Second