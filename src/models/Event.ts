interface Start {
  localDate: string;
}

interface Date {
  start: Start;
}

//User can type in state name or state code. We can use toLowerCase function to match the values
interface State {
  name: string;
  stateCode: string;
}

interface City {
  name: string;
}

interface Venue {
  city: City;
  state: State;
}

interface _embedded {
  venues: Venue[];
}

export default interface Event {
  name: string;
  id: string;
  _embedded: _embedded;
  dates: Date;
}
