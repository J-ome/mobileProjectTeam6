import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { MD3LightTheme } from "react-native-paper";

export const MyTheme = {
  ...MD3LightTheme,
  roundness: 5,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#5FD35D',
    onPrimary:'#E4F1E4',
    // onSurfaceVariant: '#b73a9e',
    outline: 'black',
    secondaryContainer: '#5FD35D',
    surfaceVariant: '#E4F1E4',
    // background: '#E4F1E4'
  }
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5FD35D',
  },
  statusBar: {
    marginTop: Constants.statusBarHeight + 10
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 30,
    paddingTop: 20
  },
  recipeItem: {
    width: 300,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
    alignSelf: 'center'
  },
  recipeContainer: {
    flex: 1, 
    marginTop: 10, 
    marginBottom: 10,
    alignItems: 'center',
  },
  // recipeImage: {
  //   width: '100%',
  //   height: 100,
  //   resizeMode: 'cover',
  // },
  title: {
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#5FD35D',
    fontSize: 18,
    marginLeft: 20,
    marginTop: 15,
  },
  recipeTitle: {
    fontWeight: 'bold',
    color: '#645e5e',
    paddingBottom: 13
  },
  articleItem: {
    width: '100%',
    marginBottom: 15,
    borderRadius: 16,
    elevation: 2,
    // padding: 10,
  },
  articleContent: {
    fontSize: 14,
    lineHeight: 20,
  },
  articleContainer: {
    flex: 1,
    margin: 20,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#E4F1E4',
    borderRadius: 13,
    gap: 20
  },
  // articleHeading: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   marginBottom: 10,
  
  // },
  articleImage: {
    width: 80,
    height: 80,
  },
  searchContainer: {
    marginTop: 0,
    paddingHorizontal: 10,
    paddingBottom: 10, 
  },
  recipeItemContainer:{
    flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20, 
  },
  goBackIcon: {
    // position: 'absolute', 
    top: 20, 
    left: 20, 
    marginBottom: 20
  },
  screenContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    marginTop: 20,
    paddingBottom: 100
  },
  logo: {
    alignSelf: 'center',
    marginTop: 20,
    height: 200,
    width: 200
  },
  divider: {
    marginHorizontal: 50,
    marginVertical: 20,
    borderBottomWidth: 1
  },
  btn: {
    marginBottom: 20,
    marginTop: 10,
    marginHorizontal: 50
  },
  textInput: {
    // marginHorizontal: 40,
    marginBottom: 10,
    alignSelf: 'center',
    width: 300,
  },
  profileContent: {
    // paddingLeft: 30,
    gap: 10,
    // justifyContent: 'center',
    marginHorizontal: 20
  },
  profileImageBtn: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 12,
    marginTop: 20
  },
  profileText: {
    fontWeight: '500',
    // textAlign: 'center',
    marginLeft: 20,
    fontSize: 15
  },
  profileImageText: {
    textAlign: 'center',
    fontWeight: '500'
  },
  profileImageContent: {
    alignItems: 'center',
    gap: 30,
    marginBottom: 40
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 70
  },
  profileInput: {
    width: 280,
    alignSelf: 'center'
  },
  save: {
    backgroundColor: '#5FD35D',
    borderRadius: 20,
    padding: 12,
    width: 100,
    marginTop: 18,
    alignSelf: 'center',
    marginBottom: 20
  },
  saveText: {
    textAlign: "center",
    fontWeight: '500',
    color: '#E4F1E4'
  },
  logoutDelete: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
    marginTop: 40,
  width: 200,
  gap: 50,
  margin: 15,
  alignSelf: 'center'
    
  },
  profileBtn: {
    backgroundColor: 'orange',
    fontSize: 20,
    padding: 0
  },
  addRecipeContent: {
    padding: 20,
    gap: 15,
    alignItems: 'center'
  },
  addRecipeInput: {
    height: 200,
    width: 300
  },
  addRecipeImageBtn: {
    backgroundColor: '#E4F1E4',
    borderRadius: 20,
    padding: 12,
    paddingRight: 20,
    width: 200,
    // borderColor: '#5FD35D',
    // borderWidth: 2
  },
  addRecipeBtn: {
    marginTop: 40,
  },
  addRecipeBtnText: {
    textAlign: 'center',
    fontWeight: '500'
  },
  articleHeading: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#5FD35D',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20
  },
  articleTitle: {
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10
  },
  articleText: {
    marginHorizontal: 20,
    marginBottom: 15,
    fontSize: 15
  }, 
  articleImage: {
    width: 300,
    height: 170,
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: 20
  },
  articleCard: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    // marginHorizontal: 40,
    borderRadius: 13,
    width: 280,
    justifyContent: 'space-between'
  },
  articleCardText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#645e5e',
    textAlign: 'center',
    padding: 20,
    textAlignVertical: 'center'
  },
  articleCardImage: {
    width: 140,
    height: 130,
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13
  },
  recipesHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20
  },
  recipesImage: {
    width: 310,
    height:170,
    borderRadius: 13,
    alignSelf: 'center',
    marginBottom: 15
  },
  viewMore: {
    color: '#5FD35D',
    fontWeight: '500',
    marginHorizontal: 20
  },
  readyIn: {
    textAlign: 'center',
    // borderRadius: 20,
    // borderWidth: 2,
    // borderColor: '#5FD35D',
    // padding: 10,
    margin: 20,
    // fontSize: 12,
    width: 250,
    alignSelf: 'center',
    fontWeight: '500',
    color: '#645e5e'
  },
  min: {
    color: '#5FD35D',
    fontSize: 15,
    fontWeight: 'bold'
  },
  recipeImage: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // position: 'absolute',
  },
  recipeScreenTitle: {
    backgroundColor: '#e4f1e4e8',
    padding: 25,
    marginTop: -30,
    borderRadius: 13,
    alignSelf: 'center',
    fontSize: 15, 
    fontWeight: 'bold', 
    marginBottom: 10
  },
  recipeAddToFavorites: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    gap: 10
  },
  screenContentFavorites: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    marginTop: 20,
    paddingBottom: 100
  },
  logInOrSignUp: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
    padding: 20
  },
  addRecipeImageBtnText: {
    textAlign: 'center',
    fontWeight: '500'
  },
  myRecipeTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  deleteRecipe: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15
  },
  myRecipeContent: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    marginTop: 20,
  },
  profileLinks: {
    borderRadius: 13,
    color: '#5FD35D',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  profileLinksText: {
    padding: 10,
    // color: '#5FD35D',
    fontWeight: 'bold',
    textAlign: 'center',
    width: 130
  },
  profileLinksContent: {
    backgroundColor: '#E4F1E4',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15
  },
  profileInformation: {
    // borderWidth: 3,
    borderRadius: 20,
    margin: 15,
    paddingTop: 15,
    borderColor: '#E4F1E4',
    backgroundColor: '#E4F1E4'
  },
  addRecipeTitleInput: {
    alignSelf: 'center',
    width: 300
  },
  creator: {
    color: '#5FD35D',
    fontWeight: '500',
    marginHorizontal: 20,
    marginBottom: 15,
    fontSize: 15
  },
  modalText: {
    marginBottom: 5, 
    fontSize: 16, 
    fontWeight: '400',
    marginHorizontal: 20
  }
 
});
