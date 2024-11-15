import PetService from "../services/pet.service.js";
import { generatePetsMock,generateSinglePet } from "../utils/index.js";

export default class PetController{
    #petService
    constructor(){
        this.#petService = new PetService();
    }

    async getAll(req,res){
        try {
            const pets = await this.#petService.getAll(req.params)
            res.sendSuccess200(pets)
        } catch (error) {
            res.sendError(error)
        }
    };

    async createPet(req,res){
        try {
            const pet = await this.#petService.createPet(req.body)
            res.sendSuccess201(pet)
        } catch (error) {
            res.sendError(error)
        }
    };

    async getOneById(req,res){
        try {
            const {id} = req.params;
            const pet = await this.#petService.findOneById(id);
            res.sendSuccess200(pet)
        } catch (error) {
            res.sendError(error)
        }
    }

    async updateOneById(req,res){
        try {
            const {id} = req.params;
            const pet = await this.#petService.updateOneById(id,req.body);
            res.sendSuccess200(pet)
        } catch (error) {
            res.sendError(error)
        }

    };

    async deleteOneById(req,res){
        try {
            const {id} = req.params;
            const response = await this.#petService.deleteOneById(id);
            res.sendSuccess200(response)
        } catch (error) {
            res.sendError(error)
        }
    }

    async generateSinglePet(req,res){
        try {
            const pet = generateSinglePet();
            const response = await this.#petService.createPet(pet);
            res.sendSuccess201(response);
            
        } catch (error) {
            res.sendError(error);
        };
    };

    async generate_n_pets(req,res,amount){
        try {
            const pets = generatePetsMock(amount);
            const response = await this.#petService.insertMany(pets);
            res.sendSuccess201(response);
        } catch (error) {
            res.sendError(error);
        };
    };

    async deleteManyPets(req,res){
        try {
            const response = await this.#petService.deleteManyById(req.body);
            res.sendSuccess200(response);
        } catch (error) {
            res.sendError(error);
        }
    };
}