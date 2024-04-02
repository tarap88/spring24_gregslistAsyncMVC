
import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { housesService } from "../services/HousesService.js";


export class HousesController {
    constructor() {
        console.log('ready to sell house');
        this.getHouses()
        AppState.on('houses', this.drawHouses)
        AppState.on('account', this.drawHouses)
    }

    drawHouses() {
        const houses = AppState.houses
        let houseCards = ''
        houses.forEach(car => houseCards += car.HouseCard)
        setHTML('house-listings', houseCards)
    }


    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            console.error('!!', error)
            Pop.toast("Couldn't Get Houses, Please try Again!", 'error')
        }
    }

}