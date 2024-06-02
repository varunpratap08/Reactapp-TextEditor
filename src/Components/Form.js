import React,{useState} from 'react'

function Form() {
    let id,value;
    const handleChange=(e)=>{
     id=e.target.id;
     value=e.target.value;
     setUser({...user,[id]:value});
    }
    const[user,setUser]=useState({
        Name: "",Email:"",Address:"",Phone:""
    })
    const submitForm=(e)=>{
        e.preventDefault();
        
    }
  return (
    <div>
      <form className='form' onSubmit={submitForm}>
        <h2>Personal Details</h2>
        <div>
        <label htmlFor="Name"  className='Label'>Name:</label>
        <input type="text" id='Name' className='Input' onChange={handleChange} value={user.Name} autoComplete='off' required/>
        </div>
       <div>
        <label htmlFor="Email"  className='Label'>Email:</label>
        <input type="Email"  id="Email" className='Input' value={user.Email} onChange={handleChange} autoComplete='off' required/>
        </div>
        <div>
            <label htmlFor="Address" className='Label'>Address:</label>
            <input type="text"  id="Address" className='Input' value={user.Address} onChange={handleChange} autoComplete='off' required/>
        </div>
        <div>
            <label htmlFor="phone"  className='Label'>Phone:</label>
            <input type="tel"  id="phone" className='Input'  value={user.Phone} onChange={handleChange} autoComplete='off' required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
        </div>
        <button type='submit' className='sub-btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form
