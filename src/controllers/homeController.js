import db from "../models/index";
import { createNewUser, getAllUser, getUserInfoById, updateUserData, deleteUserById } from '../services/CRUDService'

export const getHomePage = (req, res) => {
    return res.send('Hieu Toki');
};

export const HomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', { data: JSON.stringify(data) });
    } catch (e) {
        console.log(e)
    }
};

export const getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

export const postCRUD = async (req, res) => {
    let message = await createNewUser(req.body);
    console.log(message);
    return res.send('Text postCRDU');
}

export const displayGetCRUD = async (req, res) => {
    let data = await getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

export const getEidtCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await getUserInfoById(userId);
        // check user data not found
        return res.render('editCRUD.ejs', {
            user: userData,
        })
    } else {
        return res.send("User not found!")
    }
}

export const putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUser
    })
}

export const deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await deleteUserById(id);
        return res.send("delete the user succeed ")
    }
    else {
        res.send("user not found")
    }
}
