import appDetailsModel from '../Common/appDetailsModel';
import userDetailsModel from '../Common/userDetailsModel';
import appRatingModel from '../Common/appRatingModel';
import appsDownload from '../Admin/postAppsModel'
import feedBack from '../Common/feedBackModel'
import {sendEmail} from '../Common/email';

export const userRegistration = (req, res) => {
  userDetailsModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const forgotPassword = (req, res) => {
  userDetailsModel.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
        const subject = 'Credentials Recived';
        const body = `UserName: ${results.name}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(req.query.emailid, subject, body);
      })      
      res.send(result);
    }
  })
}

export const updatePassword = (req, res) =>{
  userDetailsModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, result) => {
    if (err) {
        res.send(err);
    } else {
      res.send(result);
    }
  })
}


export const userFeedback = (req, res) => {
  feedBack.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewApps = (req, res) =>
  sendAllAppsName(res);

const sendAllAppsName = (res) => {
  appsDownload.find((er, apps) => {
    if (!er) {
      res.send(apps);
    } else {
      res.send(er);
    }
  })
}

export const appsRating = (req, res) => {
  appRatingModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const userLogin = (req, res) => {
  userDetailsModel.findOne({ "name": req.query.name, "password": req.query.password }, (err, result) => {
    res.send(result);
  })
}

export const checkRatingForFirstTime = (req, res) => {
  appRatingModel.find({ "username": req.query.username, "appname": req.query.appname }, (err, result) => {
    res.send(result.map(record => {
      return 1;
    }));
  })
}

export const viewProfile = (req, res) => {
  userDetailsModel.find({ "name": req.query.name }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const updateProfile = (req, res) => {
  userDetailsModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const viewFiles = (req, res) => {
  sendFilesModel.find({ "username": req.query.username }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const downloadFiles = (req, res) => {
  appsDownload.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}



export const getUsers = (req, res) => {
  userDetailsModel.find((err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  })
}



export const viewAgentFiles = (req, res) => {
  agentFilesModel.find({ $or: [{ "username": req.query.username }, { "from": req.query.from }] }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const downloadAgentFiles = (req, res) => {
  agentFilesModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
