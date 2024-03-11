import { Request, Response } from 'express';
import { UserOrgs } from '../model/UserOrgs';


const userOrgs = new UserOrgs();


export const addUserOrganization = async (req: Request, res: Response): Promise<void> => {
    try {
        
        const { user_id, org_id, user_role } = req.body;
        console.log(req.body)
        if (!user_id || !org_id || !user_role) {
            throw new Error("user_id, org_id, and user_role are required.");
        }

        await userOrgs.addUserOrg(user_id, org_id, user_role);

        res.status(200).json({ message: 'User organization added successfully' });
    } catch (error) {
        console.error('Error adding user organization:', error);
        res.status(500).json({ error: 'Unable to add user organization' });
    }
};
// export const getUserOrganization = async (req: Request, res: Response): Promise<void> => {
//     try {
//         const { user_id } = req.body; 
//         if (!user_id) {
//             res.status(400).json({ error: 'user_id is required' });
//             return;
//         }

//         const userOrganizations = await userOrgs.getUserOrganizations(user_id);
//         res.status(200).json(userOrganizations);
//     } catch (error) {
//         console.error('Error retrieving user organizations:', error);
//         res.status(500).json({ error: 'Unable to retrieve user organizations' });
//     }
// };
export const getUserOrganizationDetails = async (req: Request, res: Response): Promise<void> => {
    try {
        const { user_id } = req.body;
        console.log("the user id is",user_id)
        if (!user_id) {
            res.status(400).json({ error: 'user_id is required' });
            return;
        }

        // Fetch user organizations
        const userOrganizations = await userOrgs.getUserOrganizations(user_id);
        console.log(userOrganizations)

        // Check if userOrganizations is undefined or empty
        if (!userOrganizations || userOrganizations.length === 0) {
            res.status(404).json({ error: 'No user organizations found' });
            return;
        }
        const orgIds = userOrganizations.map((userOrg: any) => userOrg.org_id);
        console.log("the org iid is",orgIds)

        // Fetch organization details for each org ID
        const organizationDetails = await Promise.all(orgIds.map(async (org_id: string) => {
            try {
                const orgDetails = await userOrgs.getOrganizationDetails(org_id);
                console.log(orgDetails)
                return { ...orgDetails, user_id }; 
            } catch (error) {
                console.error(`Error retrieving organization details for org_id ${org_id}:`, error);
                return null; 
            }
        }));

        res.status(200).json(organizationDetails.filter(Boolean)); 
    } catch (error) {
        console.error('Error retrieving user organization details:', error);
        res.status(500).json({ error: 'Unable to retrieve user organization details' });
    }
};
