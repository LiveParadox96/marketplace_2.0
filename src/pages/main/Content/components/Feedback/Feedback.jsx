import React, { useState } from "react"
import './Feedback.css'
import Preview from "./Preview/Preview";

function Feedback(){


    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [about,setAbout] = useState('');
    // const [radio,setRadio] = useState('');

// function changeValue(event){
//     setRadio(event.target.value)
// }

const onSubmit= (e) =>{
    e.preveventDefaut()
    let result ={}
    result.name = name;
    result.phone = phone;
    result.about = about;
    // result.radio = radio
    console.log(result)
}

return(
<div className="form_flex" onSubmit={(e) => e.preventDefault()}>
    <form action=""  id="form" className="form"  checked={true}>
        <div>
            <label>
                <input className="name_form"  
                name="name"  
                placeholder="Имя:" 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                pattern="^[А-Яа-яЁё\s]+$"></input>
            </label>
        </div>
        <div>
            <label>
                <input className="phone_form" 
                        name ="phone" 
                        type="tel"
                        value={phone} 
                        pattern="\+79[0-9]{9}|8[0-9]{10}"
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="+7(000)000-00-00"></input>
            </label>
        </div>
        <div>
            <label>
                <textarea className="qvest_form" 
                        type="text" 
                        name="qvest"
                        value={about} 
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="Расскажите о своей задаче, но это не обязательно. Мы к вам позвоним"></textarea>
            </label>
        </div>
        <div className="grid_radio">
                <label className="gender-form-label">Пол</label>
                            <div className="radio_input_man">
                                <input name="choice" type="radio" id="belonging" value="Man"/>
                                <label htmlFor="belonging" className="genus">Мужской</label>
                            </div>
                            <div className="radio_input_girl">
                                <input name="choice" type="radio" id="belonging" value="Woman"/>
                                <label htmlFor="belonging" className="genus">Женский</label>
                            </div>
        </div>
        <div className="square">
                <input type="checkbox"  name="interest"/>
                <label htmlFor="coding">Я согласен получать обновления на почту</label>
        </div>
        <Preview/>
        <div className="flex_button">
            <button className="but_form" type="submit" >Отправить</button>
        </div>
    </form>
</div>
    )
}

export default Feedback;