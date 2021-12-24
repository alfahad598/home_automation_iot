import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, onValue} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCTZoWYNlb8FbjrUM0GhMmd08LQafSrSFc",
  authDomain: "home-automation-iot-app.firebaseapp.com",
  databaseURL: "https://home-automation-iot-app-default-rtdb.firebaseio.com",
  projectId: "home-automation-iot-app",
  storageBucket: "home-automation-iot-app.appspot.com",
  messagingSenderId: "963638382546",
  appId: "1:963638382546:web:9a324a5f9b22346a69420b",
  measurementId: "G-VHGBSYKB5Y"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const starCountRef = ref(db, '/weather');
onValue(starCountRef, (snapshot) => {
  var humidity = snapshot.child('humidity');
  var temperature = snapshot.child('temperature');
  document.getElementById("temperature").innerText = temperature.val();
  document.getElementById("humidity").innerText = humidity.val();
});


export function widgetSwitchLight(light_mode){
  set(ref(db, 'widgets'), {
    light: light_mode
  });
  console.log("Light");
}
export function widgetSwitchFan(fan_mode){
  set(ref(db, 'widgets'), {
    fan: fan_mode
  });
  console.log("Fan");
}
export function widgetSwitchAC(ac_mode){
  set(ref(db, 'widgets'), {
    ac: ac_mode
  });
  console.log("A/C");
}
