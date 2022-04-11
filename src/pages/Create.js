import React from 'react'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
// import { ButtonGroup } from '@material-ui/core'
// to create a wrapper around our content with basic margin and padding:
import { Container } from '@material-ui/core'
import { KeyboardArrowRight } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core'

// const useStyles = makeStyles({
//   btn: {
//     fontSize: 60,
//     backgroundColor: "violet",
//     "&:hover": {
//       backgroundColor: "blue"
//     }
//   },
//   title: {
//     textDecoration: "underline",
//     marginBottom: 20
//   }
// })

const useStyles = makeStyles({
})

export default function Create() {
  const classes = useStyles()

  return (
    <Container>
      <Typography
        // className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button
        // className={classes.btn}
        onClick={() => console.log("you clicked me")}
        type="submit"
        color="secondary"
        variant="contained"

        endIcon={<KeyboardArrowRight />}
        // to remove dropshadow of the button use:
        /* disableElevation */
      >
        Submit
      </Button>
    </Container>
  )
}
