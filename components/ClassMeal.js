class Meal{
    constructor(id, categoryId, title, affordability, complexity, imageUrl, duration, ingredients, steps,
         isGlutenfree, isVegan, IsVegetarian, isLactoseFree){
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenfree = isGlutenfree;
        this.isVegan = isVegan;
        this.IsVegetarian = IsVegetarian;
        this.isLactoseFree = isLactoseFree;
    }
}
export default Meal;