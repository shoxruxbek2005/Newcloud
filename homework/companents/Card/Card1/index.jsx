import ImageContainer from "../../ImgContainer"
import Text from "../../Text"

import './style.scss'
function Card1(props) {
    return (
        <div className="card1">
            <div className="card1Img">
                <ImageContainer src={props.src} />
            </div>
            <div className="card1Text">
                <Text textType='h1' content={props.h1} />
                <Text textType='p' content={props.p} />
                <Text textType='a' content={props.a} />

            </div>
        </div>
    )
}
export default Card1