import Button from '../../Button'
import './style.scss'




function Navbar() {
    return (
        <>

            <nav>
                <h1><i class="fa-solid fa-cloud"></i>
                    CloudBudget</h1>
                <ul>
                    <li><a href="#">ОБЗОР</a></li>
                    <li><a href="#">ОСОБЕННОСТИ</a></li>
                    <li><a href="#">ТЕХНОЛОГИЯ</a></li>
                    <li><a href="#">КОНТАКТЫ</a></li>
                    <li><a href="#">ВОЙТИ</a></li>
                </ul>
                <Button>
                    ВХОД
                </Button>
            </nav>
        </>
    )
}
export default Navbar