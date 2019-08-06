#to run
#$env:FLASK_APP = "run.py"
#flask run
from flask import Flask,request,abort,jsonify,render_template,session,redirect,url_for,escape
from flask_pymongo import PyMongo
import os
app = Flask(__name__)
username=''
app.config["MONGO_DBNAME"]="mydb"
app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
mongo = PyMongo(app)
users=mongo.db.users
app.secret_key='mysecret'
@app.route('/')
def index():
    if 'username' in session:
        std=users.find_one({'name':session['username']})
        global username
        username=session['username']
        if std['type']=='admin':
            return render_template('inserts.html')
        else:
            return render_template('issue.html')
    return render_template('index.html')
@app.route("/fine",methods=['POST','GET'])
def fine():
    if username is not '':
        users=mongo.db.users
        user=users.find_one({'name':username})
        if user['fine'] is not '0':
           return ('<h1>'+'<a href="https://paytm.com/education">' 'Hey '+username+'  you have a fine due of Rs '+user['fine']+'</a>'+'</h1>')
        else:
            return ('You have no fine due')
@app.route("/issue",methods=['POST','GET'])
def issue():
        users=mongo.db.users
        user=users.find_one({'name':username})
        if request.method=='POST':
            library=mongo.db.library
            existing_book=library.find_one({'bookname':request.form['bookname']})
            if existing_book:
                user['bookissued']=existing_book['bookname']
                users.save(user)
                return 'book issued'
            return ('That book is not available sorry for inconvenience!')
        return render_template('deletes.html')
@app.route('/sign_out')
def sign_out():
    session.pop('username')
    username=''
    return redirect(url_for('index'))
@app.route("/login",methods=['POST'])
def login():
    users=mongo.db.users
    login_user=users.find_one({'name':request.form['username']})
    if login_user:
        if request.form['password']==login_user['password']:
            session['username']=request.form['username']
            return redirect(url_for('index'))
        return 'Invalid username/password combination'
    return 'Invalid Username/Sign IN first'
@app.route("/admin")
def admin():
    return render_template('admin.html')
@app.route("/deletes",methods=['POST','GET','PUT','DELETE'])
def deletes():
        if request.method=='POST':
            library=mongo.db.library
            existing_book=library.find_one({'bookname':request.form['bookname']})
            if existing_book is not None:
                library.remove(existing_book)
                return redirect(url_for('admin'))
            return ('That book is not there in the library!')
        return render_template('deletes.html')
@app.route("/inserts",methods=['POST','GET'])
def inserts():

        if request.method=='POST':
            library=mongo.db.library
            existing_book=library.find_one({'bookname':request.form['bookname']})
            if existing_book is None:
                library.insert({'bookname':request.form['bookname'],'author':request.form['author'],'count':request.form['count']})
                return redirect(url_for('admin'))
            return ('That book is already there in the library!')
        return render_template('deletes.html')

@app.route("/register",methods=['POST','GET'])
def register():
    if request.method=='POST':
        users=mongo.db.users
        existing_user=users.find_one({'name':request.form['username']})
        if existing_user is None:
            users.insert({'name':request.form['username'],'bookissued':'none','password':request.form['password'],'email':request.form['email'],'type':'normal','fine':'0'})
            session['username']=request.form['username']
            return redirect(url_for('index'))
        return ('That username already exists!')
    return render_template('register.html')
if __name__!='__main__':
    app.run(debug=True)
