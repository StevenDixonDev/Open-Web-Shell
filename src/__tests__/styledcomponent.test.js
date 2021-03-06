import React from 'react';
import ReactDOM from 'react-dom';
import { ShellWrapper, LineInput, LineWrapper, LineOutput } from '../library/Shell/styled-components';


it('LineOutput renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LineOutput styles={{}}>test</LineOutput>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('ShellWrapper renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShellWrapper styles={{}}>test</ShellWrapper>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('LineInput renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LineInput styles={{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('LineWrapper renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LineWrapper styles={{}}>test</LineWrapper>, div);
    ReactDOM.unmountComponentAtNode(div);
});

