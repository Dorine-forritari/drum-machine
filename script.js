function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const Header = () => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "header" }, /*#__PURE__*/
    React.createElement("h1", null, "Drum Machine")));

};

class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  playSound() {
    this.props.displayCallback(this.props.id);
    document.getElementById(this.props.text).play();
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { class: "drum-pad", id: this.props.id, onClick: this.playSound }, /*#__PURE__*/
      React.createElement("audio", { src: this.props.src, class: "clip", id: this.props.text }),
      this.props.text));

  }}


const padding = {
  paddingTop: '20px',
  paddingBottom: '20px' };


class Display extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "updateDisplay",





    textFromChild => {
      this.setState({ displayText: textFromChild });
    });this.state = { displayText: '' };this.updateDisplay = this.updateDisplay.bind(this);}
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-sm-3" }), /*#__PURE__*/

      React.createElement("div", { class: "col-sm-3", id: "leftColumn", style: padding }, /*#__PURE__*/
      React.createElement("p", { id: "display" }, this.state.displayText)), /*#__PURE__*/

      React.createElement("div", { class: "col-sm-3", id: "rightColumn", style: padding }, /*#__PURE__*/
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement(DrumPad, { id: "Heater-1", text: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", keyCode: 81, displayCallback: this.updateDisplay })), /*#__PURE__*/

      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement(DrumPad, { id: "Heater-2", text: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", keyCode: 87, displayCallback: this.updateDisplay })), /*#__PURE__*/

      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement(DrumPad, { id: "Heater-3", text: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", keyCode: 69, displayCallback: this.updateDisplay }))), /*#__PURE__*/


      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement(DrumPad, { id: "Heater-4", text: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", keyCode: 65, displayCallback: this.updateDisplay })), /*#__PURE__*/

      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement(DrumPad, { id: "Clap", text: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", keyCode: 83, displayCallback: this.updateDisplay })), /*#__PURE__*/

      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement(DrumPad, { id: "Open-HH", text: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", keyCode: 68, displayCallback: this.updateDisplay }))), /*#__PURE__*/


      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement(DrumPad, { id: "Kick-n'-Hat", text: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", keyCode: 90, displayCallback: this.updateDisplay })), /*#__PURE__*/

      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement(DrumPad, { id: "Kick", text: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", keyCode: 88, displayCallback: this.updateDisplay })), /*#__PURE__*/

      React.createElement("div", { class: "col-xs-4" }, /*#__PURE__*/
      React.createElement(DrumPad, { id: "Closed-HH", text: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", keyCode: 67, displayCallback: this.updateDisplay })))), /*#__PURE__*/



      React.createElement("div", { class: "col-sm-3" }))));




  }}


const DrumMachine = () => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
    React.createElement(Header, null), /*#__PURE__*/
    React.createElement(Display, null)));

};

function App() {
  ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), document.getElementById('root'));
}

App();