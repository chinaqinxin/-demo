type Deck = NormalCard[]  // 一副牌
enum Color {
    heart = '♥️',
    spade = '♠️',
    club = '♣️',
    diamond = '♦️'
}

enum Mark {
    A = 'A',
    two = '2',
    three = '3',
    four = '4',
    five = '5',
    six = '6',
    seven = '7',
    eight = '8',
    nine = '9',
    ten = '10',
    eleven = 'J',
    twelve = 'Q',
    king = 'K'
}
type NormalCard = {  // 一张牌
    color: Color,
    mark: Mark // 1-13 牌面
}
// // 创建一个生成一副牌的函数
// const colorarr: Color[] = ['♥️', '♠️', '♦️', '♣️']
function createDeck(): Deck {
    const deck: Deck = []
    const marks = Object.values(Mark)
    const colors = Object.values(Color)
    for (const m of marks) {
        for (const c of colors) {
            deck.push({
                mark: m,
                color: c
            })
        }
    }
    //循环13次每次给数组中push一个对象
    // for (let i = 1; i <= 13; i++) {
    //     for (let v = 0; v <= 3; v++) {
    //         deck.push({
    //             mark: i === 1 ?  ,
    //             color: colorarr[v]
    //         })
    //     }
    // }
    return deck
}

//打印一副扑克牌
// const jqkobg: { [key: number]: string } = {
//     11: 'J',
//     12: 'Q',
//     13: 'K'
// }
function printDeck(deck: Deck) {
    let result = "\n"
    deck.forEach((card, i) => {
        let str = card.color + card.mark;
        // if (card.mark <= 10) {
        //     str += card.mark
        // } else {
        //     str += jqkobg[card.mark]
        // }
        result += str + "\t"
        if ((i + 1) % 4 === 0) {
            result += '\n'
        }
    })
    result += `🫅 大王\t👸小王`
    console.log(result);
}

const deck = createDeck()
printDeck(deck)