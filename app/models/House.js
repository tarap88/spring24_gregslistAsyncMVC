import { AppState } from "../AppState.js"




export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = data.updatedAt
    }



    get HouseCard() {
        return `
     <div class="col-12 col-md-6">
       <div class="card">
         <img class="card-img-top"
           src="${this.imgUrl}"
           alt="Image of a ${this.year}, ${this.bedrooms} ${this.bathrooms}">
         <div class="card-body">
           <h3 class="card-title"> Year: ${this.year}</h3>
          <div> <h5>Bedrooms: ${this.bedrooms}<h5> 
           <h5>Bathrooms: ${this.bathrooms}<h5>
          <h5>Levels: ${this.levels}<h5> </div>
           <p class="card-text">${this.description}</p>
           <div class="d-flex justify-content-between align-items-center">
             <p class="fw-bold fs-4">$${this.price}</p>
             <div>
               <span class="text-secondary me-2">${this.creator.name}</span>
               <img class="profile-picture profile-picture-sm"
                 src="${this.creator.picture}"
                 alt="an image of ${this.creator.name}">
             </div>
           </div>
           <div class="text-secondary">Listed on ${this.createdAt.toDateString()}</div>
         </div>
       </div>
        ${this.DeleteButton}
     </div>
     `
    }

    get DeleteButton() {
        if (this.creatorId == AppState.account?.id) { // creatorId's are the account ids of the user that created the car. So we can compare them, to verify ownership
            return `
          <button onclick="app.CarsController.deleteCar('${this.id}')" class="btn btn-danger" title="delete this car"><i class="mdi mdi-delete-forever"></i></button>
          `
        }
        return ''
    }
}
