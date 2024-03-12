import { Request, Response } from 'express';
import AWS from 'aws-sdk';


const dynamoDB = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1'
});
class ApplicationController {
    async getAllApplications(req: Request, res: Response) {
        const { user_id } = req.body;
       
        const params = {
            TableName: "application",
            KeyConditionExpression: "pk = :user_id",
            ExpressionAttributeValues: {
                ":user_id": user_id
            },
            ProjectionExpression: "application_id,category,app_type,ltf_id,place_name,started_on,app_status",
        };
        try {
            const data = await dynamoDB.query(params).promise();
            res.json(data.Items);
        } catch (error) {
            console.error('Error fetching applications:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async insertApplications(req: Request, res: Response) {
        const { user_id, place_name, started_on, app_status, category, ltf_id, app_type} = req.body;

    try {
        
        const scanParams = {
            TableName: "application",
            ProjectionExpression: "application_id"
        };

        const scanResult = await dynamoDB.scan(scanParams).promise();

       
        let newApplicationId = 1; 
        if (scanResult.Items) {
            scanResult.Items.forEach((item: any) => {
                newApplicationId = Math.max(newApplicationId, item.application_id || 0);
            });
            newApplicationId += 1; 
        }

        const params = {
            TableName: "application",
            Item: {
                pk: user_id,
                sk: `APP#${newApplicationId}`,
                place_name,
                started_on,
                app_status,
                category,
                application_id: newApplicationId,
                ltf_id,
                app_type,
            }
        };

    
        await dynamoDB.put(params).promise();
        res.status(201).json({ message: 'Application inserted successfully' });
    } catch (error) {
        console.error('Error inserting application:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
async searchApplication(req: Request, res: Response) {
    const { user_id } = req.params;
    const { query } = req.query;

    if (!query || !user_id) {
        return res.status(400).json({ error: 'Query parameter and user ID are required' });
    }

    const parsedQuery = parseInt(query as string, 10);

    try {
        let params: AWS.DynamoDB.DocumentClient.ScanInput;

        if (!isNaN(parsedQuery)) {
            // If a valid integer, search by application_id
            params = {
                TableName: 'application',
                FilterExpression: 'application_id = :query AND pk = :user_id',
                ExpressionAttributeValues: {
                    ':query': parsedQuery,
                    ':user_id': user_id
                }
            };
        } else {
            // If not a valid integer, search only with string attributes
            params = {
                TableName: 'application',
                FilterExpression: '(contains(place_name, :query) OR contains(category, :query)OR contains(app_status, :query)OR contains(app_type, :query) OR contains(ltf_id, :query)) AND pk = :user_id',
                ExpressionAttributeValues: {
                    ':query': query,
                    ':user_id': user_id
                }
            };
        }

        const data = await dynamoDB.scan(params).promise();
        res.json(data.Items);
    } catch (error) {
        console.error('Error searching applications:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async deleteApplication(req: Request, res: Response) {
    const { user_id, application_id } = req.body;

    if (!user_id || !application_id) {
        return res.status(400).json({ error: 'User ID and Application ID are required' });
    }

    try {
        const params = {
            TableName: 'application',
            Key: {
                pk: user_id,
                sk: application_id,
            }
        };

        const data = await dynamoDB.delete(params).promise();
        res.json({ message: 'Application deleted successfully' });
    } catch (error) {
        console.error('Error deleting application:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

}

export default new ApplicationController();