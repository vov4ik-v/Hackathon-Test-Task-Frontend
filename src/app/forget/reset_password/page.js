'use client'
import Link from "next/link";
import {useEffect, useState} from "react";
import '../../register/auth.css'
import {login, resetPassword} from "@/util/api";
import {useRouter,useSearchParams} from "next/navigation";

export default function ResetPassword(){
    const router= useRouter()
    const [formData, setFormData] = useState({
        password: "",
        confirm_password:""

    });
    const reset_token = useSearchParams().get('token')
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (formData.password === formData.confirm_password){
            var body = {password:formData.password,token:reset_token}
            console.log(body.token)
            resetPassword(body).then(response=>{
                router.push("/login")
            })
        }
        else{
            //TODO: Implement error
        }
    };

    return(
        <div className='wrapper'>
            <div className='registration_container'>
                <div className='registration_table'>
                    <h2 className='main_text'>Вхід</h2>
                    <p className='under_main_text'>Забули пароль?</p>
                    <p className='text_about_forget'>Ваш новий пароль має відрізнятись від попереднього</p>
                    <form
                        onSubmit={handleSubmit}
                    >
                    <div className='inputs_container'>
                        <div className='inputs_table'>
                            <label className='label_under_login'>Вкажіть пароль</label>
                            <input
                                type='password'
                                name='password'
                                placeholder="Пароль"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <label className='label_under_login'>Повторіть його</label>
                            <input
                                type='password'
                                name='confirm_password'
                                placeholder="Повторіть пароль"
                                value={formData.confirm_password}
                                onChange={handleInputChange}
                                required
                            />


                        </div>
                    </div>
                    <div className='enter'>
                        {/*<Link href='/'>Повернутись на головну</Link>*/}
                        <button className='continue' type="submit">Підтвердити</button>

                    </div>
                    <p >Немає облікового запису? Тоді можете <Link style={{color:'blue'}} href='/register'>створити його</Link> </p>
                </form>
                </div>
            </div>
        </div>
    )
}