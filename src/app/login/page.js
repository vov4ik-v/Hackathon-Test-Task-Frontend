'use client'
import Link from "next/link";
import {useState} from "react";
import '../register/auth.css'
import {login} from "@/util/api";
import {useRouter} from "next/navigation";

export default function Login(){
    const router= useRouter()
    const [formData, setFormData] = useState({
        email: "",

        password: ""

    });
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();

        login(formData)
            .then(response => {
                    if(response.token){
                        localStorage.setItem('accessToken',response.token)
                        router.push('/')
                    }
                })


            .catch(error => {
                console.log(error)
            });
    };

    return(
        <div className='wrapper'>
            <div className='registration_container'>
                <div className='registration_table'>
                    <h2 className='main_text'>Вхід</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='inputs_container'>
                            <div className='inputs_table'>
                                <label>Ваш Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label>Ваш пароль</label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="Пароль"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                        </div>
                        <div className='enter'>
                            {/*<Link href='/'>Повернутись на головну</Link>*/}
                            <button className='continue' type="submit">Увійти</button>

                        </div>
                        <p >Немає облікового запису? Тоді можете <Link style={{color:'blue'}} href='/register'>створити його</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    )
}