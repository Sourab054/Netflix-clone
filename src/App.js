import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./routes/Profile/Profile";
import Search from "./routes/Search/Search";
import Details from "./routes/Details/Details";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/:id">
            <Details />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
