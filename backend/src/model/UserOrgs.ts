import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

AWS.config.update({ region: "us-east-1" });
const dynamodb = new AWS.DynamoDB();
const documentClient = new AWS.DynamoDB.DocumentClient();

export class UserOrgs {
  async createTable() {
    const tableName = "userOrgs";
    const params = {
      TableName: tableName,
      KeySchema: [
        { AttributeName: "user_id", KeyType: "HASH" },   
        { AttributeName: "org_id", KeyType: "RANGE" },  
      ],
      AttributeDefinitions: [
        { AttributeName: "user_id", AttributeType: "S" },
        { AttributeName: "org_id", AttributeType: "S" },
        { AttributeName: "user_role", AttributeType: "S" }, 
        
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    };

    try {
      await dynamodb.createTable(params).promise();
      console.log(`Table ${tableName} created successfully.`);
    } catch (error) {
      console.error(`Error creating table ${tableName}:`, error);
      throw error;
    }
  }

  async addUserOrg(user_id: string, org_id: string, user_role: string) {
    const putParams = {
      TableName: "userOrgs",
      Item: {
        user_id: user_id,
        org_id: org_id,
        user_role: user_role,
        
      },
    };

    try {
      const data = await documentClient.put(putParams).promise();
      console.log("User org added successfully:", data);
    } catch (error) {
      console.error("Error adding user org:", error);
      throw error;
    }
  }

  async getOrganizationDetails(org_id: string) {
    let Params = {
      TableName: "organizations",
    KeyConditionExpression: "org_id = :orgId",
        ExpressionAttributeValues: {
            ":orgId": org_id
        }
    };

    try {
      const data = await documentClient.query(Params).promise();
      console.log("Organization details retrieved successfully:", data.Items);
      return data.Items;
    } catch (error) {
      console.error("Error getting organization details:", error);
      throw error;
    }
  }

  async getUserOrganizations(user_Id: string) {
    const params = {
        TableName: "userOrgs",
        KeyConditionExpression: "user_id = :userId",
        ExpressionAttributeValues: {
            ":userId": user_Id
        }
    };

    try {
        const data = await documentClient.query(params).promise();
        return data.Items;
    } catch (error) {
        console.error("Error getting user organizations:", error);
        throw error;
    }
}
}
