import '../../scss/global.scss';
import StartPage from "../pages/Start/StartPage";
import SettingsPage from "../pages/Settings/SettingsPage";
import BuildPage from "../pages/BuildPage/BuildPage";
import {
  Switch,
  Route
} from "react-router-dom";
export const MainLayout = () => {
  const repository = localStorage.getItem('repository')
  const startClass = repository && repository.length > 0 ? '' : 'main_start'
  return(
    <main className={startClass}>
      <Switch>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/">
          {repository
            ? <BuildPage />
            : <StartPage />
          }
        </Route>
      </Switch>
    </main>
  )
}
export default MainLayout
