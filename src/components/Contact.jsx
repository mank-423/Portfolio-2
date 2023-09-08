import { SocialIcon } from 'react-social-icons';

export default function Contact(){
    return (
        <div className='bg-[#ECF9FF]' id="contact">
            <br></br>
            <center><h1 className="text-2xl font-bold">CONTACT</h1></center>
            <center><p className="text-md lg:text-lg">If you have any questions, feedback, or would like to discuss a potential project, please feel free to contact me.</p> 
                <p className="text-md lg:text-lg"> You can reach me through ↓</p>
                <ion-icon size="large" name="happy-outline" ></ion-icon></center>
            
            <div className="flex items-center justify-center">
                <div className="linkedin m-4 lg:m-12">
                    <SocialIcon url="https://www.linkedin.com/in/mayank-kumar-035980226/" />
                </div>
                <div className="twitter m-4 lg:m-12">
                    <SocialIcon url="https://twitter.com/okaymank" bgColor="#1DA1F2" />
                </div>
                <div className="github m-4 lg:m-12">
                    <SocialIcon url="https://github.com/mank-423" />
                </div>
                <div className="github m-4 lg:m-12">
                    <SocialIcon url="https://mail.google.com/mail/?view=cm&fs=1&to=mk4664348@gmail.com&su=SUBJECT&body=BODY" />
                </div>
            </div>
        </div>
    );
};