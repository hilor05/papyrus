from flask import Flask,request,abort,jsonify,render_template,session
from flask_pymongo import PyMongo
import uuid

app = Flask(__name__)
app.config["MONGO_DBNAME"]="mydb"
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
mongo = PyMongo(app)
users=[]
book=dict()
booklist=[]
person=dict()
user=mongo.db.userlist1
bookmark=mongo.db.library
@app.route('/')
def hello():
    return render_template("base.html")
@app.route("/login",methods=["POST"])
def login():
    username=request.json["username"]
    password=request.json["password"]
    user_taken=username in users
    if user_taken:
           return jsonify({
            "status":"OK",
            "message":"successfully logged in"
        })
    else:
        return jsonify({
            "status":"NOT OK",
            "message":"LOgin Failed User does not exist"
        })
             
@app.route("/signin",methods=["POST"])
def signin():
     username=request.json["username"]
     password=request.json["password"]
     email=request.json["email"]
     id=str(uuid.uuid4())
     person[id]={
         "username":username,
         "password":password,
         "email":email,
         "id":id
     } 
     if username is None or username in users:
         return jsonify({
            "status":"not OK",
            "message":"username already in use"
        })
     else:
         users.append(username)  
         user.insert({'username':username,
         'password':password,
         'id':id,
         'email':email})
     return jsonify(person)
@app.route("/deletes",methods=["Post"])
def deletes():
    bookname=request.json["bookname"]
    if bookmark.find({"bookname":bookname}):
        bookmark.remove({"bookname":bookname})
        print('deleted succesfully')
         
    else:
        return jsonify({
            "status":"not OK",
            "message":"book not available",
            "count":0
             })
    return jsonify(book)
@app.route("/inserts",methods=["Post"])
def inserts():
    bookname=request.json["bookname"]
    author=request.json["author"]
    count=request.json["count"]
    id=str(uuid.uuid4())
    if bookname is None or bookname in booklist:
         return jsonify({
            "status":"not OK",
            "message":"Book already available ",
            "count":count
             })
    else:
        booklist.append(bookname)
        bookmark.insert({
         "bookname":bookname,
         "author":author,
         "count":count,
         "id":id
        })
    book[id]={
        "bookname":bookname,
        "author":author,
        "count":count,
        "id":id
    }
    return jsonify(book)
if __name__=='__main__':
    app.run(debug=True)
    