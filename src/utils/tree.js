/**
 * 虚拟化树形类
 */
class Tree {
    constructor(dom) {
        this.indent = 16;

        const elementTree = document.createElement('div');
        elementTree.className = 'tree';
        dom.appendChild(elementTree);

        this.dom = document.querySelector('.tree');
    }

    /**
     * 获取节点
     */
    node(root, level) {
        const node = document.createElement('div');
        node.style.paddingLeft = this.indent * (level - 1) + 'px';
        node.setAttribute('id', (Math.random() * 1).toFixed(5));
        node.className = 'tree__item';
        node.innerHTML = `<i class="icon-arrow"></i><span>${root.label}</span>`;
        node.onclick = () => {
            // 收起
            if (node.getAttribute('expand') === 'true') {
                node.setAttribute('expand', 'false');

                const dfs = (id) => {
                    const elements = document.querySelectorAll(`*[parentid='${id}']`);

                    elements.forEach((x) => {
                        this.dom.removeChild(x);

                        dfs(x.id);
                    });
                };

                dfs(node.id);
            }

            // 展开
            else {
                node.setAttribute('expand', 'true');
                (root.children || []).forEach((x) => {
                    const child = this.node(x, level + 1);
                    child.setAttribute('parentid', node.id);
                    this.dom.insertBefore(child, node.nextElementSibling);
                });
            }
        };

        return node;
    }

    /**
     * 渲染
     */
    render(data) {
        data.map((item) => {
            const node = this.node(item, 1);

            this.dom.appendChild(node);
        });
    }
}
