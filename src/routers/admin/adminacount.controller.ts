import Send from "../../Module/Send";
//토큰 발급
import * as jwt from "jsonwebtoken";
//비밀번호 암호화
import * as bcrypt from "bcrypt-nodejs";
import Admin from "../../models/admin";
import Portfolio from "../../models/portfolio";
import Interduce from "../../models/interduce";
import console = require("console");
import { Document } from "mongoose";

export const Login = async (req, res) => {
  const { id, password } = req.body;
  Admin.findOne({ id: id }, async function (err, result) {
    if (err) throw err;
    if (result != null) {
      bcrypt.compare(password, result.password, function (err, value) {
        if (value == true) {
          const token = jwt.sign(
            { id: result.id },
            "secret-key",
            { expiresIn: 44640 },
            (err, token) => {
              if (err) {
                console.error("error :", err);
                return;
              }
              return res
                .status(200)
                .send({
                  state: true,
                  result: "로그인이 되셨습니다.",
                  data: token,
                })
                .end();
            }
          );
        } else {
          Send(res, 200, "비밀번호가 일치하지 않습니다.");
        }
      });
    } else {
      Send(res, 200, "아이디가 존재하지 않습니다.");
    }
  });
};

export const SignUp = async (req, res) => {
  const { id, password } = req.body;
  console.log(id, password);
  Admin.findOne({ id: id }, async function (err, result) {
    console.log(result);
    if (err) throw err;
    if (result == null) {
      bcrypt.hash(password, null, null, async function (err, hash) {
        const admin = new Admin({
          id: id,
          password: hash,
        });
        await admin
          .save()
          .then((data) => {
            return res
              .status(200)
              .send({ state: true, data: "어드민 계정 등록 완료" })
              .end();
          })
          .catch((err) => Send(res, 403, "DB 저장 실패"));
      });
    } else {
      return Send(res, 403, "이미 같은 아이디 존재");
    }
  });
};

export const Token = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return Send(res, 200, "token is fail");
  }

  jwt.verify(token, "secret-key", function (err, decoded) {
    if (err && decoded === undefined) return Send(res, 200, "token is fail");

    Admin.findOne({ id: decoded.id }, function (err, result) {
      if (result) {
        return res
          .status(200)
          .send({
            result: "인증성공",
            state: true,
            data: "wellcome allblack",
          })
          .end();
      } else {
        return Send(res, 200, "token is fail");
      }
    });
  });
};

export const Makeportfolio = async (req, res) => {
  const { img, eng, kor, title } = req.body;
  const token = req.headers.authorization;
  // console.log("valhe:", img, eng, kor, title);
  if (!token) {
    return Send(res, 403, "토큰이 없습니다.");
  }

  const newPortfolio = new Portfolio({
    img,
    eng,
    kor,
    title,
  });

  await newPortfolio
    .save()
    .then(() => {
      Send(res, 200, "portfoliomake");
    })
    .catch((err) => {
      Send(res, 403, "portfolio error");
    });
};

export const Amendportfolio = async (req, res) => {
  const { id, img, eng, kor, title } = req.body;
  // console.log(id, img, eng, kor, title);
  console.log(id);
  Portfolio.findOne({ _id: id }, function (err, result) {
    if (err) throw err;
    if (result != null) {
      result.img = img;
      result.eng = eng;
      result.kor = kor;
      result.title = title;
      result.save();
      return res.status(200).send({ state: true, result: "change" });
    }
  });
};

export const Makeinterduce = async (req, res) => {
  const { welcome, skills, portfolios, contacts, othersites } = req.body;
  console.log("value :", welcome, skills, portfolios, contacts, othersites);

  const newinterduce = new Interduce({
    welcome,
    skills,
    portfolios,
    contacts,
    othersites,
  });

  await newinterduce
    .save()
    .then(() => {
      Send(res, 200, "newinterduce make");
    })
    .catch((err) => {
      Send(res, 403, "newinterduce error");
    });
};

export const Amendinterduce = async (req, res) => {
  const { welcome, skills, contacts, otherinformations } = req.body;
Portfolio.find({},function(err, result){
 const newportfolios=result.map((data:any)=>{
    return {id:data._id,title:data.title}
  });
  // Interduce.find({});
  // console.log(Interduce.find({}));
  Interduce.find({}, function(err, result){
    
    if (result!==[]) {
      console.log(result);
      console.log("result",result===[ ]);
      // result.welcome = welcome;
      //   result.skills = skills;
      //   result.portfolios = portfolios;
      //   result.contacts = contacts;
      //   result.othersites = othersites;
      //   result.save();
      return res.status(200).send({ state: true, result: "change" });
    }
    else{
      // console.log("make");
      const newinterduce = new Interduce({
        welcome,
        skills,
        newportfolios,
        contacts,
        otherinformations,
      });
    
      newinterduce
        .save()
        .then(() => {
          Send(res, 200, "newinterduce make");
        })
        .catch((err) => {
          Send(res, 403, "newinterduce error");
        });
    }
  });
})
};
