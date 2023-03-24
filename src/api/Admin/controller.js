import appDetailsModel from '../Common/appDetailsModel';
import userDetailsModel from '../Common/userDetailsModel';
import appRatingModel from '../Common/appRatingModel';
import adminLoginModel from './adminLoginModel';
import Feedback from '../Common/feedBackModel'
import postAppsModel from './postAppsModel';
import {sendEmail} from '../Common/email';

export const adminLogin = (req, res) => {
  adminLoginModel.findOne({ "username": req.query.username, "password": req.query.password }, (err, result) => {
    res.send(result);
  })
}

export const updatePassword = (req, res) =>{
  adminLoginModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, result) => {
    if (err) {
        res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const postapps = (req, res) => {
  postAppsModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewFeedBack = (req, res) => {
  Feedback.find((err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  })
}

export const viewRating = (req, res) => {
  appRatingModel.find((err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  })
}

export const viewUsers = (req, res) => {
  userDetailsModel.find((err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  })
}

// export const sendFiles = (req, res) => {
//   sendFilesModel.create(req.body, (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       const subject = 'File Recived';
//       const body = `You Recived a File from Admin<br><br>Subject: ${req.body.subject}<br>Secret Key: ${req.body.key}<br>Please Login and Download File Using this Secret Key<br>Thank You.`;
//       sendEmail(req.body.emailid, subject, body);
//       res.send(result);
//     }
//   })
// }

export const viewPostedApps = (req, res) =>
  sendAllPostedApps(res);

const sendAllPostedApps = (res) => {
  postAppsModel.find({}, 'appname description category updatedversion updationdate memorysize language seller appsprice appsimage', (err, apps) => {
    if (!err) {
      res.send(apps);
    } else {
      res.send(err);
    }
  })
}

export const downloadFiles = (req, res) => {
  sendFilesModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const show = (req, res) => {
  postAppsModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const deletePosts = (req, res) => {
  postAppsModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      sendAllPostedApps(res);
    }
  });
}

export const update = (req, res) => {
  postAppsModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      sendAllPostedApps(res);
    }
  })
}

export const viewLeakFiles = (req, res) => {
  agentFilesModel.find({}, 'username subject date key from', (err, leakFiles) => {
    if (!err) {
      res.send(leakFiles);
    } else {
      res.send(err);
    }
  })
}

export const downloadLeakFiles = (req, res) => {
  agentFilesModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const forgotPassword = (req, res) => {
  adminLoginModel.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
        const subject = 'Credentials Recived';
        const body = `UserName: ${results.username}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(req.query.emailid, subject, body);
      })      
      res.send(result);
    }
  })
}