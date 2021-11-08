import React, { Component } from 'react'

const Spacer = require('react-spacer')

export default class About extends Component {
    render() {
        return (
            <div class="about" center>
              <h1>About VoteSource</h1>
              <h2>What is VoteSource?</h2>
              <p>Election day is coming up. You plan on going to the polls to vote,
              but you're not familiar with most of the running candidates except a few of the major
              heavy hitters. Wouldn't it be great to have some kind of place to go
              so you can be informed on who you're voting for without the hassle of 
              rearching each individual candidate? 
              </p>
              <h2>Introducing VoteSource!</h2>
              <p>VoteSource is a web application that acts a user friendly resource
              which allocates politician data in a users local area (Nassau County to start),
              with a goal of informing users about their local politicians before they head to 
              the polls on election day. 
              </p>
              <h2>Politcians can use it too!</h2>
              <p>If you're trying to run for a position in a county election, VoteSource 
              can also act as a platform for you to get your name out there in order for 
              voters using the application to be informed about you! Simply 
              <ol>
                  <li>Go to the Register page</li>
                  <li>Select "Politician" as your User Type</li>
                  <li>Enter your information in the fields</li>
                  <li>Click submit</li>       
              </ol>
              And voila! You will be registered as a politician in the VoteSource 
              Firebase database!
              </p>
              <h2>Questions? Email:<br></br> <a href = "mailto: ckelly42@pride.hofstra.edu">ckelly42@pride.hofstra.edu</a>
              <Spacer height='20px' />
              <a href = "mailto: bclampett1@pride.hofstra.edu">bclampett1@pride.hofstra.edu</a>
              </h2>
            </div>
              )
    }   
}
