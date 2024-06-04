import ImageContainer from "../../ImgContainer";
import Text from "../../Text";
import './style.scss'
function Card2(props) {
    return (
        <div className="card2">
            <div className="card2img"> 
                <ImageContainer src={props.src1} />
                <ImageContainer src={props.src2} />

            </div>
            <Text textType='h1' content={props.h1} />
            <Text textType='p' content={props.p} />
        </div>
    )
}
export default Card2