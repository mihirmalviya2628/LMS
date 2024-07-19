import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                        The library is stocked with over 55,000 books, magazines, reference articles, archives, encyclopaedic collections, and about 300 references & textbooks, periodicals and national & international journals. 10 digital library subscriptions for BE and 5 for MBA have been added for the benefit of the students. <br /> <br /> <br /> 

                        Presently it has got over 35000 books and 108 journals (both National & International) and number of magazines from different disciplines. Computer generated records make it further easier. The library would take steps in joining worldwide group for engineers like IEEE (Institute of Electronics and Electrical Engineers) and other groups and will promote students to take part in events and public relations.<br /> <br /> <br />
                       
                        <br />
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
