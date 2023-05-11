interface IColourService {
    getHexColourFromStringBySymbol: (dataString: string) => string;
    changeAllColoursInString: (dataString: string, prevColour: string, newColour: string) => string;
}

export class ColourService implements IColourService {
    private readonly hexColourLength = 6;

    public getHexColourFromStringBySymbol(dataString: string): string {
        const foundIndex = dataString.indexOf("#");

        return dataString.slice(foundIndex, foundIndex + this.hexColourLength + 1);
    }

    // eslint-disable-next-line class-methods-use-this
    public changeAllColoursInString(dataString: string, prevColour: string, newColour: string): string {
        return dataString.replaceAll(prevColour, newColour);
    }

    public injectNewColour(dataString: string, newColour: string): string {
        const prevColour = this.getHexColourFromStringBySymbol(dataString);

        return this.changeAllColoursInString(dataString, prevColour, newColour);
    }
}
