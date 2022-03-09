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
        id: 1,
        label: 'node-1',
        children: [
            {
                id: 2,
                label: 'node-1-1',
            },
        ],
    },
    {
        id: 3,
        label: 'node-2',
        children: [
            {
                id: 4,
                label: 'node-2-1',
                children: [
                    {
                        id: 5,
                        label: 'node-2-1-1',
                    },
                ],
            },
            {
                id: 6,
                label: 'node-2-2',
                children: [
                    {
                        id: 7,
                        label: 'node-2-2-1',
                    },
                ],
            },
        ],
    },
    {
        id: 8,
        label: 'node-3',
        children: [
            {
                id: 9,
                label: 'node-3-1',
                children: [
                    {
                        id: 10,
                        label: 'node-3-1-1',
                    },
                ],
            },
            {
                id: 11,
                label: 'node-3-2',
                children: [
                    {
                        id: 12,
                        label: 'node-3-2-1',
                    },
                ],
            },
        ],
    },
];

const tree = new Tree(document.querySelector('.app'));

tree.render(data);
