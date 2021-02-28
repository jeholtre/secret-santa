
import emailjs from 'emailjs-com';
import './App.css';
import {useState} from "react";

function App() {
    const [emailListString, setEmailListString] = useState('');

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function convertCommaStringToArray(emailListString) {
        return emailListString.split(',');
    }

    function submit(emailString) {
        let taken = [];
        let giver;
        let receiver;
        let emails = convertCommaStringToArray(emailString);
        shuffleArray(emails);
        //lol this is kinda gross...
        for(let i = 0; i < emails.length; i++) {
            for (let j = 0; j < emails.length; j++) {
                if(emails[i] != emails[j] && !taken.includes(emails[j])) {
                    taken.push(emails[j]);
                    giver = emails[i];
                    receiver = emails[j];
                    sendEmail(giver, receiver);
                    break;
                }
            }
        }
    }
    function sendEmail(giver, receiver) {
        console.log("giver: " + giver + " receiver: " + receiver);
        //call api
        // emailjs.send('jeholtre', 'template_p6jbu0g', {
        //     giver: giver,
        //     receiver: receiver
        //         }, "user_0ouDOPAgHvV1VrbQJKOME")
        //             .then((result) => {
        //                 console.log("email response: " + result.text);
        //             }, (error) => {
        //                 console.log(error.text);
        //             });
    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>SECRET SANTA</h1>
        <h2>Enter emails in the following format:<p>janedoe@aol.com, doctorfinger@fingers.com, santa@northpole.com</p></h2>

        <textarea cols="50" onChange={e => setEmailListString(e.target.value)} placeholder={"Enter emails"}></textarea>
        <button onClick={()=> {
            submit(emailListString)
        }}>Send Emails</button>
      </header>
    </div>
  );
}

export default App;
