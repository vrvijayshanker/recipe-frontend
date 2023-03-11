import { Button, TextField } from "@mui/material";
import React from "react";
import "./style.css";
import useForm from "../components/RecipeUseForm";
import axios from "axios";

const AddRecipe = () => {
  const [recipe, setrecipe] = useForm({
    title: "",
    cuisine: "",
    duration: "",
    servings: "",
    image: "",
    imageurl:""
  });

  var inputrecipe = (e) => {
    e.preventDefault();
    console.log(recipe);
    axios
      .post("addrecipe", recipe)
      .then((response) => {
        console.log(response);
        alert("Recipe Added")
      })
      .catch((error) => {
        console.log(error);
      });

    window.location.reload();
  };

  return (
    <div className="container">
      <div className="form-box">
        <h3>Add a New Recipe</h3>
        <form>
          <div>
            <TextField
              id="title"
              name="title"
              label="Recipe Name"
              variant="standard"
              onChange={setrecipe}
              value={recipe.title}
            />
            <br />
            <TextField
              id="cuisine"
              name="cuisine"
              label="Type of Cuisine"
              variant="standard"
              onChange={setrecipe}
              value={recipe.cuisine}
            />
            <br />
            <TextField
              id="duration"
              name="duration"
              label="Duration (in minutes)"
              variant="standard"
              onChange={setrecipe}
              value={recipe.duration}
            />
            <br />
            <TextField
              id="servings"
              name="servings"
              label="Servings"
              variant="standard"
              onChange={setrecipe}
              value={recipe.servings}
            />
            <br />
            <br />
            <input
              type="file"
              id="image"
              name="image"
              onChange={setrecipe}
              value={recipe.image}
            />
            <br />
            <h5><i>or</i></h5>
            <TextField
              id="imageurl"
              name="imageurl"
              label="Enter Image URL"
              variant="standard"
              onChange={setrecipe}
              value={recipe.imageurl}
            />
            <br />
            <br />
            <Button variant="contained" color="success" onClick={inputrecipe}>
              Add Recipe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
