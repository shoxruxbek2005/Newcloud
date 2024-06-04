
import Button from '../Button';
import ImageContainer from '../ImgContainer';

import Navbar from '../Layout/Navbar';
import Text from '../Text'
import './style.scss'
// import img1 from '/Rectangle 3 (3)'

function First() {
    return (
        <div className='first'>
            <Navbar />
            <div className='first1'>

                <Text textType="h1" content="CloudBudget" />
                <Text textType="p" content="Управление бюджетом в для всех.Всего 69,95 € в месяц после 7-дневной пробной версии за 4,99 €" />
                <Button>
                    ПОПРОБОВАТЬ
                </Button>
            </div>
            <div className='backImg'>
                <ImageContainer src='../../src/assets/Rectangle 3 (3).png ' />

            </div>
            

        </div>

    )
}
export default First