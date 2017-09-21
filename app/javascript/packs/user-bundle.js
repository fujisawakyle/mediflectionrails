import ReactOnRails from 'react-on-rails';

import App from '../bundles/User/components/App';
import Calendar from '../bundles/User/components/Calendar';
import Timer from '../bundles/User/components/timer/Timer';
import Countdown from '../bundles/User/components/timer/Countdown';
import ShowRemaining from '../bundles/User/components/timer/ShowRemaining';
import Clock from '../bundles/User/components/timer/Clock';
import Journal from '../bundles/User/components/journal/Journal';
import Entry from '../bundles/User/components/journal/Entry';
import User from '../bundles/User/components/User'
import ShowDate from '../bundles/User/components/ShowDate'

// This is how react_on_rails can see the User in the browser.
ReactOnRails.register({
  App, Calendar, Timer, Countdown, ShowRemaining, Clock, Journal, Entry, User,
  ShowDate
});
