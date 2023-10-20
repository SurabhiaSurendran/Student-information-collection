import './App.css';
import { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    Name:'',
    DateofBirth:'',
    Class:'',
    Division:'',
    Gender:'',
  })

  const [formError,setFormError]=useState({})

 const onChangeHandler=(event) =>{
  console.log(event)
  setFormData(()=>({
    ...formData,
    [event.target.name]:event.target.value
  }))
 }
  const validateForm=()=>{
    let err={}

    if(formData.name===''){
      err.name='Name required!'
    }

    if(formData.date===''){
      err.date='date required!'
    }
    if(formData.class===''){
      err.class ='class required!'
    }
    if(formData.division===''){
      err.division ='division required!'
    }
    if(formData.gender===''){
      err.gender ='select gender'
    }
    setFormError({ ...err})
    return Object.keys(err).length<1;
  }
  const onSubmitHandler=(event)=>{
    event.preventDefault()
    console.log("Form Data:",formData)
    let isValid=validateForm()

    
    console.log(isValid)
  }
  return(
    <div  className="APP">
      <h1><center>Student Registration Form</center></h1>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input className="form-control"  onChange={onChangeHandler} name="name"/>
          <span className='non-valid'>{formError.name}</span>
        </div>
        <div className="form-group">
          <label htmlFor="date" className="form-label">Date of Birth</label>
          <div>
          <input type="date" id="date" name="date" />
          <span className='non-valid'>{formError.date}</span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="class" className="form-label">Class</label>
          <select className="form-select" name="class" onChange={onChangeHandler}>
            <option value="select"></option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
            <option value="IX">IX</option>
            <option value="X">X</option>
            <option value="XI">XI</option>
            <option value="XII">XII</option>
          </select>
          <span className='non-valid'>{formError.class}</span>
          
        </div>
        <div className="form-group">
          <label htmlFor="division" className="form-label">Division</label>
          <select className="form-select" name="division" onChange={onChangeHandler}>
            <option value="select"></option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="c">C</option>
          </select>
          <span className='non-valid'>{formError.division}</span>
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div>
            <div>
              <input type="radio" name="gender" value="male" onChange={onChangeHandler}/>
              <label htmlFor="Male">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={onChangeHandler}/>
              <label htmlFor="female">Female</label>
            </div>
            <span className='non-valid'>{formError.gender}</span>
          </div>
          <div className="form-group">
           <center> <button ClassName="btn" type="submit" >Submit</button></center>
          </div>


        </div>
      </form>
    </div>
  );
  }

export default App;
