import { StyleSheet } from "react-native";


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeItem: {
    width: 200, 
    marginBottom: 15,
    borderRadius: 10,
    marginRight: 15,
    overflow: 'hidden',
    elevation: 3,
  },
  recipeImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  recipeTitle: {
    fontWeight: 'bold', 
    textAlign: 'center',
  }
});
