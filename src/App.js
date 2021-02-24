import './sass/styles.scss';
import Homepage from "./pages/homepage";
import Courses from "./pages/courses";

import {
    Route,
    Switch,
    withRouter
} from "react-router-dom"

import { getCategories } from "./data-loader";

const isKZ = process.env.REACT_APP_KZ_VERSION;

function App({history}) {
  return (
    <div className="App">
      {!isKZ && (
        <Switch>
          <Route history={history} exact={true} path='/' render={(props) => <Homepage lang="ua" {...props} />} />
          <Route history={history} exact={true} path='/ru/' render={(props) => <Homepage lang="ru" {...props} />} />
          <Route history={history} exact={true} path='/courses.html' render={(props) => <Courses lang="ua" {...props} />} />
          <Route history={history} exact={true} path='/ru/courses.html' render={(props) => <Courses lang="ru" {...props} />} />
          {getCategories().map((category) => (
            <Route history={history} exact={true} path={'/' + category.slug} render={(props) => <Courses lang="ua" category={category.slug} {...props} />} />
          ))}
          {getCategories().map((category) => (
            <Route history={history} exact={true} path={'/ru/' + category.slug} render={(props) => <Courses lang="ru" category={category.slug} {...props} />} />
          ))}
        </Switch>
      )}
      {isKZ && (
        <Switch>
          <Route history={history} exact={true} path='/' render={(props) => <Homepage lang="ru" {...props} />} />
          <Route history={history} exact={true} path='/courses.html' render={(props) => <Courses lang="ru" {...props} />} />
          {getCategories().map((category) => (
            <Route history={history} exact={true} path={'/' + category.slug} render={(props) => <Courses lang="ru" category={category.slug} {...props} />} />
          ))}
        </Switch>
      )}
    </div>
  );
}

export default withRouter(App);