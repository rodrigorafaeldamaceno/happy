import { Request, Response } from  'express';
import { getRepository } from "typeorm";
import Orphanage from '../models/Orphanage';

export default {
  async create(req: Request, res: Response){
    const { name, latitude, longitude, about, opening_hours, open_on_weekends, instructions } = req.body;
  
    const orphanagesRepository = getRepository(Orphanage);
  
    const orphanages = orphanagesRepository.create({
      name, latitude, longitude, about, opening_hours, open_on_weekends, instructions
    })
  
    await orphanagesRepository.save(orphanages);
  
    return res.status(201).json({"status": "ok", "message":"Orphanage created"});
  },
  async index(req: any, res:any){
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find();

    return res.json(orphanages);
  },
  async show(req: any, res:any){
    const { id } = req.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id).catch((error) => {
      return res.status().json(error)
    });

    return res.json(orphanage);
  },
}