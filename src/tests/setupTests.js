import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
});

//in jest.config.json
     // "setupFiles": [
    //     "raf/polyfill",
    //     "/src/tests/setupTests.js"
    //   ],