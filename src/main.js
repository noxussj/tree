import './styles/tree.scss';
import Tree from './utils/tree.js';

function component() {
    const element = document.createElement('div');
    element.className = 'app';
    return element;
}

document.body.appendChild(component());

const data = [
    {
        label: 'node-1',
        children: [
            {
                label: 'node-1-1',
            },
        ],
    },
    {
        label: 'node-2',
        children: [
            {
                label: 'node-2-1',
                children: [
                    {
                        label: 'node-2-1-1',
                    },
                ],
            },
            {
                label: 'node-2-2',
                children: [
                    {
                        label: 'node-2-2-1',
                    },
                ],
            },
        ],
    },
    {
        label: 'node-3',
        children: [
            {
                label: 'node-3-1',
                children: [
                    {
                        label: 'node-3-1-1',
                    },
                ],
            },
            {
                label: 'node-3-2',
                children: [
                    {
                        label: 'node-3-2-1',
                    },
                ],
            },
        ],
    },
];

const tree = new Tree(document.querySelector('.app'));

tree.render(data);
