import {useForm} from 'react-hook-form'
import { useContext } from 'react';
import { Appcontext } from '../contexts/Contextusers';
import '../cssspages/login.css'

function Forms () {

    const {onSubmit} = useContext(Appcontext)

    const { register, handleSubmit, formState: {errors} } = useForm();

return(
   <>
   <div className='logincontainer'>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label className='foemlogin'>LOGIN</label>
        <label className='formname'>Name</label>
        <input type='text' name='Name' className='nameinput'
        {...register("Name",{
            required: 'This is required',
            minLength: 4}
        )}/>
        <p> {errors.Age?.message} </p>

        <label>Password</label>
        <input type='password' name='Password' placeholder='password...'
        {...register("Password",{
            required: 'This is required',
            minLength: {
                value: 8,
                message: "password shld be atleast 8 characters"
            }}
        )}/>
        <span> {errors.Password?.message} </span>

        <button type='submit'>Login</button>
    </form>

   </div>
   
   </>
)
}

export default Forms;
