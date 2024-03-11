
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

AWS.config.update({ region: "us-east-1" });
const documentClient = new AWS.DynamoDB.DocumentClient();

export class Organization {
  async createTable() {
    const tableName = "organizations";
    const params = {
      TableName: tableName,
      KeySchema: [
        { AttributeName: "org_id", KeyType: "HASH" },     
        { AttributeName: "partner_id", KeyType: "RANGE" } 
      ],
      AttributeDefinitions: [
        { AttributeName: "org_id", AttributeType: "S" },
        { AttributeName: "partner_id", AttributeType: "S" },
        { AttributeName: "name", AttributeType: "S" },
        { AttributeName: "address", AttributeType: "S" }
        
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
      },
    };

    try {
      const dynamodb = new AWS.DynamoDB();
      await dynamodb.createTable(params).promise();
      console.log(`Table ${tableName} created successfully.`);
    } catch (error) {
      console.error(`Error creating table ${tableName}:`, error);
      throw error;
    }
  }

  async addOrganization(partner_id: string, name: string, address: string) {
    const org_id = uuidv4(); 

    const putParams = {
      TableName: "organizations",
      Item: {
        org_id: org_id,
        partner_id: partner_id,
        name: name,
        address: address,
        
      },
    };

    try {
      const data = await documentClient.put(putParams).promise();
      console.log("Organization added successfully:", data);
    } catch (error) {
      console.error("Error adding organization:", error);
      throw error;
    }
  }

  async getOrganization(org_id: string, partner_id: string) {
    const queryParams = {
      TableName: "organizations",
      Key: {
        org_id: org_id,
        partner_id: partner_id
      }
    };

    try {
      const data = await documentClient.get(queryParams).promise();
      console.log("Organization retrieved successfully:", data.Item);
      return data.Item;
    } catch (error) {
      console.error("Error getting organization:", error);
      throw error;
    }
  }
}
