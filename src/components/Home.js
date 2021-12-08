import React from 'react'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './Home.css'
import PersonIcon from '@material-ui/icons/Person';
import {Typography} from '@material-ui/core'; 
import Grid from './Grid'
import { BsChevronRight } from 'react-icons/bs';
import { Button, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Iframe from 'react-iframe'

const theme = createMuiTheme({
    palette: {
      primary: {
        main:"#2e1667",
      },
      secondary: {
        main:"#c7d8ed",
      },
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
        },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  });

  const styles = makeStyles({
    wrapper: {
      width: "65%",
      margin: "auto",
      textAlign: "center"
    },
    bigSpace: {
      marginTop: "5rem"
    },
    littleSpace:{
      marginTop: "2.5rem",
    },
    grid:{
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap", 
    },
  })

function Home() {
    const classes = styles();
    return (
        <div className="Home">
        <ThemeProvider theme={theme}>
            <div className={classes.wrapper}>
            <Typography variant="h4" className={classes.bigSpace} color="primary">
                Introducing VoteSource!
            </Typography>
            <Typography variant="h5" className={classes.littleSpace} color="primary">
                VoteSource is a web application that acts a user friendly resource
                which allocates politician data in a users local area (Nassau County to start),
                with a goal of informing users about their local politicians before they head to 
                the polls on election day.
            </Typography>
            <Typography variant="h4" className={classes.bigSpace} color="primary">
                Politcians can use it too!
            </Typography>
            <Typography variant="h5" className={classes.littleSpace} color="primary">
                If you're trying to run for a position in a county election, VoteSource 
                can also act as a platform for you to get your name out there in order for 
                voters using the application to be informed about you!
            </Typography>
            <Typography variant="h4" className={classes.bigSpace} color="primary">
                Register as a standard user now!
            </Typography>
            <Link to='./regsignup'>
              <Button
                variant='primary'
              >
                  <BsChevronRight></BsChevronRight>
              </Button>
            </Link>
            <Typography variant="h4" className={classes.bigSpace} color="primary">
                Or register politician information!
            </Typography>
            </div>
            <Link to='./polilanding'>
              <Button
                variant='primary'
              >
                  <BsChevronRight></BsChevronRight>
              </Button>
            </Link>
        </ThemeProvider >
        <div style={{ display: 'flex',  justifyContent:'center' }}>
          <Row lg={2}  className={classes.bigSpace}>
            <div>
              <h1>Nassau News</h1>
              <Iframe url="https://www.newsday.com/search#filter=stories&query=nassau%20political%20news"
                width="700px"
                height="500px"
                className="box"
              />
            </div>
            <div>
              <h1>Suffolk News</h1>
              <Iframe url="https://www.suffolkcountynews.net/politics/"
                width="700px"
                height="500px"
                className="box"
              />
            </div>
          </Row>
        </div>
      </div>
    );
}

export default Home;