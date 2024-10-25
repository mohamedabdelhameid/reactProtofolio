import imgg from '../images/contactt.jpg';
import './contact.css';
import { Navs } from "../home";
import CopyRight from "../copyRight";
import { Container } from 'react-bootstrap';



function TextControlsExample() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0eeea7b5-c3d9-4b15-bc38-19a9261723be");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    let inptname = document.getElementById("inpt1");
    let inptemail = document.getElementById('inpt2');
    let inptmessage = document.getElementById('inpt3');


    if (res.success) {
      console.log("Success", res);
      inptname.value = '';
      inptemail.value = '';
      inptmessage.value = '';
    }
  };



  return (
      <div className='div14Grid gridding'>
      <div className='onE align-content-center bblockk4'>
        <img src={imgg} width="100%"/>
      </div>
      {/* <div className='TWo'> */}
      <form onSubmit={onSubmit} className='TWo align-content-center bblockk5'>
        <h2>Keep in touch : </h2>
        <input type="text" name="name" id='inpt1' placeholder="YOUR Name" required className='rounded-5 p-3'/>
        <input type="text" name="From" value="From Portfolio with react" hidden/>
        <input type="email" name="email" id='inpt2' placeholder="YOUR EMAIL" required className='rounded-5 p-3'/>
        <textarea name="message" rows="5" id='inpt3' placeholder="YOUR MESSAGE" required className='rounded-5 p-3'></textarea>
        <button type="submit" className='btn btn-success'>
          Submit
          </button>
      </form>
      {/* </div> */}
      </div>
  );
}


function Contactt(){
  return(
    <>
      <Container>
      <Navs />
        <TextControlsExample />
      </Container>
      {/* <CopyRight /> */}
    </>
  )
}

export default Contactt;