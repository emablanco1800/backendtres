import BaseRouter from "../base.router.js";
import UserController from "../../controllers/user.controller.js";

export default class UserRouter extends BaseRouter{
    #userController;

    constructor(){
        super();
        this.#userController = new UserController();
    };

    initialize(){
        const router = this.getRouter();

        this.addGetRoute("/", [], (req,res) => this.#userController.getAll(req,res));

        this.addPostRoute("/", [], (req,res) => this.#userController.createUser(req,res));

        this.addGetRoute("/:id", [], (req,res) => this.#userController.findOneById(req,res));

        this.addPutRoute("/update/:id",[], (req,res) => this.#userController.updateOneById(req,res));

        this.addDeleteRoute("/delete/:id",[], (req,res) => this.#userController.deleteUserById(req,res));

        this.addDeleteRoute("delete/many", [], (req,res) => this.#userController.deleteManyUsers(req,res));

        router.use((err, req, res, next) => {
            res.sendError(err);
        });
    }
}