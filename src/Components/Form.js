import React,{useState} from 'react'

function Form() {
    let name,value;
    const handleChange=(e)=>{
     name=e.target.name;
     value=e.target.value;
     setUser({...user,[name]:value});
    }
    const[user,setUser]=useState({
        Name: "",Email:"",Address:"",Password:""
    })
    const submitForm=(e)=>{
      console.warn(...user) 
      e.preventDefault();
        
    }
  return (
    <div>
      <form className='form' onSubmit={submitForm}>
        <h2>Personal Details</h2>
        <div>
        <label htmlFor="Name"  className='Label'>Name:</label>
        <input type="text" id='Name' className='Input' onChange={handleChange} value={user.Name} autoComplete='off' required name='Name'/>
        </div>
       <div>
        <label htmlFor="Email"  className='Label'>Email:</label>
        <input type="Email"  id="Email" className='Input' value={user.Email} onChange={handleChange} autoComplete='off' required name='Email'/>
        </div>
        <div>
            <label htmlFor="Address" className='Label'>Address:</label>
            <input type="text"  id="Address" className='Input' value={user.Address} onChange={handleChange} autoComplete='off' required name='Address'/>
        </div>
        <div>
            <label htmlFor="phone"  className='Label'>Password:</label>
            <input type="password"  id="phone" className='Input'  value={user.Password} onChange={handleChange} autoComplete='off' name='Password'/>
        </div>
        <button type='submit' className='sub-btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form
