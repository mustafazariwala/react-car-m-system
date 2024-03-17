import dbConnect from "./dbConnect";
import User from "../app/\(models\)/Car";

/* Retrieves users(s) data from mongodb database */
let connected = false;
export const fetchData = async (model, query) => {
  if(!connected) {
    await dbConnect();
    connected = true;
  }
  /* find all the data in our database */
  let modeler = getModel(model);
  let result = await modeler.find(query);

  console.log(result[0])
  
  const data = result.map((doc) => {
    const user = JSON.parse(JSON.stringify(doc));
    return user;
  });
  
  console.log(data[0])
  return data
};

const getModel = (model) => {
  switch (model) {
    case 'user':
      return User;
      break;
    default:
      return null
      break;
  }
}