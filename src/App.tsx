import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from 'components';
import * as Pages from './pages';

// prettier-ignore
function App() {
  return (
    <BrowserRouter basename="/verify">
      <Header/>
      <div className='page'>
        <Switch>
          <Route path="/" exact><Pages.Home/></Route>

          <Route path="/aztec_temple" exact><Pages.AztecTemple game="aztec_temple"/></Route>
          <Route path="/bloodline_bonanza" exact><Pages.AztecTemple game="bloodline_bonanza"/></Route>
          <Route path="/outlaws_paradise" exact><Pages.AztecTemple game="outlaws_paradise"/></Route>

          <Route path="/grand_theft_slot" exact><Pages.GrandTheftSlot game="grand_theft_slot" /></Route>
          <Route path="/rave_nights" exact><Pages.GrandTheftSlot game="rave_nights" /></Route>
          <Route path="/medieval_empire" exact><Pages.GrandTheftSlot game="medieval_empire" /></Route>

          <Route path="/asian_wonders" exact><Pages.EgyptianLands game="asian_wonders"/></Route>
          <Route path="/egyptian_lands" exact><Pages.EgyptianLands game="egyptian_lands"/></Route>
          <Route path="/path_of_destiny" exact><Pages.EgyptianLands game="path_of_destiny"/></Route>
          <Route path="/candy_wonderland" exact><Pages.EgyptianLands game="candy_wonderland"/></Route>
          <Route path="/mystic_forest" exact><Pages.EgyptianLands game="mystic_forest"/></Route>
          <Route path="/fruit_mania" exact><Pages.EgyptianLands game="fruit_mania"/></Route>

          <Route path="/scifi_universe"><Pages.EgyptianLands game="scifi_universe"/></Route>
          <Route path="/magic_stories"><Pages.EgyptianLands game="magic_stories"/></Route>
          <Route path="/maya_temple"><Pages.EgyptianLands game="maya_temple"/></Route>
          <Route path="/monster_mania"><Pages.EgyptianLands game="monster_mania"/></Route>
          <Route path="/mask_bonanza"><Pages.EgyptianLands game="mask_bonanza"/></Route>
          <Route path="/gelato_store"><Pages.EgyptianLands game="gelato_store"/></Route>

          <Route path="/shooting_range" exact><Pages.ShootingRange game="shooting_range"/></Route>
          <Route path="/space_attack" exact><Pages.ShootingRange game="space_attack"/></Route>
          <Route path="/pirate_treasures" exact><Pages.ShootingRange game="pirate_treasures"/></Route>

          <Route path="/dragon_shrine" exact><Pages.ShootingRange game="dragon_shrine"/></Route>
          <Route path="/zeus_revenge" exact><Pages.ShootingRange game="zeus_revenge"/></Route>
          <Route path="/soul_chaser" exact><Pages.ShootingRange game="soul_chaser"/></Route>

          <Route path="/mafia" exact><Pages.Mafia game="mafia"/></Route>
          <Route path="/fight_club" exact><Pages.Mafia game="fight_club"/></Route>
          <Route path="/shogun_legends" exact><Pages.Mafia game="shogun_legends"/></Route>
          <Route path="/safari" exact><Pages.Mafia game="safari"/></Route>
          {/* <Route path="/fisherman" exact><Pages.Mafia game="fisherman"/></Route> */}

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
