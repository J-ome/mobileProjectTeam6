import { View, Text, Image, ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from "react";


const stripHtmlTags = (htmlString) => {
  return htmlString.replace(/<[^>]*>/g, '');
};

const Recipes = () => {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const apiKey = 'fda60fc993e14793b45bd7cb18f3c8ce';
        const apiUrl = 'https://api.spoonacular.com/recipes/random';
        const numberOfRecipes = 1;

        const response = await axios.get(apiUrl, {
          params: {
            apiKey,
            number: numberOfRecipes,
          },
        });
    
        const recipesWithDetails = await Promise.all(
          response.data.recipes.map(async recipe => {
            // Fetch summary
            const summaryResponse = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/summary`, {
              params: {
                apiKey,
              },
            });
            const summary = stripHtmlTags(summaryResponse.data.summary);
    
            // Fetch ingredients
            const ingredientsResponse = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/ingredientWidget.json`, {
              params: {
                apiKey,
              },
            });
            const ingredients = ingredientsResponse.data.ingredients.map(ingredient => ingredient.name);
    
            return { ...recipe, summary, ingredients, fullSummary: summary };
          })
        );
    
        // Limit summary length to 150 characters
        const updatedRecipes = recipesWithDetails.map(recipe => ({
          ...recipe,
          summary: recipe.summary.length > 150 ? recipe.summary.slice(0, 150) + '...' : recipe.summary
        }));
    
        setRecipes(updatedRecipes);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Function to toggle between full and truncated summary
  const toggleSummary = (index) => {
    const updatedRecipes = [...recipes];
    updatedRecipes[index].summary = updatedRecipes[index].summary === updatedRecipes[index].fullSummary
      ? updatedRecipes[index].summary.slice(0, 150) + '...' // Limit to 150 characters
      : updatedRecipes[index].fullSummary;
    setRecipes(updatedRecipes);
  };

    // Function to navigate to Recipe screen
    const navigateToRecipe = (recipe) => {
      console.log("Navigating to Recipe:", recipe);
      navigation.navigate('Recipe', { recipe });
    };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Recipes</Text>
            {recipes.map((recipe, index) => (
           <TouchableOpacity key={recipe.id} style={{ marginBottom: 20 }} onPress={() => navigateToRecipe(recipe)}>
           <View>
             <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{recipe.title}</Text>
             <Image source={{ uri: recipe.image }} style={{ width: 200, height: 200, marginBottom: 10 }} />
             <Text>{recipe.summary}</Text>
             {recipe.fullSummary.length > 150 && (
               <TouchableOpacity onPress={() => toggleSummary(index)}>
                 <Text style={{ color: 'blue' }}>{recipe.summary === recipe.fullSummary ? 'View Less' : 'View More'}</Text>
               </TouchableOpacity>
             )}
             <Text>Ready in {recipe.readyInMinutes} minutes</Text>
             {/* Add more details as needed */}
           </View>
         </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Recipes;
