
import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import connection from '../service/database.js';

const router = Router();

router.post('/',(req,res)=>{
    let username = req.body.txtUsername;
    let password = req.body.txtPassword;
    let firstname = req.body.txtFirstname;
    let lastname = req.body.txtLastname;
    let email = req.body.txtEmail;
    let phone = req.body.txtPhone;
    let address = req.body.txtAddress;
    let avatarURL = req.body.txtAvatarURL;
    let role = req.body.txtRole;

});

export default router;