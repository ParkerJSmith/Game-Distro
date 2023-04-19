import gameData from "data/game_data/game_data.json";

export function getGameFullImages(): string[] {
    const gameImages = [];
    for (let game of gameData) {
        gameImages.push(game.fullImage);
    }
    return gameImages;
}

export function getGameFullImage(id: number): string {
    for (let game of gameData) {
        if (game.id === id) {
            return  game.fullImage;
        }
    }
    return "";
}

export function getGameVerticalImages(): string[] {
    const gameImages = [];
    for (let game of gameData) {
        gameImages.push(game.verticalImage);
    }
    return gameImages;
}

export function getGameTitlesEnglish(): string[] {
    const gameTitles = [];
    for (let game of gameData) {
        gameTitles.push(game.titleEn);
    }
    return gameTitles;
}

export function getGameTitlesJapanese(): string[] {
    const gameTitles = [];
    for (let game of gameData) {
        gameTitles.push(game.titleJp);
    }
    return gameTitles;
}

export function getGamePrice(id: number): string {
    for (let game of gameData) {
        if (game.id === id) {
            return  game.price;
        }
    }
    return "";
}

export function getGameDiscount(id: number): string {
    for (let game of gameData) {
        if (game.id === id) {
            return  game.discount;
        }
    }
    return "";
}