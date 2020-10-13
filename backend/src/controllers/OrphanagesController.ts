import { request, Request, Response } from  'express';
import { getRepository } from "typeorm";
import Orphanage from '../models/Orphanage';

import orphanageView from '../views/orphanagesView'

export default {
  async create(req: Request, res: Response){
    const { name, latitude, longitude, about, opening_hours, open_on_weekends, instructions } = req.body;
  
    const orphanagesRepository = getRepository(Orphanage);
  
    const requestImages = req.files as Express.Multer.File[];

    const images = requestImages.map((image)=>{
      return { path: image.filename }
    });

    const orphanages = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      opening_hours,
      open_on_weekends,
      instructions,
      images,
    })
  
    await orphanagesRepository.save(orphanages);
  
    return res.status(201).json({"status": "ok", "message":"Orphanage created"});
  },
  async index(req: any, res:any){
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({relations:['images']});

    return res.json(orphanageView.renderMany(orphanages));
  },
  async show(req: any, res:any){
    const { id } = req.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, { relations:['images'] })
      .catch((error) => {
        return res.status().json(error)
      }
    );

    return res.json(orphanageView.render(orphanage));
  },
}