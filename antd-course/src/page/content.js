import React from 'React';
import ShoppingList from './shoppinglist.js';

class Content extends React.Component {
    render() {
        return (
            // <ShoppingList name="张三"/>这行代码，ShoppingList是组件名，name="张三"表示这个组件的有一个name参数，值为张三。
            <ShoppingList name="张三" >
                // 这里放置的内容就是 props.children
            </ShoppingList>
        );
    }
}

export default Content;