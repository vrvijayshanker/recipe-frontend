import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import PeopleIcon from '@mui/icons-material/People';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const Italian = () => {

  var [items, setitems] = useState([])

  useEffect(() => {
    axios.get("/recipebycuisine/Italian")
    .then((response) => {
      setitems(
        items = response.data
      )
    })
    .catch((error) => {
      console.log(error)
    })
    
  },[])


  const deleterecipe = (id,e) => {
    e.preventDefault();
    axios.delete(`/delete/${id}`)
    .then((response) => {
      alert("Recipe Deleted");    
    })
    .catch((error) => {
      console.log(error)
    })
    window.location.reload();
  }

  return (
    <div className='container'>
      <h2>The Taste of Italia</h2>
      <div className="inner">
        {items.map((value, index) => {
          return (
            <div className="inner-box" key={index}>
              <Card
                sx={{
                  minWidth: 350,
                  maxWidth: 345,
                  margin: "5px",
                  backgroundColor: "#2C3333",
                  color: "#ffffff",
                  marginBottom: "50px",
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image={value.imageurl}
                  title="image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.title}
                  </Typography>
                  <Typography variant="body2">
                  <h4><RestaurantIcon className='material-icons' /> {value.cuisine} </h4>
                  <h4><AccessAlarmsIcon className='material-icons' /> {value.duration} Minutes</h4>
                  <h4><PeopleIcon className='material-icons' /> {value.servings} </h4>
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button
                    color="error"
                    size="small"
                    onClick={(e) => deleterecipe(value._id, e)}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Italian
