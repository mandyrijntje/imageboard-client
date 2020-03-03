import request from "superagent"; //superagent connects the client to server

//GETTING ALL IMAGES

export const ALL_IMAGES = "ALL_IMAGES";
const baseUrl = "http://localhost:4000";
// const baseUrl = "https://boiling-journey-26718.herokuapp.com";
function allImages(payload) {
  return {
    type: ALL_IMAGES,
    payload
  };
}

export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;
  if (!images.length) {
    request(`${baseUrl}/images`)
      .then(response => {
        const action = allImages(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

// CREATING AN IMAGE

function newImage(payload) {
  console.log("New Image action is being created");
  return {
    type: "NEW_IMAGE",
    payload
  };
}

export const createImage = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  request
    .post(`${baseUrl}/images`)
    .set("Authorization", `Bearer ${user.jwt}`) //in reduxstate you see that user.jwt allows the fn to access the jwt
    .send(data)
    .then(response => {
      console.log("Creating, creating...");
      const action = newImage(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// LOGGING IN

function loggedIn(payload) {
  console.log("New Image action is being created");
  return {
    type: "JWT",
    payload
  };
}

export const login = data => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      console.log("Creating, creating...");
      const action = loggedIn(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
