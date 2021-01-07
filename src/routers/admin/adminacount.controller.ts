import Send from "../../Module/Send"
//토큰 발급
import * as jwt from "jsonwebtoken"
//비밀번호 암호화
import * as bcrypt from "bcrypt-nodejs"
import Admin from "../../models/admin";

export const Login = async (req,res) => {
    const {id,password} = req.body;
    Admin.findOne({id:id},async function(err,result){
        if(err) throw err;
        if(result!=null){
            bcrypt.compare(password,result.password,function(err,value){
                if (value == true) {
                    //비밀번호O
                    let token = jwt.sign(
                      {
                        id: result.id
                      },
                      process.env.jwtpassword,
                      {
                        expiresIn: 44640
                      }
                    )
                    return res
                      .status(200)
                      .send({ state: true, result: "로그인이 되셨습니다.", token: token })
                      .end()
                  } else {
                    Send(res, 200, "비밀번호가 일치하지 않습니다.")
                  }
            })
        }
        else {
            Send(res, 200, "아이디가 존재하지 않습니다.")
        }
    });
}

export const SignUp=async (req,res)=>{
    const {id,password} = req.body;

    Admin.findOne({id:id},async function(err,result){
      if(err) throw err;
      if(result==null){
        bcrypt.hash(password, null, null, async function(err, hash) {
           const admin=new Admin({
               id:id,
               password:hash,
           })
           await admin.save().then(data=>{
               return res.status(200).Send({state: true, result: "어드민 계정 등록 완료"})
           }).catch(err=>Send(res,403,"DB 저장 실패"));     
        });
      }
      else{
          return Send(res,403,"이미 같은 아이디 존재")
      }
    })
}

export const Token = async (req,res)=>{
    const {token}=req.body;
    console.log("토큰 :",token);

    if(!token){
        return Send(res,403,"토큰이 없습니다.");
    }
    let decoded = jwt.verify(token, process.env.jwtpassword);
    Admin.findOne({id:decoded.id}, function(err,result){
        if (result) {
            return res.status(200).send({ result: "인증성공", state: true, admin: true, data: result })
          } else {
            return Send(res, 200, "인증실패.")
          }
    })
}