import AWS from 'aws-sdk';
import { Request,Response } from 'express';

const docClient=new AWS.DynamoDB.DocumentClient({
    region:'us-east-1'
});
class MyStuff{
    async  getMyStuffApplications(req: Request, res: Response) {
        const {user_id}=req.body
        try {
            const params = {
                TableName: 'application',
            FilterExpression: '#st = :app_status AND pk = :user_id',
            ProjectionExpression: 'category, ltf_id, place_name, started_on, #st,app_type,companyName, expiryDate',
            ExpressionAttributeNames: {
                '#st': 'app_status',
            },
            ExpressionAttributeValues: {
                ':app_status': 'In Progress',
                ':user_id': user_id,
            },
            };
            const data=await docClient.scan(params).promise();
            res.status(200).json(data.Items);
        } catch (error) {
            console.error('Error while getting applications with status In Progress:', error);
            res.status(500).json({ message: 'Internal server error' });
            
        }
        
    }

    async filterMyStuffApplications(req: Request, res: Response) {
        const { ltf_id } = req.body;
        try {
            const params = {
                TableName: 'application',
                FilterExpression: '#st = :app_status AND ltf_id = :ltf_id',
                ProjectionExpression: 'category, place_name, started_on, #st, app_type, companyName, expiryDate',
                ExpressionAttributeNames: {
                    '#st': 'app_status',
                },
                ExpressionAttributeValues: {
                    ':app_status': 'In Progress',
                    ':ltf_id': ltf_id,
                },
            };
            const data = await docClient.scan(params).promise();
            res.status(200).json(data.Items);
        } catch (error) {
            console.error('Error while getting applications with status In Progress:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    
    

}


export default new MyStuff();