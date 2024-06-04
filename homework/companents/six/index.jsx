// import React, { useState } from 'react';
import Button from "../Button";
import Text from "../Text";
import Input from "../input";
// import Input from "../Input";
import "./style.scss"; // Assuming you have some styling for the Six component

function Six() {
    // const [inputValue, setInputValue] = useState('');

    // const handleInputChange = (e) => {
    //     setInputValue(e.target.value);
    // };

    return (
        <div className="six">
            <div className="sixText">
                <Text textType='h1' content='Напишите нам' />
                <Text textType='p' content='Остались вопросы или опасения? Просто заполните форму ниже, и наша служба поддержки свяжется с вами в течение 24 часов.' />
            </div>
            <div className="sixInput">
                <form action="">

                    <Input
                        type="text"
                        name="example"
                        placeholder="Имя"
                    /><Input
                        type="text"
                        name="example"

                        placeholder="Телефон"
                    />
                    <Button>
                        ОТПРАВИТЬ
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Six;
