export const createGameCard = (defaultIcon, flippedCardIcon) => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    const notFlippedCardI = document.createElement('i');
    const fllipedCardI = document.createElement('i');

    notFlippedCardI.classList.add('fa', `fa-${defaultIcon}`);
    fllipedCardI.classList.add('fa', `fa-${flippedCardIcon}`);

    card.append(fllipedCardI, notFlippedCardI);
    return card;
}