const createRecipeValidation = (values) => {
    let errors = {};

    if (!values.recipeTitle) {
        errors.recipeTitle="Recipe title is required"
    }

    if (!values.recipeDescription) {
        errors.recipeDescription="Recipe description is required"
    }

    if (!values.instructions) {
        errors.instructions="At least one instruction is required"
    }

    if (!values.ingredients) {
        errors.ingredients="Ingredients are required"
    }
    return errors;
}

export default createRecipeValidation