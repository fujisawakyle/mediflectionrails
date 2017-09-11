import ReactOnRails from 'react-on-rails';

import User from '../bundles/User/components/User';
import Calendar from '../bundles/User/components/Calendar';
import Timer from '../bundles/User/components/timer/Timer'
import Countdown from '../bundles/User/components/timer/Countdown'
import ShowRemaining from '../bundles/User/components/timer/ShowRemaining'
import Clock from '../bundles/User/components/timer/Clock'
import Journal from '../bundles/User/components/journal/Journal'
import Entry from '../bundles/User/components/journal/Entry'

// This is how react_on_rails can see the User in the browser.
ReactOnRails.register({
  User, Calendar, Timer, Countdown, ShowRemaining, Clock, Journal, Entry
});
