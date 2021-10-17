import UI from './components/controls';
import { useCamera } from './components/utils/useCamera';
import CONSTANT from './components/utils/constant';
import functions from './components/utils/functions';

const Button = UI.Button;
const CheckButton = UI.CheckButton;
const RadioButton = UI.RadioButton;
const Selector = UI.Selector;
const Spinner = UI.Spinner;
const TextBox = UI.TextBox;
const Title = UI.Title;
const TextButton = UI.TextButton;
const TextArea = UI.TextArea;
const NavBar = UI.NavBar;
const DatePicker = UI.DatePicker;
const Modal = UI.Modal;
const ModalNotifications = UI.ModalNotifications;
const ModalHttpMessage = UI.ModalHttpMessage;
const ModalViewerPDF = UI.ModalViewerPDF;
const Icon = UI.Icon;
const Menu = UI.Menu;
const Option = UI.Option;
const ImageButton = UI.ImageButton;

export { useCamera, functions, CONSTANT };
export {
	Button,
	CheckButton,
	RadioButton,
	Selector,
	Spinner,
	TextBox,
	Title,
	TextButton,
	TextArea,
	NavBar,
	DatePicker,
	Modal,
	ModalNotifications,
	ModalHttpMessage,
	ModalViewerPDF,
	Icon,
	Menu,
	Option,
	ImageButton,
};
export default UI;
