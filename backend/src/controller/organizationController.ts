import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Request, Response } from 'express';
import { Organization } from "../model/Organization";

const dynamodbClient = new DynamoDBClient({ region: "us-east-1" });


export const createOrganization = async (req: Request, res: Response): Promise<void> => {
    try {
        const organization = new Organization();
        const { partner_id,name, address } = req.body;

        await organization.addOrganization(partner_id,name, address);
        res.status(200).json({ message: 'Organization added successfully' });
    } catch (error) {
        console.error('Error adding organization:', error);
        res.status(500).json({ error: 'Unable to add organization' });
    }
};
