import UserService from "../services/user.service.js";
import { generateUsersMock, generateSingleUser } from "../utils/index.js";

export default class UserController{
    #userService
    constructor(){
        this.#userService = new UserService();
    };

    async getAll(req,res){
        try {
            const users = await this.#userService.getAll(req.params);
            res.sendSuccess200(users);
        } catch (error) {
            res.sendError(error);
        }
    };

    async createUser(req,res){
        try {
            const user = await this.#userService.createUser(req.body);
            res.sendSuccess201(user);
        } catch (error) {
            res.sendError(error);
        }
    };

    async findOneById(req,res){
        try {
            const {id} = req.params
            const user = await this.#userService.findOneById(id);
            res.sendSuccess200(user);
        } catch (error) {
            res.sendError(error);
        }
    };

    async updateOneById(req,res){
        try {
            const {id} = req.params;
            const user = await this.#userService.updateOneById(id, req.body);
            res.sendSuccess200(user);
        } catch (error) {
            res.sendError(error)
        }
    };

    async deleteUserById(req,res){
        try {
            const {id} = req.params;
            const user = await this.#userService.deleteOneById(id);
            res.sendSuccess200(user);
        } catch (error) {
            res.sendError(error);
        }
    };

    async mockingUsers(req,res) {
        try {
            const users = generateUsersMock(50);
            const response = await this.#userService.insertMany(users);
            res.sendSuccess201(response);
        } catch (error) {
            res.sendError(error);
        };
    };

    async generate_n_Users(req,res,amount) {
        try {
            const users = generateUsersMock(amount);
            const response = await this.#userService.insertMany(users);
            res.sendSuccess201(response);
        } catch (error) {
            res.sendError(error);
        };
    };

    async generateSingleUser(req,res) {
        try {
            const user = generateSingleUser();
            const response = await this.#userService.createUser(user);
            res.sendSuccess201(response);
        } catch (error) {
            res.sendError(error);
        }
    };

    async deleteManyUsers(req,res){
        try {
            const response = await this.#userService.deleteManyById(req.body);
            res.sendSuccess200(response);
        } catch (error) {
            res.sendError(error);
        }
    };
}