import userModel from '../models/user.model.js';

export const isLoggedIn = async (req, res, next) => {
    if(!req.cookies.token){
        req.flash('error', 'You must be logged in first');
        return res.redirect('/');
    }

    try {
        const decoded = await userModel.verify(req.cookies.token,process.env.JWT_SECRET);
        const user = await userModel.findOne({email: decoded.email}).select("-password")
        req.user = user;
        next(); 
    } catch (error) {
        req.flash("error","something went wrong");
        res.redirect('/');
    }
}