import './app.css';
import Nav from './nav';
import { Review, Rating, Analysis } from './box';
import Content from './content';

function App() {
    return (
        <div id="container">
            <Nav />
            <Review />
            <Rating />
            <Analysis num1="960" num2="122" />
            <Content />
        </div>
    );
}

export default App;