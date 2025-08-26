import React,{useState} from 'react'

const Form = () => {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[age,setAge]=useState('');
    const[usernameError,setUsernameError]=useState('');
    const[passwordError,setPasswordError]=useState('');
    const[ageError,setAgeError]=useState('');

const validateUsername=(value)=>{
        const regex=/^[a-z]{5}$/;
        if(!regex.test(value)){
            setUsernameError("5 letters only");
        }
        else{
            setUsernameError('');
        }
    };
    const validatePassword=(value)=>{
        const regex=/^(?=.*[A-Z])(?=.*\d).{8,}$/;
        if(!regex.test(value)){
            setPasswordError("Passkey must be 8 long,contain one uppercase and number");
        }
        else{
            setPasswordError('');
        }
    };
    const validateAge=(value)=>{
        const ageNum=parseInt(value,10);
        if(isNaN(ageNum) || ageNum<20 || age>40){
            setAgeError("Age must be between 20 and 40");
        }
        else{
            setAgeError('');
        }
        
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!usernameError && !passwordError && !ageError && username && password && age) {
            alert("Registration successful!");
            setUsername('');
            setPassword('');
            setAge('');
        } else {
            alert("Please correct the errors before submitting.");
        }
    };
  return (
    <div>
        <h2>form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name : </label>
                <input type="text"
                 value={username}
                onChange={(e)=>{
                    setUsername(e.target.value);
                    validateUsername(e.target.value);
                }}
                />
                 {usernameError && <p >{usernameError}</p>}
                
            </div>
            <div>
            <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            validatePassword(e.target.value);
                        }}
                    />
                     {passwordError && <p>{passwordError}</p>}
                
            </div>
            <div>
            <label>Age:</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => {
                            setAge(e.target.value);
                            validateAge(e.target.value);
                        }}
                    />
                    {ageError && <p>{ageError}</p>}
                
            </div>
            <button type="submit" disabled={!!(usernameError || passwordError || ageError)}>Submit</button>
           
        </form>
    </div>
  );
};

export default Form