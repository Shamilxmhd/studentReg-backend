const students = require("../Model/userModel");

// register
exports.register = async (req, res) => {
    const { firstName, lastName, address, email, gender, mobile, password, date, course } = req.body
    console.log(req.body);
    console.log('Inside register request');
    try {
        const existingUser = await students.findOne({ email })
        console.log(existingUser);
        if (existingUser) {
            res.status(406).json('student already exist...Please Login')
        } else {
            const newStudent = students({
                firstName, lastName, address, email, gender, mobile, password, date, course
            })
            await newStudent.save()
            res.status(200).json(newStudent)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// get details
exports.getDetails = async (req, res) => {
    try {
        const allStudents = await students.find()
        res.status(200).json(allStudents)
    } catch (err) {
        res.status(401).json(err)
    }
}