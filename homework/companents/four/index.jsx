import Card2 from "../Card/Card2";
import './style.scss'
function Four() {
    return (
        <div className="four">
            <h1>Технологии</h1>
            <div className="fourdiv" >
                <Card2 src1='../../src/assets/01 (2).png' src2='../../src/assets/Frame 3.png' h1='Облачное хранение' p='Доступ из любой точки мира с любого устройства' />
                <Card2 src1='../../src/assets/02 (1).png' src2='../../src/assets/Frame 4 (1).png' h1='Облачное хранение' p='Доступ из любой точки мира с любого устройства' />
                <Card2 src1='../../src/assets/03 (1).png' src2='../../src/assets/Frame 5 (2).png' h1='Облачное хранение' p='Доступ из любой точки мира с любого устройства' />
                <Card2 src1='../../src/assets/04 (1).png' src2='../../src/assets/Frame 6 (2).png' h1='Облачное хранение' p='Доступ из любой точки мира с любого устройства' />
            </div>
        </div>
    )
}
export default Four
