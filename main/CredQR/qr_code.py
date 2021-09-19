import pyqrcode
import pyzbar
import os
import subprocess
from PIL import Image
from pyzbar.pyzbar import decode
import shutil

class QRCode:
    def encode(card_details):
        qr = pyqrcode.create(card_details)
        # Specific File path
        file_name = "image.png"
        qr.png(file_name, scale = 6)
        shutil.move("./image.png", "./CredQR/static/image.png")
        # Creates the png at the chosen file path