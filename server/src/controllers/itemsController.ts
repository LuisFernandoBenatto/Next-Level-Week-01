import {Request, Response} from 'express'; 
import knex from '../database/connection';

class ItemsController{
    async index (request: Request, response: Response) {
     const items = await knex('items').select('*');
        const serializedItems = items.map(item =>{
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.104:3333/uploads/${item.image}`,
            };
        });
    //return response.json({ message: 'Hello World!' });
    return response.json(serializedItems);
    }
}   

export default ItemsController;