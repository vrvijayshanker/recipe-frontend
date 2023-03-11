import React, { useEffect, useState } from 'react'
import { Button, TextField } from "@mui/material";
import axios from 'axios'
import { useParams } from 'react-router-dom'

const EditRecipe = () => {

    let { id } = useParams();
    const [newrecipe, setnewrecipe] = useState({
        title: "",
        cuisine: "",
        duration: "",
        servings: "",
        image: "",
        imageurl:""

    });
    const { title,cuisine,duration,servings,image,imageurl} = newrecipe;

    useEffect(() => {
        loadRecipe();
    },[])

    const onInputChange = e => {
        setnewrecipe({ ...newrecipe, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.patch(`/update/${id}`, newrecipe)
        .then((response) => {
            alert("Recipe Updated");
        })
        .catch((error)=>{
            console.log(error)
        })          
    }

    const loadRecipe = async () => {
        const result = await axios.get(`/getarecipe/${id}`);
        setnewrecipe(result.data)
    }


  return (
    <div className='container'>
        <div className='form-box'>
        <h3>Update this Recipe</h3>
        <form>
          <div>
            <TextField
              id="title"
              name="title"
              label="Recipe Name"
              variant="standard"
              value={title}
              onChange={e => onInputChange(e)}
            />
            <br />
            <TextField
              id="cuisine"
              name="cuisine"
              label="Type of Cuisine"
              variant="standard"
              value={cuisine}
              onChange={e => onInputChange(e)}
            />
            <br />
            <TextField
              id="duration"
              name="duration"
              label="Duration (in minutes)"
              variant="standard"
              value={duration}
              onChange={e => onInputChange(e)}
            />
            <br />
            <TextField
              id="servings"
              name="servings"
              label="Servings"
              variant="standard"
              value={servings}
              onChange={e => onInputChange(e)}
            />
            <br />
            <br />
            <input
              type="file"
              id="image"
              name="image"
              value={image}
              onChange={e => onInputChange(e)}
            />
            <br />
            <h5><i>or</i></h5>
            <TextField
              id="imageurl"
              name="imageurl"
              label="Enter Image URL"
              variant="standard"
              value={imageurl}
              onChange={e => onInputChange(e)}
            />
            <br />
            <br />
            <Button variant="contained" color="primary" onClick={e => onSubmit(e)}>
              Update Recipe
            </Button>
          </div>
        </form>
        </div>
      
    </div>
  )
}

export default EditRecipe
