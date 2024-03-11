

import { DynamoDBClient, PutItemCommand, GetItemCommand, DeleteItemCommand, UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import express, { Request, Response } from 'express';
import { Partner } from "../model/Partner";


const dynamodbClient = new DynamoDBClient({ region: "us-east-1" });


export const createPartner = async (req: Request, res: Response): Promise<void> => {
    try {
        const partner = new Partner();
        const item = {
            name: req.body.name,
         
        };

        await partner.addItem(item);
        res.status(200).json({ message: 'Item added successfully' });
    } catch (error) {
        console.error('Error adding item:', error);
        res.status(500).json({ error: 'Unable to add item' });
    }
};

