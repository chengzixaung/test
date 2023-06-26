import { nanoid } from 'nanoid';
const initstate = {
    data: [
        {
            id: nanoid(),
            type: '人气推荐',
            children: [
                {
                    id: nanoid(),
                    img: `${require('../img/1.png')}`,
                    title: '人气商品1',
                    price: 120,
                    mation: {
                        goods_id: '1',
                        goods_info: {
                            picture: `${require('../img/1.png')}`,
                        },
                        sku: {
                            price: "120",
                            stock_num: 227,
                            tree: [
                                {
                                    k: '规格',
                                    k_s: 's1',
                                    k_id: '1',
                                    v: [
                                        {
                                            id: '1',
                                            name: '普通装',
                                        },
                                        {
                                            id: '2',
                                            name: '升级装',
                                        },
                                        {
                                            id: '3',
                                            name: '豪华装',
                                        },
                                    ],
                                },
                            ],
                            list: [
                                {
                                    id: 2259,
                                    s1: '2',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 110,
                                },
                                {
                                    id: 2260,
                                    s1: '3',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 99,
                                },
                                {
                                    id: 2257,
                                    s1: '1',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 111,
                                },
                                {
                                    id: 2258,
                                    s1: '1',
                                    s2: '2',
                                    price: 12000,
                                    stock_num: 6,
                                },
                            ],
                        },
                    }
                },
                {
                    id: nanoid(),
                    img: `${require('../img/2.jpg')}`,
                    title: '人气商品2',
                    price: 190,
                    mation: {
                        goods_id: '1',
                        goods_info: {
                            picture: `${require('../img/2.jpg')}`,
                        },
                        sku: {
                            price: "190",
                            stock_num: 227,
                            tree: [
                                {
                                    k: '规格',
                                    k_s: 's1',
                                    k_id: '1',
                                    v: [
                                        {
                                            id: '1',
                                            name: '普通装',
                                        },
                                        {
                                            id: '2',
                                            name: '升级装',
                                        },
                                        {
                                            id: '3',
                                            name: '豪华装',
                                        },
                                    ],
                                },
                            ],
                            list: [
                                {
                                    id: 2259,
                                    s1: '2',
                                    s2: '1',
                                    price: 1900,
                                    stock_num: 110,
                                },
                                {
                                    id: 2260,
                                    s1: '3',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 99,
                                },
                                {
                                    id: 2257,
                                    s1: '1',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 111,
                                },
                                {
                                    id: 2258,
                                    s1: '1',
                                    s2: '2',
                                    price: 12000,
                                    stock_num: 6,
                                },
                            ],
                        },
                    }
                },
                {
                    id: nanoid(),
                    img: `${require('../img/2.jpg')}`,
                    title: '人气商品3',
                    price: 190,
                    mation: {
                        goods_id: '1',
                        goods_info: {
                            picture: `${require('../img/2.jpg')}`,
                        },
                        sku: {
                            price: "190",
                            stock_num: 227,
                            tree: [
                                {
                                    k: '规格',
                                    k_s: 's1',
                                    k_id: '1',
                                    v: [
                                        {
                                            id: '1',
                                            name: '普通装',
                                        },
                                        {
                                            id: '2',
                                            name: '升级装',
                                        },
                                        {
                                            id: '3',
                                            name: '豪华装',
                                        },
                                    ],
                                },
                            ],
                            list: [
                                {
                                    id: 2259,
                                    s1: '2',
                                    s2: '1',
                                    price: 1900,
                                    stock_num: 110,
                                },
                                {
                                    id: 2260,
                                    s1: '3',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 99,
                                },
                                {
                                    id: 2257,
                                    s1: '1',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 111,
                                },
                                {
                                    id: 2258,
                                    s1: '1',
                                    s2: '2',
                                    price: 12000,
                                    stock_num: 6,
                                },
                            ],
                        },
                    }
                },


            ],

        },
        {
            id: nanoid(),
            type: '今日促销',
            children: [
                {
                    id: nanoid(),
                    img: `${require('../img/3.png')}`,
                    title: '今日商品1',
                    price: 312,
                    mation: {
                        goods_id: '1',
                        goods_info: {
                            picture: `${require('../img/3.png')}`,
                        },
                        sku: {
                            price: "120",
                            stock_num: 227,
                            tree: [
                                {
                                    k: '规格',
                                    k_s: 's1',
                                    k_id: '1',
                                    v: [
                                        {
                                            id: '1',
                                            name: '普通装',
                                        },
                                        {
                                            id: '2',
                                            name: '升级装',
                                        },
                                        {
                                            id: '3',
                                            name: '豪华装',
                                        },
                                    ],
                                },
                            ],
                            list: [
                                {
                                    id: 2259,
                                    s1: '2',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 110,
                                },
                                {
                                    id: 2260,
                                    s1: '3',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 99,
                                },
                                {
                                    id: 2257,
                                    s1: '1',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 111,
                                },
                                {
                                    id: 2258,
                                    s1: '1',
                                    s2: '2',
                                    price: 12000,
                                    stock_num: 6,
                                },
                            ],
                        },
                    }
                },
                {
                    id: nanoid(),
                    img: `${require('../img/4.jpg')}`,
                    title: '今日商品2',
                    price: 358,
                    mation: {
                        goods_id: '1',
                        goods_info: {
                            picture: `${require('../img/4.jpg')}`,
                        },
                        sku: {
                            price: "120",
                            stock_num: 227,
                            tree: [
                                {
                                    k: '规格',
                                    k_s: 's1',
                                    k_id: '1',
                                    v: [
                                        {
                                            id: '1',
                                            name: '普通装',
                                        },
                                        {
                                            id: '2',
                                            name: '升级装',
                                        },
                                        {
                                            id: '3',
                                            name: '豪华装',
                                        },
                                    ],
                                },
                            ],
                            list: [
                                {
                                    id: 2259,
                                    s1: '2',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 110,
                                },
                                {
                                    id: 2260,
                                    s1: '3',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 99,
                                },
                                {
                                    id: 2257,
                                    s1: '1',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 111,
                                },
                                {
                                    id: 2258,
                                    s1: '1',
                                    s2: '2',
                                    price: 12000,
                                    stock_num: 6,
                                },
                            ],
                        },
                    }
                },
                {
                    id: nanoid(),
                    img: `${require('../img/4.jpg')}`,
                    title: '今日商品3',
                    price: 358,
                    mation: {
                        goods_id: '1',
                        goods_info: {
                            picture: `${require('../img/4.jpg')}`,
                        },
                        sku: {
                            price: "120",
                            stock_num: 227,
                            tree: [
                                {
                                    k: '规格',
                                    k_s: 's1',
                                    k_id: '1',
                                    v: [
                                        {
                                            id: '1',
                                            name: '普通装',
                                        },
                                        {
                                            id: '2',
                                            name: '升级装',
                                        },
                                        {
                                            id: '3',
                                            name: '豪华装',
                                        },
                                    ],
                                },
                            ],
                            list: [
                                {
                                    id: 2259,
                                    s1: '2',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 110,
                                },
                                {
                                    id: 2260,
                                    s1: '3',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 99,
                                },
                                {
                                    id: 2257,
                                    s1: '1',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 111,
                                },
                                {
                                    id: 2258,
                                    s1: '1',
                                    s2: '2',
                                    price: 12000,
                                    stock_num: 6,
                                },
                            ],
                        },
                    }
                }
            ]
        },
        {
            id: nanoid(),
            type: '好评如潮',
            children: [
                {
                    id: nanoid(),
                    img: `${require('../img/3.png')}`,
                    title: '好评商品1',
                    price: 312,
                    mation: {
                        goods_id: '1',
                        goods_info: {
                            picture: `${require('../img/3.png')}`,
                        },
                        sku: {
                            price: "120",
                            stock_num: 227,
                            tree: [
                                {
                                    k: '规格',
                                    k_s: 's1',
                                    k_id: '1',
                                    v: [
                                        {
                                            id: '1',
                                            name: '普通装',
                                        },
                                        {
                                            id: '2',
                                            name: '升级装',
                                        },
                                        {
                                            id: '3',
                                            name: '豪华装',
                                        },
                                    ],
                                },
                            ],
                            list: [
                                {
                                    id: 2259,
                                    s1: '2',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 110,
                                },
                                {
                                    id: 2260,
                                    s1: '3',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 99,
                                },
                                {
                                    id: 2257,
                                    s1: '1',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 111,
                                },
                                {
                                    id: 2258,
                                    s1: '1',
                                    s2: '2',
                                    price: 12000,
                                    stock_num: 6,
                                },
                            ],
                        },
                    }
                },
                {
                    id: nanoid(),
                    img: `${require('../img/4.jpg')}`,
                    title: '好评商品2',
                    price: 358,
                    mation: {
                        goods_id: '1',
                        goods_info: {
                            picture: `${require('../img/4.jpg')}`,
                        },
                        sku: {
                            price: "120",
                            stock_num: 227,
                            tree: [
                                {
                                    k: '规格',
                                    k_s: 's1',
                                    k_id: '1',
                                    v: [
                                        {
                                            id: '1',
                                            name: '普通装',
                                        },
                                        {
                                            id: '2',
                                            name: '升级装',
                                        },
                                        {
                                            id: '3',
                                            name: '豪华装',
                                        },
                                    ],
                                },
                            ],
                            list: [
                                {
                                    id: 2259,
                                    s1: '2',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 110,
                                },
                                {
                                    id: 2260,
                                    s1: '3',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 99,
                                },
                                {
                                    id: 2257,
                                    s1: '1',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 111,
                                },
                                {
                                    id: 2258,
                                    s1: '1',
                                    s2: '2',
                                    price: 12000,
                                    stock_num: 6,
                                },
                            ],
                        },
                    }
                },
                {
                    id: nanoid(),
                    img: `${require('../img/4.jpg')}`,
                    title: '好评商品3',
                    price: 358,
                    mation: {
                        goods_id: '1',
                        goods_info: {
                            picture: `${require('../img/4.jpg')}`,
                        },
                        sku: {
                            price: "120",
                            stock_num: 227,
                            tree: [
                                {
                                    k: '规格',
                                    k_s: 's1',
                                    k_id: '1',
                                    v: [
                                        {
                                            id: '1',
                                            name: '普通装',
                                        },
                                        {
                                            id: '2',
                                            name: '升级装',
                                        },
                                        {
                                            id: '3',
                                            name: '豪华装',
                                        },
                                    ],
                                },
                            ],
                            list: [
                                {
                                    id: 2259,
                                    s1: '2',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 110,
                                },
                                {
                                    id: 2260,
                                    s1: '3',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 99,
                                },
                                {
                                    id: 2257,
                                    s1: '1',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 111,
                                },
                                {
                                    id: 2258,
                                    s1: '1',
                                    s2: '2',
                                    price: 12000,
                                    stock_num: 6,
                                },
                            ],
                        },
                    }
                }
            ]
        },
        {
            id: nanoid(),
            type: '猜你喜欢',
            children: [
                {
                    id: nanoid(),
                    img: `${require('../img/3.png')}`,
                    title: '推荐商品1',
                    price: 312,
                    mation: {
                        goods_id: '1',
                        goods_info: {
                            picture: `${require('../img/3.png')}`,
                        },
                        sku: {
                            price: "120",
                            stock_num: 227,
                            tree: [
                                {
                                    k: '规格',
                                    k_s: 's1',
                                    k_id: '1',
                                    v: [
                                        {
                                            id: '1',
                                            name: '普通装',
                                        },
                                        {
                                            id: '2',
                                            name: '升级装',
                                        },
                                        {
                                            id: '3',
                                            name: '豪华装',
                                        },
                                    ],
                                },
                            ],
                            list: [
                                {
                                    id: 2259,
                                    s1: '2',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 110,
                                },
                                {
                                    id: 2260,
                                    s1: '3',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 99,
                                },
                                {
                                    id: 2257,
                                    s1: '1',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 111,
                                },
                                {
                                    id: 2258,
                                    s1: '1',
                                    s2: '2',
                                    price: 12000,
                                    stock_num: 6,
                                },
                            ],
                        },
                    }
                },
                {
                    id: nanoid(),
                    img: `${require('../img/4.jpg')}`,
                    title: '推荐商品2',
                    price: 358,
                    mation: {
                        goods_id: '1',
                        goods_info: {
                            picture: `${require('../img/4.jpg')}`,
                        },
                        sku: {
                            price: "120",
                            stock_num: 227,
                            tree: [
                                {
                                    k: '规格',
                                    k_s: 's1',
                                    k_id: '1',
                                    v: [
                                        {
                                            id: '1',
                                            name: '普通装',
                                        },
                                        {
                                            id: '2',
                                            name: '升级装',
                                        },
                                        {
                                            id: '3',
                                            name: '豪华装',
                                        },
                                    ],
                                },
                            ],
                            list: [
                                {
                                    id: 2259,
                                    s1: '2',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 110,
                                },
                                {
                                    id: 2260,
                                    s1: '3',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 99,
                                },
                                {
                                    id: 2257,
                                    s1: '1',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 111,
                                },
                                {
                                    id: 2258,
                                    s1: '1',
                                    s2: '2',
                                    price: 12000,
                                    stock_num: 6,
                                },
                            ],
                        },
                    }
                },
                {
                    id: nanoid(),
                    img: `${require('../img/4.jpg')}`,
                    title: '推荐商品3',
                    price: 358,
                    mation: {
                        goods_id: '1',
                        goods_info: {
                            picture: `${require('../img/4.jpg')}`,
                        },
                        sku: {
                            price: "120",
                            stock_num: 227,
                            tree: [
                                {
                                    k: '规格',
                                    k_s: 's1',
                                    k_id: '1',
                                    v: [
                                        {
                                            id: '1',
                                            name: '普通装',
                                        },
                                        {
                                            id: '2',
                                            name: '升级装',
                                        },
                                        {
                                            id: '3',
                                            name: '豪华装',
                                        },
                                    ],
                                },
                            ],
                            list: [
                                {
                                    id: 2259,
                                    s1: '2',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 110,
                                },
                                {
                                    id: 2260,
                                    s1: '3',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 99,
                                },
                                {
                                    id: 2257,
                                    s1: '1',
                                    s2: '1',
                                    price: 12000,
                                    stock_num: 111,
                                },
                                {
                                    id: 2258,
                                    s1: '1',
                                    s2: '2',
                                    price: 12000,
                                    stock_num: 6,
                                },
                            ],
                        },
                    }
                }
            ]
        }
    ],
    card: [

    ],
    search: [

    ],
    goods: [

    ]
}
const myreducers = (state = initstate, action) => {
    switch (action.type) {
        case 'SEARCHRES':
            return Object.assign({}, state, action)
        case 'ADDCARD':
            state.card = [...state.card, action.obj]
            return { ...state }
        case 'UPDATAGOODS':
            state.goods = [...state.goods, action.obj]
            return { ...state }
        case 'ADDNUM':
            state.card[action.index].selectedNum = state.card[action.index].selectedNum + 1
            return { ...state }
        case 'ADDGOODS':
            state.goods = [...state.goods, ...action.obj]
            return { ...state }
        case 'DELITEM':
            let res = state.goods.findIndex((item) => {
                if (item.datali.id == [...action.obj][0].datali.id && item.desc == '待付款') {
                    return item
                }
            })
            state.goods.splice(res, 1)
            state.goods = [...state.goods]
            return { ...state }
        case 'DELSHOP':
            state.card = [...action.arr]
            return { ...state }
        case 'DESC':
            if (state.card[action.index].selectedNum != 0) {
                state.card[action.index].selectedNum = state.card[action.index].selectedNum - 1
                return { ...state }
            }
        case 'DEL':
            state.card = action.arr
            return { ...state }
        default:
            return state
    }
}
export default myreducers