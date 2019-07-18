import React, { Component } from 'react';
import { Card ,Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards';

// 作用：将 page 层和 model 层进行链接，返回 model 层中数据，并且将返回的数据绑定到 this.props
const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    return {
        cardList,
    };
};

// 作用：将定义的函数绑定到 this.props 中，调用 model 层定义的函数
const mapDispatchToProps = (dispatch) => { // dispatch 的作用：可以调用 model 层定义的函数
    // return {
    //     onClickAdd: (newCard) => { // 将函数绑定到 this.props 中
    //         const action = {
    //             // type: `${namespace}/addNewCard`, // 常量用 ` 号
    //             payload: newCard,
    //         };
    //         dispatch(action); // 通过 dispatch 调用 model 中的函数
    //     },
    // };
    return {
        onDidMount: () => {
            dispatch({
                type: `${namespace}/queryInitCards`,
            });
        },
    };
};

// 数据流向图 see https://gw.alipayobjects.com/zos/rmsportal/uhUMfTcXxfskqbreAXth.png
@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {

    // 初始化完成之后，发送请求
    componentDidMount() {
        this.props.onDidMount();
    }

    render() {
        return (
            <div>
                {
                    this.props.cardList.map(card => {
                        return (
                            <Card key={card.id}>
                                <div>Q: {card.setup}</div>
                                <div>
                                    <strong>A: {card.punchline}</strong>
                                </div>
                            </Card>
                        );
                    })
                }
                <div>
                    <Button onClick={() => this.props.onClickAdd({
                        setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                        punchline: 'here we use dva',
                    })}> 添加卡片 </Button>
                </div>
            </div>
        );
    }
}