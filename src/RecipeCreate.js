import React, { useState } from "react";


function RecipeCreate({setRecipes, recipes, createNewRecipe}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",    
  };
  
  const [formData, setFormData] = useState({...initialFormState});
  
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  
  const handleSubmit = (event) => {
  event.preventDefault();
  createNewRecipe(formData)
  setFormData({ ...initialFormState });
};
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  
  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
                onChange={handleChange}
                type='text'
                name='name'
                value={formData.name}
                placeholder='Name'
                required
                />
            </td>
            <td>
               <input
                onChange={handleChange}
                type='text'
                name='cuisine'
                value={formData.cuisine}
                placeholder='Cuisine'
                required
               />
            </td>
            <td>
               <input 
                onChange={handleChange}
                type="text"
                name="photo"
                value={formData.photo}
                placeholder="URL"
                required
              />
            </td>
             <td>
               <textarea 
                onChange={handleChange}
                name="ingredients"
                value={formData.ingredients}
                placeholder="Ingredients"
                required
              />
            </td>
              <td>
               <textarea 
                onChange={handleChange}
                name="preparation"
                value={formData.preparation}
                placeholder="Preparation"
                required
              />
            </td>
            <td>
              <button type="submit" onClick={handleSubmit}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
