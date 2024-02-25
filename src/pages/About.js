import React from "react";
import '../styles/About.css';
import sideImage from '../assets/about/me.jpg'; 

function About(){
    const handleDownloadResume = () => {
        const resumeUrl = '../assets/about/ParthResume.pdf';

        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Resume_Parth_Sharma.pdf'; 

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div className="about-background">
            <div className="left">
                <img src={sideImage} alt="Me" className="side-image" />
            </div>
            
            <div className="right">
                <h2>Traversing My Path: From Fields to Codes</h2>
                <p>Hello, I'm Parth Sharma from India, a mosaic of diverse talents and interests. Trilingual in Hindi, Punjabi, and English, my communication skills are as varied as the sports I've played. From cricket to basketball, my school years were marked by athletic endeavors, mirroring my versatility.</p>
                
                <p>Despite my roots in science—juggling physics, chemistry, and math—I navigated the challenging transition to the computer field. This journey wasn't easy, but through persistent effort and dedication, I've carved a niche for myself in technology.</p>

                <p>My academic pursuit at Centennial College, where I delved deep into Software Engineering Technology, laid the foundation for my technical expertise. Today, I excel in backend development, cloud computing, and machine learning, boasting proficiency in programming languages including Java, Python, Ruby, and more. My journey is a testament to resilience, illustrating how diverse experiences can converge to fuel innovation.</p>

                <p>I've contributed to significant projects such as the development of a Machine Learning Model and the Digital Employment Connect Platform. These initiatives not only highlight my technical skills but also my ability to think critically and solve complex problems. My trilingual ability enhances my role in technology-driven projects, ensuring effective communication across diverse teams.</p>

                <p>In essence, my story is one of transformation—from a sports enthusiast and science student to a tech-savvy professional. It's a narrative of bridging worlds, leveraging a broad spectrum of skills from sportsmanship to scientific inquiry, and applying them to the realm of technology. This journey reflects my multidimensional character, underscoring my belief that perseverance, combined with a willingness to learn, is the key to overcoming challenges and achieving excellence.</p>
                
                <p>Contact me : parthsharma11847@gmail.com</p>

                <button onClick={handleDownloadResume}>Download Resume</button>
            </div>
        </div>
    )
}

export default About;
