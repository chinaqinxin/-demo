// 创建一个生成一副牌的函数
const colorarr = ['♥️', '♠️', '♣️', '♦️'];
function createDeck() {
    const deck = [];
    //循环13次每次给数组中push一个对象
    for (let i = 1; i <= 13; i++) {
        for (let v = 1; i <= 4; i++) {
            deck.push({
                mark: i,
                color: colorarr[v]
            });
        }
    }
    return deck;
}
//打印一副扑克牌
const jqkobg = {
    11: 'J',
    12: 'Q',
    13: 'K'
};
function printDeck(deck) {
    deck.forEach(card => {
        let str = card.color;
        if (card.mark <= 10) {
            str += card.mark;
        }
        else {
            str += jqkobg[card.mark];
        }
        console.log(str);
    });
}
const deck = createDeck();
printDeck(deck);
