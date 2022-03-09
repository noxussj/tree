import { init, classModule, propsModule, styleModule, eventListenersModule, h } from 'snabbdom';

const patch = init([
    // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
]);

/**
 * 虚拟化树形类
 */
class Tree {
    constructor(dom) {
        this.indent = 16;

        this.createRootDom(dom);
    }

    /**
     * 创建根节点
     */
    createRootDom(dom) {
        const vnode = h('div.tree');

        patch(dom, vnode);

        this.container = document.querySelector('.tree');
    }

    /**
     * 渲染
     */
    render(data) {
        /**
         * 渲染子节点
         */
        const click = (root) => {
            return function (e) {
                e.stopPropagation();
                const needExpand = root.children && root.children.length && !e.currentTarget.querySelector('.section__subitem').children.length;

                if (needExpand) {
                    const child = [];

                    root.children.forEach((x) => {
                        child.push(
                            h('section', { on: { click: click(x) } }, [
                                h('div.section__item', [
                                    x.children && x.children.length ? h('i.icon-arrow') : h('i.icon-arrow.none'),
                                    h('input', { props: { type: 'checkbox' } }),
                                    h('span', x.label),
                                ]),
                                h('div.section__subitem'),
                            ])
                        );
                    });

                    e.currentTarget.className = 'is-expand';

                    patch(e.currentTarget.querySelector('.section__subitem'), h('div.section__subitem', child));
                } else {
                    e.currentTarget.className = '';

                    patch(e.currentTarget.querySelector('.section__subitem'), h('div.section__subitem', ''));
                }
            };
        };

        /**
         * 渲染首层节点
         */
        const vnode = [];

        data.forEach((root) => {
            vnode.push(
                h('section', { on: { click: click(root) } }, [
                    h('div.section__item', [h('i.icon-arrow'), h('input', { props: { type: 'checkbox' } }), h('span', root.label)]),
                    h('div.section__subitem'),
                ])
            );
        });

        patch(this.container, h('div.tree', vnode));
    }
}

export default Tree;
