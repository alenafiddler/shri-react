import '../../scss/global.scss';
import StartPage from "../pages/Start/StartPage";
import SettingsPage from "../pages/Settings/SettingsPage";
import BuildPage from "../pages/BuildPage/BuildPage";
import {Switch, Route} from "react-router-dom";
import {useSelector} from "react-redux";

function MainLayout() {
  const settings = useSelector(state => state.settingsReducer.settings)
  const startClass = settings ? '' : 'main_start'
  return(
    <main className={startClass}>
      <Switch>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/">
          {settings
            ? <BuildPage />
            : <StartPage />
          }
        </Route>
      </Switch>
    </main>
  )
}
export default MainLayout
