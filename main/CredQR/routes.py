from CredQR import app
from flask import render_template, request, url_for, redirect
from datetime import datetime
from CredQR.qr_code import QRCode

@app.route('/')
def input():
    return render_template('input.html')

@app.route('/', methods=['POST'])
def getinput():
    name = request.form['name']
    cnumber = request.form['cnumber']
    month = request.form['month']
    year = request.form['year']
    scode = request.form['scode']
    ctype = request.form['ctype']
    card_details = name + ',' + str(cnumber) + ',' + str(month) + ',' + str(year)  + ',' + str(scode) + ',' + str(ctype)
    qr_data = QRCode.encode(card_details)
    return redirect(url_for('download'))

@app.route('/download')
def download():
    return render_template('output.html')