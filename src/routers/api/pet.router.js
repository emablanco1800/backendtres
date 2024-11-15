import BaseRouter from "../base.router.js";
import PetController from "../../controllers/pet.controller.js";

export default class PetRouter extends BaseRouter {
    #petController;

    constructor() {
        super();
        this.#petController = new PetController();
    }

    initialize() {
        const router = this.getRouter();

        this.addGetRoute("/",[], (req,res) => this.#petController.getAll(req,res))

        this.addGetRoute("/:id", [], (req,res) => this.#petController.getOneById(req,res))

        this.addPostRoute("/",[],(req,res) => this.#petController.createPet(req,res))

        this.addPutRoute("/:id",[], (req,res) => this.#petController.updateOneById(req,res));

        this.addDeleteRoute("/:id",[], (req,res) => this.#petController.deleteOneById(req,res));

        this.addDeleteRoute("/many", [], (req,res) => this.#petController.deleteManyPets(req,res));

        router.use((err, req, res, next) => {
            res.sendError(err);
        });
    }
}