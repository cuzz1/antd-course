import request from '../util/request'; // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise

const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    });
};





export default {
    namespace: 'puzzlecards',
    state: {
        data: [],
        counter: 0,
    },
    effects: {
        *queryInitCards(_, sagaEffects) { // 定义异步方法
            const { call, put } = sagaEffects; // 获取 call 和 put 方法
            const endPointURI = 'https://safe-falls-22549.herokuapp.com/random_joke'; // 请求 url

            const puzzle = yield call(request, endPointURI); // 获取数据
            yield put({ type: 'addNewCard', payload: puzzle });

            yield call(delay, 3000);

            const puzzle2 = yield call(request, endPointURI);
            yield put({ type: 'addNewCard', payload: puzzle2 }); // 通过 put 调用 reducers 中的函数
        }
    },
    // 定义一些函数
    reducers: {
        // state: 指的是更新之前的状态数据
        addNewCard(state, { payload: newCard }) {
            const nextCounter = state.counter + 1;
            const newCardWithId = { ...newCard, id: nextCounter };
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter,
            };
        }
    },
};