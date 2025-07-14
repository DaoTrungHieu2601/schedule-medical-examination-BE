import { handleUserLogin } from "../services/userService";

export const handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter'
        });
    }

    let userData;
    try {
        userData = await handleUserLogin(email, password);
    } catch (e) {
        console.error('Error in handleUserLogin:', e);
        return res.status(500).json({
            errCode: -1,
            message: 'Internal server error'
        });
    }

    if (!userData) {
        return res.status(500).json({
            errCode: -2,
            message: 'No response from userService'
        });
    }

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    });
};