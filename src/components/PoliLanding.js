import React from 'react'
import { Button, Row } from 'react-bootstrap';
import { BsChevronRight } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './Home.css'

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

export default function poliLanding() {
    const classes = styles();
    return (
        <div style={{ display: 'flex',  justifyContent:'center' }}>
          <Row lg={2}  className={classes.bigSpace}>
            <div>
              <h1>Nassau</h1>
              <Link to='./signup' >
                <img src={"https://www.crwflags.com/fotw/images/u/us-ny-nc.gif"} />
              </Link>
            </div>
            <div>
              <h1>Suffolk</h1>
              <Link to='./signupsuffolk'>
                <img src={"https://www.crwflags.com/fotw/images/u/us-ny-sf.gif"} />
               </Link>
            </div>
          </Row>
        </div>
    )
}
