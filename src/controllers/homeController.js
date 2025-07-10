import db from "../models/index";

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
