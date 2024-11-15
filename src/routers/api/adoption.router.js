import BaseRouter from "../base.router.js";
import AdoptionController from "../../controllers/adoption.controller.js";

export default class AdoptionRouter extends BaseRouter{
    #adoptionController
    constructor(){
        super();
        this.#adoptionController = new AdoptionController();
    }

    initialize(){
        const router = this.getRouter();

        this.addGetRoute("/all",[],(req,res) => this.#adoptionController.getAll(req,res));

        this.addGetRoute("/:id", [], (req,res) => this.#adoptionController.getOneById(req,res));

        this.addPostRoute("/", [], (req,res) => this.#adoptionController.createAdoption(req,res));

        this.addDeleteRoute("/:id", [], (req,res) => this.#adoptionController.deleteOneById(req,res))
    }
};